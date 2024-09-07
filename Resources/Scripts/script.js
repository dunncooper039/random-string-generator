//Import data lists
import { subjects } from "./subjects.js";
import { actions } from "./actions.js";
import { commentary } from "./commentary.js";
//Log the number of possible outputs to the console
console.log('There are ' + (subjects.length * actions.length * commentary.length) + ' possible outputs at this time.');
//This is an attempt to reduce randomization bias, it shuffles an array
function shuffleArray(array) {
  let newArray = array
  for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}
//Gets random item from arry
function randomFromArray(array) {
  //Shuffle the array and apend it to itself to randomize the order somewhat more and reduce bias
  const doubleArray = shuffleArray(array).concat(shuffleArray(array))
  //Use crypto to select an item from the new array and return it
  const randomBuffer = new Uint32Array(1);
  window.crypto.getRandomValues(randomBuffer);
  let randomNumber = randomBuffer[Math.floor(Math.random() * (randomBuffer.length))] / (0xffffffff + 1);
  return doubleArray[Math.floor(randomNumber * doubleArray.length)];
}
//Chains fragments together
const generateSentence = () => {
  const subject = randomFromArray(subjects);
  const action = randomFromArray(actions).replace("POSESSIVE", subject.posessive);
  const comment = randomFromArray(commentary);
  const output = subject.text + ' ' + action + subject.punctuation + ' ' + comment;
  document.getElementById('output').innerHTML = output;
}
//Event Handler
generate.onclick = generateSentence;