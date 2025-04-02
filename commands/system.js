const {
  king
} = require("../france/king");
king({
  'nomCom': "reboot",
  'categorie': 'User',
  'reaction': "👨🏿‍💼"
}, async (_0xb122b5, _0x27ff47, _0x57d81c) => {
  const {
    repondre: _0x31ca03,
    ms: _0x9acfa7,
    dev: _0x4a6383,
    superUser: _0x578b9b
  } = _0x57d81c;
  if (!_0x578b9b) {
    return _0x31ca03("This command is for owner only");
  }
  const {
    exec: _0x43bf3e
  } = require("child_process");
  _0x31ca03('*Rebooting...*');
  _0x43bf3e("pm2 restart all");
});