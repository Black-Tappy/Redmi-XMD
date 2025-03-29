const { fetchJson } = require('../../lib/myfunc');
const { ringtone } = require('../../lib/scraper');
const fetch = require('node-fetch'); 
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const yts = require('yt-search');

module.exports = [
 {
  command: ['apk', 'apkdl'],
  operate: async ({ m, text, Cypher, botname, reply }) => {
    if (!text) return reply("*Which apk do you want to download?*");
    
    try {
      let apiUrl = await fetchJson(`https://bk9.fun/search/apk?q=${text}`);
      let tylor = await fetchJson(`https://bk9.fun/download/apk?id=${apiUrl.BK9[0].id}`);

      await Cypher.sendMessage(
        m.chat,
        {
          document: { url: tylor.BK9.dllink },
          fileName: tylor.BK9.name,
          mimetype: "application/vnd.android.package-archive",
          contextInfo: {
            externalAdReply: {
              title: botname,
              body: `${tylor.BK9.name}`,
              thumbnailUrl: `${tylor.BK9.icon}`,
              sourceUrl: `${tylor.BK9.dllink}`,
              mediaType: 2,
              showAdAttribution: true,
              renderLargerThumbnail: false
            }
          }
        },
        { quoted: m }
      );
    } catch (error) {
      reply(`*Error fetching APK details*\n${error.message}`);
    }
  }
 },
  {
  command: ['download'],
  operate: async ({ m, text, Cypher, reply }) => {
    if (!text) return reply('Enter download URL');
    
    try {
      let res = await fetch(text, { method: 'GET', redirect: 'follow' });
      let contentType = res.headers.get('content-type');
      let buffer = await res.buffer();
      let extension = contentType.split('/')[1]; 
      let filename = res.headers.get('content-disposition')?.match(/filename="(.*)"/)?.[1] || `download-${Math.random().toString(36).slice(2, 10)}.${extension}`;

      let mimeType;
      switch (contentType) {
        case 'audio/mpeg':
          mimeType = 'audio/mpeg';
          break;
        case 'image/png':
          mimeType = 'image/png';
          break;
        case 'image/jpeg':
          mimeType = 'image/jpeg';
          break;
        case 'application/pdf':
          mimeType = 'application/pdf';
          break;
        case 'application/zip':
          mimeType = 'application/zip';
          break;
        case 'video/mp4':
          mimeType = 'video/mp4';
          break;
        case 'video/webm':
          mimeType = 'video/webm';
          break;
        case 'application/vnd.android.package-archive':
          mimeType = 'application/vnd.android.package-archive';
          break;
        default:
          mimeType = 'application/octet-stream';
      }

      Cypher.sendMessage(m.chat, { document: buffer, mimetype: mimeType, fileName: filename }, { quoted: m });
    } catch (error) {
      reply(`Error downloading file: ${error.message}`);
    }
  }
},
  {
  command: ['facebook', 'fbdl'],
  operate: async ({ m, text, Cypher, reply }) => {
    if (!text) return reply(`*Please provide a Facebook video url!*`);
    
    try {
      var dlink = await fetchJson(`https://api-aswin-sparky.koyeb.app/api/downloader/fbdl?url=${text}`);
      var dlurl = dlink.data.high;
      
      await Cypher.sendMessage(m.chat, {
        video: {
          url: dlurl,
          caption: global.botname
        }
      }, {
        quoted: m
      });
    } catch (error) {
      reply(`Error fetching video: ${error.message}`);
    }
  }
},
  {
  command: ['gdrive'],
  operate: async ({ Cypher, m, reply, text }) => {
    if (!text) return reply("*Please provide a Google Drive file URL*");

    try {
      let response = await fetch(`https://api.siputzx.my.id/api/d/gdrive?url=${encodeURIComponent(text)}`);
      let data = await response.json();

      if (response.status !== 200 || !data.status || !data.data) {
        return reply("*Please try again later or try another command!*");
      } else {
        const downloadUrl = data.data.download;
        const filePath = path.join(__dirname, `${data.data.name}`);

        const writer = fs.createWriteStream(filePath);
        const fileResponse = await axios({
          url: downloadUrl,
          method: 'GET',
          responseType: 'stream'
        });

        fileResponse.data.pipe(writer);

        writer.on('finish', async () => {
          await Cypher.sendMessage(m.chat, {
            document: { url: filePath },
            fileName: data.data.name,
            mimetype: fileResponse.headers['content-type']
          });

          fs.unlinkSync(filePath);
        });

        writer.on('error', (err) => {
          console.error('Error downloading the file:', err);
          reply("An error occurred while downloading the file.");
        });
      }
    } catch (error) {
      console.error('Error fetching Google Drive file details:', error);
      reply("An error occurred while fetching the Google Drive file details.");
    }
  }
},
  {
  command: ['gitclone'],
  operate: async ({ m, args, prefix, command, Cypher, reply, mess, isUrl }) => {
    if (!args[0])
      return reply(`*GitHub link to clone?*\nExample :\n${prefix}${command} https://github.com/Dark-Xploit/CypherX`);
    
    if (!isUrl(args[0]))
      return reply("*Link invalid! Please provide a valid URL.*");

    const regex1 = /(?:https|git)(?::\/\/|@)(www\.)?github\.com[\/:]([^\/:]+)\/(.+)/i;
    const [, , user, repo] = args[0].match(regex1) || [];
    
    if (!repo) {
      return reply("*Invalid GitHub link format. Please double-check the provided link.*");
    }
    
    const repoName = repo.replace(/.git$/, "");
    const url = `https://api.github.com/repos/${user}/${repoName}/zipball`;
    
    try {
      const response = await fetch(url, { method: "HEAD" });
      const filename = response.headers
        .get("content-disposition")
        .match(/attachment; filename=(.*)/)[1];
      
      await Cypher.sendMessage(
        m.chat,
        {
          document: { url: url },
          fileName: filename + ".zip",
          mimetype: "application/zip",
        },
        { quoted: m }
      );
    } catch (err) {
      console.error(err);
      reply(mess.error);
    }
  }
},
 {
  command: ['image', 'img'],
  operate: async ({ Cypher, m, reply, text }) => {
    if (!text) return reply("*Please provide a search query*");

    try {
      let response = await fetch(`https://api.siputzx.my.id/api/s/pinterest?query=${encodeURIComponent(text)}`);
      let data = await response.json();

      if (response.status !== 200 || !data.status || !data.data || data.data.length === 0) {
        return reply("*Please try again later or try another command!*");
      } else {
        // Send the first 5 images
        const images = data.data.slice(0, 5);

        for (const image of images) {
          await Cypher.sendMessage(m.chat, {
            image: { url: image.images_url },
          });
        }
      }
    } catch (error) {
      console.error('Error fetching images:', error);
      reply("An error occurred while fetching images.");
    }
  }
},
 {
  command: ['instagram', 'igdl'],
  operate: async ({ Cypher, m, reply, text }) => {
    if (!text) return reply('*Please provide an Instagram URL!*');

    const apiUrl = `https://xploader-api.vercel.app/igdl?url=${encodeURIComponent(text)}`;
    
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (!data || data.url.length === 0) return reply('*Failed to retrieve the video!*');

      const videoUrl = data.url;
      const title = `Instagram Video`;

      await Cypher.sendMessage(m.chat, {
        video: { url: videoUrl },
        mimetype: 'video/mp4',
        fileName: `${title}.mp4`
      }, { quoted: m });
    } catch (error) {
      console.error('Download command failed:', error);
      m.reply(`Error: ${error.message}`);
    }
  }
},
  {
  command: ['itunes'],
  operate: async ({ m, text, Cypher, reply }) => {
    if (!text) return reply("*Please provide a song name*");
    
    try {
      let res = await fetch(`https://api.popcat.xyz/itunes?q=${encodeURIComponent(text)}`);
      if (!res.ok) {
        throw new Error(`*API request failed with status ${res.status}*`);
      }
      let json = await res.json();
      let songInfo = `*Song Information:*\n
 • *Name:* ${json.name}\n
 • *Artist:* ${json.artist}\n
 • *Album:* ${json.album}\n
 • *Release Date:* ${json.release_date}\n
 • *Price:* ${json.price}\n
 • *Length:* ${json.length}\n
 • *Genre:* ${json.genre}\n
 • *URL:* ${json.url}`;
     
      if (json.thumbnail) {
        await Cypher.sendMessage(
          m.chat,
          { image: { url: json.thumbnail }, caption: songInfo },
          { quoted: m }
        );
      } else {
        reply(songInfo);
      }
    } catch (error) {
      console.error(error);
      reply(`Error fetching song information: ${error.message}`);
    }
  }
},
  {
  command: ['mediafire'],
  operate: async ({ Cypher, m, reply, text }) => {
    if (!text) return reply("*Please provide a MediaFire file URL*");

    try {
      let response = await fetch(`https://api.siputzx.my.id/api/d/mediafire?url=${encodeURIComponent(text)}`);
      let data = await response.json();

      if (response.status !== 200 || !data.status || !data.data) {
        return reply("*Please try again later or try another command!*");
      } else {
        const downloadUrl = data.data.downloadLink;
        const filePath = path.join(__dirname, `${data.data.fileName}.zip`);

        const writer = fs.createWriteStream(filePath);
        const fileResponse = await axios({
          url: downloadUrl,
          method: 'GET',
          responseType: 'stream'
        });

        fileResponse.data.pipe(writer);

        writer.on('finish', async () => {
          
          await Cypher.sendMessage(m.chat, {
            document: { url: filePath },
            fileName: data.data.fileName,
            mimetype: 'application/zip'
          });

          fs.unlinkSync(filePath);
        });

        writer.on('error', (err) => {
          console.error('Error downloading the file:', err);
          reply("An error occurred while downloading the file.");
        });
      }
    } catch (error) {
      console.error('Error fetching MediaFire file details:', error);
      reply("An error occurred while fetching the MediaFire file details.");
    }
  }
},
  {
  command: ['pinterest'],
  operate: async ({ Cypher, m, reply, text }) => {
    if (!text) return reply("*Please provide a search query*");

    try {
      let response = await fetch(`https://api.siputzx.my.id/api/s/pinterest?query=${encodeURIComponent(text)}`);
      let data = await response.json();

      if (response.status !== 200 || !data.status || !data.data || data.data.length === 0) {
        return reply("*Please try again later or try another command!*");
      } else {
        // Send only the first image
        const image = data.data[0];

        await Cypher.sendMessage(m.chat, {
          image: { url: image.images_url },
          caption: `Title: ${image.grid_title}\nLink: ${image.link}`
        });
      }
    } catch (error) {
      console.error('Error fetching Pinterest images:', error);
      reply("An error occurred while fetching Pinterest images.");
    }
  }
},
 {
  command: ['play', 'song'],
  operate: async ({ Cypher, m, reply, text, fetchMp3DownloadUrl }) => {
    if (!text) return reply('*Please provide a song name!*');

    try {
      const search = await yts(text);
      if (!search || search.all.length === 0) return reply('*The song you are looking for was not found.*');

      const video = search.all[0];
      const downloadUrl = await fetchMp3DownloadUrl(video.url);

      await Cypher.sendMessage(m.chat, {
        audio: { url: downloadUrl },
        mimetype: 'audio/mpeg',
        fileName: `${video.title}.mp3`
      }, { quoted: m });

    } catch (error) {
      console.error('play command failed:', error);
      reply(`Error: ${error.message}`);
    }
  }
},
  {
  command: ['playdoc', 'songdoc'],
  operate: async ({ Cypher, m, reply, text, fetchMp3DownloadUrl }) => {
    if (!text) return reply('*Please provide a song name!*');

    try {
      const search = await yts(text);
      if (!search || search.all.length === 0) return reply('*The song you are looking for was not found.*');

      const video = search.all[0];
      const downloadUrl = await fetchMp3DownloadUrl(video.url);

      await Cypher.sendMessage(m.chat, {
        document: { url: downloadUrl },
        mimetype: 'audio/mpeg',
        fileName: `${video.title}.mp3`
      }, { quoted: m });

    } catch (error) {
      console.error('playdoc command failed:', error);
      reply(`Error: ${error.message}`);
    }
  }
},
 {
  command: ['ringtone'],
  operate: async ({ m, text, prefix, command, Cypher, reply }) => {
    if (!text) return reply(`*Example: ${prefix + command} black rover*`);
    
    try {
      let dltone2 = await ringtone.ringtone(text);
      let result = dltone2[Math.floor(Math.random() * dltone2.length)];
      
      await Cypher.sendMessage(
        m.chat,
        {
          audio: { url: result.audio },
          fileName: result.title + ".mp3",
          mimetype: "audio/mpeg",
        },
        { quoted: m }
      );
    } catch (error) {
      reply(`Error fetching ringtone: ${error.message}`);
    }
  }
},
  {
  command: ['savestatus', 'save'],
  operate: async ({ m, saveStatusMessage }) => {
    await saveStatusMessage(m);
  }
},
 {
  command: ['tiktok', 'tikdl', 'tiktokvideo'],
  operate: async ({ m, args, fetchJson, Cypher, reply }) => {
    if (!args[0]) return reply('*Please provide a TikTok video url!*');
    
    try {
      let apiUrl = await fetchJson(`https://api-aswin-sparky.koyeb.app/api/downloader/tiktok?url=${args[0]}`);
      
      await Cypher.sendMessage(
        m.chat,
        {
          caption: global.wm,
          video: { url: apiUrl.data.video },
          fileName: "video.mp4",
          mimetype: "video/mp4",
        },
        { quoted: m }
      );
    } catch (error) {
      reply(`Error fetching video: ${error.message}`);
    }
  }
},
 {
  command: ['tiktokaudio'],
  operate: async ({ m, args, fetchJson, Cypher, reply }) => {
    if (!args[0]) return reply('*Please provide a TikTok audio url!*');
    
    try {
      let apiUrl = await fetchJson(`https://api-aswin-sparky.koyeb.app/api/downloader/tiktok?url=${args[0]}`);
      
      await Cypher.sendMessage(
        m.chat,
        {
          audio: { url: apiUrl.data.audio },
          fileName: "tiktok.mp3",
          mimetype: "audio/mpeg",
        },
        { quoted: m }
      );
    } catch (error) {
      reply(`Error fetching audio: ${error.message}`);
    }
  }
},
  {
  command: ['video'],
  operate: async ({ Cypher, m, reply, text, fetchVideoDownloadUrl }) => {
    if (!text) return reply('*Please provide a song name!*');

    try {
      const search = await yts(text);
      if (!search || search.all.length === 0) return reply('*The song you are looking for was not found.*');

      const video = search.all[0]; 
      const videoData = await fetchVideoDownloadUrl(video.url);

      await Cypher.sendMessage(m.chat, {
        video: { url: videoData.data.dl }, 
        mimetype: 'video/mp4',
        fileName: `${videoData.data.title}.mp4`,
        caption: videoData.data.title
      }, { quoted: m });

    } catch (error) {
      console.error('video command failed:', error);
      reply(`Error: ${error.message}`);
    }
  }
},
{
  command: ['videodoc'],
  operate: async ({ Cypher, m, reply, text, fetchVideoDownloadUrl }) => {
    if (!text) return reply('*Please provide a song name!*');

    try {
      const search = await yts(text);
      if (!search || search.all.length === 0) return reply('*The song you are looking for was not found.*');

      const video = search.all[0]; 
      const videoData = await fetchVideoDownloadUrl(video.url);

      await Cypher.sendMessage(m.chat, {
        document: { url: videoData.data.dl },
        mimetype: 'video/mp4',
        fileName: `${videoData.data.title}.mp4`,
        caption: videoData.data.title
      }, { quoted: m });

    } catch (error) {
      console.error('videodoc command failed:', error);
      reply(`Error: ${error.message}`);
    }
  }
},
  {
  command: ['videodoc'],
  operate: async ({ Cypher, m, reply, text, fetchVideoDownloadUrl }) => {
    if (!text) return reply('*Please provide a song name!*');

    try {
      const search = await yts(text);
      if (!search || search.all.length === 0) return reply('*The song you are looking for was not found.*');

      const video = search.all[0]; 
      const videoData = await fetchVideoDownloadUrl(video.url);

      await Cypher.sendMessage(m.chat, {
        document: { url: videoData.data.dl },
        mimetype: 'video/mp4',
        fileName: `${videoData.data.title}.mp4`,
        caption: videoData.data.title
      }, { quoted: m });

    } catch (error) {
      console.error('videodoc command failed:', error);
      reply(`Error: ${error.message}`);
    }
  }
},
 {
  command: ['xvideos', 'porn', 'xdl'],
  operate: async ({ m, text, isCreator, reply, mess, Cypher, fetchJson, quoted }) => {
  if (!isCreator) return reply(mess.owner);
	if (!text) return reply('*Please provide a porn video search query!*');
    let kutu = await fetchJson(`https://api-aswin-sparky.koyeb.app/api/search/xnxx?search=${text}`)
	let apiUrl = await fetchJson(`https://api-aswin-sparky.koyeb.app/api/downloader/xnxx?url=${kutu.result.result[0].link}`)
await Cypher.sendMessage(m.chat, {
 video: {url: apiUrl.data.files.high}, 
 caption: global.wm,
 contextInfo: {
        externalAdReply: {
          title: global.botname,
          body: `${kutu.result.result[0].title}`,
          sourceUrl: `${kutu.result.result[0].link}`,
          mediaType: 2,
          mediaUrl: `${kutu.result.result[0].link}`,
        }
      }
    }, { quoted: m });
    
	let kyut = await fetchJson(`https://api-aswin-sparky.koyeb.app/api/downloader/xnxx?url=${kutu.result.result[1].link}`)
await Cypher.sendMessage(m.chat, {
 video: {url: kyut.data.files.high}, 
 caption: global.wm,
 contextInfo: {
        externalAdReply: {
          title: global.botname,
          body: `${kutu.result.result[1].title}`,
          sourceUrl: `${kutu.result.result[1].link}`,
          mediaType: 2,
          mediaUrl: `${kutu.result.result[1].link}`,
        }
      }
    }, { quoted: m });
  }
},
  {
  command: ['ytmp3'],
  operate: async ({ Cypher, m, reply, text, fetchMp3DownloadUrl }) => {
    if (!text) return reply('*Please provide a valid YouTube link!*');

    try {
      const urlMatch = text.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
      if (!urlMatch) return reply('*Seems like your message does not contain a valid YouTube link*');

      const link = urlMatch[0];
      const downloadUrl = await fetchMp3DownloadUrl(link);

      await Cypher.sendMessage(m.chat, {
        audio: { url: downloadUrl },
        mimetype: 'audio/mpeg'
      }, { quoted: m });

    } catch (error) {
      console.error('ytmp3 command failed:', error);
      reply(`Error: ${error.message}`);
    }
  }
},
 {
  command: ['ytmp3doc'],
  operate: async ({ Cypher, m, reply, text, fetchMp3DownloadUrl }) => {
    if (!text) return reply('*Please provide a valid YouTube link!*');

    try {
      const urlMatch = text.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
      if (!urlMatch) return reply('*Seems like your message does not contain a valid YouTube link*');

      const link = urlMatch[0];
      const downloadUrl = await fetchMp3DownloadUrl(link);
     const search = await yts(link);
     const name = search.all[0]; 

      await Cypher.sendMessage(m.chat, {
        document: { url: downloadUrl },
        mimetype: 'audio/mpeg',
        fileName: `${name.title}.mp3`,
        caption: `${name.title}.mp3`
      }, { quoted: m });

    } catch (error) {
      console.error('ytmp3doc command failed:', error);
      reply(`Error: ${error.message}`);
    }
  }
},
  {
  command: ['ytmp4'],
  operate: async ({ Cypher, m, reply, text, fetchVideoDownloadUrl }) => {
    if (!text) return reply('*Please provide a valid YouTube link!*');

    try {
      const urlMatch = text.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
      if (!urlMatch) return reply('*Seems like your message does not contain a valid YouTube link*');

      const link = urlMatch[0];
      const videoData = await fetchVideoDownloadUrl(link);

      await Cypher.sendMessage(m.chat, {
        video: { url: videoData.data.dl },
        mimetype: 'video/mp4',
        fileName: `${videoData.data.title}.mp4`,
        caption: videoData.data.title
      }, { quoted: m });

    } catch (error) {
      console.error('ytmp4 command failed:', error);
      reply(`Error: ${error.message}`);
    }
  }
},
{
  command: ['ytmp4doc'],
  operate: async ({ Cypher, m, reply, text, fetchVideoDownloadUrl }) => {
    if (!text) return reply('*Please provide a valid YouTube link!*');

    try {
      const urlMatch = text.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
      if (!urlMatch) return reply('*Seems like your message does not contain a valid YouTube link*');

      const link = urlMatch[0];
      const videoData = await fetchVideoDownloadUrl(link);

      await Cypher.sendMessage(m.chat, {
        document: { url: videoData.data.dl },
        mimetype: 'video/mp4',
        fileName: `${videoData.data.title}.mp4`,
        caption: videoData.data.title
      }, { quoted: m });

    } catch (error) {
      console.error('ytmp4doc command failed:', error);
      reply(`Error: ${error.message}`);
    }
  }
},
];