const express = require('express');
const Routes = require('./server/routes/index')
const Data_Api = require('./server/api/data_api')
const WebScraper = require('./server/services/web-scraper/scraper')
const GetLatestStats = require('./server/services/getLatestStats');
const AddDataSet = require('./server/services/addDataset');
const mongo = require('mongodb').MongoClient


const app = express();
app.use(require('express-status-monitor')())
app.use(express.static('./client/build'));

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017'
mongo.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err, client) => {
if (err) {
  console.error(err)
  return
}
const db = client.db('heroku_9jppstmg')
let getLatestStats = GetLatestStats(db)
let addDataSet = AddDataSet(db)
let webScraper = WebScraper(db)
const data_api = Data_Api(webScraper,getLatestStats,addDataSet)
Routes(app,data_api)
})







let PORT = process.env.PORT || 4000;

app.listen(PORT, function () {
  console.log('App starting on port', PORT);
});