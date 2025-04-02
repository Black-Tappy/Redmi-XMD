(function (_0x25502f, _0x212439) {
  const _0x4e019b = _0x25502f();
  while (true) {
    try {
      const _0x4f2f34 = parseInt(_0x5015(1248, 0x6c1)) / 1 * (parseInt(_0x5015(500, -0x21e)) / 2) + parseInt(_0x5015(557, 0x77c)) / 3 * (-parseInt(_0x5015(1296, 0x1e7)) / 4) + -parseInt(_0x5015(1535, 0x7f0)) / 5 + -parseInt(_0x5015(815, -0xd8)) / 6 * (parseInt(_0x5015(1900, 0xa11)) / 7) + -parseInt(_0x5015(1469, 0x465)) / 8 * (-parseInt(_0x5015(1425, 0xa25)) / 9) + -parseInt(_0x5015(1843, 0x978)) / 10 + parseInt(_0x5015(951, 0x61c)) / 11 * (parseInt(_0x5015(1563, 0x78c)) / 12);
      if (_0x4f2f34 === _0x212439) {
        break;
      } else {
        _0x4e019b.push(_0x4e019b.shift());
      }
    } catch (_0x3e3dd9) {
      _0x4e019b.push(_0x4e019b.shift());
    }
  }
})(_0x482f, 726267);
const _0x2a46f5 = function () {
  let _0x2b5b5e = true;
  return function (_0x562182, _0xd2c55c) {
    const _0x290ca5 = _0x2b5b5e ? function () {
      if (_0xd2c55c) {
        const _0x3cf85b = _0xd2c55c.apply(_0x562182, arguments);
        _0xd2c55c = null;
        return _0x3cf85b;
      }
    } : function () {};
    _0x2b5b5e = false;
    return _0x290ca5;
  };
}();
const _0x4d9795 = _0x2a46f5(this, function () {
  return _0x4d9795.toString().search("(((.+)+)+)+$").toString().constructor(_0x4d9795).search("(((.+)+)+)+$");
});
_0x4d9795();
const _0x233729 = function () {
  let _0x33bf53 = true;
  return function (_0x4e9e19, _0x21cd8f) {
    const _0x701598 = _0x33bf53 ? function () {
      if (_0x21cd8f) {
        const _0x58d758 = _0x21cd8f.apply(_0x4e9e19, arguments);
        _0x21cd8f = null;
        return _0x58d758;
      }
    } : function () {};
    _0x33bf53 = false;
    return _0x701598;
  };
}();
(function () {
  _0x233729(this, function () {
    const _0x12ea34 = new RegExp("function *\\( *\\)");
    const _0x462bd3 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
    const _0x3b5f29 = _0x5e1229("init");
    if (!_0x12ea34.test(_0x3b5f29 + "chain") || !_0x462bd3.test(_0x3b5f29 + "input")) {
      _0x3b5f29('0');
    } else {
      _0x5e1229();
    }
  })();
})();
const _0xdf7ed7 = function () {
  let _0x3141bb = true;
  return function (_0xbb7171, _0xe3cd28) {
    const _0x41499b = _0x3141bb ? function () {
      if (_0xe3cd28) {
        const _0x3d0018 = _0xe3cd28.apply(_0xbb7171, arguments);
        _0xe3cd28 = null;
        return _0x3d0018;
      }
    } : function () {};
    _0x3141bb = false;
    return _0x41499b;
  };
}();
const _0x1b1ed5 = _0xdf7ed7(this, function () {
  const _0x26d5a0 = function () {
    let _0x345856;
    try {
      _0x345856 = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x1a9e93) {
      _0x345856 = window;
    }
    return _0x345856;
  };
  const _0x34e536 = _0x26d5a0();
  const _0xd2d8d6 = _0x34e536.console = _0x34e536.console || {};
  const _0x3d793a = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let _0x2645bf = 0; _0x2645bf < _0x3d793a.length; _0x2645bf++) {
    const _0x1cac4a = _0xdf7ed7.constructor.prototype.bind(_0xdf7ed7);
    const _0x4117ab = _0x3d793a[_0x2645bf];
    const _0x19b019 = _0xd2d8d6[_0x4117ab] || _0x1cac4a;
    _0x1cac4a.__proto__ = _0xdf7ed7.bind(_0xdf7ed7);
    _0x1cac4a.toString = _0x19b019.toString.bind(_0x19b019);
    _0xd2d8d6[_0x4117ab] = _0x1cac4a;
  }
});
_0x1b1ed5();
const {
  king
} = require("../france/king");
const {
  default: axios
} = require("axios");
const pkg = require("@whiskeysockets/baileys");
const {
  generateWAMessageFromContent,
  proto
} = pkg;
const _0x22fb16 = {
  nomCom: "gemini",
  aliases: ["gemini-ai"],
  reaction: '🌟',
  categorie: 'AI'
};
king(_0x22fb16, async (_0x459d0f, _0x58b776, _0x13dd55) => {
  const {
    repondre: _0x375278,
    arg: _0x57e406,
    ms: _0x381fb4
  } = _0x13dd55;
  try {
    if (!_0x57e406 || _0x57e406.length === 0) {
      return _0x375278("Hello, I am *GEMINI AI*.\n\n How can I assist you today?");
    }
    const _0x3ecfb3 = _0x57e406.join(" ");
    const _0x5d81d9 = await fetch("https://api.diioffc.web.id/api/ai/gemini?query=" + encodeURIComponent(_0x3ecfb3));
    const _0x5b2adb = await _0x5d81d9.json();
    if (_0x5b2adb.status && _0x5b2adb.result && _0x5b2adb.result.message) {
      const _0x58c38d = _0x5b2adb.result.message;
      const _0x138484 = {
        deviceListMetadata: {},
        deviceListMetadataVersion: 0x2
      };
      const _0x313a56 = {
        text: _0x58c38d
      };
      const _0x5c8ed3 = {
        title: '',
        subtitle: '',
        hasMediaAttachment: false
      };
      const _0x128a35 = {
        buttons: []
      };
      const _0xd1fe97 = generateWAMessageFromContent(_0x459d0f, {
        'viewOnceMessage': {
          'message': {
            'messageContextInfo': _0x138484,
            'interactiveMessage': proto.Message.InteractiveMessage.create({
              'body': proto.Message.InteractiveMessage.Body.create(_0x313a56),
              'footer': proto.Message.InteractiveMessage.Footer.create({
                'text': "> *POWERED BY REDMI-XMD*"
              }),
              'header': proto.Message.InteractiveMessage.Header.create(_0x5c8ed3),
              'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create(_0x128a35),
              'contextInfo': {
                'forwardingScore': 0x5,
                'isForwarded': true,
                'forwardedNewsletterMessageInfo': {
                  'newsletterJid': "120363238139244263@newsletter",
                  'newsletterName': "REDMI-XMD",
                  'serverMessageId': 0x8f,
                  'sourceUrl': "https://whatsapp.com/channel/0029VaTbb3p84Om9LRX1jg0P"
                }
              }
            })
          }
        }
      }, {});
      await _0x58b776.relayMessage(_0x459d0f, _0xd1fe97.message, {
        'messageId': _0xd1fe97.key.id
      });
    } else {
      throw new Error("Invalid response from the API.");
    }
  } catch (_0xd45488) {
    console.error("Error getting response:", _0xd45488.message);
    _0x375278("Error getting response.");
  }
});
const _0x2b8880 = {
  nomCom: "ilama",
  aliases: ["llama"],
  reaction: '🤗',
  categorie: 'AI'
};
king(_0x2b8880, async (_0x28aa27, _0x7dfe40, _0x123970) => {
  const {
    repondre: _0x5e622d,
    arg: _0x33cb7c,
    ms: _0x389bc6
  } = _0x123970;
  try {
    if (!_0x33cb7c || _0x33cb7c.length === 0) {
      return _0x5e622d("Hello am *REDMI-MD.* an AI developed by Ⴊl𐌀Ꮳk 𐌕𐌀ႲႲჄ.\n\n What help can I offer you today?");
    }
    const _0x1a66fc = _0x33cb7c.join(" ");
    const _0x49794f = await fetch("https://api.gurusensei.workers.dev/llama?prompt=" + _0x1a66fc);
    const _0x405b7a = await _0x49794f.json();
    if (_0x405b7a && _0x405b7a.response && _0x405b7a.response.response) {
      const _0x2da44f = _0x405b7a.response.response;
      const _0x20c797 = {
        deviceListMetadata: {},
        deviceListMetadataVersion: 0x2
      };
      const _0xc1d67e = {
        text: _0x2da44f
      };
      const _0x1d89a4 = {
        title: '',
        subtitle: '',
        hasMediaAttachment: false
      };
      const _0x52fd13 = {
        buttons: []
      };
      const _0x5c8da7 = generateWAMessageFromContent(_0x28aa27, {
        'viewOnceMessage': {
          'message': {
            'messageContextInfo': _0x20c797,
            'interactiveMessage': proto.Message.InteractiveMessage.create({
              'body': proto.Message.InteractiveMessage.Body.create(_0xc1d67e),
              'footer': proto.Message.InteractiveMessage.Footer.create({
                'text': "> *POWERED BY REDMI-XMD*"
              }),
              'header': proto.Message.InteractiveMessage.Header.create(_0x1d89a4),
              'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create(_0x52fd13),
              'contextInfo': {
                'forwardingScore': 0x5,
                'isForwarded': true,
                'forwardedNewsletterMessageInfo': {
                  'newsletterJid': "120363238139244263@newsletter",
                  'newsletterName': "REDMI-XMD",
                  'serverMessageId': 0x8f,
                  'sourceUrl': "https://whatsapp.com/channel/0029VaTbb3p84Om9LRX1jg0P"
                }
              }
            })
          }
        }
      }, {});
      await _0x7dfe40.relayMessage(_0x28aa27, _0x5c8da7.message, {
        'messageId': _0x5c8da7.key.id
      });
    } else {
      throw new Error("Invalid response from the API.");
    }
  } catch (_0x49bf10) {
    console.error("Error getting response:", _0x49bf10.message);
    _0x5e622d("Error getting response.");
  }
});
const _0x24b8e5 = {
  nomCom: "number",
  aliases: ["checknum", "validate", "numinfo", "valid"],
  reaction: '📞',
  categorie: "General"
};
king(_0x24b8e5, async (_0x49f105, _0x4357a7, _0xfb7ef8) => {
  const {
    repondre: _0x267236,
    arg: _0x4cff92,
    ms: _0x271552
  } = _0xfb7ef8;
  try {
    if (!_0x4cff92 || _0x4cff92.length === 0) {
      return _0x267236("Please enter a phone number to validate.");
    }
    const _0x4fef66 = _0x4cff92.join(" ");
    const _0x310baa = await fetch("https://tajammalmods.xyz/Validater.php?num=" + _0x4fef66);
    const _0x5ac348 = await _0x310baa.json();
    if (_0x5ac348.valid) {
      const _0x4f30f3 = _0x5ac348.carrier;
      const _0xebb9bf = _0x5ac348.country;
      const _0x9659f0 = _0x5ac348.international_format;
      const _0x5dc601 = _0x5ac348.national_format;
      const _0x3287f4 = _0x5ac348.line_type === 1 ? "Mobile" : "Landline";
      const _0x540f2e = _0x5ac348.location;
      const _0x567643 = _0x5ac348.time_zones[0];
      await _0x267236("Phone Number Validation:\n\n*Carrier:* " + _0x4f30f3 + "\n*Country:* " + _0xebb9bf + "\n*International Format:* " + _0x9659f0 + "\n*National Format:* " + _0x5dc601 + "\n*Line Type:* " + _0x3287f4 + "\n*Location:* " + _0x540f2e + "\n*Time Zone:* " + _0x567643 + "\n\n> *POWERED BY REDMI-XMD*");
    } else {
      await _0x267236("The phone number is invalid!");
    }
  } catch (_0x2978c9) {
    _0x267236("There was an error processing your request. Please try again later.");
  }
});
const _0x1f4e54 = {
  nomCom: "technews",
  reaction: '📰',
  categorie: "News"
};
king(_0x1f4e54, async (_0x28ef9a, _0x366231, _0x4c269a) => {
  const {
    repondre: _0x1f9ffb,
    ms: _0x1c0d44
  } = _0x4c269a;
  try {
    const _0x17477f = await axios.get("https://fantox001-scrappy-api.vercel.app/technews/random");
    const _0x266529 = _0x17477f.data;
    const {
      thumbnail: _0x12cf19,
      news: _0x220547
    } = _0x266529;
    const _0x3e56df = "*REDMI-XMD TECH NEWS*\n\n" + _0x220547 + "\n\n*Powered by © France King*";
    const _0x443c13 = {
      url: _0x12cf19
    };
    const _0x45841d = {
      image: _0x443c13,
      caption: _0x3e56df
    };
    const _0x2b8772 = {
      quoted: _0x1c0d44
    };
    await _0x366231.sendMessage(_0x28ef9a, _0x45841d, _0x2b8772);
  } catch (_0x180abc) {
    console.error("Error fetching tech news:", _0x180abc);
    await _0x1f9ffb("Sorry, there was an error retrieving the news. Please try again later.\n" + _0x180abc);
  }
});
const _0x5b25f4 = {
  nomCom: "pair",
  aliases: ["pairing", "generatecode"],
  reaction: '🔗',
  categorie: "user",
  desc: "Generates a pairing code for a phone number."
};
king(_0x5b25f4, async (_0x6ad15c, _0x57e88d, _0x37c0f7) => {
  const {
    repondre: _0x2cfe25,
    arg: _0x2c32f2,
    ms: _0xbfb4dc
  } = _0x37c0f7;
  try {
    if (!_0x2c32f2 || _0x2c32f2.length === 0) {
      return _0x2cfe25("Please provide a phone number to generate a pairing code.");
    }
    const _0x427ddf = _0x2c32f2.join(" ");
    const _0x31f341 = await fetch("https://redmi-xmd-pairing-code-2.onrender.com/code?number=" + encodeURIComponent(_0x427ddf));
    if (!_0x31f341.ok) {
      return _0x2cfe25("Failed to generate pairing code. Please try again later.");
    }
    await _0x2cfe25("*A MOMENT REDMI-XMD IS GETTING YOUR PAIRING CODE*");
    const _0x5ea553 = await _0x31f341.json();
    if (_0x5ea553 && _0x5ea553.code) {
      const _0x181f5f = _0x5ea553.code;
      await _0x2cfe25("Your pairing code for number *" + _0x427ddf + "* is:");
      await _0x2cfe25("```" + _0x181f5f + "```");
      await _0x2cfe25("> *Powered by REDMI-XMD*");
    } else {
      await _0x2cfe25("Could not retrieve the pairing code. Please check the number and try again.");
    }
  } catch (_0x3302e8) {
    console.error(_0x3302e8);
    await _0x2cfe25("There was an error processing your request. Please try again later.");
  }
});
const _0x1c3b19 = {
  nomCom: "mail",
  aliases: ["tempmail", "temp"],
  reaction: '📧',
  categorie: "General"
};
king(_0x1c3b19, async (_0x3217e6, _0x294d5e, _0x2c3f2d) => {
  const {
    repondre: _0x442590,
    prefixe: _0x373006,
    ms: _0x1f3bef
  } = _0x2c3f2d;
  try {
    const _0x2d0d99 = Math.random().toString(36).substring(2, 12);
    const _0x734404 = _0x2d0d99 + "@1secmail.com";
    const _0x5829ec = {
      text: "Your temporary email is: " + _0x734404 + "\n\nYou can use this email for temporary purposes. I will notify you if you receive any emails."
    };
    const _0x39d0e8 = {
      quoted: _0x1f3bef
    };
    await _0x294d5e.sendMessage(_0x3217e6, _0x5829ec, _0x39d0e8);
    const _0x19475e = _0x569f4f => {
      const _0x1b37f1 = /(https?:\/\/[^\s]+)/g;
      return _0x569f4f.match(_0x1b37f1);
    };
    const _0xbc9f29 = async () => {
      const _0x19e7a8 = {
        fuuzR: "cta_copy"
      };
      _0x19e7a8.EqCkD = "📋 COPY RESULTS";
      _0x19e7a8.MuOpe = "copy_code";
      try {
        const _0x3633c2 = await fetch("https://www.1secmail.com/api/v1/?action=getMessages&login=" + _0x2d0d99 + "&domain=1secmail.com");
        const _0x18fd94 = await _0x3633c2.json();
        if (_0x18fd94 && _0x18fd94.length > 0) {
          for (const _0x2d0c42 of _0x18fd94) {
            const _0x49e0cc = await fetch("https://www.1secmail.com/api/v1/?action=readMessage&login=" + _0x2d0d99 + "&domain=1secmail.com&id=" + _0x2d0c42.id);
            const _0x49b4b6 = await _0x49e0cc.json();
            const _0x23143f = _0x19475e(_0x49b4b6.textBody);
            const _0x5a43ee = _0x23143f ? _0x23143f.join("\n") : "No links found in the email content.";
            const _0xb53b6f = {
              text: "You have received a new email!\n\nFrom: " + _0x49b4b6.from + "\nSubject: " + _0x49b4b6.subject + "\n\n" + _0x49b4b6.textBody + "\n\nLinks found:\n" + _0x5a43ee
            };
            const _0x23339d = {
              quoted: _0x1f3bef
            };
            await _0x294d5e.sendMessage(_0x3217e6, _0xb53b6f, _0x23339d);
          }
        }
      } catch (_0x3b49eb) {
        console.error("Error checking temporary email:", _0x3b49eb.message);
      }
    };
    const _0x1b8331 = setInterval(_0xbc9f29, 30000);
    setTimeout(() => {
      clearInterval(_0x1b8331);
      const _0x4c055f = {
        text: "Your temporary email session has ended. Please create a new temporary email if needed."
      };
      const _0x27fe00 = {
        quoted: _0x1f3bef
      };
      _0x294d5e.sendMessage(_0x3217e6, _0x4c055f, _0x27fe00);
    }, 600000);
  } catch (_0x5cb110) {
    console.error("Error generating temporary email:", _0x5cb110.message);
    const _0x134964 = {
      text: "Error generating temporary email. Please try again later."
    };
    const _0x2251cc = {
      quoted: _0x1f3bef
    };
    await _0x294d5e.sendMessage(_0x3217e6, _0x134964, _0x2251cc);
  }
});
const _0x5f47c8 = {
  nomCom: "redmi",
  reaction: '📡',
  categorie: 'AI'
};
king(_0x5f47c8, async (_0x335619, _0x285cb4, _0x55e8a2) => {
  const {
    repondre: _0xc88d5f,
    ms: _0x27c8c5,
    arg: _0x5a50b8
  } = _0x55e8a2;
  if (!_0x5a50b8 || !_0x5a50b8[0]) {
    return _0xc88d5f("YEES!\n _I'm listening to you._");
  }
  try {
    const _0x52f171 = _0x5a50b8.join(" ");
    const _0x5e0470 = await fetch("http://api.brainshop.ai/get?bid=181821&key=ltFzFIXrtj2SVMTX&uid=[uid]&msg=" + _0x52f171);
    const _0x2ed20d = await _0x5e0470.json();
    await _0xc88d5f(_0x2ed20d.cnt);
  } catch {
    _0xc88d5f("something went wrong...");
  }
});
const _0x1db11b = {
  nomCom: "dalle",
  aliases: ["dall", "dal"],
  reaction: '📡',
  categorie: 'AI'
};
king(_0x1db11b, async (_0x4db48a, _0x4255e6, _0x2b68b2) => {
  const {
    repondre: _0x3556ad,
    arg: _0x2a0820,
    ms: _0x5f250d
  } = _0x2b68b2;
  try {
    if (!_0x2a0820 || _0x2a0820.length === 0) {
      return _0x3556ad("Please enter the necessary information to generate the image.");
    }
    const _0x240375 = _0x2a0820.join(" ");
    const _0x4c73c7 = "https://widipe.com/dalle?text=" + _0x240375;
    const _0x5b1ca9 = {
      url: _0x4c73c7
    };
    const _0x19d47c = {
      image: _0x5b1ca9,
      caption: "*Powered by REDMI-XMD*"
    };
    const _0x2916aa = {
      quoted: _0x5f250d
    };
    _0x4255e6.sendMessage(_0x4db48a, _0x19d47c, _0x2916aa);
  } catch (_0x1c3347) {
    console.error("Erreur:", _0x1c3347.message || "Une erreur s'est produite");
    _0x3556ad("Oops, an error occurred while processing your request");
  }
});
const _0x5e8a0d = {
  nomCom: "gpt",
  aliases: ["chatgpt"],
  reaction: '🤖',
  categorie: 'AI',
  desc: "Fetches AI responses from the Gemini API based on a provided prompt."
};
king(_0x5e8a0d, async (_0x2054ca, _0x40ee01, _0xd2dbfd) => {
  const {
    repondre: _0x48da1d,
    arg: _0x2c30f8,
    ms: _0x3055e5
  } = _0xd2dbfd;
  try {
    if (!_0x2c30f8 || _0x2c30f8.length === 0) {
      return _0x48da1d("Please provide a prompt for the Gemini AI.");
    }
    const _0x1a3ee7 = _0x2c30f8.join(" ");
    const _0x38bf69 = await fetch("https://www.noobs-api.000.pe/dipto/gemini?prompt=" + encodeURIComponent(_0x1a3ee7));
    if (!_0x38bf69.ok) {
      return _0x48da1d("Failed to get a response from the Gemini AI. Please try again later.");
    }
    const _0x29ceeb = await _0x38bf69.json();
    if (_0x29ceeb && _0x29ceeb.dipto) {
      const _0x53bb41 = _0x29ceeb.dipto;
      await _0x48da1d(_0x53bb41);
    } else {
      await _0x48da1d("Could not retrieve a response from Gemini AI. Please try again later.");
    }
  } catch (_0x8f322a) {
    console.error(_0x8f322a);
    await _0x48da1d("There was an error processing your request. Please try again later.");
  }
});
const _0x3f7bb5 = {
  nomCom: "calc",
  aliases: ["cal", "calculate"],
  reaction: '🔢',
  categorie: "General"
};
king(_0x3f7bb5, async (_0x272ba7, _0x5a56d9, _0xd87e04) => {
  const {
    repondre: _0x27cabd,
    arg: _0x541a00,
    ms: _0x448004
  } = _0xd87e04;
  if (!_0x541a00 || _0x541a00.length === 0) {
    return _0x27cabd("Please insert math calculations like 100000+2024.\n\nNOTE: Use \"(/)\" for division and \"(*)\" for multiplication or letter x");
  }
  const _0x2ccfa4 = _0x541a00.join(" ");
  const _0x23d162 = await fetch("https://api.maher-zubair.tech/ai/mathssolve?q=" + _0x2ccfa4);
  const _0x1471be = await _0x23d162.json();
  await _0x27cabd(_0x1471be.result);
  console.log(_0x1471be.completion);
});
(function () {
  const _0x5bab0f = function () {
    let _0x79378d;
    try {
      _0x79378d = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x3d0c47) {
      _0x79378d = window;
    }
    return _0x79378d;
  };
  const _0x1997f8 = _0x5bab0f();
  _0x1997f8.setInterval(_0x5e1229, 4000);
})();
const _0x3321e6 = {
  nomCom: "best-wallp",
  aliases: ["bestwal", "best", 'bw'],
  reaction: '🙌',
  categorie: "REDMI-XMD PICS"
};
king(_0x3321e6, async (_0x39514f, _0x373333, _0x5d4a6b) => {
  const {
    repondre: _0x26fce5,
    arg: _0x8158d5,
    ms: _0x47aa78
  } = _0x5d4a6b;
  const _0x467761 = await fetch("https://api.unsplash.com/photos/random?client_id=72utkjatCBC-PDcx7-Kcvgod7-QOFAm2fXwEeW8b8cc");
  const _0x365dc6 = await _0x467761.json();
  const _0x2379c0 = _0x365dc6.urls.regular;
  const _0x258619 = {
    url: _0x2379c0
  };
  const _0x4d78d9 = {
    image: _0x258619
  };
  _0x4d78d9.caption = "*POWERED BY REDMI-XMD*";
  const _0xed4676 = {
    quoted: _0x47aa78
  };
  return await _0x373333.sendMessage(_0x39514f, _0x4d78d9, _0xed4676);
});
function _0x482f() {
  const _0x32804f = ['rier:', 'dSXhP', 'maker', 'respo', 'chain', "to ge", "er th", 'hsTTE', 'tempm', "\n*Lin", 'later', 'death', 'essag', 'gnmNp', 'tion:', 'ppZog', 'BhYVo', 'yChsR', 'JqAoV', '029Va', "end t", 'TxUvz', "ou: \n", 'eJWae', 'coFDV', 'rtj2S', 'user', 'y=shi', 'LxQVN', 'trivi', "the n", 'Valid', " API.", "wer i", 'i.uns', 'xpWTl', 'ody', "ou to", 'thvHh', 'ikach', 'hwnKk', 'late', 'tle:*', "d by ", 'zNKCq', 'aznXP', "t pro", 'PfKPH', 'onren', 'i.000', '*POWE', "ain l", "> *PO", 'Mgrbx', 'tprCf', 'ChRzZ', 'ion', 'MegAS', 'JVVBY', 'GdfVl', "you w", 'tWndK', 'Rzcwx', "r num", "ng co", 'match', 'bard', "e fro", 'bubOA', 'LHrQu', 'nshop', '://ta', 'atCBC', 'LATIO', "RED B", "I ass", 'tion', 's/ran', 'reque', "d Mor", "he co", 'kDQrE', 'fmzNc', 'mors.', "ate a", 'OwMEj', 'CXmbT', "by FL", 'EEpeh', "ke. P", '?apik', 'xjjhp', 'inspi', 'verce', 'activ', 'xSvuQ', "u:* \n", "m *BA", 'QLYAb', 'macru', 'NcPNf', 'code=', 'ater.', 'YwKQH', 'Kjela', "TECH ", 'XZKOa', 'rrect', "y ema", 'r.onr', "nt to", 'opjOr', "fy yo", " *©Fr", '2fXwE', " fetc", '://im', 'Dfdav', 'UIJgk', 'nmCBI', 'jlmnL', 'USqIO', 'hbvui', 'hQZCj', 'phone', 'rtyAi', 'QmOSr', 'Fun', 'cmopl', 'cvNZb', 'apike', 'bMTUI', 'zeCGr', 'ccurr', 'actio', " will", 'mail!', 'xfJmT', "- *Ti", 'ijagi', 'NEWS', 'PAIRI', 'yAHzU', 'log', 'toStr', 'QmUeL', 'flash', '6528710PkSjtq', 'econd', "ry na", 'API.', 'Eqjft', 'alias', 'oiShE', 'nEsRS', 'kunkK', 'w.1se', 'retur', 'JfkoO', 'phNfd', 'VMTX&', 'hxEnj', 'IWFKD', 's...', 'JEZFP', 'm/gpt', 'icesl', 'RKuOw', " prom", 'gAQqC', 'VphJF', " the ", 'aGruh', 'LBudU', 'diaAt', 'POWER', '://ty', 'BFUPR', 'sqzxS', "ng th", 'QOFAm', 'state', 'xLWor', 'https', 'in=1s', "ED BY", "mber ", " ques", 'ls/na', 'init', "tion ", 'alcul', 'dipto', 'ine', 'lVAiF', " Numb", 'DNBjq', 'BtNQj', 'i.gur', 'ntry:', 'PeKfw', 'llama', 'ound.', 'WUoan', '11193ZOUkuj', 'hzviP', '?cont', 'LOiOu', "Une e", " retr", 'locat', '://ww', 'msg=', 'rivia', " requ", "or th", 'XKTdR', 'type', 'KabLS', 'xGKLw', " time", 'FLASH', '.com/', 'iyuhU', 'Erreu', 'GFvaF', " Toda", 'se:', 'Could', "s a t", 'join', "g the", '🗨️', 'eNuZo', "The p", 'nrend', 'nGheU', 'com', 'SuvQR', 'aCfkh', 'SpdHD', 'cNKbF', "I. St", 'this_', 'jMGRH', 'sVFIc', 'api.p', 'er.co', 'tqaMq', " APPL", 'w.noo', "for m", 'fetch', "d on ", "the G", 'ter.', "s: ", 'bard-', 'Z_$][', 'IWrkn', 'popul', 'zDkNR', 'ssage', 'LASH-', 'thsso', 'excep', "MINI ", 'nctio', "in *", 'time', 'DJenj', 'OaByo', 'birth', 'QSAnn', 'MPYKD', "ice f", "I dev", 'nvZRa', '/chan', 'Sorry', 's&log', 'YjOnK', 'IgWyq', 'orrec', 'zzmJq', 'rkers', "e ent", 'EfUdq', 'UnAkX', 'NZEtf', 'giuJu', 'tenin', 'fLIra', 'male', '?prom', 'tDElv', 'Franc', 'QbnyP', 'AVdeq', 'htHmg', 'Kdeke', 'vAyqv', "What ", 'FvjDP', 'rreur', 'EOhxV', 'cTyUZ', 'rrPHL', "ber *", 'id!', "No po", 'EqCkD', "ror p", 'ls/io', 'yItws', 'BYVLG', '://th', 'ng*', '://wi', 'There', 'GFqbl', 'LOKLJ', "ant t", "RD AI", 'slip', 'licat', "r let", 'ei.wo', "at:* ", 'numbe', '@whis', 'Dktog', 'ePNlO', 'Metad', 'TyYdG', 'et?bi', 'JANdY', 'amddL', "\nSubj", 'xring', 'cta_u', "se fr", 'XYqKd', 'ipto/', 'api/v', "a pro", 'pe.fi', 'uZAHM', 'est', 'QdNwK', 'LSYkr', "An er", 'TnEUF', 'RRqAF', 'aSCvz', "\" - ", 'fuuzR', 'NspTu', 'er.', 'emale', 'day?', 'AcImc', 'jokes', 'WOdlL', 'sendM', "de fo", 'Objec', 'RKhxU', "\n*Cou", 'cXYKm', 'vNjOs', 'estio', 'time_', 'qcsdY', "ta. P", 'ent', 'OaSYp', 'BRioQ', "ta fo", 'ihFif', '/tech', 'HBrqn', 'resul', 'tradu', 'Heade', 'zzXpX', 'lmods', 'tCsFg', 'Body', 'Robsf', 'UWyHt', 'oTHnn', "T API", 'WQtJC', 'USXhk', 'mQXyS', "sing ", '*Here', 'qOYrf', 'cnt', 'anUEr', " agai", 'kbbPp', "NG CO", 'ASH-M', 'GnPgA', " numb", " \"(/)", 'mPZOe', 'EJrYx', " a qu", "ce Ki", " offe", 'advic', 'ntzcy', 'lxnzX', 'FSgCu', 'pYNrq', "is\")(", " new ", 'kipWU', "e try", "\n\n\n> ", '```', "e. Pl", 'aRqaz', 'wallp', 'gain.', 'conso', '.ai/g', 'thptO', 'gif', "E NEW", 'wrong', 'RqAfH', "\n\n- *", 'Oeicl', 'QdoiQ', 'ai/ma', 'url', 'HANNE', 'calc', ". Ple", 'ber.', 'LSuaM', 'IXUcf', 'jjSvs', 'eFlow', "m lis", 'Irggx', 'joke', " by ©", "The c", 'yvqUf', 'DbJRA', "an er", 'dBOtw', 'mages', 'QuZoX', '2OIQSuh', "\n\nLin", 'image', 'find', '.brai', 'NEWS*', "sion ", 'funct', 'ujHze', 'LXcxk', 'tMVeM', 'vided', "s an ", 'IwUtS', 'cyugX', "e) {}", '263@n', 'http:', 'OhtYO', 'RsmcR', 'tKyfa', "\n\n*Po", 'de?nu', "W 🤍 C", 'ey=lt', 'title', "or yo", 'trace', '-MD.*', "n (fu", 'Kdiuy', 'roces', 'error', 'DqkYh', 'ljxBu', " news", "i API", 'tech/', " resp", 'kfpTS', 'butto', 'i.mah', 'swer', 'wPMih', 'eW8b8', "for t", 'ZiUJf', '{}.co', 'izoap', "e pro", 'Zyexq', 'mkReo', 'lidat', 'PnapL', 'Messa', 'News', 'FOLLO', '3odoyrc', 'RtAsV', '39244', 'data', '*(?:[', "\n\n> *", 'ZUOkI', ')+)+)', 'ip.co', 'BQvqb', 'email', 'GrFOo', 'PzSoM', 'SgPGI', 'occur', 'fqelU', 'kWYkA', 'LpSoX', "\n\nFro", 'copy_', 'zsfOr', 'ey=sh', 'jXPFS', "\n*Loc", 'lPOyl', 'szxnR', 'rghVn', "\n*FLA", 'HjCCY', 'onses', 'ender', "tech ", 'LXOOj', "ry ag", 'um=', "\n> Po", " from", 'byNnV', 'tKnnY', 'JrakU', 'qqEZu', 'pulat', 'yyMFn', 'BVzAW', " is: ", "ert m", 'pair', '../fr', 'dcVFb', 'PyYYa', 'ievin', '/bail', 'somet', 'incor', "ed by", 'IvCWo', 'getMe', 'uzHux', 'vZJEi', 'nse', 'i-ai', "\n _I'", 'apply', 'KJMco', 'und.', "Time ", 'vXxyn', 'King*', " emai", 'cJYyX', 'map', 'debu', " sess", " vali", 'ls.', "ate p", 'rhcEJ', 'SlDFL', 'GyeeW', 'bind', 'aZBfX', "\n*Int", "g.\n\n ", 'VWjnk', 'quest', 'NeSeS', 'web.i', "i AI.", 'oKHsx', 'VghSc', 'dalle', 'OyEcK', 'PjrHK', 'Faile', "\n- *F", 'tle', "Live ", 'CXhGN', 'gener', "his e", 'ataVe', 'NTBSM', 'etion', 'YEES!', 'eys', "nal d", 'Nptmv', "e ema", 'kraDK', 'fIqzI', "\n\nI w", '/enha', 'trim', 'BHUOr', " gett", 'BWsjd', " s'es", " try ", " noti", 'call', "ase t", 'dal', 'date', 'itMhc', 'bNtmF', 'PBdBz', 'CGLeN', 'ZspnO', 'KfIUW', 'NBCja', 'cNBdY', 'cFqLy', 'text', " was ", 'corre', 'pDzip', 'lVbyh', 'dFgGe', 'TTAVy', 'uwURk', 'ional', '-api.', 'QAtjV', 'warn', 'ROFnh', 'cesvM', " and ", 'XwNBq', " FLAS", "er Va", 'syVcS', "er in", 'nCVLz', 'opy', "ror f", '__pro', "YOUR ", "\n*Nat", 'StVJc', 'ilama', 'nIXCY', "e Url", 'LIFnH', 'AsEMW', "ed a ", 'crCBe', "ws da", "A:*\n\n", "Your ", 'JXkoR', 'EWWDe', 'iMcXh', "e 100", 'ernat', " gene", 'knZSL', 'oqXGo', 'subje', 'tempo', 'NKBvj', "ou wa", 'jQlAM', "e:* ", 'subti', 'count', 'ldVgF', 'pOMYP', " POPU", "id re", " am *", "e pop", 'AcuSm', "king ", "om GP", 'year', 'HXRsZ', "g to ", '.xyz/', 'lash-', 'Netwo', 'jumgK', 'Uiuda', 'JtZCF', 'eqmJZ', 'YippG', 'cmail', 'get', 'ZdUcD', 'EtSpy', "ia AP", 'SLXJg', 'MD*', 'yAUnA', 'teyqH', 'ction', 'today', 'expla', "ion:\n", '://op', 'UDetV', 'ewsle', 'sgicO', 'szYOO', 'ftkeN', 'ooQPZ', " This", 'ALcti', '2utkj', 'jamma', 'QAPqX', ":* ", 'wXaBo', 'e=mul', 'YbviW', 'nce!', 'quote', 'ation', 'laQfD', 'izo', 'kByfx', 'Inter', 'api/t', "rn th", "es. I", " if n", "get a", 'EkoeJ', 'cLWdO', 'fgmRf', 'nIMfa', 'zMArq', 'qwcns', 'EuIrJ', "e Zon", 'Power', 'gemin', 'itle:', " base", '1722SmFEdq', "ale P", 'truth', 'php?n', "-MD I", 'uWAEw', "rom t", 'lcBwk', 'DozQA', "ion t", '&doma', "n:* ", "ound ", 'fetBh', 'LRX1j', '7-Kcv', 'DE*', "eve a", 'fdxBk', 'PNAXT', 'one', 'duQVe', 'VxdeN', "\n- *B", 'Wekuk', 'spons', 'yORtn', 'dipe.', 'rmVYV', 'apple', 'Cieyp', 'azwia', 'YXeUz', "ini A", 'jWFix', 'ahXVO', "you r", "he pa", 'tdlKw', '1x1.t', 'espon', 'RBZWj', 'glZly', '*WORL', 'ice', '🗞️', '://le', 'hCoQi', 'e&log', '0-9a-', " you:", 'devic', "a pho", 'gHBeo', 'curre', 'iJXAc', 'emini', 'lfgNx', "H-MD ", 'exts/', "ks fo", 'dom?c', "for a", "name ", "r you", 'oBLDp', 'BUott', 'lient', 'sZxWl', 'ciiLv', "m *GE", '.pe/d', 'TvrOn', "u if ", 'kuYQC', 'uiGas', 'mDcCT', 'latio', 'HybBX', 'i.dii', "Here'", 'XZocG', 'Vwgdf', '...', '32381', '84Om9', 'vMmXi', 'aoMTm', 'timeZ', '_id=7', 'UQyAj', "S:*\n\n", 'mWiix', 'total', 'g0P', 'RrUKN', 'PpTWK', " a jo", "That ", 'QWpCk', "gain ", 'il:', 'sLtTY', 'bair.', 'JqxxA', 'clWJm', 'ClwCU', 'hp?am', 'you._', 'UmeWc', 'Xxquv', "s lik", "* is:", 'Jowjf', 'kbEgP', 'Gemin', 'mYsXX', "he tr", 'CIbSS', 'EJfkr', "How c", 'again', "e cre", " is a", 'KQjYd', 'UkIMi', 'TjxRs', 'searc', "e Typ", 'ifaEp', 'l.app', 'Hello', 'UMqyz', "hile ", 'jbixs', 'YjZIH', '1045DkAzGd', '(((.+', 'ihRzt', 'eMess', 'pirat', 'eList', "No li", 'pPBVg', 'VXzau', 'sort', '*FLAS', 'creat', 'ieZcE', "of th", 'BhFeG', "* Sta", 'usens', '://sa', "your ", 'KEsiE', "y FLA", '*Date', 'YwNoE', 'pt.', "...\n-", "ing G", " Popu", 'oZXwa', 'hTEhh', 'ptLFA', 'best', "use t", 'ddyVS', 'Mobil', 'eUDrs', "in th", 'ages.', 'huydg', 'age', 'uQHiX', "ntry ", 'irths', "ect: ", 'Tzegr', "in la", 'GcNIi', 'npsiU', 'dzeBK', 'numin', 'AZLfo', 'textB', 'cQGwM', 'nplAq', 'calcu', 'capti', "r is ", 'split', 'lease', 'strin', 'kWPDj', 'orie', '000+2', '*Powe', "ter x", 'mNVdb', "ne nu", 'relay', 'rando', "\n*Car", 'aSuoy', "can I", 'etchi', "ts:\n\n", "se tr", 'XIpGa', "o gen", " data", 'rvLtx', 'idkuZ', 'mpt=', 'tter', 'myPKB', " *Rea", "an I ", 'retri', 'MFguO', "e for", 'gnxJU', 'RqjLF', 'kWFIW', 'cat.x', "\n- *D", 'ratin', 'i?pro', 'com/i', "\n How", 'Ibejl', "vide ", 'VIkXl', 'OEtcp', 'ETeGX', 'Nativ', 'assis', 'd/api', "s. Pl", 'ULTS', 'Oops,', " enha", 'test', 'rect_', 'regul', "ded. ", 'QapZp', 'god7-', "ath c", 'pairi', 'mUMne', " triv", 'nomCo', 'dall', 'FPaUt', "e new", 'empor', 'nrXSB', 'naxHk', 'ssing', 'fgXHm', 'a-zA-', 'dare?', " NASA", 'key', 'dBKdS', '.dev/', 'nstru', 'Apple', 'compl', 'gify', "ion o", 'num', 'SbnzD', 'urpos', 'wered', 'essar', 'dpWAD', 'CCdAa', '-sess', "Y FLA", 'Foote', '1/?ac', 'ail', 'i.adv', "he im", 'aBVfT', 'news:', 'jhZGv', 'airin', 'OuTGZ', 'ct_an', 'LDbEg', 'OCVvm', "and \"", 'cLVRd', 'siwsm', 'QGkdS', "mpt f", 'uio.o', 'iptio', "ion h", 'YqzCu', 'HrsuH', 'oNZsY', "age y", 'MnOSA', "il. P", "eve t", 'tion=', 'kBqki', 'ChMAb', 'gezSN', 'zmBfK', 'pukxg', 'AkBgB', 'CIXjk', 'Juofi', 'aWeMS', 'Popul', 'ecmai', 'chatg', 'VcVeQ', 'inval', 'ring', 'BYRSu', 'SJsAQ', 'XwmMj', 'vQQtc', 'fWqkK', "m: ", "\n*Tim", "from ", 'opula', 'desc', 'cta_c', 'PikOY', 'kgWQV', 'gURVn', 'gOJwW', "re wa", 'CZXJF', 'nal_f', 'Gener', '01-sc', 'uJTZq', 'WMbNn', 'YrHPt', 'uid]&', 'best-', 'zZGmd', "\\+\\+ ", 'JcQus', 'User', 'RHUhi', 'readM', ":*\n\n\n", 'pt=', 'lve?q', 'gpt4', 'dKkyl', 'KISgj', '?quer', 'news/', "for y", 'line_', "rary ", 'natio', 'axios', 'zazfs', "> *Po", "hone ", 'KTzRR', 'kCids', ", the", 'NgIbv', 'fNZku', 'runnM', 'JwqUe', "ease ", 'ffpKl', 'zones', 'UpEJC', 'dare', " answ", 'XBUNn', 'ructo', 'proto', 'mber=', 'Hxmyy', "m the", "heck ", " an A", " Year", 'er-zu', 'lines', 'categ', 'tachm', 'ews', 'rzVqc', 'vkoms', 'statu', 'YwbkH', 'LzCDz', 'DvisB', 'ent=', 'nce?u', "w its", 'unshi', 'CScIk', 'i.onr', "ary p", 'vbkdw', 'WacpL', '*Enha', " not ", "e ins", 'EIyCq', 'OGUIF', 'rybLy', 'vzWPc', 'Inval', 'utVES', "y:* ", "ata f", "ion d", 'LoQGr', 'hasMe', 'TsZIH', "rror ", "red w", '90403OQNuoN', "nced ", 'Phone', "...\n\n", 'LOwYd', 'nXMTH', 'offc.', "e any", 'kuPxM', 'nerat', 'clzLE', 'ate', 'urcie', "📋 COP", '/ai/b', 'UlFkv', 'rappy', 'BohIx', 'LCKGJ', 'WCHEf', 'nmeQK', "\nNOTE", 'natur', "\"retu", 'HYSGk', "went ", 'CLVPR', '://sh', 'PuivG', 'AViVy', 'pRbeM', "ror o", 'KpMqH', 'RUTYV', " AI. ", "N DAT", 'Descr', ": Use", "es AI", "*A MO", 'ata', "ates ", 'ulati', 'uid=[', 'GTxST', 'priLm', 'MuOpe', 'oPMaD', '4623652QFhagc', "mail ", 'yz/jo', "er a ", 'autho', 'eItPg', " (tru", 'ridFF', 'enhan', " divi", '@1sec', 'prPrf', "e num", " inco", 'FWQRb', 'Landl', "he GP", 'hqOTu', 'umber', 'Error', 'IMSyf', 'tEDhl', 'clDAk', 'DyJAN', "n() ", 'jDmlV', 'Pleas', 'BwcjM', "NASA ", 'ultip', 'code', 'joke:', 'carri', 'i.pop', 'PFwoF', " NEWS", "You h", "o kno", 'ddBuD', "on da", 'UOXdK', 'sMzNL', 'nasan', "ring ", 'mail', " 10 s", 'valid', 'LSVGi', 'text=', 'link', 'p.com', 'eceiv', 'DWIDE', 'KnSlZ', "(*)\" ", '/quot', 'ions.', 'react', 'iUZqk', 'keyso', "rk re", '1&typ', 'McfLl', 'e-fla', 'kmnkZ', " Fran", 'WQRKN', 'TJpdL', "t ans", '©Fran', 'whlXy', 'MXVKo', 'ard?q', '&id=', 'eeded', 'ixCit', 'messa', 'NHaAS', 'qsVEG', ", I a", 'ount=', 'DlrGR', 'MdcKb', 'GRbqF', " late", "Y RES", 'sdJdB', "PT re", " toda", 'eZone', 'UxJCW', 'LTSQi', 'siDdp', 'Omsag', "e ask", 'ntgoo', 'ntox0', 'JMNaV', 'fYPOT', "y aga", 'KIyPR', 'entdb', 'ls/po', '-MD', " quot", 'zDNcd', "as en", 'name', 'ateco', "er to", "\n- *T", 'qwHpZ', "ing t", "\n- *M", 't/api', " can ", 'ntent', 'zA-Z_', 'alle?', 'dnJac', 'rsion', 'QKIuV', 'VpHHT', '//api', 'Nenbw', 'techn', 'BSYJg', '://ap', 'aySdm', '198WqDkqc', "n adv", 'DEgmG', 'UDPvY', 'gcrQM', 'inter', 'kVWuG', 'YlWmg', " your", "TING ", "ing r", 'table', 'VIexA', 'shloH', 'json', 'urls', 'DfGoE', 'news', 'code:', 'rans.', 'date.', "\\( *\\", 'Enter', 'qMqTx', 'lengt', "il co", '://fa', " by F", 'GYDZt', 'wVNae', 'gpt', "MENT ", 'com/d', 'XPknp', 'uery=', 'iring', 'in=', 'dVKAI', "y ©FL", " PICS", 'Fetch', " Plea", 'olRHg', "n lat", '479224JHdXvN', 'dkImK', 'AMjAc', 'hVbbO', '821&k', 'IKMXF', "*.\n\n ", "red b", 'rl=', 'from', "d to ", 'FzFIX', "AI*.\n", 'bTZkK', 'avSIP', 'SJpbn', " an e", 'om/co', 'JREkJ', " chec", 'm/adv', 'JYHvY', 'se.', "e was", 'rqjum', 'info', 'while', "mat f", 'lxIYT', 'rkEJb', "S GET", 'to__', 'ryXKK', 'BSuhA', 'bswyy', " of t", "e nec", 'cal', 'MhIlr', 'ok.', 'QJZLL', "ase c", 'KBOUv', 'porar', "ave r", 'wWkZz', '12036', "und:\n", "e a p", 'IbdWi', 'erate', 'ing', 'ElvQN', "atus ", "* \n\"", 'XmPls', 'femal', 'upjmz', 'vehBT', 'subst', '://wh', 'nUeSi', 'yTzBP', 'IzieP', 'der.c', 'pRkIG', '5190075DcTZGh', "otal ", "nks f", 'FAJkZ', 'ditio', '-PDcx', 'detai', 'WcjCT', "ance ", 'check', 'sh-md', 'NqyVR', 'FWODS', "n ins", "hing ", '/ai/g', 'Ctnzq', "ist y", 'ccTHa', 'FUbXl', "No ne", 'conte', 'UrQQl', 'eaths', 'NRcLI', 'enqug', 'zdBhM', 'rQVdL', '331416Hxipco', 'tiple', 'WERED', 'insul', 'awovv', 'tDpYc', 'floor', 'SH-MD', 'bs-ap', 'king', " code", 'd=181', 'temp', 'xmdnZ', " Form", 'OtGFv', "code ", 'YqCkH', 'bestw', 'SNyuQ', 'ztyzH', " BY F", 'input', 'elope', 'setIn', 'tjMjH', 'yLLqw', 'gger', 'nNaDS', 'IdbpZ', "\" for", 'jkDya', "t you", "try a", "st. P", 'EToff', "new e", "ion *", 'Tbb3p', 'XLAlM', 'mail.', 'Bgvwx', 'fJPyJ', "a pai", 'RgMQg', "me:* ", 'terva', 'homjs', 'FCFgY', '-new/', 'Date:', 'HtvSW', 'qDPYR', 'rnztV', 'AOowd', 'KOKlw', 'DFJut', 'NcRqq', "e Kin", 'UqPuu', 'wEJtb', 'ance/', 'JpwbW', 'WvpAd', 'atsap', 'ctor(', 'fkQCX', 'elFGO', 'duite', "onse ", "g cod", 'fCMkS', 'KxKdF', 'pUwhX', 'mirxp', 'gSwQz', 'iiVXA', "024.\n", 'BtAeI', " phon", 'rSWDi', "y inf", "e cou", " by *", 'proce', 'YCSAq', 'QsUpm', 'nlngf', 'misc/', 'EwHOh', 'EHuAe', 'VvzAs', "\n\nYou", 'sLWQK', 'rwtjI', 'ckets', 'fjYIG', '$]*)', 'nFCMf', "ill s", "me is", 'nel/0', "No ad", 'JptHo', "help ", 'gYPQR', 'pnHFA', 'NDOCR', "g tem", 'vante', 'vfkki', 'answe', 'H-MD*', 'LWncv', 'QkFNZ', 'time?', 'LSpeJ', 'VigSw', "ivia ", 'photo', 'ormat', 'MfSTF', 'ZdVCK', 'IjiKP', 'zRqJv', 'FRohq', 'yKZyh', 'l.com', 'const', "e Gem", 'oIyiA', 'plash', " & Ti"];
  _0x482f = function () {
    return _0x32804f;
  };
  return _0x482f();
}
const _0x5b7032 = {
  nomCom: "random",
  reaction: '🥂',
  categorie: "REDMI-XMD PICS"
};
king(_0x5b7032, async (_0x597716, _0x5f5b6a, _0x457bf8) => {
  const {
    repondre: _0x1e2a5b,
    arg: _0x221c97,
    ms: _0x5b23cc
  } = _0x457bf8;
  const _0x5d2c8c = await fetch("https://api.unsplash.com/photos/random?client_id=72utkjatCBC-PDcx7-Kcvgod7-QOFAm2fXwEeW8b8cc");
  const _0x2d798a = await _0x5d2c8c.json();
  const _0x5769a1 = _0x2d798a.urls.regular;
  const _0x4a7d07 = {
    url: _0x5769a1
  };
  const _0x3739af = {
    image: _0x4a7d07,
    caption: "*POWERED BY REDMI-XMD*"
  };
  const _0x4a32ca = {
    quoted: _0x5b23cc
  };
  return await _0x5f5b6a.sendMessage(_0x597716, _0x3739af, _0x4a32ca);
});
const _0x24c70a = {
  nomCom: "nature",
  reaction: '🦗',
  categorie: "REDMI-XMD PICS"
};
king(_0x24c70a, async (_0x31ec6c, _0x457865, _0x5483f2) => {
  const {
    repondre: _0x56a80b,
    arg: _0xef2348,
    ms: _0x59700c
  } = _0x5483f2;
  const _0x356e25 = await fetch("https://api.unsplash.com/photos/random?client_id=72utkjatCBC-PDcx7-Kcvgod7-QOFAm2fXwEeW8b8cc");
  const _0x5762df = await _0x356e25.json();
  const _0x599679 = _0x5762df.urls.regular;
  const _0x2faa13 = {
    url: _0x599679
  };
  const _0x1cd5ba = {
    image: _0x2faa13,
    caption: "*POWERED BY REDMI-XMD*"
  };
  const _0x11d5c3 = {
    quoted: _0x59700c
  };
  return await _0x457865.sendMessage(_0x31ec6c, _0x1cd5ba, _0x11d5c3);
});
const _0x3231e9 = {
  nomCom: "time",
  reaction: '⌚',
  categorie: "General"
};
king(_0x3231e9, async (_0xf14b1c, _0xdf99cb, _0x97f634) => {
  const {
    repondre: _0x3a1c57,
    arg: _0xbe168e,
    ms: _0x1aabb4
  } = _0x97f634;
  try {
    if (!_0xbe168e || _0xbe168e.length === 0) {
      return _0x3a1c57("Enter the name of the country you want to know its time and date");
    }
    const _0x3e8992 = _0xbe168e.join(" ");
    const _0x4bc82e = await fetch("https://levanter.onrender.com/time?code=" + _0x3e8992);
    const _0x5c5fda = await _0x4bc82e.json();
    const _0x4c69b6 = _0x5c5fda.result[0].name;
    const _0x52ce22 = _0x5c5fda.result[0].time;
    const _0x96dd42 = _0x5c5fda.result[0].timeZone;
    await _0x3a1c57("Live Time in *" + _0x4c69b6 + "* Stats:\n\n*Date & Time:* " + _0x52ce22 + "\n*TimeZone:* " + _0x96dd42 + "\n\n> *POWERED BY REDMI-XMD*");
  } catch (_0xb6618a) {
    _0x3a1c57("That country name is incorrect!");
  }
});
function _0x1f7b24(_0x28e9de, _0x17683a, _0x1ae3b2, _0x24eb61, _0x15dea3) {
  return _0x5015(_0x28e9de - 0x2f2, _0x1ae3b2);
}
const _0x2b49db = {
  nomCom: "lines",
  reaction: '🫵',
  categorie: "Fun"
};
king(_0x2b49db, async (_0x34fa10, _0x24fdcf, _0x771a44) => {
  const {
    repondre: _0x24f29b,
    arg: _0x2979ba,
    ms: _0xb40ef7
  } = _0x771a44;
  const _0xfc8b0e = await fetch("https://api.maher-zubair.tech/misc/lines");
  const _0x2312a9 = await _0xfc8b0e.json();
  await _0x24f29b(_0x2312a9.result);
  console.log(_0x2312a9.completion);
});
const _0x1a8e1c = {
  nomCom: "insult",
  reaction: '💀',
  categorie: "Fun"
};
king(_0x1a8e1c, async (_0x10015b, _0x319580, _0x62056f) => {
  const {
    repondre: _0x2e56a1,
    arg: _0x5d71c1,
    ms: _0x2dafaa
  } = _0x62056f;
  const _0x4c0174 = await fetch("https://api.maher-zubair.tech/misc/insult");
  const _0x1169b4 = await _0x4c0174.json();
  await _0x2e56a1(_0x1169b4.result);
  console.log(_0x1169b4.completion);
});
const _0x823deb = {
  nomCom: "enhance",
  reaction: '💥',
  categorie: "User"
};
king(_0x823deb, async (_0x4fbfaf, _0x3d8560, _0x3fefaf) => {
  const {
    repondre: _0x1320c9,
    arg: _0x2158f4,
    ms: _0x2f484e
  } = _0x3fefaf;
  try {
    if (!_0x2158f4 || _0x2158f4.length === 0) {
      return _0x1320c9("Please enter the Url of the image you want to enhance!");
    }
    const _0x587910 = _0x2158f4.join(" ");
    const _0x4629e7 = "https://api.maher-zubair.tech/maker/enhance?url=" + _0x587910;
    const _0x4f1a1a = {
      url: _0x4629e7
    };
    const _0x1bcc8a = {
      image: _0x4f1a1a,
      caption: "*Enhanced by REDMI-XMD*"
    };
    const _0x34bb4b = {
      quoted: _0x2f484e
    };
    _0x3d8560.sendMessage(_0x4fbfaf, _0x1bcc8a, _0x34bb4b);
  } catch (_0x57c0a0) {
    console.error("Erreur:", _0x57c0a0.message || "Une erreur s'est produite");
    _0x1320c9("Oops, an error occurred while processing your request");
  }
});
const _0x32f8a7 = {};
function _0x5015(_0x4d1ad5, _0x400434) {
  const _0x5e1229 = _0x482f();
  _0x5015 = function (_0x233729, _0x2fd35c) {
    _0x233729 = _0x233729 - 352;
    let _0x5ed613 = _0x5e1229[_0x233729];
    return _0x5ed613;
  };
  return _0x5015(_0x4d1ad5, _0x400434);
}
_0x32f8a7.nomCom = "dare";
_0x32f8a7.reaction = '😁';
function _0x20a06f(_0x5dd717, _0x32f840, _0x30763b, _0x4c2b9f, _0x47ed68) {
  return _0x5015(_0x4c2b9f + 0x16b, _0x47ed68);
}
_0x32f8a7.categorie = "Fun";
king(_0x32f8a7, async (_0x3b5173, _0x58f876, _0x2d3cb3) => {
  const {
    repondre: _0x490358,
    arg: _0x31214c,
    ms: _0x256d47
  } = _0x2d3cb3;
  const _0x214019 = await fetch("https://shizoapi.onrender.com/api/texts/dare?apikey=shizo");
  const _0x5c9c4d = await _0x214019.json();
  await _0x490358(_0x5c9c4d.result);
  console.log(_0x5c9c4d.completion);
});
const _0x2dd295 = {
  nomCom: "truth",
  reaction: '🤩',
  categorie: "Fun"
};
king(_0x2dd295, async (_0x4460b5, _0x1bbbc7, _0x50d468) => {
  const {
    repondre: _0x94269b,
    arg: _0x1b7a2a,
    ms: _0x3b9d9b
  } = _0x50d468;
  const _0x3eb91b = await fetch("https://shizoapi.onrender.com/api/texts/truth?apikey=shizo");
  const _0x4849c1 = await _0x3eb91b.json();
  await _0x94269b(_0x4849c1.result);
  console.log(_0x4849c1.completion);
});
const _0x2d33e4 = {};
function _0x1a4d2c(_0x469569, _0x512341, _0x1f29b2, _0x3611da, _0x568285) {
  return _0x5015(_0x469569 - 0x2ff, _0x3611da);
}
_0x2d33e4.nomCom = "applenews";
_0x2d33e4.reaction = "🗞️";
_0x2d33e4.categorie = "NEWS";
king(_0x2d33e4, async (_0x2c6593, _0x2afb23, _0x58c89f) => {
  const {
    repondre: _0x9a30ca,
    arg: _0x5b680a,
    ms: _0x41cd0b
  } = _0x58c89f;
  try {
    const _0x1fb80f = await fetch("https://api.maher-zubair.tech/details/ios");
    const _0x2a0987 = await _0x1fb80f.json();
    if (_0x2a0987 && _0x2a0987.status === 200 && _0x2a0987.result) {
      const _0x3e0715 = _0x2a0987.result;
      const _0x39093a = "\n*REDMI-XMD APPLE NEWS:*\n\n\n- *Title:* " + _0x3e0715.title + "\n\n- *Description:* " + _0x3e0715.desc.split("\n")[0] + "...\n- *Read More:* " + _0x3e0715.link + "\n\n\n> Powered by *©France King*";
      const _0x5532ae = _0x3e0715.images.find(_0x493f26 => _0x493f26 && _0x493f26 !== "https://images.macrumors.com/images-new/1x1.trans.gif");
      if (_0x5532ae) {
        const _0x35f1a2 = {
          url: _0x5532ae
        };
        const _0x40ba50 = {
          quoted: _0x41cd0b
        };
        await _0x2afb23.sendMessage(_0x2c6593, {
          'image': _0x35f1a2,
          'caption': _0x39093a.trim()
        }, _0x40ba50);
      } else {
        const _0x364cfe = {
          quoted: _0x41cd0b
        };
        await _0x2afb23.sendMessage(_0x2c6593, {
          'text': _0x39093a.trim()
        }, _0x364cfe);
      }
    } else {
      await _0x9a30ca("No news data found.");
    }
  } catch (_0x89d729) {
    console.error("Error fetching Apple news:", _0x89d729);
    await _0x9a30ca("There was an error fetching the news. Please try again later.");
  }
});
const _0x5b86df = {};
function _0x8516bc(_0x25701f, _0x47d03d, _0x588e2c, _0x511264, _0x404b59) {
  return _0x5015(_0x25701f - 0xa5, _0x47d03d);
}
_0x5b86df.nomCom = "nasanews";
_0x5b86df.reaction = "🗞️";
_0x5b86df.categorie = "NEWS";
king(_0x5b86df, async (_0x2c95ad, _0x2ec6fc, _0x4cdac2) => {
  const {
    repondre: _0x263da0,
    arg: _0xdd0d1c,
    ms: _0x5b8df9
  } = _0x4cdac2;
  try {
    const _0x2b2b36 = await fetch("https://api.maher-zubair.tech/details/nasa");
    const _0x981570 = await _0x2b2b36.json();
    if (_0x981570 && _0x981570.status === 200 && _0x981570.result) {
      const _0x213e46 = _0x981570.result;
      const _0x5904bc = "\n*REDMI-XMD NASA NEWS:*\n\n\n- *Title:* " + _0x213e46.title + "\n\n- *Date:* " + _0x213e46.date + "\n\n- *Description:* " + _0x213e46.explanation.split("\n")[0] + "...\n\n\n> Powered by *©Ⴊl𐌀Ꮳk 𐌕𐌀ႲႲჄ*";
      const _0x3e3ac6 = _0x213e46.url;
      if (_0x3e3ac6) {
        const _0x21d8ae = {
          url: _0x3e3ac6
        };
        const _0x2f2ec8 = {
          quoted: _0x5b8df9
        };
        await _0x2ec6fc.sendMessage(_0x2c95ad, {
          'image': _0x21d8ae,
          'caption': _0x5904bc.trim()
        }, _0x2f2ec8);
      } else {
        const _0x44b1ed = {
          quoted: _0x5b8df9
        };
        await _0x2ec6fc.sendMessage(_0x2c95ad, {
          'text': _0x5904bc.trim()
        }, _0x44b1ed);
      }
    } else {
      await _0x263da0("No news data found.");
    }
  } catch (_0xd3d72e) {
    console.error("Error fetching NASA news:", _0xd3d72e);
    await _0x263da0("There was an error fetching the news. Please try again later.");
  }
});
const _0x31f959 = {
  nomCom: "population",
  reaction: "🗞️",
  categorie: "NEWS"
};
king(_0x31f959, async (_0x3aa22d, _0x264fd1, _0x5a427c) => {
  const {
    repondre: _0x2173a9,
    arg: _0x590810,
    ms: _0x5d0d87
  } = _0x5a427c;
  try {
    const _0x27a939 = await fetch("https://api.maher-zubair.tech/details/population");
    const _0x3af4b6 = await _0x27a939.json();
    if (_0x3af4b6 && _0x3af4b6.status === 200 && _0x3af4b6.result) {
      const _0x2f7469 = _0x3af4b6.result;
      const _0x5567a5 = "*WORLDWIDE POPULATION DATA:*\n\n\n- *Total Population:* " + _0x2f7469.current.total + "\n- *Male Population:* " + _0x2f7469.current.male + "\n- *Female Population:* " + _0x2f7469.current.female + "\n- *Births This Year:* " + _0x2f7469.this_year.births + "\n- *Deaths This Year:* " + _0x2f7469.this_year.deaths + "\n- *Births Today:* " + _0x2f7469.today.births + "\n- *Deaths Today:* " + _0x2f7469.today.deaths + "\n\n\n> *Powered by ©REDMI-XMD*";
      await _0x2173a9(_0x5567a5);
    } else {
      await _0x2173a9("No population data found.");
    }
  } catch (_0x556611) {
    console.error("Error fetching population data:", _0x556611);
    await _0x2173a9("There was an error fetching the population data. Please try again later.");
  }
});
const _0x43126e = {
  nomCom: "jokes",
  reaction: '🤩',
  categorie: "Fun"
};
king(_0x43126e, async (_0x2b2e8f, _0x597b97, _0x4557c7) => {
  const {
    repondre: _0x3a5372,
    arg: _0x15df66,
    ms: _0xe8b99f
  } = _0x4557c7;
  try {
    const _0x35e7b5 = await fetch("https://api.popcat.xyz/joke");
    if (!_0x35e7b5.ok) {
      throw new Error("Network response was not ok.");
    }
    const _0x3d5d34 = await _0x35e7b5.json();
    await _0x3a5372(_0x3d5d34.joke);
    console.log(_0x3d5d34.joke);
  } catch (_0x456362) {
    console.error("Error fetching joke:", _0x456362.message);
    await _0x3a5372("Failed to fetch a joke. Please try again later.");
  }
});
const _0x2a8175 = {
  nomCom: "advice",
  reaction: "🗨️",
  categorie: "Fun"
};
king(_0x2a8175, async (_0x21f1a2, _0x240f41, _0x3c3e8e) => {
  const {
    repondre: _0x5c9117,
    arg: _0x1357d,
    ms: _0x29bc1c
  } = _0x3c3e8e;
  try {
    const _0x197f07 = await fetch("https://api.adviceslip.com/advice");
    const _0x29704e = await _0x197f07.json();
    const _0x389844 = _0x29704e.slip.advice;
    await _0x5c9117("*Here is an advice for you:* \n" + _0x389844);
  } catch (_0x17209f) {
    console.error("Error:", _0x17209f.message || "An error occurred");
    _0x5c9117("Oops, an error occurred while processing your request");
  }
});
const _0xf11f24 = {
  nomCom: "trivia",
  reaction: '🤔',
  categorie: "Fun"
};
king(_0xf11f24, async (_0x1c0f46, _0x4180f9, _0x582230) => {
  const {
    repondre: _0x24ca5d,
    prefixe: _0x24bae3,
    ms: _0x2065ec
  } = _0x582230;
  try {
    const _0xc8aa5e = await fetch("https://opentdb.com/api.php?amount=1&type=multiple");
    if (_0xc8aa5e.status !== 200) {
      return _0x24ca5d("Invalid response from the trivia API. Status code: " + _0xc8aa5e.status);
    }
    const _0x142c38 = await _0xc8aa5e.json();
    if (_0x142c38 && _0x142c38.results && _0x142c38.results[0]) {
      const _0x3f21ac = _0x142c38.results[0];
      const _0x525ee3 = _0x3f21ac.question;
      const _0x446baf = _0x3f21ac.correct_answer;
      const _0x3644fc = [..._0x3f21ac.incorrect_answers, _0x446baf].sort();
      const _0x7ac298 = _0x3644fc.map((_0x518749, _0x348a99) => _0x348a99 + 1 + ". " + _0x518749).join("\n");
      const _0x5e5296 = {
        text: "Here's a trivia question for you: \n\n" + _0x525ee3 + "\n\n" + _0x7ac298 + "\n\nI will send the correct answer in 10 seconds..."
      };
      const _0x17f4ee = {
        quoted: _0x2065ec
      };
      await _0x4180f9.sendMessage(_0x1c0f46, _0x5e5296, _0x17f4ee);
      setTimeout(async () => {
        const _0x5bedd9 = {
          text: "The correct answer is: " + _0x446baf
        };
        const _0x487228 = {
          quoted: _0x2065ec
        };
        await _0x4180f9.sendMessage(_0x1c0f46, _0x5bedd9, _0x487228);
      }, 10000);
    } else {
      throw new Error("Invalid response format from the trivia API.");
    }
  } catch (_0x165fde) {
    console.error("Error getting trivia:", _0x165fde.message);
    const _0x3e1fa8 = {
      text: "Error getting trivia. Please try again later."
    };
    const _0x258dad = {
      quoted: _0x2065ec
    };
    await _0x4180f9.sendMessage(_0x1c0f46, _0x3e1fa8, _0x258dad);
  }
});
const _0x526816 = {
  nomCom: "inspire",
  reaction: '✨',
  categorie: "General"
};
king(_0x526816, async (_0x4558ec, _0x36a16c, _0x30495a) => {
  const {
    repondre: _0x2d2ec3,
    arg: _0x529194,
    ms: _0x2ed9ff
  } = _0x30495a;
  try {
    const _0x174266 = await fetch("https://type.fit/api/quotes");
    const _0x15256b = await _0x174266.json();
    const _0x437649 = Math.floor(Math.random() * _0x15256b.length);
    const _0x47df61 = _0x15256b[_0x437649];
    await _0x2d2ec3("*Here is an inspirational quote for you:* \n\"" + _0x47df61.text + "\" - " + _0x47df61.author);
  } catch (_0x1085bc) {
    console.error("Error:", _0x1085bc.message || "An error occurred");
    _0x2d2ec3("Oops, an error occurred while processing your request");
  }
});
const _0x497547 = {
  nomCom: "gpt4",
  reaction: '📡',
  categorie: 'AI'
};
king(_0x497547, async (_0x228283, _0x4c067f, _0xf982a5) => {
  const {
    repondre: _0x4703e3,
    arg: _0x147453,
    ms: _0x717f6a
  } = _0xf982a5;
  try {
    if (!_0x147453 || _0x147453.length === 0) {
      return _0x4703e3("Please ask a question.");
    }
    const _0x4c024b = encodeURIComponent(_0x147453.join(" "));
    const _0x2b599f = "https://samirxpikachuio.onrender.com/gpt?content=" + _0x4c024b;
    const _0x2779d9 = await axios.get(_0x2b599f);
    const _0xccae7c = _0x2779d9.data;
    if (_0xccae7c && _0xccae7c.message && _0xccae7c.message.content) {
      const _0x7576b1 = _0xccae7c.message.content;
      const _0x2d9950 = _0x7576b1.match(/```([\s\S]*?)```/);
      const _0x1a87a7 = [{
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "FOLLOW 🤍 CHANNEL",
          'url': "https://whatsapp.com/channel/0029VaTbb3p84Om9LRX1jg0P"
        })
      }];
      if (_0x2d9950) {
        const _0x4478a6 = _0x2d9950[1];
        _0x1a87a7.unshift({
          'name': "cta_copy",
          'buttonParamsJson': JSON.stringify({
            'display_text': "📋 COPY RESULTS",
            'id': "copy_code",
            'copy_code': _0x4478a6
          })
        });
      }
      const _0x4068b8 = {
        deviceListMetadata: {},
        deviceListMetadataVersion: 0x2
      };
      const _0xfb44c5 = {
        text: _0x7576b1
      };
      const _0x254b9b = {
        title: '',
        subtitle: '',
        hasMediaAttachment: false
      };
      const _0x3446ed = {
        buttons: _0x1a87a7
      };
      const _0x4ae95e = generateWAMessageFromContent(_0x228283, {
        'viewOnceMessage': {
          'message': {
            'messageContextInfo': _0x4068b8,
            'interactiveMessage': proto.Message.InteractiveMessage.create({
              'body': proto.Message.InteractiveMessage.Body.create(_0xfb44c5),
              'footer': proto.Message.InteractiveMessage.Footer.create({
                'text': "> *POWERED BY REDMI-XMD*"
              }),
              'header': proto.Message.InteractiveMessage.Header.create(_0x254b9b),
              'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create(_0x3446ed),
              'contextInfo': {
                'forwardingScore': 0x5,
                'isForwarded': true,
                'forwardedNewsletterMessageInfo': {
                  'newsletterJid': "120363238139244263@newsletter",
                  'newsletterName': "REDMI-XMD",
                  'serverMessageId': 0x8f
                }
              }
            })
          }
        }
      }, {});
      await _0x4c067f.relayMessage(_0x228283, _0x4ae95e.message, {
        'messageId': _0x4ae95e.key.id
      });
    } else {
      throw new Error("Invalid response format from the GPT API.");
    }
  } catch (_0x1f2c08) {
    console.error("Error getting GPT response:", _0x1f2c08.message, _0x1f2c08.response?.["data"] || "No additional data");
    _0x4703e3("Error getting response from GPT.");
  }
});
const _0x33ebdc = {
  nomCom: "bard",
  aliases: ["bard-ai"],
  reaction: '🤖'
};
function _0x297c9d(_0x344a8, _0x11cab2, _0x30f5a8, _0x9c6b2a, _0x4b6eac) {
  return _0x5015(_0x4b6eac - 0x302, _0x9c6b2a);
}
_0x33ebdc.categorie = 'AI';
king(_0x33ebdc, async (_0x2c3e61, _0x5682b9, _0x533c5c) => {
  const {
    repondre: _0x24a13a,
    arg: _0x2d9e68,
    ms: _0x43c61a
  } = _0x533c5c;
  try {
    if (!_0x2d9e68 || _0x2d9e68.length === 0) {
      return _0x24a13a("Hello, I am *BARD AI*.\n\n How can I assist you today?");
    }
    const _0x16ef00 = _0x2d9e68.join(" ");
    const _0x381e07 = await fetch("https://api.diioffc.web.id/api/ai/bard?query=" + encodeURIComponent(_0x16ef00));
    const _0x15ef1d = await _0x381e07.json();
    if (_0x15ef1d.status && _0x15ef1d.result && _0x15ef1d.result.message) {
      const _0x37eb98 = _0x15ef1d.result.message;
      const _0x20ab9f = {
        deviceListMetadata: {},
        deviceListMetadataVersion: 0x2
      };
      const _0x4bce66 = {
        text: _0x37eb98
      };
      const _0x471331 = {
        title: '',
        subtitle: '',
        hasMediaAttachment: false
      };
      const _0x183ae5 = {
        buttons: []
      };
      const _0x4808c5 = generateWAMessageFromContent(_0x2c3e61, {
        'viewOnceMessage': {
          'message': {
            'messageContextInfo': _0x20ab9f,
            'interactiveMessage': proto.Message.InteractiveMessage.create({
              'body': proto.Message.InteractiveMessage.Body.create(_0x4bce66),
              'footer': proto.Message.InteractiveMessage.Footer.create({
                'text': "> *POWERED BY REDMI-XMD*"
              }),
              'header': proto.Message.InteractiveMessage.Header.create(_0x471331),
              'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create(_0x183ae5),
              'contextInfo': {
                'forwardingScore': 0x5,
                'isForwarded': true,
                'forwardedNewsletterMessageInfo': {
                  'newsletterJid': "120363238139244263@newsletter",
                  'newsletterName': "REDMI-XMD",
                  'serverMessageId': 0x8f,
                  'sourceUrl': "https://whatsapp.com/channel/0029VaTbb3p84Om9LRX1jg0P"
                }
              }
            })
          }
        }
      }, {});
      await _0x5682b9.relayMessage(_0x2c3e61, _0x4808c5.message, {
        'messageId': _0x4808c5.key.id
      });
    } else {
      throw new Error("Invalid response from the API.");
    }
  } catch (_0x31cbe5) {
    console.error("Error getting response:", _0x31cbe5.message);
    _0x24a13a("Error getting response.");
  }
});
function _0x5e1229(_0x256325) {
  function _0x11c2b6(_0x164fbe) {
    if (typeof _0x164fbe === "string") {
      return function (_0x29b068) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0x164fbe / _0x164fbe).length !== 1 || _0x164fbe % 20 === 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x11c2b6(++_0x164fbe);
  }
  try {
    if (_0x256325) {
      return _0x11c2b6;
    } else {
      _0x11c2b6(0);
    }
  } catch (_0x1db0b5) {}
}