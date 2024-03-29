const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const moment = require('moment-timezone');
const newrelic = require('newrelic');

module.exports = (db) => {

  const scrape = async () => {
    newrelic.startBackgroundTransaction('Scraper', 'Automated', () => {
      var transaction = newrelic.getTransaction()

      const collectionA = db.collection('latestData');
      const collectionB = db.collection('allData');
      //Data extracted from South African Resource Portal for COVID-19
      let extractedData = [];


      (async () => {
        const url = "https://sacoronavirus.co.za/"
        const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
        const page = await browser.newPage();
        await page.goto(url);
        try {
          await page.waitForSelector('.fusion-standard-logo');
        } catch (e) {
          if (e instanceof puppeteer.errors.TimeoutError) {
            // Do something if this is a timeout.
          }
          newrelic.noticeError(e)
        }
        // await page.screenshot({ path: 'sacoronavirus.png' });
        filterThroughData(await page.content())
      })();

      const filterThroughData = async (html) => {
        const $ = cheerio.load(html)
        const statsTable = $('.counter-box-container');
        statsTable.each(function () {
          const data_name = $(this).find('.counter-box-content').text();
          const data_value = $(this).find('.display-counter').attr('data-value');
          extractedData.push({
            [data_name]: data_value
          });
        });
        let dateByZone = moment().tz("Africa/Maseru").format()
        let splitDateTime = dateByZone.split('T')
        let formatedDate = splitDateTime[0].replace('-', '/').replace('-', '/')
        let formatedTime = splitDateTime[1].split('+')[0]
        extractedData.push({ time: formatedTime, date: formatedDate })


        let getCollectedData = await collectionB.findOne()
        if (getCollectedData === null) {
          getCollectedData = {};
          getCollectedData.data = [];
          let sample_data = { cases: 0 };
          getCollectedData.data.push(sample_data);
        }
        console.log(getCollectedData)
        // [{cases:0, date: yyyy/mm/dd},{cases:2, date: yyyy/mm/dd},{},{}]
        const collected_data = getCollectedData.data
        console.log(collected_data)
        const newDataToAdd = {
          date: extractedData[4].date,
          cases: Number(Object.values(extractedData[1])),
          recoveries: Number(Object.values(extractedData[2])),
          deaths: Number(Object.values(extractedData[3])),
        }
        let lastDataAdded = collected_data[collected_data.length - 1]
        if (newDataToAdd.cases !== lastDataAdded.cases) {
          console.log('Later stats are found and is updating database')
          collected_data.push(newDataToAdd)
          if (await collectionB.count() === 1) {
            await collectionB.updateOne({}, { data: collected_data })
          } else {
            await collectionB.deleteMany({})
            await collectionB.insertOne({ data: collected_data })
          }
          if (await collectionA.count() === 1) {
            await collectionA.updateOne({}, { extractedData })
          } else {
            await collectionA.deleteMany({})
            await collectionA.insertOne({ extractedData })
          }
        } else {
          console.log('Stats are already up to date.')
        }

      }

      transaction.end()
    })
    return;
  }
  return {
    scrape
  }
  // return extractedData;
}