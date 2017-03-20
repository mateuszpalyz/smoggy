var api = {
  getPolutionByCity(city) {
    city = city.toLowerCase().trim();
    var url = `https://api.waqi.info/feed/${city}/?token=bed973a1340c7ad855b8261bab7d34d4aaedc509`
    return fetch(url).then((res) => res.json());
  },
  getPolutionByCoordinates(lat, lng) {
    var url = `https://api.waqi.info/feed/geo:${lat};${lng}/?token=bed973a1340c7ad855b8261bab7d34d4aaedc509`
    console.log(url);
    return fetch(url).then((res) => res.json());
  }
};

module.exports = api
