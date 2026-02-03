# Building CLI Tools with Node.js

*Posted on February 1, 2026*

Node.js is excellent for building command-line tools. In this post, I'll show you how to create your own CLI application.

## Why Node.js for CLI Tools?

- Cross-platform compatibility
- Rich ecosystem of npm packages
- Familiar JavaScript syntax
- Easy to distribute via npm

## Getting Started

First, create a new project:

```bash
mkdir my-cli-tool
cd my-cli-tool
npm init -y
```

## Creating Your First CLI Command

Create an `index.js` file with a shebang:

```javascript
#!/usr/bin/env node

console.log('Hello from my CLI tool!');
```

Make it executable and link it:

```bash
chmod +x index.js
npm link
```

## Popular CLI Libraries

### Commander.js
For parsing command-line arguments:

```javascript
const { program } = require('commander');

program
  .option('-d, --debug', 'output extra debugging')
  .option('-s, --small', 'small pizza size')
  .parse(process.argv);
```

### Inquirer.js
For interactive prompts:

```javascript
const inquirer = require('inquirer');

inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?'
  }
]).then(answers => {
  console.log(`Hello, ${answers.name}!`);
});
```

### Chalk
For colored output:

```javascript
const chalk = require('chalk');

console.log(chalk.green('Success!'));
console.log(chalk.red.bold('Error!'));
```

## Best Practices

1. **Provide Help Text**: Always include `--help` option
2. **Handle Errors Gracefully**: Catch and display errors clearly
3. **Use Exit Codes**: Return 0 for success, non-zero for errors
4. **Add Progress Indicators**: For long-running tasks
5. **Make it Fast**: CLI users value speed

## Publishing Your Tool

Once ready, publish to npm:

```bash
npm publish
```

Now anyone can install your tool globally:

```bash
npm install -g my-cli-tool
```

Building CLI tools is rewarding and makes your daily workflow more efficient. Start small and iterate!
