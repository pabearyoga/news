// newsService.js

const token = '9b99915568da4a9883732da3726b51dd';

export const getAllNews = async () => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${token}&pageSize=5&page=1`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch: ${response.status} - ${response.statusText}`
      );
    }

    const newsList = await response.json();
    return newsList;
  } catch (error) {
    console.error(error.message);
  }
};

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

    const response = await fetch(
      `${baseUrl}${queryStringCountry}&${apiKey}&${pageSize}&${page}&${queryString}`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch: ${response.status} - ${response.statusText}`
      );
    }

    const newsList = await response.json();
    return newsList;
  } catch (error) {
    console.error(error.message);
  }
};
