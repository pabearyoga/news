import React, { useState, useEffect } from 'react';

// import FilterSelect from '../../components/FilterSelect/FilterSelect';
import Search from '../../components/Search/Search';
import Title from '../../components/Title/Title';
import { getAllNews } from '../../utils/services/newsService';
import css from './Home.module.css';
import NewsList from '../../components/NewsList/NewsList';


const Home = () => {
    const [news, setNews] = useState([]);


    useEffect(() => {
        const fetchNews = async () => {
            try {
                const newsList = await getAllNews();
                setNews(newsList.articles);
            } catch (error) {
                console.error(error.message);
            }
        }
            fetchNews();
    }, []); 
    
    console.log(news)
    
    return (
        <div className={css.home}>
            <div className={css.wrapper}>
                <Title>News Top Headlines</Title>
                <Search />
                {/* <FilterSelect
                    name='category'
                    selectValue={category}
                    handleSelectClick={categorySelectClick}
                    Icon={CiFilter}
                    showOption={showCategoryOption}
                    optionList={categoryList}
                    handleOptionSelect={handleOptionSelect}
                ></FilterSelect> */}
            </div>

            <NewsList newsData={news} />

        </div>
    )
};

export default Home;