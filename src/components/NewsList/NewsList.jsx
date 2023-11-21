import React from 'react';
// import { NavLink } from 'react-router-dom';
import { format } from 'date-fns';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const NewsList = ({ newsData }) => {

    const navigate = useNavigate();

    const handleMoreInfoClick = (news) => {
    // Передача інформації про новину через об'єкт запиту
    navigate(`/news/${news.publishedAt}`, { state: { news } });
    };



  return (
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Author</th>
          <th>Description</th>
          <th>Publication date</th>
          <th>Original URL</th>
          <th>More info</th>
        </tr>
      </thead>
      <tbody>
        {newsData.map((news, index) => (
            
            <tr key={index}>
                <td>
                    <img src={news.urlToImage || 'https://img.icons8.com/external-others-inmotus-design/67/ED4749/external-N-qwerty-keypad-others-inmotus-design.png'} alt="news img" />
                </td>
                <td>{news.title}</td>
                <td>{news.author || 'N/A'}</td>
                <td>{news.description || 'N/A'}</td>
                <td>{format(new Date(news.publishedAt), 'yyyy-MM-dd')}</td>
                <td>
                    <a href={news.url} target="_blank" rel="noreferrer">link</a>
                </td>
                <td>
                    <button onClick={() => handleMoreInfoClick(news)}>more...</button>
                </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default NewsList;