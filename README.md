# Claudebin Plugin

A Claude Code plugin for publishing sessions to claudebin.com.

## Installation

```bash
claude plugin marketplace add wunderlabs-dev/claudebin
claude plugin install claudebin@claudebin-marketplace
```

## Usage

### /claudebin:share

Publish the current session to claudebin.com and get a shareable URL.

```
/claudebin:share
```

Returns a URL like `https://claudebin.com/threads/abc123` that anyone can view.

Automatically authenticates via browser if not logged in.

## Architecture

```
/claudebin:share → Claude calls → MCP share tool → Auth if needed (opens browser)
                                                 → Upload to Supabase
                                                 → Background processing
                                                 → Poll for completion
                                                 → Return URL
```

## Development

Build the MCP server:

```bash
cd mcp
bun install
bun run build
```

Run Claude with the local plugin and a local API:

```bash
CLAUDEBIN_API_URL=http://localhost:3000 claude --plugin-dir /path/to/claudebin --dangerously-skip-permissions
```

This allows testing against a local claudebin.com backend running on port 3000.
