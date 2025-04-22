import execSync from 'child_process';

console.log('branch 3, do not merge it to master.')

function runTasks(options) {
  const { base = 'master' } = options;

  try {
    const output = execSync(`git branch --no-merged ${base}`, { encoding: 'utf8' });

    const branches = output
      .split('\n')
      .map((b) => b.trim())
      .filter((b) => b && b !== base);

    if (branches.length === 0) {
      console.log(`✅ All local branches are already merged into ${base}.`);
    } else {
      console.log(`🚫 The following branches have not been merged into ${base}:`);
      branches.forEach((branch) => console.log(`- ${branch}`));
    }
  } catch (error) {
    console.error('error:', error.message);
  }
}

export default runTasks;
