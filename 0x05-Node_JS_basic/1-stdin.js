// Program to be excuted through command line
process.stdout.write("Welcome to Holberton School, what is your name?\n")

process.stdin.on('data', data => {
  const input = data.toString().trim();

  console.log(`Your name is: ${input}`);
  console.log("This important software is now closing\n");
  process.exit()
})

process.on('exit', () => {
  process.exit();
});
