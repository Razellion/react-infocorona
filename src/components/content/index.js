import React, { useState, useEffect } from 'react';
import News from './News';
import Pagination from './Pagination';
import app from '../../service/firebase';
import 'firebase/database';
import './style.css';

const Content = () => {
  const [news, setNews] = useState([]);
  const daysPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastNews = currentPage * daysPerPage;
  const indexOfFirstNews = indexOfLastNews - daysPerPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const db = app.database().ref('news');
    db.on('value', (snapshot) => {
      const firebaseNews = snapshot.val();
      setNews(firebaseNews.data.reverse());
    });
  }, []);

  return (
    <div className="content">
      <Pagination
        daysPerPage={daysPerPage}
        totalDays={news.length}
        paginate={paginate}
      />
      {currentNews.length !== 0 ? (
        currentNews.map((data) => {
          return <News news={data} key={data.id} />;
        })
      ) : (
        <p>no data</p>
      )}
    </div>
  );
};

export default Content;
