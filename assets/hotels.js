
// from rapidapi > 'hotels' > properties (left sidebar) > properties/v2/list

// var zipcode = document.createElementbyId('zipcode');
// var searchbutton = document.createElementbyId('searchbutton');

function getApi () {
  fetch("https://hotels4.p.rapidapi.com/properties/v2/list", {
    "method": "POST",
   "headers": {
      "Content-Type": "application/json",
     "X-Rapidapi-Key": "edf9b22aafmsh019b8390d5e71e2p1ea644jsnf46c23929872",
      "X-Rapidapi-Host": "hotels4.p.rapidapi.com"
   },
    "body": JSON.stringify({
     "currency": "USD",
     "eapid": 1,
     "locale": "en_US",
     "siteId": 300000001,
      "destination": {
        "regionId": "6054439"
     },
      "checkInDate": {
       "day": 10,
       "month": 10,
        "year": 2022
      },
      "checkOutDate": {
       "day": 15,
       "month": 10,
       "year": 2022
      },
     "rooms": [
        {
          "adults": 2,
          "children": [
            {
              "age": 5
            },
            {
             "age": 7
            }
          ]
       }
     ],
      "resultsStartingIndex": 0,
     "resultsSize": 200,
     "sort": "PRICE_LOW_TO_HIGH",
     "filters": {
       "price": {
         "max": 150,
         "min": 100
       }
      }
   })
  })
  .then(response => response.json())
  .then(data => {
  // Loop through the properties array and log the value of the name key for each property

   data.data.propertySearch.properties.forEach((property) => {
      console.log(property.name);
      var hotelName = document.createElement('h3');
      hotelName.textContent = property.name;
      document.getElementById('Content').appendChild(hotelName);
   });
  })

  .catch(error => console.error(error));
}

// getApi();
document.getElementById('searchbutton').addEventListener('click', getApi);