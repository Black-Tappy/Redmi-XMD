const {
  king
} = require("../france/king");
const fs = require('fs');
const {
  exec
} = require("child_process");
const filename = '' + Math.random().toString(0x24);
king({
  'nomCom': 'deep',
  'categorie': 'Audio-Edit'
}, async (_0x37fdde, _0x1850c1, _0x2cef77) => {
  const {
    ms: _0x51c690,
    repondre: _0x1fe355,
    msgRepondu: _0x36b095
  } = _0x2cef77;
  if (_0x36b095) {
    if (_0x36b095.audioMessage) {
      const _0x12b8ba = await _0x1850c1.downloadAndSaveMediaMessage(_0x36b095.audioMessage);
      let _0x58efdb = filename + ".mp3";
      try {
        exec("ffmpeg -i " + _0x12b8ba + " " + "-af atempo=4/4,asetrate=44500*2/3" + " " + _0x58efdb, (_0x30b6fe, _0x5b421b, _0x53af7d) => {
          fs.unlinkSync(_0x12b8ba);
          if (_0x30b6fe) {
            return _0x1fe355("error during the procedure " + _0x30b6fe);
          }
          let _0x19ea76 = fs.readFileSync(_0x58efdb);
          _0x1850c1.sendMessage(_0x37fdde, {
            'audio': _0x19ea76,
            'mimetype': "audio/mpeg"
          }, {
            'quoted': _0x51c690
          });
          fs.unlinkSync(_0x58efdb);
        });
      } catch (_0x4e14e9) {
        _0x1fe355("error");
      }
    } else {
      _0x1fe355("the command only works with audio messages");
    }
  } else {
    _0x1fe355("Please mention an audio");
  }
});
king({
  'nomCom': 'bass',
  'categorie': "Audio-Edit"
}, async (_0x45fb0f, _0x188b46, _0x52112f) => {
  const {
    ms: _0x5620d8,
    repondre: _0x5562c1,
    msgRepondu: _0x31ab79
  } = _0x52112f;
  if (_0x31ab79) {
    if (_0x31ab79.audioMessage) {
      const _0x2145a3 = await _0x188b46.downloadAndSaveMediaMessage(_0x31ab79.audioMessage);
      let _0x24740e = filename + ".mp3";
      try {
        exec("ffmpeg -i " + _0x2145a3 + " " + "-af equalizer=f=18:width_type=o:width=2:g=14" + " " + _0x24740e, (_0x15793a, _0x10b7d8, _0x398413) => {
          fs.unlinkSync(_0x2145a3);
          if (_0x15793a) {
            return _0x5562c1("error during the procedure " + _0x15793a);
          }
          let _0x5d5a25 = fs.readFileSync(_0x24740e);
          _0x188b46.sendMessage(_0x45fb0f, {
            'audio': _0x5d5a25,
            'mimetype': "audio/mpeg"
          }, {
            'quoted': _0x5620d8
          });
          fs.unlinkSync(_0x24740e);
        });
      } catch (_0xac6017) {
        _0x5562c1("error");
      }
    } else {
      _0x5562c1("the command only works with audio messages");
    }
  } else {
    _0x5562c1("Please mention an audio");
  }
});
king({
  'nomCom': "reverse",
  'categorie': "Audio-Edit"
}, async (_0x2c60d0, _0x18ed66, _0x21fc9c) => {
  const {
    ms: _0x2d8107,
    repondre: _0x2c71bc,
    msgRepondu: _0x4bb292
  } = _0x21fc9c;
  if (_0x4bb292) {
    if (_0x4bb292.audioMessage) {
      const _0x5a22ec = await _0x18ed66.downloadAndSaveMediaMessage(_0x4bb292.audioMessage);
      let _0x504761 = filename + ".mp3";
      try {
        exec("ffmpeg -i " + _0x5a22ec + " " + "-filter_complex \"areverse\"" + " " + _0x504761, (_0x12fc10, _0x3bf8e8, _0x42d8c4) => {
          fs.unlinkSync(_0x5a22ec);
          if (_0x12fc10) {
            return _0x2c71bc("error during the procedure" + _0x12fc10);
          }
          let _0x5e70ff = fs.readFileSync(_0x504761);
          _0x18ed66.sendMessage(_0x2c60d0, {
            'audio': _0x5e70ff,
            'mimetype': "audio/mpeg"
          }, {
            'quoted': _0x2d8107
          });
          fs.unlinkSync(_0x504761);
        });
      } catch (_0x1496f3) {
        _0x2c71bc("Error : " + _0x1496f3);
      }
    } else {
      _0x2c71bc("The command only works with audio messages");
    }
  } else {
    _0x2c71bc("Please mention an audio");
  }
});
king({
  'nomCom': "slow",
  'categorie': "Audio-Edit"
}, async (_0x1b703b, _0x2e83b5, _0x44d3f0) => {
  const {
    ms: _0xd26b5e,
    repondre: _0x35e9aa,
    msgRepondu: _0x2d2912
  } = _0x44d3f0;
  if (_0x2d2912) {
    if (_0x2d2912.audioMessage) {
      const _0x5777c4 = await _0x2e83b5.downloadAndSaveMediaMessage(_0x2d2912.audioMessage);
      let _0x455730 = filename + ".mp3";
      try {
        exec("ffmpeg -i " + _0x5777c4 + " " + "-filter:a \"atempo=0.8,asetrate=44100\"" + " " + _0x455730, (_0x311cfe, _0xd8ac5b, _0x1a6189) => {
          fs.unlinkSync(_0x5777c4);
          if (_0x311cfe) {
            return _0x35e9aa("error during the procedure" + _0x311cfe);
          }
          let _0x15e5ee = fs.readFileSync(_0x455730);
          _0x2e83b5.sendMessage(_0x1b703b, {
            'audio': _0x15e5ee,
            'mimetype': "audio/mpeg"
          }, {
            'quoted': _0xd26b5e
          });
          fs.unlinkSync(_0x455730);
        });
      } catch (_0xefd9a9) {
        _0x35e9aa("Error : " + _0xefd9a9);
      }
    } else {
      _0x35e9aa("The command only works with audio messages");
    }
  } else {
    _0x35e9aa("Please mention an audio");
  }
});
king({
  'nomCom': "smooth",
  'categorie': "Audio-Edit"
}, async (_0x124680, _0x3f78ab, _0x5b1091) => {
  const {
    ms: _0x153c95,
    repondre: _0x3dc0ea,
    msgRepondu: _0xaf5df
  } = _0x5b1091;
  if (_0xaf5df) {
    if (_0xaf5df.audioMessage) {
      const _0x3de586 = await _0x3f78ab.downloadAndSaveMediaMessage(_0xaf5df.audioMessage);
      let _0x31aa18 = filename + ".mp3";
      try {
        exec("ffmpeg -i " + _0x3de586 + " " + "-filter:v \"minterpolate='mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120'\"" + " " + _0x31aa18, (_0x49c6c5, _0x5dc885, _0x49cf08) => {
          fs.unlinkSync(_0x3de586);
          if (_0x49c6c5) {
            return _0x3dc0ea("error during the procedure" + _0x49c6c5);
          }
          let _0x4c8d07 = fs.readFileSync(_0x31aa18);
          _0x3f78ab.sendMessage(_0x124680, {
            'audio': _0x4c8d07,
            'mimetype': 'audio/mpeg'
          }, {
            'quoted': _0x153c95
          });
          fs.unlinkSync(_0x31aa18);
        });
      } catch (_0x2f2625) {
        _0x3dc0ea("Error : " + _0x2f2625);
      }
    } else {
      _0x3dc0ea("The command only works with audio messages");
    }
  } else {
    _0x3dc0ea("Please mention an audio");
  }
});
king({
  'nomCom': 'tempo',
  'categorie': "Audio-Edit"
}, async (_0x34a880, _0x519ba2, _0x51807d) => {
  const {
    ms: _0x35dffe,
    repondre: _0xdfc8b2,
    msgRepondu: _0x2562e0
  } = _0x51807d;
  if (_0x2562e0) {
    if (_0x2562e0.audioMessage) {
      const _0x69a63f = await _0x519ba2.downloadAndSaveMediaMessage(_0x2562e0.audioMessage);
      let _0x441480 = filename + ".mp3";
      try {
        exec("ffmpeg -i " + _0x69a63f + " " + "-filter:a \"atempo=0.9,asetrate=65100\"" + " " + _0x441480, (_0x14bcfb, _0x30637c, _0x2d9e52) => {
          fs.unlinkSync(_0x69a63f);
          if (_0x14bcfb) {
            return _0xdfc8b2("error during the procedure " + _0x14bcfb);
          }
          let _0x2ea0ff = fs.readFileSync(_0x441480);
          _0x519ba2.sendMessage(_0x34a880, {
            'audio': _0x2ea0ff,
            'mimetype': "audio/mpeg"
          }, {
            'quoted': _0x35dffe
          });
          fs.unlinkSync(_0x441480);
        });
      } catch (_0x16774f) {
        _0xdfc8b2("Error : " + _0x16774f);
      }
    } else {
      _0xdfc8b2("The command only works with audio messages");
    }
  } else {
    _0xdfc8b2("Please mention an audio");
  }
});
king({
  'nomCom': "nightcore",
  'categorie': "Audio-Edit"
}, async (_0x25c071, _0x4b8826, _0x4a4264) => {
  const {
    ms: _0x28db6b,
    repondre: _0x236f4f,
    msgRepondu: _0x2e6116
  } = _0x4a4264;
  if (_0x2e6116) {
    if (_0x2e6116.audioMessage) {
      const _0x1749ae = await _0x4b8826.downloadAndSaveMediaMessage(_0x2e6116.audioMessage);
      let _0x16b0f2 = filename + ".mp3";
      try {
        exec("ffmpeg -i " + _0x1749ae + " " + "-filter:a \"atempo=1.07,asetrate=44100*1.20\"" + " " + _0x16b0f2, (_0x12ea0, _0x55baad, _0x42a092) => {
          fs.unlinkSync(_0x1749ae);
          if (_0x12ea0) {
            return _0x236f4f("error during the procedure " + _0x12ea0);
          }
          let _0x487f3b = fs.readFileSync(_0x16b0f2);
          _0x4b8826.sendMessage(_0x25c071, {
            'audio': _0x487f3b,
            'mimetype': "audio/mpeg"
          }, {
            'quoted': _0x28db6b
          });
          fs.unlinkSync(_0x16b0f2);
        });
      } catch (_0x25be67) {
        _0x236f4f("Erreur : " + _0x25be67);
      }
    } else {
      _0x236f4f("The command only works with audio messages");
    }
  } else {
    _0x236f4f("Please mention an audio");
  }
});