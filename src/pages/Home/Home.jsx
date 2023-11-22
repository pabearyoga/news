import React, { useState, useEffect } from 'react';
import Search from '../../components/Search/Search';
import { getFilterNews } from '../../utils/services/newsService.js';
import NewsList from '../../components/NewsList/NewsList';
import FilterBtn from '../../components/FilterBtn/FilterBtn';
import SelectInput from '../../components/SelectInput/SelectInput';
import {
  Container,
  Typography,
  Box,
} from '@mui/material';
import { useData } from '../../hooks/userContext.jsx';


const Home = () => {
  const [news, setNews] = useState([]);
  const [newsTotal, setNewsTotal] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  const { search, filterCountry, filterCategory, changeInput } = useData();

  const filterSelectClick = () => {
    setShowFilter((prevShowFilter) => !prevShowFilter);
  };

useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsList = await getFilterNews({ search, country: filterCountry, content: filterCategory });
        setNews(newsList.articles);
        setNewsTotal(newsList.totalResults)
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchNews();
  }, [search, filterCountry, filterCategory]);

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
          <SelectInput names={categoryList} title="Category" name='Category' value={filterCategory} handleOptionSelect={changeInput} />
          <SelectInput names={countryList} title="Country" name='Country' value={filterCountry} handleOptionSelect={changeInput}/>
        </Box>
      )}

      <NewsList newsData={news} newsTotal={newsTotal} />
    </Container>
  );
};

export default Home;
