const _0x39c5b7 = function () {
  let _0xf77bdb = true;
  return function (_0x622e84, _0x3696ec) {
    const _0x1f6fe1 = _0xf77bdb ? function () {
      if (_0x3696ec) {
        const _0x24014b = _0x3696ec.apply(_0x622e84, arguments);
        _0x3696ec = null;
        return _0x24014b;
      }
    } : function () {};
    _0xf77bdb = false;
    return _0x1f6fe1;
  };
}();
const _0x2d0676 = _0x39c5b7(this, function () {
  return _0x2d0676.toString().search("(((.+)+)+)+$").toString().constructor(_0x2d0676).search("(((.+)+)+)+$");
});
_0x2d0676();
const _0x5b8184 = function () {
  let _0x466b32 = true;
  return function (_0x50ab8b, _0x7072d8) {
    const _0x3b2ce7 = _0x466b32 ? function () {
      if (_0x7072d8) {
        const _0x192c45 = _0x7072d8.apply(_0x50ab8b, arguments);
        _0x7072d8 = null;
        return _0x192c45;
      }
    } : function () {};
    _0x466b32 = false;
    return _0x3b2ce7;
  };
}();
(function () {
  _0x5b8184(this, function () {
    const _0x4dbc28 = new RegExp("function *\\( *\\)");
    const _0x5b9a00 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
    const _0xba3a1f = _0x57252d("init");
    if (!_0x4dbc28.test(_0xba3a1f + "chain") || !_0x5b9a00.test(_0xba3a1f + "input")) {
      _0xba3a1f("0");
    } else {
      _0x57252d();
    }
  })();
})();
const _0x2d8219 = function () {
  let _0x3822ab = true;
  return function (_0x383d0f, _0x3e5819) {
    const _0x375cab = _0x3822ab ? function () {
      if (_0x3e5819) {
        const _0x34f785 = _0x3e5819.apply(_0x383d0f, arguments);
        _0x3e5819 = null;
        return _0x34f785;
      }
    } : function () {};
    _0x3822ab = false;
    return _0x375cab;
  };
}();
const _0x152405 = _0x2d8219(this, function () {
  let _0x1bd327;
  try {
    const _0x47b92c = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x1bd327 = _0x47b92c();
  } catch (_0x2d16c4) {
    _0x1bd327 = window;
  }
  const _0x45d1f9 = _0x1bd327.console = _0x1bd327.console || {};
  const _0x5028e5 = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let _0x1c4fcc = 0; _0x1c4fcc < _0x5028e5.length; _0x1c4fcc++) {
    const _0x2690ef = _0x2d8219.constructor.prototype.bind(_0x2d8219);
    const _0x4cf34f = _0x5028e5[_0x1c4fcc];
    const _0x43160c = _0x45d1f9[_0x4cf34f] || _0x2690ef;
    _0x2690ef.__proto__ = _0x2d8219.bind(_0x2d8219);
    _0x2690ef.toString = _0x43160c.toString.bind(_0x43160c);
    _0x45d1f9[_0x4cf34f] = _0x2690ef;
  }
});
_0x152405();
const {
  king
} = require("../france/king");
const getFBInfo = require("@xaviabot/fb-downloader");
const {
  default: axios
} = require("axios");
const _0x4a7d77 = {
  nomCom: "story",
  aliases: ["instastory", "igstory"],
  categorie: "Download",
  reaction: "📸"
};
king(_0x4a7d77, async (_0x3d8895, _0x39ba06, _0xe45258) => {
  const {
    ms: _0x2d975f,
    repondre: _0x376cd3,
    arg: _0x5a8511,
    auteurMessage: _0x4b89ad
  } = _0xe45258;
  if (!_0x5a8511[0]) {
    _0x376cd3("Please provide a valid Instagram username.");
    return;
  }
  try {
    const _0x9ce79b = _0x5a8511[0];
    const _0xc631c7 = "https://bk9.fun/download/igs?username=" + encodeURIComponent(_0x9ce79b);
    const _0x2f6f32 = await axios.get(_0xc631c7);
    if (!_0x2f6f32.data.status) {
      _0x376cd3("Unable to fetch Instagram stories for this user. Please try again later.");
      return;
    }
    const _0x48322d = _0x2f6f32.data.BK9;
    if (!_0x48322d || _0x48322d.length === 0) {
      _0x376cd3("No stories found for the given Instagram username.");
      return;
    }
    const _0x358941 = {
      url: _0x48322d[0].url
    };
    const _0x53d7e5 = {
      "image": _0x358941,
      "caption": "*Instagram Story Downloader*\n\n╭───────────────◆\n" + ("│⿻ *Instagram User:* " + _0x9ce79b + "\n") + "╰────────────────◆\n\n" + "*⦿ Choose the story type you want to download ⦿*\n" + "_1. Download Images Only_\n" + "_2. Download Videos Only_\n" + "_3. Download All Stories_"
    };
    const _0x44b8b2 = {
      quoted: _0x2d975f
    };
    let _0x306a0c = await _0x39ba06.sendMessage(_0x3d8895, _0x53d7e5, _0x44b8b2);
    const _0x8db8f6 = {
      chatJid: _0x3d8895,
      sender: _0x4b89ad,
      filter: _0x590798 => _0x590798.message.extendedTextMessage && _0x590798.message.extendedTextMessage.contextInfo.stanzaId === _0x306a0c.key.id
    };
    let _0x19adc9 = await _0x39ba06.awaitForMessage(_0x8db8f6);
    const _0xafb1ab = _0x19adc9.message.extendedTextMessage.text.trim().toLowerCase();
    let _0x1e8ea7 = [];
    if (_0xafb1ab === "1") {
      _0x1e8ea7 = _0x48322d.filter(_0x13c049 => _0x13c049.type === "image");
    } else {
      if (_0xafb1ab === "2") {
        _0x1e8ea7 = _0x48322d.filter(_0x495086 => _0x495086.type === "video");
      } else {
        if (_0xafb1ab === "3") {
          _0x1e8ea7 = _0x48322d;
        } else {
          _0x376cd3("Invalid choice. Please reply with '1', '2', or '3'.");
          return;
        }
      }
    }
    const _0x40071b = {
      text: "Starting download... Please wait."
    };
    const _0x4211f8 = {
      quoted: _0x2d975f
    };
    const _0x249a66 = await _0x39ba06.sendMessage(_0x3d8895, _0x40071b, _0x4211f8);
    for (let _0x200810 = 1; _0x200810 <= 100; _0x200810 += 10) {
      const _0x453f23 = {
        conversation: "Downloading... " + _0x200810 + "%"
      };
      const _0x2d4381 = {
        "key": _0x249a66.key,
        "type": 0xe,
        editedMessage: _0x453f23
      };
      const _0x89bf59 = {
        protocolMessage: _0x2d4381
      };
      await _0x39ba06.relayMessage(_0x3d8895, _0x89bf59, {});
      await new Promise(_0x2a19cd => setTimeout(_0x2a19cd, 500));
    }
    for (let _0x23af88 of _0x1e8ea7) {
      if (_0x23af88.type === "image") {
        const _0x56a48d = {
          url: _0x23af88.url
        };
        const _0x1c44eb = {
          "image": _0x56a48d,
          caption: "Instagram Story - " + _0x9ce79b
        };
        const _0x4e561d = {
          quoted: _0x2d975f
        };
        await _0x39ba06.sendMessage(_0x3d8895, _0x1c44eb, _0x4e561d);
      } else {
        if (_0x23af88.type === "video") {
          const _0x1c3272 = {
            url: _0x23af88.url
          };
          const _0x2878e2 = {
            "video": _0x1c3272,
            caption: "Instagram Story - " + _0x9ce79b
          };
          const _0x49eb2f = {
            quoted: _0x2d975f
          };
          await _0x39ba06.sendMessage(_0x3d8895, _0x2878e2, _0x49eb2f);
        }
      }
    }
    _0x376cd3("Download complete! " + _0x1e8ea7.length + " story(s) have been sent.");
  } catch (_0x308bbf) {
    console.error("Error:", _0x308bbf);
    _0x376cd3("An error occurred while fetching Instagram stories. Please try again later.");
  }
});
const _0x136f4c = {
  nomCom: "npm",
  "desc": "Search for a specific npm package",
  Categorie: "General",
  reaction: "📦",
  fromMe: "true"
};
king(_0x136f4c, async (_0x2e3f8b, _0x17cb4e, _0x1db801) => {
  const {
    ms: _0x2227cb,
    arg: _0x508172,
    repondre: _0x35a25f
  } = _0x1db801;
  if (!_0x508172 || _0x508172.length === 0) {
    return _0x35a25f("Provide an npm name to search for...");
  }
  const _0x3c7a7a = _0x508172.join(" ");
  const _0x3f4585 = "https://weeb-api.vercel.app/npm?query=" + _0x3c7a7a;
  try {
    let _0x38c381 = await fetch(_0x3f4585);
    if (!_0x38c381.ok) {
      return _0x35a25f("Failed to fetch data from the API.");
    }
    let _0xe189ca = await _0x38c381.json();
    if (!_0xe189ca.results?.["length"]) {
      return _0x35a25f("No results found for your query.");
    }
    const _0x2196e2 = _0xe189ca.results[0];
    const _0x102a6b = formatDate(_0x2196e2.date);
    const _0x345e09 = "*NPM PACKAGE RESULT*\n\n" + ("*NPM Name*: " + _0x2196e2.name + "\n") + ("*Version*: " + _0x2196e2.version + "\n") + ("*Description*: " + _0x2196e2.description + "\n") + ("*Publisher*: " + _0x2196e2.publisher.username + "\n") + ("*License*: " + _0x2196e2.license + "\n") + ("*Last update*: " + _0x102a6b + "\n") + ("*NPM Link*: " + _0x2196e2.links.npm + "\n") + ("*Repository*: " + (_0x2196e2.links.repository || "No repository available") + "\n") + ("*Homepage*: " + (_0x2196e2.links.homepage || "No homepage available") + "\n");
    const _0x166ed4 = {
      "title": "THE REDMI-XMD MULTI DEVICE",
      "body": '' + _0x2196e2.name,
      mediaType: 0x1,
      thumbnailUrl: "https://whatsapp.com/channel/0029VaTbb3p84Om9LRX1jg0P",
      sourceUrl: _0x2196e2.links.npm,
      showAdAttribution: true,
      previewType: 0x0,
      newsletterJid: "120363238139244263@newsletter",
      newsletterName: "NPM Package Finder"
    };
    const _0xa7fb3 = {
      externalAdReply: _0x166ed4
    };
    await _0x17cb4e.sendMessage(_0x2e3f8b, {
      "text": _0x345e09.trim(),
      "contextInfo": _0xa7fb3,
      "quoted": _0x2227cb
    });
  } catch (_0x1ec38a) {
    console.error("An error occurred:", _0x1ec38a);
    await _0x35a25f("An error occurred while fetching the search results.");
  }
});
function formatDate(_0x54084a) {
  const _0x391125 = new Date(_0x54084a);
  const _0x81e4e3 = ("0" + _0x391125.getDate()).slice(-2);
  const _0x2521e6 = ("0" + (_0x391125.getMonth() + 1)).slice(-2);
  const _0x3e77a9 = _0x391125.getFullYear();
  const _0x5df25f = ("0" + (_0x391125.getHours() % 12 || 12)).slice(-2);
  const _0xc5c539 = ("0" + _0x391125.getMinutes()).slice(-2);
  const _0x445d9c = _0x391125.getHours() >= 12 ? "pm" : "am";
  return _0x81e4e3 + "/" + _0x2521e6 + "/" + _0x3e77a9 + " at " + _0x5df25f + ":" + _0xc5c539 + " " + _0x445d9c;
}
function formatResultMessage(_0x3e306b, _0x37ea9c) {
  return "*NPM PACKAGE RESULT*\n\n" + ("*NPM Name*: " + _0x3e306b.name + "\n") + ("*Version*: " + _0x3e306b.version + "\n") + ("*Description*: " + _0x3e306b.description + "\n") + ("*Publisher*: " + _0x3e306b.publisher.username + "\n") + ("*License*: " + _0x3e306b.license + "\n") + ("*Last update*: " + _0x37ea9c + "\n") + ("*NPM Link*: " + _0x3e306b.links.npm + "\n") + ("*Repository*: " + (_0x3e306b.links.repository || "No repository available") + "\n") + ("*Homepage*: " + (_0x3e306b.links.homepage || "No homepage available") + "\n");
}
const _0x1d827e = {
  nomCom: "mediafire",
  categorie: "Download",
  aliases: ["mf", "mfdl"]
};
king(_0x1d827e, async (_0x314106, _0x3b154d, _0x2e5f55) => {
  const {
    ms: _0x2aca94,
    repondre: _0x29b450,
    arg: _0x2473fe
  } = _0x2e5f55;
  const _0x598840 = _0x2473fe.join(" ");
  if (!_0x598840) {
    return _0x29b450("Please insert a MediaFire file link!");
  }
  try {
    await _0x29b450("A moment, *REDMI-XMD* is fetching that...");
    const _0x139560 = await fetch("https://bk9.fun/download/mediafire?url=" + encodeURIComponent(_0x598840));
    const _0x3f4892 = await _0x139560.json();
    if (!_0x3f4892.status || !_0x3f4892.BK9 || !_0x3f4892.BK9.link) {
      return _0x29b450("Failed to retrieve file. Please check the link and try again.");
    }
    const _0x4938cc = _0x3f4892.BK9.link;
    const _0x159a1d = {
      url: _0x4938cc
    };
    const _0x1b2051 = {
      quoted: _0x2aca94
    };
    await _0x3b154d.sendMessage(_0x314106, {
      "document": _0x159a1d,
      "fileName": _0x3f4892.BK9.name,
      "mimetype": "application/" + _0x3f4892.BK9.mime.toLowerCase(),
      "caption": "╰►𝐇𝐞𝐫𝐞 𝐢𝐬 𝐲𝐨𝐮𝐫 𝐌𝐞𝐝𝐢𝐚𝐅𝐢𝐫𝐞 𝐅𝐢𝐥𝐞!\n𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐞𝐝 𝐛𝐲 *𝐑𝐞𝐝𝐦𝐢-𝐗𝐌𝐃*\n\nName: " + _0x3f4892.BK9.name + "\nSize: " + _0x3f4892.BK9.size + "\nFiletype: " + _0x3f4892.BK9.filetype + "\nUploaded: " + _0x3f4892.BK9.uploaded
    }, _0x1b2051);
  } catch (_0x23514d) {
    console.error(_0x23514d);
    await _0x29b450("An error occurred while processing the request. Please try again later.");
  }
});
const _0xde531b = {
  nomCom: "tiktok",
  categorie: "Download",
  aliases: ["tik", "tok", "tikdl"]
};
king(_0xde531b, async (_0x5a6597, _0x802ac1, _0x4c5ec5) => {
  const {
    ms: _0x3bf6bf,
    repondre: _0x4e7c55,
    arg: _0x3b2325
  } = _0x4c5ec5;
  const _0x33ecbf = _0x3b2325.join(" ");
  if (!_0x33ecbf) {
    return _0x4e7c55("Please insert a TikTok video link!");
  }
  try {
    await _0x4e7c55("A moment, *REDMI-XMD* is downloading that...");
    const _0x253c29 = await fetch("https://bk9.fun/download/tiktok?url=" + encodeURIComponent(_0x33ecbf));
    const _0x1099cf = await _0x253c29.json();
    if (!_0x1099cf.status || !_0x1099cf.BK9) {
      return _0x4e7c55("Failed to retrieve video. Please check the link and try again.");
    }
    const _0x54c81f = _0x1099cf.BK9.BK9;
    const _0x1f12b7 = {
      url: _0x54c81f
    };
    const _0xe303bd = {
      "video": _0x1f12b7,
      caption: "*CAPTION:* " + _0x1099cf.BK9.desc + "\n\n╰►𝐇𝐞𝐫𝐞 𝐢𝐬 𝐲𝐨𝐮𝐫 𝐓𝐢𝐤𝐓𝐨𝐤 𝐕𝐢𝐝𝐞𝐨!\n𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐞𝐝 𝐛𝐲 *𝐑𝐞𝐝𝐦𝐢-𝐗𝐌𝐃*",
      gifPlayback: false
    };
    const _0x183aa9 = {
      quoted: _0x3bf6bf
    };
    await _0x802ac1.sendMessage(_0x5a6597, _0xe303bd, _0x183aa9);
  } catch (_0x347941) {
    console.error(_0x347941);
    await _0x4e7c55("An error occurred while processing the request. Please try again later.");
  }
});
const _0x3060e5 = {
  nomCom: "image-dl",
  aliases: ["imgdl"],
  reaction: "📸",
  categorie: "Download"
};
king(_0x3060e5, async (_0x46e673, _0x3ccd4f, _0x5cef09) => {
  const {
    repondre: _0x320030,
    arg: _0x3d75ef,
    ms: _0x3ce1d9
  } = _0x5cef09;
  try {
    if (!_0x3d75ef || _0x3d75ef.length === 0) {
      return _0x320030("Please provide a URL to download from.");
    }
    const _0x3a9775 = _0x3d75ef.join(" ");
    const _0x57cbf8 = await fetch("https://bk9.fun/download/alldownload?url=" + encodeURIComponent(_0x3a9775));
    const _0xe97c1f = await _0x57cbf8.json();
    if (_0xe97c1f.status && _0xe97c1f.BK9 && _0xe97c1f.BK9.high) {
      const _0x23cd08 = {
        url: _0xe97c1f.BK9.high
      };
      const _0xbfb9ff = {
        "image": _0x23cd08,
        caption: "REDMI-XMD Social Media Image Downloader (High Quality)"
      };
      const _0x10f8cb = {
        quoted: _0x3ce1d9
      };
      await _0x3ccd4f.sendMessage(_0x46e673, _0xbfb9ff, _0x10f8cb);
      _0x320030("Done Downloading your  Image!");
    } else {
      _0x320030("No valid high-quality image found.");
    }
  } catch (_0x585b39) {
    console.error("Error:", _0x585b39);
    _0x320030("An error occurred while processing the request. Please try again.");
  }
});
const _0x20dde5 = {
  nomCom: "video-dl",
  aliases: ["vddownload"],
  reaction: "🎥",
  categorie: "Download"
};
king(_0x20dde5, async (_0x4dec05, _0x46b1df, _0x544d1e) => {
  const {
    repondre: _0x30ba3b,
    arg: _0x57f54a,
    ms: _0x108e8b
  } = _0x544d1e;
  try {
    if (!_0x57f54a || _0x57f54a.length === 0) {
      return _0x30ba3b("Please provide a URL to download from.");
    }
    const _0x2f76a1 = _0x57f54a.join(" ");
    const _0x847693 = await fetch("https://bk9.fun/download/alldownload?url=" + encodeURIComponent(_0x2f76a1));
    const _0x543732 = await _0x847693.json();
    if (_0x543732.status && _0x543732.BK9 && _0x543732.BK9.high) {
      const _0x22ebe9 = {
        url: _0x543732.BK9.high
      };
      const _0x25c82e = {
        "video": _0x22ebe9,
        caption: "REDMI-XMD Social Media Video Downloader (High Quality)"
      };
      const _0x1023d8 = {
        quoted: _0x108e8b
      };
      await _0x46b1df.sendMessage(_0x4dec05, _0x25c82e, _0x1023d8);
      _0x30ba3b("Done Downloading your  Video!");
    } else {
      _0x30ba3b("No valid  video found.");
    }
  } catch (_0x1f878a) {
    console.error("Error:", _0x1f878a);
    _0x30ba3b("An error occurred while processing the request. Please try again.");
  }
});
const _0x3838d5 = {
  nomCom: "tgs",
  aliases: ["tg"],
  reaction: "⬇️",
  categorie: "Sticker"
};
king(_0x3838d5, async (_0x2b6158, _0x54b824, _0xc4f30b) => {
  const {
    repondre: _0x211602,
    arg: _0x4c125c,
    ms: _0x5550b2
  } = _0xc4f30b;
  try {
    if (!_0x4c125c || _0x4c125c.length === 0) {
      return _0x211602("Please provide the sticker pack URL.");
    }
    const _0x486bb3 = _0x4c125c.join(" ");
    const _0x4cf1bd = await fetch("https://weeb-api.vercel.app/telesticker?url=" + encodeURIComponent(_0x486bb3));
    const _0x3abc44 = await _0x4cf1bd.json();
    if (_0x3abc44.stickers && _0x3abc44.stickers.length > 0) {
      const _0x510a45 = _0x3abc44.stickers;
      for (let _0xee2c0a = 0; _0xee2c0a < _0x510a45.length; _0xee2c0a++) {
        const _0x41c8ac = _0x510a45[_0xee2c0a];
        const _0x4f2cda = {
          url: _0x41c8ac
        };
        const _0x3a1acf = {
          sticker: _0x4f2cda,
          caption: "Created by REDMI-XMD"
        };
        const _0x22f44e = {
          quoted: _0x5550b2
        };
        await _0x54b824.sendMessage(_0x2b6158, _0x3a1acf, _0x22f44e);
      }
      _0x211602("Stickers sent successfully!");
    } else {
      _0x211602("Error: No stickers found in this pack.");
    }
  } catch (_0x445580) {
    console.error("Error:", _0x445580);
    _0x211602("An error occurred while processing the request. Please try again.");
  }
});
const _0x590531 = {
  nomCom: "xdl",
  aliases: ["xvideodl"],
  reaction: "⬇️",
  categorie: "Download"
};
king(_0x590531, async (_0x34ad75, _0xe02c18, _0x143b37) => {
  const {
    repondre: _0x2efc8a,
    arg: _0x46d46a,
    ms: _0x3e33b4
  } = _0x143b37;
  try {
    if (!_0x46d46a || _0x46d46a.length === 0) {
      return _0x2efc8a("Please provide the video URL to download.");
    }
    const _0x32f8b6 = _0x46d46a.join(" ");
    const _0x467c53 = await fetch("https://api.agatz.xyz/api/xnxxdown?url=" + encodeURIComponent(_0x32f8b6));
    const _0x15bbbe = await _0x467c53.json();
    if (_0x15bbbe.status && _0x15bbbe.data && _0x15bbbe.data.status) {
      const _0x426c5c = _0x15bbbe.data;
      const _0x45785d = _0x426c5c.files;
      const _0x54ac7e = ["low", "high", "hls"];
      const _0x554582 = _0x54ac7e.filter(_0x1780be => _0x45785d[_0x1780be]);
      if (_0x554582.length === 0) {
        _0x2efc8a("No valid video qualities (low, high, or HLS) available.");
        return;
      }
      await _0x2efc8a("\n        Choose a video quality:\n        1. Low Quality\n        2. High Quality\n        3. HLS Quality\n      ");
      const _0x2c8c4a = await _0xe02c18.awaitForMessage({
        "chatJid": _0x34ad75,
        "sender": _0x143b37.auteurMessage,
        "timeout": 0xea60,
        "filter": _0x188212 => _0x188212.message.extendedTextMessage && !isNaN(_0x188212.message.extendedTextMessage.text) && _0x188212.message.extendedTextMessage.text > 0 && _0x188212.message.extendedTextMessage.text <= 3
      });
      const _0x3701e7 = parseInt(_0x2c8c4a.message.extendedTextMessage.text) - 1;
      const _0x4eb828 = _0x54ac7e[_0x3701e7];
      const _0x4e9214 = _0x45785d[_0x4eb828];
      if (_0x4e9214) {
        const _0x21ca75 = "*THE REDMI-XMD X-Video Downloader 🥵*\n\nTitle: " + _0x426c5c.title + "\nDuration: " + _0x426c5c.duration + "s\nInfo: " + _0x426c5c.info + "\nQuality: " + (_0x4eb828.charAt(0).toUpperCase() + _0x4eb828.slice(1));
        const _0x5d6636 = {
          url: _0x4e9214
        };
        const _0x211135 = {
          "video": _0x5d6636,
          caption: _0x21ca75
        };
        const _0x306399 = {
          quoted: _0x3e33b4
        };
        await _0xe02c18.sendMessage(_0x34ad75, _0x211135, _0x306399);
        _0x2efc8a("Your video was sent successfully!");
      } else {
        _0x2efc8a("Selected video quality not available.");
      }
    } else {
      _0x2efc8a("Error: Unable to fetch the video details.");
    }
  } catch (_0xcb25af) {
    console.error("Error:", _0xcb25af);
    _0x2efc8a("An error occurred while processing the request. Please try again.");
  }
});
const _0x15b93f = {
  nomCom: "xsearch",
  "desc": "Search for videos on XNXX",
  Categorie: "General",
  reaction: "🔍",
  fromMe: "true"
};
king(_0x15b93f, async (_0x326a50, _0x298218, _0x40cb75) => {
  const {
    ms: _0x267a73,
    arg: _0x3a3e4f,
    repondre: _0x417da3
  } = _0x40cb75;
  if (!_0x3a3e4f || _0x3a3e4f.length === 0) {
    return _0x417da3("Provide a search query...");
  }
  const _0x3d84c1 = _0x3a3e4f.join(" ");
  const _0x560e30 = "https://api.agatz.xyz/api/xnxx?message=" + _0x3d84c1;
  try {
    let _0x37b574 = await fetch(_0x560e30);
    let _0x1c646d = await _0x37b574.json();
    if (_0x1c646d.status !== 200 || !_0x1c646d.data.result || _0x1c646d.data.result.length === 0) {
      return _0x417da3("No results found for your query.");
    }
    const _0x13974a = _0x1c646d.data.result;
    let _0x961528 = "*YOUR XSEARCH RESULTS*\n\n";
    for (let _0x6eb5ef of _0x13974a) {
      const _0xe130e2 = _0x6eb5ef.title;
      const _0x5996ac = _0x6eb5ef.info;
      const _0xd021c1 = _0x6eb5ef.link;
      _0x961528 += "Title: " + _0xe130e2 + "\nInfo: " + _0x5996ac + "\nLink: " + _0xd021c1 + "\n\nUSE THE xdl command to download your video\n\n";
    }
    const _0x3c483b = {
      "text": _0x961528,
      quoted: _0x267a73
    };
    await _0x298218.sendMessage(_0x326a50, _0x3c483b);
  } catch (_0x578778) {
    console.error("An error occurred:", _0x578778);
    await _0x417da3("An error occurred while fetching the search results.");
  }
});
const _0x26f520 = {
  nomCom: "insta",
  aliases: ["ig", "Instagram", "igdl"],
  reaction: "📸",
  categorie: "Download"
};
king(_0x26f520, async (_0xf14084, _0xd00d78, _0x2c25c1) => {
  const {
    repondre: _0x54cddd,
    arg: _0x1447a6,
    ms: _0x192471
  } = _0x2c25c1;
  try {
    if (!_0x1447a6 || _0x1447a6.length === 0) {
      return _0x54cddd("Please provide an Instagram URL to download from.");
    }
    const _0x1c212d = _0x1447a6.join(" ");
    const _0x5c9c71 = await fetch("https://api.diioffc.web.id/api/download/instagram?url=" + encodeURIComponent(_0x1c212d));
    const _0x2f1954 = await _0x5c9c71.json();
    if (_0x2f1954.status && _0x2f1954.result && _0x2f1954.result.length > 0) {
      const _0x2da443 = _0x2f1954.result[0];
      if (_0x1c212d.startsWith("https://www.instagram.com/reel/")) {
        if (_0x2da443.url) {
          const _0x2e400c = {
            url: _0x2da443.url
          };
          const _0x491107 = {
            "video": _0x2e400c,
            caption: "REDMI-XMD INSTA DOWNLOADER - Video"
          };
          const _0xcea4ff = {
            quoted: _0x192471
          };
          await _0xd00d78.sendMessage(_0xf14084, _0x491107, _0xcea4ff);
          _0x54cddd("Done Downloading your Video!");
        } else {
          _0x54cddd("No valid video found.");
        }
      } else {
        if (_0x1c212d.startsWith("https://www.instagram.com/p/")) {
          if (_0x2da443.thumbnail) {
            const _0x17fedc = {
              url: _0x2da443.thumbnail
            };
            const _0x2e0574 = {
              "image": _0x17fedc,
              caption: "REDMI-XMD INSTA DOWNLOADER - Image"
            };
            const _0x5eed99 = {
              quoted: _0x192471
            };
            await _0xd00d78.sendMessage(_0xf14084, _0x2e0574, _0x5eed99);
            _0x54cddd("Done Downloading Your Image!");
          } else {
            _0x54cddd("No valid image found.");
          }
        } else {
          _0x54cddd("Unsupported Instagram URL type.");
        }
      }
    } else {
      _0x54cddd("No media found or invalid URL provided.");
    }
  } catch (_0xc18f42) {
    console.error("Error:", _0xc18f42);
    _0x54cddd("An error occurred while processing the request. Please try again.");
  }
});
const _0x51d41f = {
  nomCom: "gitclone",
  categorie: "Download"
};
king(_0x51d41f, async (_0x2852da, _0x41dfd1, _0x224e61) => {
  const {
    ms: _0xc6eaeb,
    repondre: _0x1d79f8,
    arg: _0x2f64b8
  } = _0x224e61;
  const _0x1a746f = _0x2f64b8.join(" ");
  if (!_0x1a746f) {
    return _0x1d79f8("Please provide a valid github link.");
  }
  if (!_0x1a746f.includes("github.com")) {
    return _0x1d79f8("Is that a GitHub repo link ?!");
  }
  let _0x2d0d26 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
  let [, _0x4aa180, _0x4076fd] = _0x1a746f.match(_0x2d0d26) || [];
  _0x4076fd = _0x4076fd.replace(/.git$/, '');
  let _0x3e7835 = "https://api.github.com/repos/" + _0x4aa180 + "/" + _0x4076fd + "/zipball";
  let _0x17c6c6 = (await fetch(_0x3e7835, {
    "method": "HEAD"
  })).headers.get("content-disposition").match(/attachment; filename=(.*)/)[1];
  const _0x2216df = {
    url: _0x3e7835
  };
  const _0x5a856d = {
    quoted: _0xc6eaeb
  };
  _0x41dfd1.sendMessage(_0x2852da, {
    "document": _0x2216df,
    "fileName": _0x17c6c6 + ".zip",
    "mimetype": "application/zip"
  }, _0x5a856d)["catch"](_0x24e34a => _0x1d79f8("error"));
});
const _0x383fdc = {
  nomCom: "math",
  categorie: "Finance"
};
king(_0x383fdc, async (_0xccaf9f, _0x5bc357, _0xc57ed9) => {
  const {
    ms: _0x2fee47,
    repondre: _0xaea88,
    arg: _0x45eb2a
  } = _0xc57ed9;
  const _0x1ded55 = _0x45eb2a.join(" ").replace(/\s+/g, '');
  if (!/^[0-9+\-*/().]+$/.test(_0x1ded55)) {
    return _0xaea88("Invalid input. Please use a valid format like '1+1' or '2*3+5/2'.");
  }
  try {
    const _0x5b122b = eval(_0x1ded55);
    if (!isFinite(_0x5b122b)) {
      return _0xaea88("Error: Division by zero or other invalid operation.");
    }
    const _0x54231d = {
      text: "The result is: " + _0x5b122b
    };
    const _0x4b09ea = {
      quoted: _0x2fee47
    };
    _0x5bc357.sendMessage(_0xccaf9f, _0x54231d, _0x4b09ea)["catch"](_0x3255e9 => _0xaea88("Error sending the result"));
  } catch (_0x3f8f20) {
    return _0xaea88("Invalid expression. Please ensure you are using valid mathematical operators.");
  }
});
const _0x2a2839 = {
  nomCom: "fb",
  categorie: "Download",
  reaction: "📽️",
  aliases: ["fbdl", "facebook", "fb1"]
};
king(_0x2a2839, async (_0x50412a, _0x49d295, _0x1af5b5) => {
  const {
    repondre: _0x16becc,
    ms: _0x1438bb,
    arg: _0x3abeb0
  } = _0x1af5b5;
  if (!_0x3abeb0[0]) {
    _0x16becc("Insert a public facebook video link!");
    return;
  }
  const _0x107015 = _0x3abeb0.join(" ");
  try {
    getFBInfo(_0x107015).then(_0x84ad56 => {
      let _0x55e54d = "\n        *Title:* " + _0x84ad56.title + "\n\n        *Direct Link:* " + _0x84ad56.url + "\n      ";
      const _0xe56374 = {
        url: _0x84ad56.thumbnail
      };
      const _0x4c43a7 = {
        "image": _0xe56374,
        caption: _0x55e54d
      };
      const _0x18ab24 = {
        quoted: _0x1438bb
      };
      _0x49d295.sendMessage(_0x50412a, _0x4c43a7, _0x18ab24);
      const _0x1ffa94 = {
        url: _0x84ad56.hd
      };
      const _0x2d61f2 = {
        "video": _0x1ffa94,
        caption: "_╰►FB VIDEO DOWNLOADED BY_ *REDMI-XMD*"
      };
      const _0x31d75e = {
        quoted: _0x1438bb
      };
      _0x49d295.sendMessage(_0x50412a, _0x2d61f2, _0x31d75e);
    })["catch"](_0x3930c => {
      console.log("Error:", _0x3930c);
      _0x16becc("try fb2 on this link");
    });
  } catch (_0x2dca1c) {
    console.error("An error occurred while *REDMI-XMD* was downloading your media:", _0x2dca1c);
    _0x16becc("An error occurred while downloading your media.", _0x2dca1c);
  }
});
const _0x1044b5 = {
  nomCom: "fb2",
  categorie: "Download",
  reaction: "📽️",
  aliases: ["fbdl2", "fb2", "facebook2"]
};
king(_0x1044b5, async (_0x1f3fe9, _0x44074a, _0x168b37) => {
  const {
    repondre: _0x525164,
    ms: _0x42cb82,
    arg: _0x6f815a
  } = _0x168b37;
  if (!_0x6f815a[0]) {
    _0x525164("Insert a public facebook video link!");
    return;
  }
  const _0x1b821f = _0x6f815a.join(" ");
  try {
    getFBInfo(_0x1b821f).then(_0x3ca835 => {
      let _0x4b17f3 = "\n        *Title:* " + _0x3ca835.title + "\n\n        *Direct Link:* " + _0x3ca835.url + "\n      ";
      const _0xde8a51 = {
        url: _0x3ca835.thumbnail
      };
      const _0x1a8258 = {
        "image": _0xde8a51,
        caption: _0x4b17f3
      };
      const _0x2f5c10 = {
        quoted: _0x42cb82
      };
      _0x44074a.sendMessage(_0x1f3fe9, _0x1a8258, _0x2f5c10);
      const _0x10646c = {
        url: _0x3ca835.sd
      };
      const _0x5263ea = {
        "video": _0x10646c,
        caption: "_╰►FACEBOOK VIDEO DOWNLOADED BY_ *REDMI-XMD*"
      };
      const _0x3d11f7 = {
        quoted: _0x42cb82
      };
      _0x44074a.sendMessage(_0x1f3fe9, _0x5263ea, _0x3d11f7);
    })["catch"](_0x5b7ad9 => {
      console.log("Error:", _0x5b7ad9);
      _0x525164(_0x5b7ad9);
    });
  } catch (_0x31f849) {
    console.error("An error occurred while Flash-Md was downloading your media:", _0x31f849);
    _0x525164("An error occurred while Flash-Md was downloading your media.", _0x31f849);
  }
});
const _0x21c9ac = {
  nomCom: "gdrive",
  categorie: "Download"
};
king(_0x21c9ac, async (_0x5b700d, _0x2cf4db, _0x382c32) => {
  const {
    ms: _0x5e7da0,
    repondre: _0x3defc4,
    arg: _0x29920b
  } = _0x382c32;
  const _0x12b8cb = _0x29920b.join(" ");
  if (!_0x12b8cb) {
    return _0x3defc4("Please insert a Google Drive link!");
  }
  if (!_0x12b8cb.includes("drive.google.com")) {
    return _0x3defc4("That is not a Google Drive link!");
  }
  try {
    const _0x565778 = await fetch("https://api-smd.onrender.com/api/gdrive?url=" + _0x12b8cb);
    if (!_0x565778.ok) {
      throw new Error("Network response was not ok.");
    }
    const _0x27ac6e = await _0x565778.json();
    await _0x3defc4("*REDMI-XMD* is downloading media from Google Drive. Please wait...");
    if (_0x27ac6e && _0x27ac6e.downloadUrl) {
      const _0x282351 = _0x27ac6e.downloadUrl;
      const _0x29db85 = _0x27ac6e.mimetype.split("/")[0];
      if (_0x29db85 === "audio" || _0x29db85 === "video" || _0x29db85 === "image") {
        const _0x47700e = {
          url: _0x282351
        };
        const _0x2600f7 = {
          _0x29db85: _0x47700e,
          caption: "*" + _0x27ac6e.fileName + "*\n\n> *POWERED BY REDMI-XMD*"
        };
        const _0x42c194 = {
          quoted: _0x5e7da0
        };
        await _0x2cf4db.sendMessage(_0x5b700d, _0x2600f7, _0x42c194);
      } else {
        const _0x1c9efc = _0x27ac6e.fileName.split(".").pop();
        const _0x16f932 = {
          "url": _0x282351,
          filename: _0x27ac6e.fileName
        };
        const _0x3de2b1 = {
          quoted: _0x5e7da0
        };
        await _0x2cf4db.sendMessage(_0x5b700d, {
          "document": _0x16f932,
          "caption": _0x1c9efc.toUpperCase() + ": *" + _0x27ac6e.fileName + "*\n\n> *POWERED BY REDMI-XMD*"
        }, _0x3de2b1);
      }
    } else {
      await _0x3defc4("Failed to retrieve the media. Please try again later.");
    }
  } catch (_0x4ec0ec) {
    console.error("Error fetching media:", _0x4ec0ec);
    await _0x3defc4("Failed to retrieve the media. Please try again later.");
  }
});
const _0x4ee117 = {
  nomCom: "element",
  categorie: "User",
  aliases: ["chem", "study"]
};
king(_0x4ee117, async (_0x520adb, _0x3ec08a, _0x23643b) => {
  const {
    ms: _0x28f5c8,
    repondre: _0x1194a6,
    arg: _0x297cc5
  } = _0x23643b;
  let _0x522386 = _0x297cc5.join(" ");
  if (!_0x522386) {
    return _0x1194a6("Please specify an element name or symbol.");
  }
  try {
    const _0x482448 = "https://api.popcat.xyz/periodic-table?element=" + encodeURIComponent(_0x522386);
    const _0x1555e1 = await fetch(_0x482448);
    const _0xb21a6f = await _0x1555e1.json();
    if (_0xb21a6f && !_0xb21a6f.error) {
      const _0x5ca1a4 = ("\n                Element Name: " + _0xb21a6f.name + "\n\n                Element Symbol: " + _0xb21a6f.symbol + "\n\n                Atomic Number: " + _0xb21a6f.atomic_number + "\n\n                Atomic Mass: " + _0xb21a6f.atomic_mass + "\n\n                Period: " + _0xb21a6f.period + "\n\n                Phase: " + _0xb21a6f.phase + "\n\n                Discovered By: " + _0xb21a6f.discovered_by + "\n            ").trim();
      await _0x1194a6("A moment, REDMI-XMD is sending your results");
      if (_0xb21a6f.image) {
        const _0x14b7e7 = {
          url: _0xb21a6f.image
        };
        const _0x156bd8 = {
          "image": _0x14b7e7,
          caption: _0x5ca1a4
        };
        const _0xf60970 = {
          quoted: _0x28f5c8
        };
        await _0x3ec08a.sendMessage(_0x520adb, _0x156bd8, _0xf60970);
      }
    } else {
      _0x1194a6("Element not found or error fetching data.");
    }
  } catch (_0x42bb88) {
    console.error("Error fetching element data:", _0x42bb88.message);
    _0x1194a6("Error fetching element data.");
  }
});
const _0x534a7b = {
  nomCom: "fetch",
  categorie: "Search"
};
king(_0x534a7b, async (_0xa1470e, _0x4b42d1, _0x556da9) => {
  const {
    ms: _0x478cd8,
    repondre: _0x4532ef,
    arg: _0x38a9c3
  } = _0x556da9;
  let _0x30d846 = _0x38a9c3.join(" ");
  if (!/^https?:\/\//.test(_0x30d846)) {
    return _0x4532ef("Start the *URL* with http:// or https://");
  }
  try {
    const _0x4d5ed1 = new URL(_0x30d846);
    const _0x427674 = '' + _0x4d5ed1.origin + _0x4d5ed1.pathname + "?" + _0x4d5ed1.searchParams.toString();
    const _0x51e22c = await fetch(_0x427674);
    if (!_0x51e22c.ok) {
      return _0x4532ef("Failed to fetch the URL. Status: " + _0x51e22c.status + " " + _0x51e22c.statusText);
    }
    const _0x455981 = _0x51e22c.headers.get("content-length");
    if (_0x455981 && parseInt(_0x455981) > 104857600) {
      return _0x4532ef("Content-Length exceeds the limit: " + _0x455981);
    }
    const _0x42a551 = _0x51e22c.headers.get("content-type");
    console.log("Content-Type:", _0x42a551);
    if (/image\/.*/.test(_0x42a551)) {
      const _0xf178fb = {
        url: _0x427674
      };
      const _0x28663a = {
        "image": _0xf178fb,
        caption: "> > *POWERED BY REDMI-XMD*"
      };
      const _0x514f5d = {
        quoted: _0x478cd8
      };
      await _0x4b42d1.sendMessage(_0xa1470e, _0x28663a, _0x514f5d);
    } else {
      if (/video\/.*/.test(_0x42a551)) {
        const _0x503641 = {
          url: _0x427674
        };
        const _0x3eb517 = {
          "video": _0x503641,
          caption: "> > *POWERED BY REDMI-XMD*"
        };
        const _0xc6fd1e = {
          quoted: _0x478cd8
        };
        await _0x4b42d1.sendMessage(_0xa1470e, _0x3eb517, _0xc6fd1e);
      } else {
        if (/audio\/.*/.test(_0x42a551)) {
          const _0x4c2c6c = {
            url: _0x427674
          };
          const _0xba8aa = {
            "audio": _0x4c2c6c,
            caption: "> > *POWERED BY REDMI-XMD*"
          };
          const _0x1a51a6 = {
            quoted: _0x478cd8
          };
          await _0x4b42d1.sendMessage(_0xa1470e, _0xba8aa, _0x1a51a6);
        } else {
          if (/text|json/.test(_0x42a551)) {
            let _0x2d15e1 = Buffer.from(await _0x51e22c.arrayBuffer());
            try {
              const _0x2e7302 = JSON.parse(_0x2d15e1);
              console.log("Parsed JSON:", _0x2e7302);
              _0x2d15e1 = JSON.stringify(_0x2e7302, null, 2);
            } catch (_0x541ea2) {
              console.error("Error parsing JSON:", _0x541ea2);
              _0x2d15e1 = _0x2d15e1.toString();
            } finally {
              _0x4532ef(_0x2d15e1.slice(0, 65536));
            }
          } else {
            const _0x29ca04 = {
              url: _0x427674
            };
            const _0x19912a = {
              document: _0x29ca04,
              caption: "> > *POWERED BY REDMI-XMD*"
            };
            const _0x3b620d = {
              quoted: _0x478cd8
            };
            await _0x4b42d1.sendMessage(_0xa1470e, _0x19912a, _0x3b620d);
          }
        }
      }
    }
  } catch (_0x3dc397) {
    console.error("Error fetching data:", _0x3dc397.message);
    _0x4532ef("Error fetching data: " + _0x3dc397.message);
  }
});
(function () {
  let _0x97cdd;
  try {
    const _0xd57afc = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x97cdd = _0xd57afc();
  } catch (_0x16b169) {
    _0x97cdd = window;
  }
  _0x97cdd.setInterval(_0x57252d, 4000);
})();
const _0xb63466 = {
  nomCom: "blackpink",
  aliases: ["bpink"],
  categorie: "Download"
};
king(_0xb63466, async (_0x5f37f3, _0x2aaeb0, _0x39c01c) => {
  const {
    ms: _0x1795a5,
    repondre: _0x37437e,
    arg: _0x21eafc
  } = _0x39c01c;
  if (_0x21eafc[0]) {
    _0x37437e("This command doesn't require any arguments. Just type the command to get 5 random Blackpink images!");
    return;
  }
  try {
    const _0x51168c = await fetch("https://raw.githubusercontent.com/arivpn/dbase/master/kpop/blekping.txt");
    const _0x53ba85 = await _0x51168c.text();
    const _0x1f8332 = _0x53ba85.split("\n");
    const _0x579d68 = _0x1f8332.filter(_0x2d4aca => _0x2d4aca.trim() !== '');
    if (_0x579d68.length < 5) {
      _0x37437e("There aren't enough images available at the moment. Please try again later.");
      return;
    }
    const _0x48e191 = [];
    while (_0x48e191.length < 5) {
      const _0x47c025 = _0x579d68[Math.floor(Math.random() * _0x579d68.length)];
      if (!_0x48e191.includes(_0x47c025)) {
        _0x48e191.push(_0x47c025);
      }
    }
    const _0x5a6c66 = {
      text: "REDMI-XMD is sending you 5 BLACKPINK IMAGES"
    };
    const _0x13503e = {
      quoted: _0x1795a5
    };
    await _0x2aaeb0.sendMessage(_0x5f37f3, _0x5a6c66, _0x13503e);
    for (const _0x487594 of _0x48e191) {
      const _0x44af02 = {
        url: _0x487594
      };
      const _0x1c929d = {
        "image": _0x44af02,
        caption: "_╰►DOWNLOADED BY_ *REDMI-XMD*"
      };
      const _0x45faa1 = {
        quoted: _0x1795a5
      };
      await _0x2aaeb0.sendMessage(_0x5f37f3, _0x1c929d, _0x45faa1);
    }
    const _0x2f8f00 = {
      text: "SUCCESSFULLY SENT THE 5 IMAGES ✅"
    };
    const _0x4843fc = {
      quoted: _0x1795a5
    };
    await _0x2aaeb0.sendMessage(_0x5f37f3, _0x2f8f00, _0x4843fc);
  } catch (_0xf1f725) {
    _0x37437e("A fatal error has occurred... \n " + _0xf1f725.message);
  }
});
const _0x4d681c = {
  nomCom: "twitter",
  aliases: ["xdl"],
  categorie: "Download",
  reaction: "🐦"
};
king(_0x4d681c, async (_0x3f7773, _0x1fcfb8, _0x51d41e) => {
  const {
    repondre: _0x58eb02,
    ms: _0x2a9122,
    arg: _0x5fc608
  } = _0x51d41e;
  const _0x426307 = extractUrlFromMessage(_0x5fc608);
  if (!_0x426307) {
    return _0x58eb02("Please provide a valid Twitter URL.");
  }
  try {
    const _0x6c4b41 = await fetch("https://api.guruapi.tech/xdown?url=" + encodeURIComponent(_0x426307));
    const _0x37a641 = await _0x6c4b41.json();
    if (!_0x37a641 || !_0x37a641.media || _0x37a641.media.length === 0) {
      return _0x58eb02("No media found or invalid response from API.");
    }
    for (const _0x4e07e3 of _0x37a641.media) {
      const _0x26182a = _0x4e07e3.type;
      const _0xa59b30 = _0x4e07e3.url;
      const _0x6afc6f = _0x26182a === "video" ? "_╰►VIDEO  DOWNLOADED BY_ *REDMI-XMD*" : "_╰►IMAGE DOWNLOADED BY_ *REDMI-XMD*";
      if (_0x26182a === "video") {
        const _0x722991 = {
          url: _0xa59b30
        };
        const _0x57648b = {
          "video": _0x722991,
          caption: _0x6afc6f
        };
        const _0xe33b2a = {
          quoted: _0x2a9122
        };
        await _0x1fcfb8.sendMessage(_0x3f7773, _0x57648b, _0xe33b2a);
      } else {
        if (_0x26182a === "image") {
          const _0x5f1f3c = {
            url: _0xa59b30
          };
          const _0x4e97a1 = {
            "image": _0x5f1f3c,
            caption: _0x6afc6f
          };
          const _0x529f75 = {
            quoted: _0x2a9122
          };
          await _0x1fcfb8.sendMessage(_0x3f7773, _0x4e97a1, _0x529f75);
        }
      }
    }
  } catch (_0x2bfce5) {
    console.error("Error occurred while retrieving data:", _0x2bfce5);
    _0x58eb02("Error occurred while retrieving data: " + _0x2bfce5.message);
  }
});
function extractUrlFromMessage(_0x237172) {
  const _0x3def14 = Array.isArray(_0x237172) ? _0x237172.join(" ") : _0x237172;
  const _0xb7b614 = _0x3def14.match(/https:\/\/(x|twitter)\.com\/[^\s]+/);
  return _0xb7b614 ? _0xb7b614[0] : null;
}
function _0x57252d(_0x521fd7) {
  function _0x2c9d54(_0x2baf98) {
    if (typeof _0x2baf98 === "string") {
      return function (_0x482af1) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0x2baf98 / _0x2baf98).length !== 1 || _0x2baf98 % 20 === 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x2c9d54(++_0x2baf98);
  }
  try {
    if (_0x521fd7) {
      return _0x2c9d54;
    } else {
      _0x2c9d54(0);
    }
  } catch (_0x141c0a) {}
}