---
description: "Share the current session to claudebin.com and get a shareable URL"
---

Use the MCP tool `mcp__claudebin__share` with these parameters:
- project_path: the current working directory (use absolute path)
- is_public: true

The tool will automatically authenticate if needed (opens browser for login).

If successful, output the URL in a clear format like:
"Session published: <url>"

If there's an error, explain what went wrong and how to fix it.
