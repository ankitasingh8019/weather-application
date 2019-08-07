const request=require('request')

const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiYW5raXRhc2luZ2g4ODAxOSIsImEiOiJjanhmbG8wbG8xMG51M25tZHN2am0ycTIwIn0.p5UXlDwoRTAYHV6_bzcqZg&limit=1'
    request({url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect to location services due to no network connection.',undefined)
        }
        else if(body.features.length===0){
            callback('Unable to find location. Try another search',undefined)
        }
        else{
            callback(undefined,{
                latitude:body.features[0].center[1],
                longitude:body.features[0].center[0],
                location:body.features[0].place_name
            })
        }
    })
}
module.exports=geocode