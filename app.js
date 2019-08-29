const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]
geocode(address, (error, { latitude, longitude, location }) => {
    if(!address) {
        console.log(`Please provide a specific location you want search.`)
    } else {
        if(error) {
            return console.log(`Error : `, error) 
        } 
        forecast(latitude, longitude, (error, forecastData) => {
            if(error) {
                return console.log(`Error : `, error) 
            }
            console.log(`Location : `, location)
            console.log(`Weather-Data : `, forecastData)
        })
    }
    
})
