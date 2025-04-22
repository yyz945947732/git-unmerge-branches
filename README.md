# git-unmerge-branches

<p>
  <a href="https://www.npmjs.com/package/git-unmerge-branches">
    <img src="https://img.shields.io/npm/v/git-unmerge-branches.svg" alt="Version" />
  </a>
  <a href="https://github.com/yyz945947732/git-unmerge-branches/pulls">
    <img
      src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"
      alt="PRs Welcome"
    />
  </a>
  <a href="/LICENSE.md">
    <img
      src="https://img.shields.io/badge/license-MIT-blue.svg"
      alt="GitHub license"
    />
  </a>
</p>

> list all local Git branches that have **not been merged** into the base branch (default master).

<img src="./assets/example.png" alt="workflow.png" border="0" />

## Install

```bash
npm install --global git-unmerge-branches
```

## Usage

```bash
npx unmerge-branches [options]
```

### Options

```bash
-h, --help              Show help information
-v, --version           Show the current version
-b, --base <branch>     Specify the base branch (default: master)
```

### Examples

```bash
# List branches not merged into 'master'
npx unmerge-branches

# List branches not merged into 'main'
npx unmerge-branches --base main
```

## LICENSE

[MIT](https://github.com/yyz945947732/git-unmerge-branches/blob/master/LICENSE)

---

This project is created using [generator-stupid-cli](https://github.com/yyz945947732/generator-stupid-cli).
