import axios from 'axios';
const token = 'f3a6a56cecaa43a297ce2e610ebe343a';

export const getFilterNews = async ({ search, country, content }) => {
  try {
    const baseUrl = 'https://newsapi.org/v2/top-headlines';
    const apiKey = `apiKey=${token}`;
    const pageSize = 'pageSize=100';
    const page = 'page=1';

    const queryCountryParams = [];
    const queryParams = [];

    if (country) {
      queryCountryParams.push(`country=${country}`);
    }
    if (!country) {
      queryCountryParams.push(`country=us`);
    }
    if (search) {
      queryParams.push(`q=${search}`);
    }
    if (content && content !== 'Selected') {
      queryParams.push(`category=${content}`);
    }

    const queryStringCountry =
      queryCountryParams.length > 0 ? `?${queryCountryParams.join('&')}` : '';

    const queryString =
      queryParams.length > 0 ? `${queryParams.join('&')}` : '';

    const response = await axios.get(
      `${baseUrl}${queryStringCountry}&${apiKey}&${pageSize}&${page}&${queryString}`
    );

    return response.data;
  } catch (error) {
    console.error('Error in getFilterNews:', error.message);
    throw new Error('Failed to fetch filtered news.');
  }
};
