const clientId = '_aI8Y98QT9bh9fw9Hn3-TA';
const secret = 'c0iFIAXdojgRZRSfmZ5FWia417k1D0WDXmPGTnMBdGm8Ot302ua789QX63WUekc9';
let accessToken;

let Yelp = {
  getAccessToken: function(){
    console.log('getSortByClass');
    if (accessToken){
      return new Promise(resolve => resolve(accessToken));
    }

    const urlToFetch = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=${clientId}&client_secret=${secret}`;
    return fetch(urlToFetch,
      {
        method: 'POST'
      })
      .then(response => response.json())
      .then(jsonResponse => accessToken = jsonResponse.access_token);
  },
  search: function(term, location, sortBy){
    console.log('search');
    return Yelp.getAccessToken().then(() => {
      let urlToFetch = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
      console.log(`fetching...${urlToFetch}`);
      return fetch(urlToFetch,
        {
          headers: `Bearer ${accessToken}`
        }).then(response => response.json()).then(jsonResponse => {
          if (jsonResponse.businesses){
            return jsonResponse.businesses.map(business => {return business;});
          }
        })
    });
  }
};

export default 'Yelp';
