import { subjects } from "./subjects.js";
import { actions } from "./actions.js";
import { commentary } from "./commentary.js";
function randomFromArray(array) {
  const doubleArray = array.concat(array)
  const randomBuffer = new Uint32Array(1);
  window.crypto.getRandomValues(randomBuffer);
  let randomNumber = randomBuffer[Math.floor(Math.random() * (randomBuffer.length))] / (0xffffffff + 1);
  return doubleArray[Math.floor(randomNumber * doubleArray.length)];
}
const generateSentence = () => {
  const subject = randomFromArray(subjects);
  const action = randomFromArray(actions).replace("POSESSIVE", subject.posessive);
  const comment = randomFromArray(commentary);
  const output = subject.text + ' ' + action + subject.punctuation + ' ' + comment;
  document.getElementById('output').innerHTML = output;
  console.log('There are ' + (subjects.length * actions.length * commentary.length) + ' possible outputs at this time.');
}
generate.onclick = generateSentence;