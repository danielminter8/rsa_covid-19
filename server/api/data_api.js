const GeoJsonService = require('../services/geojson_service');
const newrelic = require('newrelic');
module.exports = (covidData) => {


    const latestStatistics = async (req, res) => {
        try{
        newrelic.startWebTransaction('/api/latest-stats', async () => {
            var transaction = newrelic.getTransaction()
        res.json({
            data:await covidData.getLatestStats(),
            source:'scraped from sacoronavirus.co.za',
            status:'success'
        })
        transaction.end()
    })
    }catch(err){
        console.log(err.stack)
        newrelic.noticeError(err.stack)
    }
    }

    const collectedCovidState = async (req,res) => {
        try{
            res.json({
                data:await covidData.getAllCollectedData()
            })
        }catch(err){
            console.log(err.stack)
        }
    }

    const statsByProvince = (req,res) => {
        try{
            covidData.getCovidProvincialData().then(data =>{
                res.json({
                    data,
                    source:'https://github.com/dsfsi/covid19za',
                    status:'success'
                })
            })
        }catch(err){
            console.log(err.stack)
        }
    }

    const geoJSONdata = async (req,res) => {
        const geoJsonService = GeoJsonService();
        res.json(await geoJsonService.getData())
    }
    
    const extraCovidStats = async (req,res) => {
        let extra_info = {
            latest_increase: await covidData.getLatestIncrease(),
            average_cases: await covidData.getAverageCases()
        }
        res.json({
            data: extra_info
        })
    }



    return{
        latestStatistics,
        collectedCovidState,
        statsByProvince,
        geoJSONdata,
        extraCovidStats
    }
}