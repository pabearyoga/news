const token = 'f3a6a56cecaa43a297ce2e610ebe343a';

export const getAllNews = async () => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${token}&pageSize=10`
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
