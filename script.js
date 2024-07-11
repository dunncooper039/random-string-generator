const subjects = ["You should", "I should", "You will", "I will", "They will", "Somebody once told me the world was gonna", "The French will", "Silicon Valley might", "Someday, people will", "Never gonna", "Someday, we'll", "The People's Republic of China will likely", "Mariah Cary will soon", "Your mother will"]
const actions = ["not start a fire.", "call your mom.", "learn a language on Duolingo.", "play a game.", "try to take over the world.", "roll me.", "give you up,", "find it.", "adopt a penguin.", "move to North Korea.", "start a society of penguins.", "@#v9--VWe8br8vbf8s{ERROR}@*@:):(~~~.", "commit tax fraud.", "assassinate Daniel Radcliffe.", "achieve unaided human flight."]
const commentary = ["That sounds fun.", "This message is endorsed by The Committee to Elect Ryan Reynolds.", "I support that.", "It might be risky.", "I ain't the sharpest tool in the shed.", "Never gonna let you down.", "The Rainbow Connection.", "RUN FOR YOUR LIVES!!!", "My resolution? Airstrikes."]
const generateSentence = () => {
  const subject = subjects[Math.floor(Math.random() * (subjects.length - 1))]
  const action = actions[Math.floor(Math.random() * (actions.length - 1))]
  const comment = commentary[Math.floor(Math.random() * (commentary.length - 1))]
  console.log(subject + ' ' + action + ' ' + comment)
}
generateSentence()