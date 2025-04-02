const {
  king
} = require('../france/king');
const axios = require('axios');
const traduire = require('../france/traduction');
king({
  'nomCom': "chifumi",
  'categorie': "Games",
  'reaction': '📺'
}, async (_0x3bb4fd, _0x5b468d, _0xc30673) => {
  const {
    repondre: _0x48e9d7,
    ms: _0x30b34f,
    auteurMessage: _0x4df699,
    auteurMsgRepondu: _0x482698,
    msgRepondu: _0x4a44ee,
    arg: _0x51f200,
    idBot: _0x2f3e45
  } = _0xc30673;
  if (_0x4a44ee) {
    _0x5b468d.sendMessage(_0x3bb4fd, {
      'text': '@' + _0x4df699.split('@')[0x0] + " invites @" + _0x482698.split('@')[0x0] + " to play the rock-paper-scissors game;\n        To accept the challenge, type yes",
      'mentions': [_0x4df699, _0x482698]
    });
    try {
      const _0xeffd3c = await _0x5b468d.awaitForMessage({
        'sender': _0x482698,
        'chatJid': _0x3bb4fd,
        'timeout': 0x7530
      });
      console.log(_0xeffd3c);
      if (_0xeffd3c.message.conversation.toLowerCase() === "yes" || _0xeffd3c.message.extendedTextMessage.text.toLowerCase() === 'yes') {
        let _0x5cdc3a = "*player 1 :* @" + _0x482698.split('@')[0x0] + "\n*player 2 :* @" + _0x4df699.split('@')[0x0] + "\n\n*Rules:* The game will start soon; you have a maximum of 1 minute each to make a choice in our private chat;";
        _0x5b468d.sendMessage(_0x3bb4fd, {
          'text': _0x5cdc3a,
          'mentions': [_0x4df699, _0x482698]
        });
        let _0x337cb9 = [_0x4df699, _0x482698];
        let _0x44f759 = [];
        try {
          for (const _0x46df78 of _0x337cb9) {
            _0x5b468d.sendMessage(_0x3bb4fd, {
              'text': '@' + _0x46df78.split('@')[0x0] + " Please go to this chat to make a choice\n         https://wa.me/" + _0x2f3e45.split('@')[0x0] + " ",
              'mentions': [_0x46df78]
            });
            _0x5b468d.sendMessage(_0x46df78, {
              'text': "You have 3 choices;\n\n      rock\n      paper\n      scissors\n   \n   Please send your choice"
            });
            const _0x508e18 = await _0x5b468d.awaitForMessage({
              'sender': _0x46df78,
              'chatJid': _0x46df78,
              'timeout': 0x7530
            });
            console.log("voici le message de " + _0x46df78);
            console.log(_0x508e18);
            _0x44f759.push(_0x508e18.message.extendedTextMessage.text.toLowerCase());
          }
          console.log(_0x44f759);
          const _0x27ce71 = ["rock", "paper", "scissors"];
          const _0x2fa068 = _0x44f759[0x0];
          const _0x37f0cc = _0x44f759[0x1];
          if (!_0x27ce71.includes(_0x2fa068) || !_0x27ce71.includes(_0x37f0cc)) {
            _0x5b468d.sendMessage(_0x3bb4fd, {
              'text': "*joueur 1 :* @" + _0x482698.split('@')[0x0] + "\n*joueur 2 :* @" + _0x4df699.split('@')[0x0] + "\n\n*resultat :* l'un ou les deux choix ne sont pas valides.",
              'mentions': [_0x4df699, _0x482698]
            });
          } else {
            if (_0x2fa068 === _0x37f0cc) {
              _0x5b468d.sendMessage(_0x3bb4fd, {
                'text': "*joueur 1 :* @" + _0x482698.split('@')[0x0] + " a choisi(e) *" + _0x37f0cc + "* \n*joueur 2 :* @" + _0x4df699.split('@')[0x0] + " a choisi(e) *" + _0x2fa068 + "*\n\nresultat : il y'a donc match nul",
                'mentions': [_0x4df699, _0x482698]
              });
            } else if (_0x2fa068 === "rock" && _0x37f0cc === "scissors" || _0x2fa068 === 'paper' && _0x37f0cc === "rock" || _0x2fa068 === "scissors" && _0x37f0cc === "paper") {
              _0x5b468d.sendMessage(_0x3bb4fd, {
                'text': "*player 1 :* @" + _0x482698.split('@')[0x0] + " choose *" + _0x37f0cc + "* \n*player 2 :* @" + _0x4df699.split('@')[0x0] + " choose *" + _0x2fa068 + "*\n\n*result :* @" + _0x4df699.split('@')[0x0] + " win ",
                'mentions': [_0x4df699, _0x482698]
              });
            } else {
              _0x5b468d.sendMessage(_0x3bb4fd, {
                'text': "*player 1 :* @" + _0x482698.split('@')[0x0] + " choose *" + _0x37f0cc + "* \n*player 2 :* @" + _0x4df699.split('@')[0x0] + " choose) *" + _0x2fa068 + "*\n\n*result :* @" + _0x482698.split('@')[0x0] + " win ",
                'mentions': [_0x4df699, _0x482698]
              });
            }
          }
        } catch (_0x2662f8) {
          if (_0x2662f8.message === "Timeout") {
            _0x5b468d.sendMessage(_0x3bb4fd, {
              'text': "*player 1 :* @" + _0x482698.split('@')[0x0] + "\n*player 2 :* @" + _0x4df699.split('@')[0x0] + "\n\n*result :* Our players took too long to decide;\nTherefore, the game is canceled\n",
              'mentions': [_0x4df699, _0x482698]
            });
          } else {
            console.error(_0x2662f8);
          }
        }
      } else {
        _0x48e9d7("invitation refused");
      }
    } catch (_0x21d11b) {
      if (_0x21d11b.message === 'Timeout') {
        _0x5b468d.sendMessage(_0x3bb4fd, {
          'text': '@' + _0x482698.split('@')[0x0] + " took too long to respond to the invitation from\n                @" + _0x4df699.split('@')[0x0] + " ;\nTherefore, the game is canceled",
          'mentions': [_0x4df699, _0x482698]
        });
      } else {
        console.error(_0x21d11b);
      }
    }
  } else {
    _0x48e9d7("Chifumi  is an rock-paper-scissors games ; you need a friend too play , mention his/her message when sending chifumi to invite him/her");
  }
});
king({
  'nomCom': "quizz",
  'categorie': "Games",
  'reaction': "👨🏿‍💻"
}, async (_0x4f0ef9, _0x1be66d, _0x187a92) => {
  const {
    repondre: _0x32ce3f,
    auteurMessage: _0x113517
  } = _0x187a92;
  try {
    let _0x25f538 = await axios.get('https://quizzapi.jomoreschi.fr/api/v1/quiz?limit=1&difficulty=facile');
    let _0x5e183f = _0x25f538.data.quizzes[0x0];
    let _0x2ad1d6 = await traduire(_0x5e183f.category, {
      'to': 'en'
    });
    let _0x51a4c8 = await traduire(_0x5e183f.question, {
      'to': 'en'
    });
    let _0x18c424 = _0x5e183f.answer;
    let _0x62373b = [..._0x5e183f.badAnswers, _0x18c424];
    async function _0x257571(_0x28da1c) {
      const _0x37b559 = _0x28da1c.slice();
      for (let _0x583eb2 = _0x37b559.length - 0x1; _0x583eb2 > 0x0; _0x583eb2--) {
        const _0x4b63f3 = Math.floor(Math.random() * (_0x583eb2 + 0x1));
        [_0x37b559[_0x583eb2], _0x37b559[_0x4b63f3]] = [_0x37b559[_0x4b63f3], _0x37b559[_0x583eb2]];
      }
      return _0x37b559;
    }
    let _0x39eea1 = await _0x257571(_0x62373b);
    let _0x233940 = "*Flash-Md Quizz Game*\n\n*Category:* " + _0x2ad1d6 + "\n*Question:* " + _0x51a4c8 + "\n\n*Answers:*\n";
    _0x39eea1.forEach((_0x2e5ed2, _0x4b9434) => {
      _0x233940 += '*' + (_0x4b9434 + 0x1) + " :* " + _0x2e5ed2 + "\n";
    });
    _0x233940 += "\nSend the number of the correct answer";
    _0x32ce3f(_0x233940);
    async function _0x5dab48(_0x1f096f) {
      let _0x39924 = await _0x1be66d.awaitForMessage({
        'sender': _0x113517,
        'chatJid': _0x4f0ef9,
        'timeout': 0x3a98
      });
      let _0x54b599;
      try {
        _0x54b599 = _0x39924.message.extendedTextMessage.text;
      } catch {
        _0x54b599 = _0x39924.message.conversation;
      }
      if (_0x39eea1[_0x54b599 - 0x1] === _0x18c424) {
        return _0x32ce3f("Great, good answer!");
      } else {
        return _0x1f096f === 0x1 ? _0x32ce3f("Incorrect! One more try...") : _0x32ce3f("Incorrect! The correct answer was: " + _0x18c424);
      }
    }
    await _0x5dab48(0x1);
    await _0x5dab48(0x2);
  } catch (_0x23c46d) {
    console.error(_0x23c46d);
    _0x32ce3f("An error occurred while processing the quiz.");
  }
});