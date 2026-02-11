# Contributing to Claudebin

Thanks for your interest in contributing to Claudebin!

## Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/wunderlabs-dev/claudebin.git
   cd claudebin
   ```

2. Install dependencies:
   ```bash
   cd mcp
   bun install
   ```

3. Build the MCP server:
   ```bash
   bun run build
   ```

4. Run Claude with the local plugin:
   ```bash
   claude --plugin-dir /path/to/claudebin
   ```

## Making Changes

1. Create a branch for your changes:
   ```bash
   git checkout -b your-feature-name
   ```

2. Make your changes and test them locally

3. Commit with a clear message:
   ```bash
   git commit -m "feat: add new feature"
   ```

4. Push and open a pull request

## Pull Request Guidelines

- Keep PRs focused on a single change
- Update documentation if needed
- Test your changes locally before submitting

## Reporting Issues

- Check existing issues before creating a new one
- Include steps to reproduce for bugs
- Describe expected vs actual behavior

## Questions?

Open an issue or reach out at office@wunderlabs.dev
