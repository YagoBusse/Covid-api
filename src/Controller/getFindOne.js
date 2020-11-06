

const novelcovid = require('novelcovid'); 


    async function findOneCase(req, res) {
        try {
            const {country} = req.params;
            const data = await novelcovid.countries({
                country
            })
            
        
            return res.json(data)
        
    
        } catch (error) {
            console.log(error)
        }
    }
module.exports = findOneCase;