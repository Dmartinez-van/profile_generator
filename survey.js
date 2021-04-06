const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? ", (name) => {
  rl.question("What's an activity you like doing? ", (activity) => {
    rl.question("Whatdo you listen to while doing that ", (sound) => {
      rl.question("which meal is your favorite ", (meal) => {
        rl.question("What sport is your Fav ", (sport) => {
          console.log(`Your name is ${name}, you like  to listen to ${sound} while doing ${activity}. ` +
                      `You like to eat ${meal}. You like ${sport}.`);
          
          rl.close();
        });
      });
    });
  });
});