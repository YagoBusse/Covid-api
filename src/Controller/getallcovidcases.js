const Country = require('../models/Country');

const novelcovid = require('novelcovid'); 


    async function render(req, res) {
        try {
            const data = await novelcovid.countries()
            
            

            await Country.create({
                statuscode: 200,
                description: 'Sucesses'
            })
            return res.json(data)
        
    
        } catch (error) {
            Country.create({
                statuscode: 500,
                description: error.message
            })
        }
    }
module.exports = render;