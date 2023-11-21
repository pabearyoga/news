import React from 'react';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { BackBnt } from '../../components/BackBnt/BackBnt'
import { NavLink } from 'react-router-dom';
import css from './NewsDetailsItem.module.css';


const NewsDetailsItem = () => {
    const location = useLocation();
    const news = location.state?.news;
    // Перевірка, чи news
    if (!news) {
    return <div>Інформація недоступна</div>;
    }

    // Вилучення деталей новин з news
    const { title, author, description, publishedAt, urlToImage, source, content  } = news;

  return (
      <div >
        <div className={css.container}>           
            <div className={css.titleWrapper}>
                <NavLink to="/">
                    <BackBnt></BackBnt>
                </NavLink>

                <h2 className={css.title}>{title}</h2>             
            </div>

            <div className={css.infoWrapper}>
                <p className={css.info}>Source: {source.name || 'N/A'}</p>
                <p className={css.info}>Publication date: {format(new Date(publishedAt), 'yyyy-MM-dd') || 'N/A'}</p>
            </div>

            <div >
                <h2 className={css.subTitle}>Description</h2>
                <p className={css.text}>{description}</p>
            </div>
        </div>

        <img className={css.img} src={urlToImage} alt="" />

        <div className={css.container}>
            <div >
                <h2 className={css.subTitle}>Content</h2>
                <p className={css.text}>{content}</p>
            </div>
            <div className={css.author}>
                <p className={css.info}>Authors: {author || 'N/A'}</p>
            </div>
        </div>

          
    </div>
  );
};

export default NewsDetailsItem;
