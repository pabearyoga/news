import React, { useState, useEffect } from 'react';

// import FilterSelect from '../../components/FilterSelect/FilterSelect';
import Search from '../../components/Search/Search';
import Title from '../../components/Title/Title';
import { getAllNews } from '../../utils/services/newsService.js';
import css from './Home.module.css';
import NewsList from '../../components/NewsList/NewsList';
import  FilterBtn  from '../../components/FilterBtn/FilterBtn'

import SelectInput from '../../components/SelectInput/SelectInput'


const Home = () => {
    const [news, setNews] = useState([]);
    const [showFilter, setShowFilter] = useState(false)

    const filterSelectClick = () => {
        setShowFilter(prevShowFilter => !prevShowFilter)
    }

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

      const categoryList = ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sport', 'Technology'] 
      const countryList = ['United Kingdom', 'Ukraine', 'Germany', 'Poland', 'USA'] 

        
    return (
        <div className={css.home}>
            <div className={css.wrapper}>
                <Title>News Top Headlines</Title>
                <div className={css.inputWrapper}>
                    <Search />
                    <FilterBtn
                        handleSelectClick={filterSelectClick}
                    ></FilterBtn>
                </div>
            </div>

            {showFilter && <div className={css.inputWrapper}>
                <SelectInput
                    // handleSelectClick={handleInputChange}
                    // selectValue={!category ? category : category.split("")[0].toUpperCase() + category.slice(1)}
                    // showOption={showCategories}
                    names={categoryList}
                    title='Category'
                    // handleOptionSelect={handleOptionSelect}
                />
                <SelectInput
                    // handleSelectClick={handleInputChange}
                    // selectValue={!category ? category : category.split("")[0].toUpperCase() + category.slice(1)}
                    // showOption={showCategories}
                    names={countryList}
                    title='Country'
                    // handleOptionSelect={handleOptionSelect}
                />

            </div>}

            <NewsList newsData={news} />

        </div>
    )
};

export default Home;