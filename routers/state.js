const router = require('express').Router()
const fetch = require('node-fetch');

const url = 'https://api.covid19india.org/data.json'; 

router.get('/state/:id', (req, res)=>{
    const tofind = req.params.id
    fetch(url).then(res => res.json()).then(data => {
        const arr = (data["statewise"])
        
        const result = arr.find(state => state.state.includes(tofind))

        if(result){
            res.render('state', {
                time: result.lastupdatedtime,
                statename: result.state,
                active: result.active,
                recovered: result.recovered,
                deaths: result.deaths,
                confirmed: result.confirmed 
            })
        }
        else{
            res.render('404',{
                error: 'State not found!'
              })
        }

        
    })
})


module.exports = router