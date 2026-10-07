# How CodeCarbon Maps to SCI for AI

*Draft — for review by the CodeCarbon maintainers before publication.*

The environmental impact of AI is no longer a niche concern. Regulators are asking questions (the EU AI Act, CSRD), customers are asking questions, and — most importantly — engineering teams are asking: *how do we actually measure this?*

Standards bodies have started answering. The Green Software Foundation (GSF), a nonprofit consortium under the Linux Foundation, published the Software Carbon Intensity (SCI) specification, which became an international standard in 2024 as **ISO/IEC 21031:2024**. It is now extending that work with **SCI for AI**, a specification designed specifically for the lifecycle of AI systems, from data preparation and training to deployment and inference.

Standards tell you *what* to measure and *how to report it*. They don't hand you the measurement itself. That's where open-source tooling comes in — and it turns out CodeCarbon's design maps remarkably well onto SCI for AI. In this post we walk through that mapping: what CodeCarbon gives you out of the box, what you still have to add yourself, and where we see the gaps we want to close.

## A 60-second primer on SCI and SCI for AI

The core SCI equation, from ISO/IEC 21031:2024, is:

```
SCI = ((E × I) + M) per R
```

Where:

- **E** — energy consumed by the software system (kWh)
- **I** — carbon intensity of the electricity powering it (gCO₂e/kWh)
- **M** — embodied (hardware lifecycle) carbon, allocated proportionally to usage
- **R** — the *functional unit*: the "per what" that makes scores comparable (per token, per inference, per user…)

Two design choices matter a lot. First, **carbon offsets are excluded**: only real reductions — using less energy, cleaner energy, or less hardware — improve an SCI score. Second, the score is a *rate*, not a total, so it stays meaningful as your system scales.

SCI for AI extends this to the specifics of AI systems. Its two most important additions:

1. **Two persona-based boundaries.** A **Provider SCI** covers everything upstream: data collection and preprocessing, training (all of it — every epoch, intermediate run, and early-stopped experiment), evaluation, and deployment. A **Consumer SCI** covers operation and monitoring: inference servers, API gateways, orchestration, observability, caching and storage.
2. **AI-native functional units.** On the consumer side, suggested units follow how the service is consumed: per token for LLMs, per image generated, per inference for classical ML, per workflow execution for agentic systems. On the provider side, training emissions are normalized per FLOP, per training token, or per parameter.

So an LLM service would report something like a Consumer SCI in gCO₂e per million tokens, and a Provider SCI in gCO₂e per 10¹⁵ FLOPs.

## The mapping: SCI term by SCI term

### E — Energy: this is CodeCarbon's core job

CodeCarbon's entire measurement engine exists to produce **E**. While your code runs, the tracker samples the power drawn by:

- **CPU** — via RAPL on Linux, Powermetrics on macOS, or a TDP-based estimation model when direct counters aren't available;
- **GPU** — via NVIDIA's NVML (`pynvml`), reading actual board power;
- **RAM** — via an estimation model based on installed memory.

Energy is integrated over the run and reported in kWh, exactly the unit the SCI equation expects. Crucially for SCI for AI's Provider boundary — which requires counting *the entire training duration, including intermediate and test runs* — CodeCarbon tracks per-run, so every experiment leaves a record. Nothing about a failed run or an abandoned hyperparameter sweep escapes the ledger, as long as it was tracked.

### I — Carbon intensity: built in, location-aware

The SCI requires converting energy to carbon using the intensity of the grid actually powering the machine. CodeCarbon does this automatically: it geolocates the machine (or lets you pin a country/region, or a cloud provider region), and applies the corresponding grid carbon intensity from its bundled datasets. An offline mode covers air-gapped machines. The output — kgCO₂e — is `E × I` computed for you, per run.

One honest caveat: CodeCarbon currently applies an *average* grid intensity for the location. Marginal or hourly real-time intensity (as provided by services like Electricity Maps or WattTime — whose co-founder, notably, co-leads the SCI for AI project) is a finer-grained approach that matters for carbon-aware scheduling. Making real-time intensity a first-class option is on our radar.

### M — Embodied carbon: the gap we won't hide

Here is where we have to be transparent: **CodeCarbon does not measure embodied emissions today.** The SCI requires allocating a share of the hardware's manufacturing footprint proportional to your usage of it (time share × resource share of the device's lifetime). CodeCarbon reports operational emissions only.

The good news is that CodeCarbon gives you the hardest input for the M calculation for free: precise usage duration and the identity of the hardware used (CPU model, GPU model, machine specs are all in the output). Combining that with published embodied-carbon figures (e.g., manufacturer PCF documents, or the datasets behind tools like Boaviscount/BoaviztAPI) lets you compute M alongside CodeCarbon's `E × I`. Doing this join automatically is one of the clearest roadmap items this mapping exercise surfaces — if you'd like to help build it, the door is open.

### R — Functional units: yours to choose, ours to count against

The SCI score is only as meaningful as its functional unit, and choosing R is inherently a product decision, not something a measurement library can guess. What CodeCarbon provides is the numerator, cleanly scoped:

- Wrap a training job in a tracker (decorator, context manager, or explicit `EmissionsTracker`) and you have the carbon for *that* job — divide by your FLOP count, training-token count, or parameter count for a **Provider SCI**.
- Run the tracker as a background service on your inference fleet, or use `task`-level tracking around your serving code, and you have operational carbon over a period — divide by tokens served, images generated, or inferences performed for a **Consumer SCI**.

For FLOP counting on the provider side, pair CodeCarbon with your framework's profiler or an analytical estimate; CodeCarbon deliberately doesn't reimplement that.

For API-based inference where you *can't* run a tracker on the provider's hardware — i.e., most people calling commercial LLM APIs — CodeCarbon can't help by construction, because there's nothing local to measure. That's exactly the niche [EcoLogits](https://ecologits.ai) covers, estimating per-request impacts of generative AI APIs (and it was among the approaches reviewed during the SCI for AI assembly). The two tools are complementary: CodeCarbon where you control the hardware, EcoLogits where you don't. We'll dedicate a follow-up post to that split.

## Boundaries: what a CodeCarbon deployment covers

SCI for AI's boundaries are broader than a single training script. The Consumer boundary includes API gateways, monitoring systems, storage; the Provider boundary includes data preprocessing pipelines and evaluation infrastructure. Two CodeCarbon deployment modes matter here:

- **Process-level tracking** (library or `codecarbon monitor` CLI) covers individual workloads — ideal for attributing emissions to a specific training run or preprocessing job.
- **Machine/fleet-level tracking** (running CodeCarbon as a Linux service, deployed via Ansible, or integrated with SLURM on HPC clusters) covers whole servers — which is how you capture the "everything else" in the boundary: gateways, monitoring, caching.

Aggregation is where the CodeCarbon API and dashboard come in: emissions roll up by organization → project → experiment → run, which maps naturally onto "one SCI report per AI service, fed by many measured components."

## A worked sketch

Say you fine-tune a model and serve it yourself:

1. **Training (Provider):** wrap the fine-tuning job with an `EmissionsTracker`. Result: 42 kgCO₂e across all runs, including the three you threw away. Your framework reports 1.8 × 10¹⁹ FLOPs total. Provider SCI ≈ 2.3 gCO₂e per 10¹⁵ FLOPs (operational only — add M for a spec-complete figure).
2. **Serving (Consumer):** run CodeCarbon as a service on your inference nodes for a week: 12 kgCO₂e. Your serving stack counted 90 million tokens generated. Consumer SCI ≈ 0.13 gCO₂e per thousand tokens (again, before M).
3. **Report both numbers**, state the boundary you measured, the functional unit, and what you excluded. That last part — stating exclusions — is itself required by the spec, and it's where honest tooling beats optimistic guesswork.

## What this means for the ecosystem

Standards without tooling stay on paper; tooling without standards produces numbers nobody can compare. The convergence between SCI for AI's methodology and CodeCarbon's measurement model means teams can start building SCI-shaped reporting *today* with open-source components — and the gaps (embodied carbon, real-time grid intensity, first-class functional-unit support in our reporting) are well-defined engineering problems rather than open research questions.

If you're implementing SCI for AI with CodeCarbon, we'd genuinely like to hear how it goes — join us on [Discord](https://discord.gg/codecarbon) or open a discussion on [GitHub](https://github.com/mlco2/codecarbon). And if you're involved in the SCI for AI work at the GSF: measurement tools and specifications improve fastest when they evolve together. Let's talk.

---

*CodeCarbon is free and open source (MIT), maintained by a French non-profit association and a worldwide community of contributors. `pip install codecarbon` to start measuring.*

## Notes for reviewers (remove before publishing)

- **Status check:** SCI for AI was ratified for public review by the GSF Steering Committee; verify its exact status (draft vs. final) at publication time and adjust wording ("proposed specification" vs. "specification").
- **Numbers in the worked sketch are illustrative** — replace with a real measured example if we have one (a Hugging Face fine-tune would be ideal).
- **GSF outreach:** consider sending the draft to the SCI for AI project leads before publishing; a cross-link or quote would significantly extend reach.
- **Caveats to double-check with maintainers:** current state of RAM power estimation, whether the Electricity Maps integration status is accurately described, and the exact list of supported cloud regions.
