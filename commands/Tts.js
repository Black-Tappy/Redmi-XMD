const googleTTS = require("google-tts-api");
const {
  king
} = require("../france/king");
king({
  'nomCom': "dit",
  'categorie': 'tts',
  'reaction': '👄'
}, async (_0x161ce6, _0x11cff8, _0x4301ae) => {
  const {
    ms: _0x4f0be3,
    arg: _0x42b379,
    repondre: _0x54d71d
  } = _0x4301ae;
  if (!_0x42b379[0x0]) {
    _0x54d71d("Insert a word");
    return;
  }
  ;
  const _0x15849b = _0x42b379.join(" ");
  const _0xc36f02 = googleTTS.getAudioUrl(_0x15849b, {
    'lang': 'fr',
    'slow': false,
    'host': "https://translate.google.com"
  });
  console.log(_0xc36f02);
  _0x11cff8.sendMessage(_0x161ce6, {
    'audio': {
      'url': _0xc36f02
    },
    'mimetype': "audio/mp4"
  }, {
    'quoted': _0x4f0be3,
    'ptt': true
  });
});
king({
  'nomCom': "itta",
  'categorie': "tts",
  'reaction': '👄'
}, async (_0xa83b78, _0x1ae575, _0xfd5455) => {
  const {
    ms: _0x1ac9ba,
    arg: _0x5a329b,
    repondre: _0x19e932
  } = _0xfd5455;
  if (!_0x5a329b[0x0]) {
    _0x19e932("Insert a word");
    return;
  }
  ;
  const _0x2e5a28 = _0x5a329b.join(" ");
  const _0x1dd6e5 = googleTTS.getAudioUrl(_0x2e5a28, {
    'lang': 'ja',
    'slow': false,
    'host': "https://translate.google.com"
  });
  console.log(_0x1dd6e5);
  _0x1ae575.sendMessage(_0xa83b78, {
    'audio': {
      'url': _0x1dd6e5
    },
    'mimetype': "audio/mp4"
  }, {
    'quoted': _0x1ac9ba,
    'ptt': true
  });
});
king({
  'nomCom': "say",
  'categorie': "tts",
  'reaction': '👄'
}, async (_0x376f50, _0x5b520f, _0x3c411f) => {
  const {
    ms: _0x1909f6,
    arg: _0x3844e7,
    repondre: _0x352792
  } = _0x3c411f;
  if (!_0x3844e7[0x0]) {
    _0x352792("Insert a word");
    return;
  }
  ;
  const _0x219ccd = _0x3844e7.join(" ");
  const _0x26ec5a = googleTTS.getAudioUrl(_0x219ccd, {
    'lang': 'en',
    'slow': false,
    'host': 'https://translate.google.com'
  });
  console.log(_0x26ec5a);
  _0x5b520f.sendMessage(_0x376f50, {
    'audio': {
      'url': _0x26ec5a
    },
    'mimetype': "audio/mp4"
  }, {
    'quoted': _0x1909f6,
    'ptt': true
  });
});