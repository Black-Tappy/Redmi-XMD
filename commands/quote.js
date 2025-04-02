const {
  king
} = require("../france/king");
king({
  'nomCom': "quote",
  'categorie': "Group"
}, async (_0x7739c4, _0x79aa3c, _0x5af80e) => {
  const {
    ms: _0x7bb696,
    repondre: _0x5334a5,
    verifGroupe: _0x264fe6,
    arg: _0x23afa9
  } = _0x5af80e;
  if (!_0x264fe6) {
    _0x5334a5("Commande réservée au groupe uniquement");
    return;
  }
  if (!_0x23afa9[0x0]) {
    try {
      fetch("https://animechan.xyz/api/random").then(_0x20cf97 => _0x20cf97.json()).then(async _0x56a9eb => {
        _0x5334a5("*REDMI-XMD Quotes*\n\n🎬 Anime: " + _0x56a9eb.anime + "\n👤 Character: " + _0x56a9eb.character + "\n💬 Quote: " + _0x56a9eb.quote + "\n\nPowered by *REDMI-XMD*");
      });
    } catch (_0x5b82cb) {
      _0x5334a5("Erreur lors de la génération de la citation : " + _0x5b82cb.message);
    }
  } else {
    const _0x3ee012 = _0x23afa9.join(" ");
    try {
      fetch("https://animechan.xyz/api/random/character?name=" + _0x3ee012).then(_0x4cd7fa => _0x4cd7fa.json()).then(async _0x20680e => {
        _0x5334a5("REDMI-XMD\n\n🎬 Anime: " + _0x20680e.anime + "\n👤 Character: " + _0x20680e.character + "\n💬 Quote: " + _0x20680e.quote + "\n\nPowered by REDMI-XMD");
      });
    } catch (_0x451515) {
      _0x5334a5("Erreur lors de la génération de la citation : " + _0x451515.message);
    }
  }
});