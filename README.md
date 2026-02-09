# Claudebin Plugin

A Claude Code plugin for publishing sessions to claudebin.com.

## Installation

**Note:** Installation differs by platform. Claude Code has a built-in plugin system. Codex and OpenCode require manual setup.

### Claude Code (via Plugin Marketplace)

Register the marketplace first:

```bash
claude plugin marketplace add wunderlabs-dev/claudebin
```

Then install the plugin from this marketplace:

```bash
claude plugin install claudebin@claudebin-marketplace
```

### Claude Code (via Local Development)

If you've cloned this repository for development:

```bash
cd mcp
bun install
bun run build
cd ..
claude plugin marketplace add .
claude plugin install claudebin@claudebin-marketplace
```

### Manual Installation (Other Platforms)

For platforms without built-in plugin support, manually configure the MCP server in your MCP settings file:

```json
{
  "mcpServers": {
    "claudebin": {
      "command": "node",
      "args": ["/absolute/path/to/claudebin/mcp/dist/index.js"],
      "type": "stdio"
    }
  }
}
```

Make sure to build the MCP server first:

```bash
cd mcp && bun run build
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
bun build
```

## Files

- `.claude-plugin/plugin.json` - Plugin metadata
- `commands/share.md` - The /share command
- `mcp/` - MCP server implementing the share tool
