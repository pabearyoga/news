import React, { useState, useEffect } from 'react';
import Search from '../../components/Search/Search';
import { getAllNews } from '../../utils/services/newsService.js';
import NewsList from '../../components/NewsList/NewsList';
import FilterBtn from '../../components/FilterBtn/FilterBtn';
import SelectInput from '../../components/SelectInput/SelectInput';
import {
  Container,
  Typography,
  Box,
} from '@mui/material';

const Home = () => {
  const [news, setNews] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  const filterSelectClick = () => {
    setShowFilter((prevShowFilter) => !prevShowFilter);
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsList = await getAllNews();
        setNews(newsList.articles);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchNews();
  }, []);

  const categoryList = ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sport', 'Technology'];
  const countryList = ['United Kingdom', 'Ukraine', 'Germany', 'Poland', 'USA'];

  return (
    <Container >
      <Box style={{display:'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <Typography style={{ color: 'var(--text)', fontSize: '32px', fontStyle: 'normal', fontWeight: '600', lineHeight: 'normal' }}>
          <span style={{ color: 'var(--blue)' }}>News</span> Top Headlines
        </Typography>
        <Box style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
          <Search />
          <FilterBtn handleSelectClick={filterSelectClick} />
        </Box>
      </Box>

      {showFilter && (
        <Box style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
          <SelectInput names={categoryList} title="Category" />
          <SelectInput names={countryList} title="Country" />
        </Box>
      )}

      <NewsList newsData={news} />
    </Container>
  );
};

export default Home;
