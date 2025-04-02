const {
  king
} = require("../france/king");
const devinettes = [{
  'question': "I can fly without wings, who am I?",
  'reponse': "The weather"
}, {
  'question': "I'm always hungry, the more I eat, the fatter I become. Who am I?",
  'reponse': "A black hole"
}, {
  'question': "I'm strong when I'm down, but I'm weak when I'm up. Who am I?",
  'reponse': "The number 6"
}, {
  'question': "I can be short or long, hard or soft, I can be used by anyone, from young children to experienced musicians. Who am I?",
  'reponse': "A pencil"
}, {
  'question': "I am the beginning of the end, the end of every place. I am the beginning of eternity, the end of time and space. Who am I?",
  'reponse': "The letter 'e'"
}, {
  'question': "I am white when I am dirty and black when I am clean. Who am I?",
  'reponse': "A slate"
}, {
  'question': "I'm liquid, but if you take water away from me, I become solid. Who am I?",
  'reponse': "Tea"
}, {
  'question': "I fly without wings, I cry without eyes. Wherever I am, death always accompanies me. Who am I?",
  'reponse': "The wind"
}, {
  'question': "I have towns, but no houses. I have mountains, but no trees. I have water, but no fish. Who am I?",
  'reponse': "A map"
}, {
  'question': "I can be read, but you can't write about me. You always give to me, but rarely keep me. Who am I?",
  'reponse': "A borrowed book"
}, {
  'question': "I come twice in a week, once in a year, but never in a day. Who am I?",
  'reponse': "The letter 'E'"
}, {
  'question': "I'm hard to grasp, but you will hold me in your hand when you find me. Who am I?",
  'reponse': "Your breath"
}, {
  'question': "The hotter I am, the colder I become. Who am I?",
  'reponse': "Coffee"
}, {
  'question': "I am the stuff of dreams. I cover broken ideas. I change souls into wings. Who am I?",
  'reponse': "A book"
}, {
  'question': "I am white when I am dirty and black when I am clean. Who am I?",
  'reponse': "A slate"
}, {
  'question': "I can fly without wings. I can cry without eyes. Who am I?",
  'reponse': "A cloud"
}, {
  'question': "I start at night and finish in the morning. Who am I?",
  'reponse': "The letter 'N'"
}, {
  'question': "I feed on everything around me, the air, the earth and even the trees. Who am I?",
  'reponse': "A fire"
}, {
  'question': "I can be found in a cave, but I am not alive. I can be beautiful but also dangerous. Who am I?",
  'reponse': "A stalactite"
}, {
  'question': "I am taken from a mine, and shut up in a wooden case, from which I am never released, and yet I am used by almost every person. Who am I?",
  'reponse': "A pencil"
}, {
  'question': "I can be cracked, made, told, and played. Who am I?",
  'reponse': "A joke"
}, {
  'question': "The more you take, the more you leave behind. What am I?",
  'reponse': "Footsteps"
}];
king({
  'nomCom': 'riddle',
  'categorie': "Games"
}, async (_0x543c72, _0x10a074, _0x2f5f1e) => {
  const {
    ms: _0x1a2ef1,
    repondre: _0x57dd8b
  } = _0x2f5f1e;
  const _0x46a343 = devinettes[Math.floor(Math.random() * devinettes.length)];
  await _0x10a074.sendMessage(_0x543c72, {
    'text': "🔍 Riddle Time! \n\n" + _0x46a343.question + "\n\nYou have 30 seconds to think about it!"
  }, {
    'quoted': _0x1a2ef1
  });
  await delay(0x7530);
  await _0x10a074.sendMessage(_0x543c72, {
    'text': "⏳ Time's up! The answer was: " + _0x46a343.reponse
  }, {
    'quoted': _0x1a2ef1
  });
});
function delay(_0x2b9501) {
  return new Promise(_0x281aa5 => setTimeout(_0x281aa5, _0x2b9501));
}