const {
  king
} = require("../france/king");
const {
  getMessagesAndXPByJID,
  getBottom10Users
} = require('../data/level');
function get_level_exp(_0x22a2fd) {
  const _0xf49b6f = [{
    'level': 0x1,
    'xpThreshold': 0x1f4
  }, {
    'level': 0x2,
    'xpThreshold': 0x3e8
  }, {
    'level': 0x3,
    'xpThreshold': 0x7d0
  }, {
    'level': 0x4,
    'xpThreshold': 0xfa0
  }, {
    'level': 0x5,
    'xpThreshold': 0x1b58
  }, {
    'level': 0x6,
    'xpThreshold': 0x2710
  }, {
    'level': 0x7,
    'xpThreshold': 0x3a98
  }, {
    'level': 0x8,
    'xpThreshold': 0x4e20
  }, {
    'level': 0x9,
    'xpThreshold': 0x61a8
  }, {
    'level': 0xa,
    'xpThreshold': 0x7530
  }, {
    'level': 0xb,
    'xpThreshold': 0x88b8
  }, {
    'level': 0xc,
    'xpThreshold': 0xafc8
  }, {
    'level': 0xd,
    'xpThreshold': 0xd6d8
  }, {
    'level': 0xe,
    'xpThreshold': 0xfde8
  }, {
    'level': 0xf,
    'xpThreshold': 0x124f8
  }, {
    'level': 0x10,
    'xpThreshold': 0x15f90
  }, {
    'level': 0x11,
    'xpThreshold': 0x19a28
  }, {
    'level': 0x12,
    'xpThreshold': 0x1d4c0
  }, {
    'level': 0x13,
    'xpThreshold': 0x20f58
  }, {
    'level': 0x14,
    'xpThreshold': 0x249f0
  }, {
    'level': 0x15,
    'xpThreshold': 0x29810
  }, {
    'level': 0x16,
    'xpThreshold': 0x2e630
  }, {
    'level': 0x17,
    'xpThreshold': 0x33450
  }, {
    'level': 0x18,
    'xpThreshold': 0x38270
  }, {
    'level': 0x19,
    'xpThreshold': 0x3e418
  }, {
    'level': 0x1a,
    'xpThreshold': 0x41eb0
  }, {
    'level': 0x1b,
    'xpThreshold': 0x48058
  }, {
    'level': 0x1c,
    'xpThreshold': 0x4e200
  }, {
    'level': 0x1d,
    'xpThreshold': 0x543a8
  }, {
    'level': 0x1e,
    'xpThreshold': 0x5dfe8
  }, {
    'level': 0x1f,
    'xpThreshold': 0x67c28
  }, {
    'level': 0x20,
    'xpThreshold': 0x71868
  }, {
    'level': 0x21,
    'xpThreshold': 0x7b4a8
  }, {
    'level': 0x22,
    'xpThreshold': 0x850e8
  }, {
    'level': 0x23,
    'xpThreshold': 0x900b0
  }, {
    'level': 0x24,
    'xpThreshold': 0x9b078
  }, {
    'level': 0x25,
    'xpThreshold': 0xa6040
  }, {
    'level': 0x26,
    'xpThreshold': 0xb1008
  }, {
    'level': 0x27,
    'xpThreshold': 0xbbfd0
  }, {
    'level': 0x28,
    'xpThreshold': 0xc8320
  }, {
    'level': 0x29,
    'xpThreshold': 0xd4670
  }, {
    'level': 0x2a,
    'xpThreshold': 0xe09c0
  }, {
    'level': 0x2b,
    'xpThreshold': 0xecd10
  }, {
    'level': 0x2c,
    'xpThreshold': 0xf9060
  }, {
    'level': 0x2d,
    'xpThreshold': 0x106738
  }, {
    'level': 0x2e,
    'xpThreshold': 0x113e10
  }, {
    'level': 0x2f,
    'xpThreshold': 0x1214e8
  }, {
    'level': 0x30,
    'xpThreshold': 0x12ebc0
  }, {
    'level': 0x31,
    'xpThreshold': 0x13c298
  }, {
    'level': 'Zk-GOD',
    'xpThreshold': 0x1e8480
  }];
  let _0x54e4f4 = 0x0;
  let _0x3426d5 = _0x22a2fd;
  let _0x5d554f = _0xf49b6f[_0x54e4f4].xpThreshold;
  for (let _0x258adc = 0x0; _0x258adc < _0xf49b6f.length; _0x258adc++) {
    if (_0x22a2fd >= _0xf49b6f[_0x258adc].xpThreshold) {
      _0x54e4f4 = _0xf49b6f[_0x258adc].level;
      _0x5d554f = _0xf49b6f[_0x258adc + 0x1]?.["xpThreshold"] || 'No-limit';
      _0x3426d5 = _0x22a2fd - _0xf49b6f[_0x258adc].xpThreshold;
    } else {
      break;
    }
  }
  return {
    'level': _0x54e4f4,
    'xplimit': _0x5d554f,
    'exp': _0x3426d5
  };
}
module.exports = {
  'get_level_exp': get_level_exp
};
king({
  'nomCom': "rank",
  'categorie': "Fun"
}, async (_0x327098, _0x404ff3, _0x17ccf6) => {
  const {
    ms: _0x1b33c4,
    arg: _0x335fae,
    repondre: _0x49013d,
    auteurMessage: _0x5ccebe,
    nomAuteurMessage: _0x2846ab,
    msgRepondu: _0x5af7f4,
    auteurMsgRepondu: _0x294126,
    mybotpic: _0x1529a7
  } = _0x17ccf6;
  if (_0x5af7f4) {
    try {
      let _0x2aaf16 = await getMessagesAndXPByJID(_0x294126);
      const _0x4db889 = await get_level_exp(_0x2aaf16.xp);
      let _0x581f9a;
      try {
        _0x581f9a = await _0x404ff3.profilePictureUrl(_0x294126, "image");
      } catch {
        _0x581f9a = _0x1529a7();
      }
      ;
      let _0x99ac4b;
      if (_0x4db889.level < 0x5) {
        _0x99ac4b = "baby";
      } else {
        if (_0x4db889.level >= 0x5 || _0x4db889.level < 0xa) {
          _0x99ac4b = "kid-Ninja";
        } else {
          if (_0x4db889.level >= 0xa || _0x4db889.level < 0xf) {
            _0x99ac4b = "Ninja-genin";
          } else {
            if (_0x4db889.level >= 0xf || _0x4db889.level < 0x14) {
              _0x99ac4b = "Ninja-chunin";
            } else {
              if (_0x4db889.level >= 0x14 || _0x4db889.level < 0x19) {
                _0x99ac4b = 'Ninja-jonin';
              } else {
                if (_0x4db889.level >= 0x19 || _0x4db889.level < 0x1e) {
                  _0x99ac4b = "ANBU";
                } else {
                  if (_0x4db889.level >= 0x1e || _0x4db889.level < 0x23) {
                    _0x99ac4b = "strong ninja";
                  } else {
                    if (_0x4db889.level >= 0x23 || _0x4db889.level < 0x28) {
                      _0x99ac4b = "kage";
                    } else {
                      if (_0x4db889.level >= 0x28 || _0x4db889.level < 0x2d) {
                        _0x99ac4b = "Hermit seinin";
                      } else if (_0x4db889.level >= 0x2d || _0x4db889.level < 0x32) {
                        _0x99ac4b = 'Otsusuki';
                      } else {
                        _0x99ac4b = "GOD";
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      let _0x3a1f5c = "\n┏━━━┛ REDMI-XMD Ranking┗━━━┓\n         \n    *Name :* @" + _0x294126.split('@')[0x0] + "\n    \n    *Level :* " + _0x4db889.level + "\n    \n    *EXP :* " + _0x4db889.exp + '/' + _0x4db889.xplimit + "\n    \n    *Role :* " + _0x99ac4b + "\n\n    *Messages :* " + _0x2aaf16.messages + "\n    \n   ┕━✿━┑  ┍━✿━┙";
      _0x404ff3.sendMessage(_0x327098, {
        'image': {
          'url': _0x581f9a
        },
        'caption': _0x3a1f5c,
        'mentions': [_0x294126]
      }, {
        'quoted': _0x1b33c4
      });
    } catch (_0x4e2167) {
      _0x49013d(_0x4e2167);
    }
  } else {
    try {
      let _0x4e862e = await getMessagesAndXPByJID(_0x5ccebe);
      const _0x2f4fd2 = get_level_exp(_0x4e862e.xp);
      let _0xea487f;
      try {
        _0xea487f = await _0x404ff3.profilePictureUrl(_0x5ccebe, 'image');
      } catch {
        _0xea487f = _0x1529a7();
      }
      ;
      let _0x175ff7;
      if (_0x2f4fd2.level < 0x5) {
        _0x175ff7 = "Baby";
      } else {
        if (_0x2f4fd2.level >= 0x5 || _0x2f4fd2.level < 0xa) {
          _0x175ff7 = 'kid-Ninja';
        } else {
          if (_0x2f4fd2.level >= 0xa || _0x2f4fd2.level < 0xf) {
            _0x175ff7 = "Ninja-genin";
          } else {
            if (_0x2f4fd2.level >= 0xf || _0x2f4fd2.level < 0x14) {
              _0x175ff7 = "Ninja-chunin";
            } else {
              if (_0x2f4fd2.level >= 0x14 || _0x2f4fd2.level < 0x19) {
                _0x175ff7 = 'Ninja-jonin';
              } else {
                if (_0x2f4fd2.level >= 0x19 || _0x2f4fd2.level < 0x1e) {
                  _0x175ff7 = "ANBU";
                } else {
                  if (_0x2f4fd2.level >= 0x1e || _0x2f4fd2.level < 0x23) {
                    _0x175ff7 = "strong ninja";
                  } else {
                    if (_0x2f4fd2.level >= 0x23 || _0x2f4fd2.level < 0x28) {
                      _0x175ff7 = 'kage';
                    } else {
                      if (_0x2f4fd2.level >= 0x28 || _0x2f4fd2.level < 0x2d) {
                        _0x175ff7 = "Hermit seinin";
                      } else if (_0x2f4fd2.level >= 0x2d || _0x2f4fd2.level < 0x32) {
                        _0x175ff7 = "Otsusuki";
                      } else {
                        _0x175ff7 = "level-GOD";
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      let _0x8a1f3a = "\n┏━━━┛ REDMI-XMD Ranking ┗━━━┓\n     \n  *Name :* " + _0x2846ab + "\n\n  *Level :* " + _0x2f4fd2.level + "\n\n  *EXP :* " + _0x2f4fd2.exp + '/' + _0x2f4fd2.xplimit + "\n\n  *Role :* " + _0x175ff7 + "\n\n  *Messages :* " + _0x4e862e.messages + "\n\n   ┕━✿━┑  ┍━✿━┙";
      _0x404ff3.sendMessage(_0x327098, {
        'image': {
          'url': _0xea487f
        },
        'caption': _0x8a1f3a
      }, {
        'quoted': _0x1b33c4
      });
    } catch (_0x52a907) {
      _0x49013d(_0x52a907);
    }
  }
});
king({
  'nomCom': 'toprank',
  'categorie': "Fun"
}, async (_0x2b3af6, _0x19e171, _0x430951) => {
  const {
    ms: _0x4a89de,
    arg: _0x24dc45,
    repondre: _0x57e8ee,
    auteurMessage: _0x1ee07e,
    nomAuteurMessage: _0xb46df4,
    msgRepondu: _0x54c5f8,
    auteurMsgRepondu: _0x579da1,
    mybotpic: _0xdf42f3
  } = _0x430951;
  let _0xda6fa4 = "┏━━┛ REDMI-XMD-top-Rank ┗━━┓\n\n";
  let _0x1c4acd = await getBottom10Users();
  let _0x2303ad = [];
  for (const _0x41cdd9 of _0x1c4acd) {
    const _0x8a9377 = await get_level_exp(_0x41cdd9.xp);
    let _0x5e653d;
    if (_0x8a9377.level < 0x5) {
      _0x5e653d = "Baby";
    } else {
      if (_0x8a9377.level >= 0x5 || _0x8a9377.level < 0xa) {
        _0x5e653d = "kid ninja";
      } else {
        if (_0x8a9377.level >= 0xa || _0x8a9377.level < 0xf) {
          _0x5e653d = "Ninja-genin";
        } else {
          if (_0x8a9377.level >= 0xf || _0x8a9377.level < 0x14) {
            _0x5e653d = 'Ninja-chunin';
          } else {
            if (_0x8a9377.level >= 0x14 || _0x8a9377.level < 0x19) {
              _0x5e653d = 'Ninja-jonin';
            } else {
              if (_0x8a9377.level >= 0x19 || _0x8a9377.level < 0x1e) {
                _0x5e653d = 'ANBU';
              } else {
                if (_0x8a9377.level >= 0x1e || _0x8a9377.level < 0x23) {
                  _0x5e653d = "strong ninja";
                } else {
                  if (_0x8a9377.level >= 0x23 || _0x8a9377.level < 0x28) {
                    _0x5e653d = "kage";
                  } else {
                    if (_0x8a9377.level >= 0x28 || _0x8a9377.level < 0x2d) {
                      _0x5e653d = "Hermit seinin";
                    } else if (_0x8a9377.level >= 0x2d || _0x8a9377.level < 0x32) {
                      _0x5e653d = "Otsusuki";
                    } else {
                      _0x5e653d = "level-GOD";
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    _0xda6fa4 += "-----------------------\n            \n *Name :* @" + _0x41cdd9.jid.split('@')[0x0] + "\n*Level :* " + _0x8a9377.level + "\n*Role :* " + _0x5e653d + "\n";
    _0x2303ad.push(_0x41cdd9.jid);
  }
  _0x19e171.sendMessage(_0x2b3af6, {
    'image': {
      'url': _0xdf42f3()
    },
    'caption': _0xda6fa4,
    'mentions': _0x2303ad
  }, {
    'quoted': _0x4a89de
  });
});