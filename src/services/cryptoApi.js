const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-4oK1KitR7ovVwYgve1Lh2Dso";

const getCoinList = (page, currency) => {
  return `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&locale=en&x-cg-demo-api-key=${API_KEY}`;
};

const searchCoin = (query) => {
  return `${BASE_URL}/search?query=${query}&x-cg-demo-api-key=${API_KEY}`;
};

const marketChart = (coin) => {
  return `${BASE_URL}/coins/${coin}/market_chart?vs_currency=usd&days=7&x-cg-demo-api-key=${API_KEY}`;
};

export { getCoinList, searchCoin, marketChart };
