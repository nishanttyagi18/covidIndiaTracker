const router = require("express").Router();
const fetch = require("node-fetch");

const url = "https://api.covid19india.org/state_district_wise.json";

router.get("/district/:id1/:id2", (req, res) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const result = data[req.params.id1].districtData[req.params.id2]
      if(result){
        res.render('district', {
          state: req.params.id1,
          city: req.params.id2,
          active: result.active,
          recovered: result.recovered,
          deaths: result.deceased,
          confirmed: result.confirmed 

      })
      }else{
        res.render('404',{
          error: 'District not found!'
        })
      }
    }
    );
});

module.exports = router;
