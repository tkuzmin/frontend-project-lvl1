import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export const evenGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log('Question: 15');
  const firstQuestion = readlineSync.question('Your answer: ');
  if (firstQuestion === 'no') {
    console.log('Correct!');
  } else {
    console.log('Wrong!');
  }

  console.log('Question: 6');
  const secondQuestion = readlineSync.question('Your answer: ');
  if (secondQuestion === 'yes') {
    console.log('Correct!');
  } else {
    console.log('Wrong!');
  }

  console.log('Question: 7');
  const thirdQuestion = readlineSync.question('Your answer: ');
  if (thirdQuestion === 'no') {
    console.log('Correct!');
  } else {
    console.log('Wrong!');
  }

  if (firstQuestion === 'no' && secondQuestion === 'yes' && thirdQuestion === 'no') {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`You lost, ${userName}!`);
  }
};
