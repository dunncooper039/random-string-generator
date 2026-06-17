//Import data lists
async function getArray(Sheet) {
  const response = await fetch("https://opensheet.elk.sh/1D-3Ww64q9K5n854zZwgwktHiM93eJwjSi7ua47UhRfM/" + Sheet);
  const data = await response.json();
  const subjects = data.map((row) => row);
  return subjects;
}
const subjects = await getArray("Subjects");
const actions = await getArray("Actions");
const commentary = await getArray("Commentary");
generate.textContent = "Generate";

//Log the number of possible outputs to the console
console.log('There are ' + (subjects.length * actions.length * commentary.length) + ' possible outputs at this time.');

//Gets random item from array
function randomFromArray(array) {
  //Use crypto to select an item from the array and return it
  const randomBuffer = new Uint32Array(1);
  window.crypto.getRandomValues(randomBuffer);
  let randomNumber = randomBuffer[Math.floor(Math.random() * (randomBuffer.length))] / (0xffffffff + 1);
  return array[Math.floor(randomNumber * array.length)];
}
//Chains fragments together
const generateSentence = () => {
  const subject = randomFromArray(subjects);
  const action = randomFromArray(actions);
  const comment = randomFromArray(commentary);
  let output = '';
  //Check the tense of the subject and use the appropriate text
  if (subject.tense == "future") {
    output = subject.text + ' ' + action.futureText.replace("POSSESSIVE", subject.possessive) + subject.punctuation + ' ' + comment.text;
  } else if (subject.tense == "past") {
    output = subject.text + ' ' + action.pastText.replace("POSSESSIVE", subject.possessive) + subject.punctuation + ' ' + comment.text;
  } else if (subject.tense == "present") {
    output = subject.text + ' ' + action.presentText.replace("POSSESSIVE", subject.possessive) + subject.punctuation + ' ' + comment.text;
  } else if (subject.tense == "perfect") {
    output = subject.text + ' ' + action.perfectText.replace("POSSESSIVE", subject.possessive) + subject.punctuation + ' ' + comment.text;
  }
  document.getElementById('output').innerHTML = output;
}
const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(output.innerHTML);
    console.log('Content copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}
//Event Handlers
generate.onclick = generateSentence;
copy.onclick = copyContent;