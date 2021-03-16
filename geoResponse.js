	
// getGeocode(City) is a async function 
// 1. It takes City as parameter
// 2. It creates Promise and calls geocode.xyz website to get the city data
// 3. line 13 makes it wait until the url returns the response
// 4. json object is returned from this function
async function getGeocode(city) 
{
   let promise = new Promise((resolve, reject) => {
    var url = "https://geocode.xyz/" + city + "?json=1" ;
    console.log("URL : " + url) ;
    resolve(fetch(url)) ;
  }); 

  // this code will make it wait until promise returns a response
  let response = await promise;
  // return the json object from the response
  // json has all the city data like lattiture and longitude
    return response.json() ; 
}

// this is how getGeocode() function is called
// I am calling it for Charlotte
// Lat and Long of the city is inside the  alt.loc.longt and alt.loc.latt 
getGeocode("Charlotte").then((res) => {
  console.log("+++++++++++++++++++++++++") ;
  console.log("Testing for Charlotte") ;
  console.log("+++++++++++++++++++++++++") ;
  console.log("Charlotte Longitude : " + res.longt);
  console.log("Charlotte Lattitude : " + res.latt);
});

getGeocode("Atlanta").then((res) => {
  console.log("+++++++++++++++++++++++++") ;
  console.log("Testing for Atlanta") ;
  console.log("+++++++++++++++++++++++++") ;
    console.log("Atlanta Longitude : " + res.longt);
  console.log("Atlanta Lattitude : " + res.latt);
});