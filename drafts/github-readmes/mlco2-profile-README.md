<!--
  Draft for: https://github.com/mlco2/.github
  Publish as: profile/README.md in the mlco2/.github repository
-->

<div align="center">
  <table align="center">
    <tr>
      <td align="center" width="280">
        <a href="https://github.com/mlco2/codecarbon">
          <img src="https://raw.githubusercontent.com/mlco2/codecarbon/master/docs/images/codecarbon-logo.svg" alt="CodeCarbon" height="64">
          <br><strong>CodeCarbon</strong>
          <br><sub>Local compute emissions</sub>
        </a>
      </td>
      <td align="center" width="280">
        <a href="https://github.com/mlco2/ecologits">
          <picture>
            <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/mlco2/ecologits/main/docs/assets/logo_dark.png">
            <img src="https://raw.githubusercontent.com/mlco2/ecologits/main/docs/assets/logo_light.png" alt="EcoLogits" height="64">
          </picture>
          <br><strong>EcoLogits</strong>
          <br><sub>GenAI API emissions</sub>
        </a>
      </td>
    </tr>
  </table>
</div>

<h1 align="center">Open tools to measure the environmental footprint of compute & GenAI</h1>

<p align="center">
  <a href="https://codecarbon.io/">Website</a> ·
  <a href="https://docs.codecarbon.io/latest/">CodeCarbon docs</a> ·
  <a href="https://ecologits.ai/latest/">EcoLogits docs</a> ·
  <a href="https://discord.gg/GS9js2XkJR">Discord</a>
</p>

**[Code Carbon](https://www.helloasso.com/associations/code-carbon)** is a French non-profit (NGO). We build free, open-source software to help developers and researchers understand the energy and carbon impact of their work.

Most of what you see here is maintained by **volunteers** — researchers, engineers, and sustainability practitioners who contribute in their spare time. Sponsors and partner organisations provide hosting, funding, and expertise; the day-to-day work still runs on community effort.

People also build **integrations outside these repos** — editor plugins, status bars, and tooling that connect to our libraries and APIs. We highlight the ones we know about below; if you ship something similar, tell us on [Discord](https://discord.gg/GS9js2XkJR).

---

## Two tools, one mission

AI and software need electricity. Where that code runs — on your laptop or on a provider's servers — changes what you can measure directly.

<table>
  <tr>
    <th></th>
    <th align="center">
      <a href="https://github.com/mlco2/codecarbon">
        <img src="https://raw.githubusercontent.com/mlco2/codecarbon/master/docs/images/codecarbon-logo.svg" alt="" height="40"><br>
        CodeCarbon
      </a>
    </th>
    <th align="center">
      <a href="https://github.com/mlco2/ecologits">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/mlco2/ecologits/main/docs/assets/logo_dark.png">
          <img src="https://raw.githubusercontent.com/mlco2/ecologits/main/docs/assets/logo_light.png" alt="" height="40">
        </picture>
        <br>EcoLogits
      </a>
    </th>
  </tr>
  <tr>
    <td><strong>What it tracks</strong></td>
    <td>Emissions from <strong>local computing</strong> — code on hardware you control</td>
    <td>Emissions from <strong>GenAI API calls</strong> — OpenAI, Anthropic, Mistral, etc.</td>
  </tr>
  <tr>
    <td><strong>Typical use cases</strong></td>
    <td>Model training, local inference, scripts on your machine or cloud VM</td>
    <td>Chatbots, agents, RAG pipelines calling remote models</td>
  </tr>
  <tr>
    <td><strong>How it works</strong></td>
    <td>Measures CPU, GPU & RAM power, applies regional grid carbon intensity</td>
    <td>Estimates impacts from request metadata (model, tokens, latency) via LCA models</td>
  </tr>
  <tr>
    <td><strong>Get started</strong></td>
    <td><code>pip install codecarbon</code></td>
    <td><code>pip install ecologits</code></td>
  </tr>
</table>

They are **complementary**, not competing. **CodeCarbon** is for compute you run yourself — training, local inference, jobs on your machines or cloud VMs. **EcoLogits** is for when you **call third-party GenAI APIs** and want to estimate the impact of those requests.

<p align="center">
  <img src="https://raw.githubusercontent.com/mlco2/codecarbon/master/docs/images/calculation.png" alt="CodeCarbon measures local hardware power and grid carbon intensity" width="420">
  &nbsp;&nbsp;
  <img src="https://raw.githubusercontent.com/mlco2/ecologits/main/docs/assets/calculator_screenshot.png" alt="EcoLogits estimates GenAI API environmental impacts" width="420">
</p>

[When to use CodeCarbon vs EcoLogits →](https://docs.codecarbon.io/latest/explanation/when-to-use/)

---

## Projects

### [CodeCarbon](https://github.com/mlco2/codecarbon) — local compute emissions

Track CO₂ from code running on your own hardware. Python library, CLI, cloud dashboard, and offline visualisation.

[![PyPI](https://img.shields.io/pypi/v/codecarbon?color=024758)](https://pypi.org/project/codecarbon/)
[![Stars](https://img.shields.io/github/stars/mlco2/codecarbon?style=social)](https://github.com/mlco2/codecarbon)

```python
from codecarbon import EmissionsTracker

tracker = EmissionsTracker()
tracker.start()
# your code
emissions = tracker.stop()
```

→ [Documentation](https://docs.codecarbon.io/latest/) · [Dashboard](https://dashboard.codecarbon.io/) · [Website](https://codecarbon.io/)

---

### [EcoLogits](https://github.com/mlco2/ecologits) — GenAI API emissions

Python library that attaches environmental impact estimates to responses from official provider SDKs.

[![PyPI](https://img.shields.io/pypi/v/ecologits?color=00bf63)](https://pypi.org/project/ecologits/)
[![Stars](https://img.shields.io/github/stars/mlco2/ecologits?style=social)](https://github.com/mlco2/ecologits)

```python
from ecologits import EcoLogits
from openai import OpenAI

EcoLogits.init(providers=["openai"])
response = OpenAI().chat.completions.create(model="gpt-4o-mini", messages=[...])
print(response.impacts.gwp.value.mean, "kgCO2eq")
```

→ [Documentation](https://ecologits.ai/latest/) · [Methodology](https://ecologits.ai/latest/methodology/)

**Related EcoLogits projects:**

| Project                                                                   | Description                                                                                                 |
| ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| [**ecologits-calculator**](https://github.com/mlco2/ecologits-calculator) | Interactive web calculator — no install, try at [calculator.ecologits.ai](https://calculator.ecologits.ai/) |
| [**ecologits-api**](https://github.com/mlco2/ecologits-api)               | REST API for impact estimates — live at [api.ecologits.ai](https://api.ecologits.ai/docs)                   |

---

### More first-party repositories

| Repository                                                                          | What it is                                   |
| ----------------------------------------------------------------------------------- | -------------------------------------------- |
| [impact](https://github.com/mlco2/impact)                                           | ML paper carbon calculator & LaTeX templates |
| [codecarbon-mcp](https://github.com/mlco2/codecarbon-mcp)                           | MCP server for remote compute monitoring     |
| [vscode-extension-codecarbon](https://github.com/mlco2/vscode-extension-codecarbon) | VS Code extension for CodeCarbon             |
| [ecologits.js](https://github.com/mlco2/ecologits.js)                               | JavaScript client for EcoLogits              |

---

## Community integrations

These projects are maintained **outside the mlco2 organisation** but built on our open APIs and methodology. They are independent — not official releases — and we are grateful to the authors for extending the ecosystem.

| Project                                                                      | Author                                        | What it does                                                                                                                                           |
| ---------------------------------------------------------------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [**ecologits-statusline**](https://github.com/DuarteVi/ecologits-statusline) | [Vincent Duarte](https://github.com/DuarteVi) | Drop-in **Claude Code** status-line snippet — live session energy, CO₂eq & water from output tokens via the [EcoLogits API](https://api.ecologits.ai/) |
| [**ecologits-vscode**](https://github.com/marmelab/ecologits-vscode)         | [marmelab](https://github.com/marmelab)       | **VS Code** status bar for Claude Code sessions (last use, workspace, or all-time totals). Adaptation of the status-line project above                 |

<p align="center">
  <a href="https://github.com/marmelab/ecologits-vscode">
    <img src="https://raw.githubusercontent.com/marmelab/ecologits-vscode/main/assets/vscode-report.png" alt="EcoLogits impact shown in the VS Code status bar" width="700">
  </a>
  <br>
  <sub>VS Code status bar integration by <a href="https://github.com/marmelab/ecologits-vscode">marmelab/ecologits-vscode</a></sub>
</p>

Built something on CodeCarbon or EcoLogits? Open a PR to [mlco2/.github](https://github.com/mlco2/.github) or ping us on Discord — happy to list it here.

---

## Get involved

We welcome issues, pull requests, documentation fixes, and methodology feedback — whether you have an hour or a recurring slot.

- **CodeCarbon:** [Contributing guide](https://github.com/mlco2/codecarbon/blob/master/CONTRIBUTING.md)
- **EcoLogits:** [Contributing guide](https://ecologits.ai/latest/contributing/)
- **Chat:** [Discord](https://discord.gg/GS9js2XkJR)
- **Support the NGO:** [HelloAsso — Code Carbon](https://www.helloasso.com/associations/code-carbon)

---

## Sponsors & partners

Our tools stay free thanks to organisations that sponsor infrastructure, funding, or expertise. Community volunteers do the rest.

**Infrastructure & core sponsors** (CodeCarbon)

<div align="center">
  <a href="https://www.clever-cloud.com/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/mlco2/codecarbon-landing-page/main/public/assets/partners/clever_cloud.png">
      <img src="https://cdn.clever-cloud.com/uploads/2023/03/logoonwhite.svg" alt="Clever Cloud" height="44">
    </picture>
  </a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://dataforgood.fr/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/mlco2/codecarbon-landing-page/main/public/assets/partners/dataforgood.png">
      <img src="https://dataforgood.fr/images/dataforgood.svg" alt="Data For Good" height="44">
    </picture>
  </a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://github.com/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/mlco2/codecarbon-landing-page/main/public/assets/partners/GitHub.png">
      <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png" alt="GitHub" height="44">
    </picture>
  </a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://www.mozilla.org/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/mlco2/codecarbon-landing-page/main/public/assets/partners/mozilla.svg">
      <img src="https://upload.wikimedia.org/wikipedia/commons/d/df/Mozilla_2024_logo.svg" alt="Mozilla" height="44">
    </picture>
  </a>
</div>

**EcoLogits sponsors**

<p align="center">
  <img src="https://raw.githubusercontent.com/mlco2/ecologits/main/docs/assets/sponsors/resilio.png" alt="Resilio" height="50">
  &nbsp;&nbsp;
  <img src="https://raw.githubusercontent.com/mlco2/ecologits/main/docs/assets/sponsors/terra_cognita.png" alt="Terra Cognita" height="50">
  &nbsp;&nbsp;
  <img src="https://raw.githubusercontent.com/mlco2/ecologits/main/docs/assets/sponsors/sopht.png" alt="Sopht" height="50">
  &nbsp;&nbsp;
  <img src="https://raw.githubusercontent.com/mlco2/ecologits/main/docs/assets/sponsors/avanade.png" alt="Avanade" height="50">
  &nbsp;&nbsp;
  <img src="https://raw.githubusercontent.com/mlco2/ecologits/main/docs/assets/sponsors/theodo.png" alt="Theodo" height="50">
  &nbsp;&nbsp;
  <img src="https://raw.githubusercontent.com/mlco2/ecologits/main/docs/assets/sponsors/ministere_culture.png" alt="Ministère de la Culture" height="50">
</p>

**Historical & research partners:** [Mila](https://mila.quebec), [BCG GAMMA](https://www.bcg.com/beyond-consulting/bcg-gamma), [Comet](https://www.comet.com/), [Haverford College](https://www.haverford.edu/), [Boavizta](https://boavizta.org/en)

---

<p align="center">
  <sub>Made with care by volunteers at <a href="https://codecarbon.io/">Code Carbon</a> · <a href="https://github.com/mlco2">mlco2 on GitHub</a></sub>
</p>
