const subjects = ["You should", "I should", "You will", "I will", "They will", "Somebody once told me the world was gonna", "The French will", "Silicon Valley might", "Someday, people will", "Never gonna", "Someday, we'll", "The People's Republic of China will likely", "Mariah Cary will soon", "Your mother will", "I don't like tacos. They make me", "MINIONS!!! Tonight we will", "Elon Musk will create a company that will", "Somewhere in the Amazon, a piranha will", "TESTING-PLACEHOLDER will"]
const actions = ["not start a fire.", "call your mom.", "learn a language on Duolingo.", "play a game.", "try to take over the world.", "roll me.", "give you up.", "find it.", "adopt a penguin.", "move to North Korea.", "start a society of penguins.", "@#v9--VWe8br8vbf8s{ERROR}@*@:):(~~~.", "commit tax fraud.", "assassinate Daniel Radcliffe.", "achieve unaided human flight.", "dive into a vat of flamingos.", "listen to Lesser Minds on Spotify.", "steal the moon!!!", "reintroduce dinosaurs to Yellowstone.", "run DOOM on a 40-year old digital alarm clock.", "send tactical airstrike giraffes.", "take this.", "test a placeholder."]
const commentary = ["That sounds fun.", "This message is endorsed by The Committee to Elect Ryan Reynolds.", "I support that.", "It might be risky.", "I ain't the sharpest tool in the shed.", "Never gonna let you down.", "The Rainbow Connection.", "RUN FOR YOUR LIVES!!!", "My resolution? Airstrikes.", "Yep yep yep!", "That doesn't sound boring at all.", "It's dangerous to go alone.", "I just hope nothing explodes.", "It will be done with minimal explosions.", "This placeholder has been tested."]
let element = document.querySelector('button');
const generateSentence = () => {
  const subject = subjects[Math.floor(Math.random() * (subjects.length - 1))]
  const action = actions[Math.floor(Math.random() * (actions.length - 1))]
  const comment = commentary[Math.floor(Math.random() * (commentary.length - 1))]
  document.getElementById('output').innerHTML = subject + ' ' + action + ' ' + comment
  console.log("It's running")
}
element.onclick = generateSentence;