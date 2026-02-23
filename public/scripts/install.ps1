# PowerShell script to install CodeCarbon

$ErrorActionPreference = 'Stop'

# Check if 'uv' is installed
if (-not (Get-Command uv -ErrorAction SilentlyContinue)) {
    Write-Host "Installing uv to handle python environment..."
    powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
}

# Verify uv is installed
if (-not (Get-Command uv -ErrorAction SilentlyContinue)) {
    Write-Host "Error: uv installation failed!"
    exit 1
}

Write-Host "Installing CodeCarbon using uv..."
uv tool install codecarbon --force

Write-Host ""
Write-Host "[OK] Installation complete!"
Write-Host "Run 'codecarbon --help' to get started."
