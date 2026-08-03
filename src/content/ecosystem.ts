export type Product = {
  id: "codecarbon" | "ecologits";
  name: string;
  tagline: string;
  description: string;
  install: string;
  docsUrl: string;
  githubUrl: string;
  websiteUrl: string;
  accent: string;
  logoLight: string;
  logoDark: string;
  useCases: string[];
};

export type CodeExample = {
  id: string;
  product: Product["id"];
  title: string;
  description: string;
  language: string;
  filename: string;
  code: string;
  docsUrl: string;
};

export type RelatedTool = {
  name: string;
  description: string;
  href: string;
  product: Product["id"];
  badge?: string;
  imageUrl?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
};

export type CommunityIntegration = {
  name: string;
  author: string;
  description: string;
  href: string;
  product: Product["id"];
  imageUrl?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
};

export const products: Product[] = [
  {
    id: "codecarbon",
    name: "CodeCarbon",
    tagline: "Local compute emissions",
    description:
      "Track CO₂ from code running on hardware you control — your laptop, workstation, or cloud VM. Measures CPU, GPU, and RAM power, then applies regional grid carbon intensity.",
    install: "pip install codecarbon",
    docsUrl: "https://docs.codecarbon.io/latest/",
    githubUrl: "https://github.com/mlco2/codecarbon",
    websiteUrl: "https://codecarbon.io/",
    accent: "#024758",
    logoLight:
      "https://raw.githubusercontent.com/mlco2/codecarbon/master/docs/images/codecarbon-logo.svg",
    logoDark:
      "https://raw.githubusercontent.com/mlco2/codecarbon/master/docs/images/codecarbon-logo.svg",
    useCases: [
      "Training or fine-tuning ML models on your machine",
      "Running batch jobs on a cloud VM you provision",
      "Comparing model efficiency across experiments",
      "Tracking emissions without changing your Python code (CLI)",
    ],
  },
  {
    id: "ecologits",
    name: "EcoLogits",
    tagline: "GenAI API emissions",
    description:
      "Estimate energy and environmental impacts when you call third-party GenAI APIs — OpenAI, Anthropic, Mistral, Google, and more. Attaches impact data to provider SDK responses.",
    install: "pip install ecologits",
    docsUrl: "https://ecologits.ai/latest/",
    githubUrl: "https://github.com/mlco2/ecologits",
    websiteUrl: "https://ecologits.ai/",
    accent: "#00bf63",
    logoLight:
      "https://raw.githubusercontent.com/mlco2/ecologits/main/docs/assets/logo_light.png",
    logoDark:
      "https://raw.githubusercontent.com/mlco2/ecologits/main/docs/assets/logo_dark.png",
    useCases: [
      "Chatbots and agents calling remote LLMs",
      "RAG pipelines with OpenAI or Anthropic",
      "Comparing models by environmental cost per request",
      "Reporting GenAI usage sustainability to stakeholders",
    ],
  },
];

export const codeExamples: CodeExample[] = [
  {
    id: "codecarbon-python",
    product: "codecarbon",
    title: "Python",
    description: "Wrap your script with EmissionsTracker — start, run, stop.",
    language: "python",
    filename: "train.py",
    docsUrl: "https://docs.codecarbon.io/latest/tutorials/first-tracking/",
    code: `from codecarbon import EmissionsTracker

tracker = EmissionsTracker()
tracker.start()

# Your code here

emissions = tracker.stop()
print(f"Emissions: {emissions} kg CO₂")`,
  },
  {
    id: "codecarbon-cli",
    product: "codecarbon",
    title: "CLI",
    description: "Track any command without editing source files.",
    language: "bash",
    filename: "terminal",
    docsUrl: "https://docs.codecarbon.io/latest/tutorials/cli/",
    code: `# Track without changing your code
codecarbon monitor --no-api -- python train.py

# Detect your hardware
codecarbon detect`,
  },
  {
    id: "ecologits-python",
    product: "ecologits",
    title: "Python",
    description: "Init once, then read impacts from the SDK response.",
    language: "python",
    filename: "chat.py",
    docsUrl: "https://ecologits.ai/latest/tutorial/providers/",
    code: `from ecologits import EcoLogits
from openai import OpenAI

EcoLogits.init(providers=["openai"])
client = OpenAI(api_key="<OPENAI_API_KEY>")

response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[{"role": "user", "content": "Tell me a funny joke!"}],
)

print(f"Energy: {response.impacts.energy.value.mean} kWh")
print(f"GHG: {response.impacts.gwp.value.mean} kgCO2eq")`,
  },
  {
    id: "ecologits-api",
    product: "ecologits",
    title: "HTTP API",
    description: "Estimate impacts over HTTP — no Python install required.",
    language: "bash",
    filename: "terminal",
    docsUrl: "https://api.ecologits.ai/docs",
    code: `curl -X POST "https://api.ecologits.ai/v1/estimations" \\
  -H "Content-Type: application/json" \\
  -d '{
    "provider": "openai",
    "model": "gpt-4o-mini",
    "output_token_count": 150,
    "request_latency": 1.2
  }'`,
  },
];

export const relatedTools: RelatedTool[] = [
  {
    name: "CodeCarbon Dashboard",
    description:
      "Visualise experiment emissions in the cloud — real-world equivalents, infrastructure comparisons, and live tracking as your code runs.",
    href: "https://dashboard.codecarbon.io/",
    product: "codecarbon",
    badge: "Visualise",
    imageUrl:
      "https://codecarbon.io/assets/dashboard/exemplary_equivalents.png",
    imageAlt:
      "CodeCarbon dashboard showing emissions in real-world equivalents",
    imageFit: "cover",
  },
  {
    name: "VS Code extension",
    description: "Emissions feedback inside VS Code while you develop locally.",
    href: "https://github.com/mlco2/vscode-extension-codecarbon",
    product: "codecarbon",
    badge: "Editor",
    imageUrl:
      "https://raw.githubusercontent.com/mlco2/vscode-extension-codecarbon/master/images/output_panel.png",
    imageAlt:
      "CodeCarbon VS Code extension output panel with live emissions metrics",
    imageFit: "cover",
  },
  {
    name: "EcoLogits Calculator",
    description:
      "Browser-based GenAI impact estimates — no install. Expert, company, and token-estimator modes.",
    href: "https://calculator.ecologits.ai/",
    product: "ecologits",
    badge: "No code",
    imageUrl:
      "https://raw.githubusercontent.com/mlco2/ecologits/main/docs/assets/calculator_screenshot.png",
    imageAlt:
      "EcoLogits Calculator web interface estimating GenAI environmental impacts",
    imageFit: "cover",
  },
  {
    name: "EcoLogits API",
    description:
      "REST endpoint for the same methodology. Powers custom dashboards and editor integrations.",
    href: "https://api.ecologits.ai/docs",
    product: "ecologits",
    badge: "HTTP",
    imageUrl:
      "https://raw.githubusercontent.com/mlco2/ecologits/main/docs/assets/logo_dark.png",
    imageAlt: "EcoLogits API logo",
    imageFit: "contain",
  },
];

export const communityIntegrations: CommunityIntegration[] = [
  {
    name: "ecologits-statusline",
    author: "Vincent Duarte",
    description:
      "Claude Code status line — live session energy, CO₂eq, and water.",
    href: "https://github.com/DuarteVi/ecologits-statusline",
    product: "ecologits",
    imageUrl:
      "https://raw.githubusercontent.com/mlco2/ecologits/main/docs/assets/methodology/llm/figure_energy.png",
    imageAlt:
      "EcoLogits energy estimation methodology used by the Claude Code status line",
    imageFit: "contain",
  },
  {
    name: "ecologits-vscode",
    author: "marmelab",
    description:
      "VS Code status bar for Claude Code sessions and workspace totals.",
    href: "https://github.com/marmelab/ecologits-vscode",
    product: "ecologits",
    imageUrl:
      "https://raw.githubusercontent.com/marmelab/ecologits-vscode/main/assets/vscode-report.png",
    imageAlt: "EcoLogits impact metrics shown in the VS Code status bar",
    imageFit: "cover",
  },
];
