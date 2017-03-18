var api = {
  getPolutionByCity(city) {
    city = city.toLowerCase().trim();
    var url = `https://api.waqi.info/feed/${city}/?token=bed973a1340c7ad855b8261bab7d34d4aaedc509`
    return fetch(url).then((res) => res.json());
  }
};

module.exports = api
