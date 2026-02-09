# Claudebin Plugin

A Claude Code plugin for publishing sessions to claudebin.com.

## Installation

### Via Plugin Marketplace

Register the marketplace first:

```bash
claude plugin marketplace add wunderlabs-dev/claudebin
```

Then install the plugin from this marketplace:

```bash
claude plugin install claudebin@claudebin-marketplace
```

### Local Development

If you've cloned this repository for development:

```bash
cd mcp
bun install
bun run build
cd ..
claude plugin marketplace add .
claude plugin install claudebin@claudebin-marketplace
```

## Usage

### /share

Publish the current session to claudebin.com and get a shareable URL.

```
/share
```

Returns a URL like `https://claudebin.com/threads/abc123` that anyone can view.

Automatically authenticates via browser if not logged in.

## Architecture

```
/share → Claude calls → MCP share tool → Auth if needed (opens browser)
                                       → Upload to Supabase
                                       → Background processing
                                       → Poll for completion
                                       → Return URL
```

## Development

Build the MCP server:

```bash
cd mcp
bun run build
```
