<p align="center">
  <img src=".github/logo.svg" alt="Claudebin" width="360" />
</p>

<p align="center">
  Share your Claude Code sessions with teammates.
</p>

<p align="center">
  <a href="https://claudebin.com">Website</a> &middot;
  <a href="https://github.com/wunderlabs-dev/claudebin.com">Web App</a> &middot;
  <a href="#installation">Installation</a>
</p>

---

## Installation

```bash
claude plugin marketplace add wunderlabs-dev/claudebin
claude plugin install claudebin@claudebin-marketplace
```

## Usage

Run `/claudebin:share` inside any Claude Code session to publish it and get a shareable URL.

```
/claudebin:share
```

Returns a link like `https://claudebin.com/threads/abc123` — complete with syntax highlighting, tool calls, and the full conversation thread.

Automatically authenticates via browser if not logged in.

## How it works

```
/claudebin:share → MCP share tool → Auth (opens browser if needed)
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

Run Claude with the local plugin pointing at a local API:

```bash
CLAUDEBIN_API_URL=http://localhost:3000 claude --plugin-dir /path/to/claudebin --dangerously-skip-permissions
```

## License

MIT
