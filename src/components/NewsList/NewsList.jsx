import css from './NewsList.module.css';

import React from 'react';
// import { NavLink } from 'react-router-dom';
import { format } from 'date-fns';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { IoLinkOutline } from "react-icons/io5";
const NewsList = ({ newsData }) => {

    const navigate = useNavigate();

    const handleMoreInfoClick = (news) => {
    // Передача інформації про новину через об'єкт запиту
    navigate(`/news/${news.publishedAt}`, { state: { news } });
    };



  return (
    <table className={css.newsTable}>
      <thead >
        <tr className={css.newsTableHeader}>
          <th >Image</th>
          <th>Title</th>
          <th>Author</th>
          <th >Description</th>
          <th>Publication date</th>
          <th>Original URL</th>
        </tr>
      </thead>
      <tbody >
        {newsData.map((news, index) => (
            
            <tr key={index} className={css.newsTableBody}>
                <td>
                    <img src={news.urlToImage || 'https://img.icons8.com/external-others-inmotus-design/67/ED4749/external-N-qwerty-keypad-others-inmotus-design.png'} alt="news img"  width={500}/>
                </td>
                <td>
                    <button className={css.titleBtn} onClick={() => handleMoreInfoClick(news)}>{news.title}</button>
                </td>
                <td>{news.author || 'N/A'}</td>
                <td width={300}>{news.description || 'N/A'}</td>
                <td width={200}>{format(new Date(news.publishedAt), 'yyyy-MM-dd')}</td>
                <td width={150} className={css.newsLink}>
                    <a href={news.url} target="_blank" rel="noreferrer"><IoLinkOutline size={24} color={"var(--text)"} /></a>
                </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default NewsList;