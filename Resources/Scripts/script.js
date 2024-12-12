//Import data lists
async function getSubjects() {
  const response = await fetch("https://opensheet.elk.sh/1D-3Ww64q9K5n854zZwgwktHiM93eJwjSi7ua47UhRfM/Subjects");
  const data = await response.json();
  const subjects = data.map((row) => row);
  return subjects;
}
const subjects = await getSubjects();

async function getActions() {
  const response = await fetch("https://opensheet.elk.sh/1D-3Ww64q9K5n854zZwgwktHiM93eJwjSi7ua47UhRfM/Actions");
  const data = await response.json();
  const actions = data.map((row) => row.Text);
  return actions;
}
const actions = await getActions();

async function getCommentary() {
  const response = await fetch("https://opensheet.elk.sh/1D-3Ww64q9K5n854zZwgwktHiM93eJwjSi7ua47UhRfM/Commentary");
  const data = await response.json();
  const commentary = data.map((row) => row.Text);
  return commentary;
}
const commentary = await getCommentary();

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
  const action = randomFromArray(actions).replace("POSESSIVE", subject.Posessive);
  const comment = randomFromArray(commentary);
  const output = subject.Text + ' ' + action + subject.Punctuation + ' ' + comment;
  document.getElementById('output').innerHTML = output;
}
//Event Handler
generate.onclick = generateSentence;