#!/usr/bin/env sh
set -e

CODECARBON_VERSION="3.2.2"

if ! command -v uv >/dev/null 2>&1; then
    echo "Installing uv to handle python environment..."
  curl -LsSf https://astral.sh/uv/install.sh | sh
  export PATH="$HOME/.local/bin:$PATH"
fi

# Verify uv is installed
if ! command -v uv >/dev/null 2>&1; then
    echo "Error: uv installation failed!"
    exit 1
fi

echo "Installing CodeCarbon using uv..."
uv tool install codecarbon@$CODECARBON_VERSION --force

echo ""
echo "✅ Installation complete!"
echo "Run 'codecarbon --help' to get started."