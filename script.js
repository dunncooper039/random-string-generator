const subjects = [
  {text:"You should", punctuation:".", posessive:"your"},
  {text:"I should", punctuation:".", posessive:"my"},
  {text:"You will", punctuation:".", posessive:"your"},
  {text:"I will", punctuation:".", posessive: "my"},
  {text:"They will", punctuation:".", posessive:"their"},
  {text:"Somebody once told me the world was gonna", punctuation:".", posessive:"my"},
  {text:"The French will", punctuation:".", posessive:"their"},
  {text:"Silicon Valley might", punctuation:".", posessive:"its"},
  {text:"Someday, people will", punctuation:".", posessive:"their"},
  {text:"Never gonna", punctuation:".", posessive:"your"},
  {text:"Someday, we'll", punctuation:".", posessive:"our"},
  {text:"The People's Republic of China will likely", punctuation:".", posessive:"their"},
  {text:"Mariah Cary will soon", punctuation:".", posessive:"her"},
  {text:"Your mother will", punctuation:".",posessive:"her"},
  {text:"I don't like tacos. They make me", punctuation:".", posessive:"my"},
  {text:"MINIONS!!! Tonight we will", punctuation:"!!!", posessive:"our"},
  {text:"Elon Musk will create a company that will", punctuation:".", posessive:"his"},
  {text:"Somewhere in the Amazon, a piranha will", punctuation:".", posessive:"its"},
  {text:"Disney's next hit movie will feature a child that decides to", punctuation:".", posessive:"their"},
  {text:"Taylor Swift has just released a song about how her ex used to", punctuation:".", posessive:"his"},
  {text:"If we need, we can", punctuation:".", posessive:"our"},
  {text:"If possible, we will", punctuation:".", posessive:"our"},
  {text:"The President of the United States has announced a four-year plan to", punctuation:".", posessive:"our nation's"},
  {text:"The leaders of the United Nations have decided to", punctuation:".", posessive:"the world's"},
  {text:"If you aren't careful, you might", punctuation:".", posessive:"your"},
  {text:"A random cow will", punctuation:".", posessive:"its"},
  {text:"Your next-door neighbor will", punctuation:".", posessive:"their"},
  {text:"The winner of this year's Super Bowl is expected to", punctuation:".", posessive:"their"},
  {text:"A random Lichtensteinian teen will soon", punctuation:".", posessive:"their"},
  {text:"Kendrick Lamar's latest diss track is about how Drake used to", punctuation:".", posessive:"his"},
  {text:"Geese are genetically predisposed to", punctuation:".", posessive:"their"},
  {text:"In fifteen minutes, you could", punctuation:".", posessive:"your"},
  {text:"The next iOS update will give users the ability to", punctuation:".", posessive:"their"},
  {text:"Some Chevrolet vehicles are being recalled, as they could possibly", punctuation:".", posessive:"their"},
  {text:"If we don't regulate AI, it will", punctuation:".", posessive:"its"},
  {text:"In the next 100 years, humanity will", punctuation:".", posessive:"its"},
  {text:"Jeff Bezos really shouldn't", punctuation:".", posessive:"his"},
  {text:"The Royal Family is expected to", punctuation:".", posessive:"their"},
  {text:"I remember that one time I decided to", punctuation:"...", posessive:"my"},
  {text:"Some are against it, but I am in favor of the new bipartisan bill that will", punctuation:".", posessive:"our nation's"},
  {text:"Your left shoelace will", punctuation:".", posessive:"your"},
  {text:"People should", punctuation:".", posessive:"their"},
  {text:"The Alabama Department of Education now requires that schools teach all students how to", punctuation:".", posessive:"their"},
  {text:"This new app lets you", punctuation:".", posessive:"your"},
  {text:"The CIA would never", punctuation:".", posessive:"our"}
]
const actions = [
  "start a fire",
  "call POSESSIVE mom",
  "learn a language on Duolingo",
  "play a game",
  "try to take over the world",
  "roll me",
  "give you up",
  "find it",
  "adopt a penguin",
  "move to North Korea",
  "start a society of penguins",
  "commit tax fraud",
  "assassinate Daniel Radcliffe",
  "achieve unaided human flight",
  "dive into a vat of flamingos",
  "listen to Lesser Minds podcast on Spotify",
  "steal the moon",
  "reintroduce dinosaurs to Yellowstone",
  "run DOOM on a 40-year old digital alarm clock",
  "send tactical airstrike giraffes",
  "take this",
  "contemplate the meaning of life",
  "eliminate all opponents",
  "disengage POSESSIVE ribcage",
  "fall off a treadmill",
  "enter an infinite loop",
  "clean out POSESSIVE room",
  "eat 3 times POSESSIVE body weight in pancakes",
  "run for President of the United States",
  "invade the Republic of the Congo",
  "launch a military campaign that will expand the country of Chad's territory by 2,984%",
  "program a random sentence generator",
  "give shoutouts to the entire population of Earth on Facebook Live",
  "start a small buisiness",
  "build a potato-powered quantum computer",
  "recreate POSESSIVE hometown in Animal Crossing",
  "discover 47 new elements",
  "legalize marinara",
  "run a marathon with one leg and a baguette",
  "refrain from stealing a baguette from Panera",
  "found a bank that just steals people's money",
  "sell NFTs",
  "release Windows 12",
  "set an Olympic record for slowest 100m dash",
  "save fifteen percent or more on car insurance",
  "stage a coup",
  "purchase a Mac that runs Windows on the black market",
  "throw a syntax error on line -1",
  "build a guitar out of LEGO hands",
  "learn to draw", 
  "not make sense, and instead make dollars",
  "thouroughly read the Disney+ Terms and Conditions",
  "learn to play an instrument",
  "plug a ukelele into a guitar amp",
  "slip on the salt that they put on ice to keep you from slipping",
  "try to imagine a new color",
  "remind the person reading this about breathing so they have to conciously think about doing it",
  "raise a group of mutant turtles as ninjas",
  "buy out Youtube just to make it have less ads",
  "one-up Boeing by NOT stranding two astronauts on the International Space Station",
  "git commit -am 'Oh wait, this isn't the terminal'",
  "make meta jokes about Meta",
  "remind people that the X logo is just a unicode character and can't be copyrighted, but can be typed(Here, copy-and-paste it: 𝕏)",
  "attend clown school",
  "score a 37 on the ACT",
  "get some fuzzy slippers",
  "send a spaceship to the sun, but at night so it doesn't burn up",
  "score a huge NIL deal despite not being a college athlete",
  "successfully rickroll a teacher in an assignment",
  "play the Chick-fil-a jingle on saxaphone",
  "play wheelchair soccer",
  "vandalize the Wikipedia article on Wikipedia vandalism",
  "be arrested on 34 counts of buisiness fraud",
  "create two websites that literally only redirect back and forth to each other"
]
const commentary = [
  "That sounds fun.",
  "This message is endorsed by The Committee to Elect Ryan Reynolds.",
  "I support that.",
  "It might be risky.",
  "I ain't the sharpest tool in the shed.",
  "Never gonna let you down.",
  "The Rainbow Connection.",
  "RUN FOR YOUR LIVES!!!",
  "My resolution? Airstrikes.",
  "Yep yep yep!",
  "That doesn't sound boring at all.",
  "It's dangerous to go alone.",
  "I just hope nothing explodes.",
  "It will be done with minimal explosions.",
  "That's a real knee-slapper, isn't it.",
  "That's why I have decided to run for President of the United States.",
  "That's why, effective immediately, all citizens will be issued emotional support dogs.",
  "Batteries not included.",
  "That's why I don't trust geese.",
  "I want a 2,500 word essay on that, it's due next friday.",
  "Say that five times fast.",
  "Soon.",
  "Help, I'm trapped in a random sentence generator!",
  "You may be entitled to compenstation.",
  "We're in for it now.",
  "We're all doomed!",
  "This could be good.",
  "It might even work!",
  "That is, unless Russia does it first.",
  "Then, I can finally sleep at night.",
  "Hopefully no one gets hurt.",
 "Think of the possibilities!",
  "And that's final.",
  "I scheduled it for tomorrow at 1:67.",
  "That's a good thing, right?",
  "-Benjamin Franklin",
  "Beep Boop",
  "If I could just figure out how...",
  "It shouldn't be fatal.",
  "Ya heard?",
  "We just need to keep an eye out for any suspicious-looking hippos.",
  "It might take a couple tries, though.",
  "You're not allergic to Zambonis, right?",
  "Are you with me?",
  "What could go wrong?",
  "But you didn't hear that from me.",
  "Right, old sport?",
  "I don't know how that's even possible."
]
let element = document.querySelector('button');
const generateSentence = () => {
  const subject = subjects[Math.floor(Math.random() * (subjects.length))]
  const action = actions[Math.floor(Math.random() * (actions.length))].replace("POSESSIVE", subject.posessive)
  const comment = commentary[Math.floor(Math.random() * (commentary.length))]
  document.getElementById('output').innerHTML = subject.text + ' ' + action + subject.punctuation + ' ' + comment
  console.log('There are ' + (subjects.length * actions.length * commentary.length) + ' possible outputs at this time.')
}

generate.onclick = generateSentence;