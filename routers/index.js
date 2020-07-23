const router = require('express').Router()
const fetch = require('node-fetch');

const url = 'https://api.covid19india.org/data.json'; 

router.get('/', (req, res)=>{

    fetch(url).then(res => res.json()).then(data => {
        const result = data["statewise"][0]

        res.render('index', {
            time: result.lastupdatedtime,
            statename: req.params.id,
            active: result.active,
            recovered: result.recovered,
            deaths: result.deaths,
            confirmed: result.confirmed 
        })

    })
})

module.exports = router