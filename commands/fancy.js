const {
  king
} = require("../france/king");
const fancy = require("../commands/Style");
king({
  'nomCom': "fancy",
  'categorie': 'Fun',
  'reaction': '☑️'
}, async (_0x525a31, _0x4b4b8b, _0x3e1601) => {
  const {
    arg: _0x3b738a,
    repondre: _0x2f9e85,
    prefixe: _0x507289
  } = _0x3e1601;
  const _0x1a8217 = _0x3b738a[0x0]?.["match"](/\d+/)?.[0x0];
  const _0x3c9a6d = _0x3b738a.slice(0x1).join(" ");
  try {
    if (!_0x1a8217 || !_0x3c9a6d) {
      return await _0x2f9e85("\nExample: " + _0x507289 + "fancy 1 Redmi-XMD\n" + String.fromCharCode(0x200e).repeat(0xfa1) + fancy.list("REDMI-XMD", fancy));
    }
    const _0x49ace8 = fancy[parseInt(_0x1a8217) - 0x1];
    return _0x49ace8 ? await _0x2f9e85(fancy.apply(_0x49ace8, _0x3c9a6d)) : await _0x2f9e85("_Style Not Available :(_");
  } catch (_0x1d5b0c) {
    console.error(_0x1d5b0c);
    return await _0x2f9e85("_An error occurred :(_");
  }
});