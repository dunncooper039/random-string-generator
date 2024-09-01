import { subjects } from "./subjects.js";
import { actions } from "./actions.js";
import { commentary } from "./commentary.js";
const generateSentence = () => {
  const subject = subjects[Math.floor(Math.random() * (subjects.length))];
  const action = actions[Math.floor(Math.random() * (actions.length))].replace("POSESSIVE", subject.posessive);
  const comment = commentary[Math.floor(Math.random() * (commentary.length))];
  document.getElementById('output').innerHTML = subject.text + ' ' + action + subject.punctuation + ' ' + comment;
  console.log('There are ' + (subjects.length * actions.length * commentary.length) + ' possible outputs at this time.');
}
generate.onclick = generateSentence;