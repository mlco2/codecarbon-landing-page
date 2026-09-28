---
title: "When to use CodeCarbon vs EcoLogits"
description: "Choose the right mlco2 tool — local compute emissions with CodeCarbon, GenAI API impacts with EcoLogits."
pubDate: "Jul 29 2026"
tags: ["codecarbon", "ecologits"]
---

AI and software need electricity. Where your code runs — on your laptop or on a provider's servers — changes what you can measure directly.

The [mlco2](https://github.com/mlco2) ecosystem offers two main tools. They are **complementary**, not competing.

## Quick answer

|                       | CodeCarbon                                                            | EcoLogits                                                                       |
| --------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| **What it tracks**    | Emissions from **local computing** — code on hardware you control     | Emissions from **GenAI API calls** — OpenAI, Anthropic, Mistral, etc.           |
| **Typical use cases** | Model training, local inference, scripts on your machine or cloud VM  | Chatbots, agents, RAG pipelines calling remote models                           |
| **How it works**      | Measures CPU, GPU & RAM power, applies regional grid carbon intensity | Estimates impacts from request metadata (model, tokens, latency) via LCA models |
| **Get started**       | `pip install codecarbon`                                              | `pip install ecologits`                                                         |

## Use CodeCarbon when…

You run code on hardware you control or provision:

- Training or fine-tuning ML models on your laptop, workstation, or cluster
- Running batch jobs on a cloud VM you spin up
- Comparing experiments by CPU/GPU power and regional grid intensity
- Wrapping existing scripts with the CLI — no code changes required

CodeCarbon focuses on CPU, GPU, and RAM. It does not separately model disk I/O, network transfers, or cooling — those are usually much smaller for local code-level experiments.

```python
from codecarbon import EmissionsTracker

tracker = EmissionsTracker()
tracker.start()
# your training or inference code
emissions = tracker.stop()
```

→ [CodeCarbon documentation](https://docs.codecarbon.io/latest/)

## Use EcoLogits when…

You call third-party GenAI APIs and want per-request impact estimates:

- Building chatbots, agents, or copilots on OpenAI, Anthropic, Mistral, etc.
- Running RAG pipelines where inference happens on a provider's servers
- Reporting sustainability metrics for GenAI usage to stakeholders
- Comparing models by environmental cost per request

EcoLogits attaches impact data to responses from official provider SDKs:

```python
from ecologits import EcoLogits
from openai import OpenAI

EcoLogits.init(providers=["openai"])
response = OpenAI().chat.completions.create(
    model="gpt-4o-mini",
    messages=[{"role": "user", "content": "Hello!"}],
)
print(response.impacts.gwp.value.mean, "kgCO2eq")
```

→ [EcoLogits documentation](https://ecologits.ai/latest/)

## Use both when your stack mixes them

Many teams train or fine-tune locally with CodeCarbon, then serve features through GenAI APIs tracked with EcoLogits. Same mission — measure what you can, where it actually runs.

## No code? Try these first

| Tool                                                     | Best for                                                                          |
| -------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [EcoLogits Calculator](https://calculator.ecologits.ai/) | Quick browser estimates for GenAI usage — no install                              |
| [EcoLogits API](https://api.ecologits.ai/docs)           | HTTP access to the same methodology — powers custom dashboards and editor plugins |
| [CodeCarbon Dashboard](https://dashboard.codecarbon.io/) | Visualise local experiment emissions over time                                    |

## Still unsure?

- **You own the machine running the code** → CodeCarbon
- **You send a request to OpenAI / Anthropic / similar** → EcoLogits
- **You want a quick what-if without writing code** → [Calculator](https://calculator.ecologits.ai/)

Questions? Join us on [Discord](https://discord.gg/GS9js2XkJR) or open an issue on [GitHub](https://github.com/mlco2).
