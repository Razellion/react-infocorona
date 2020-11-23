import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import app from '../../service/firebase';

const NewsItem = ({ news }) => {
  const { date, activity } = news[0];
  const dateTime = new Date(date);
  const monthNames = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  const dateName = dateTime
    .getDate()
    .toString()
    .concat(' ', monthNames[dateTime.getMonth()], ' ', dateTime.getFullYear());

  return (
    <div>
      <h2>{dateName}</h2>
      {activity.map((data) => {
        return (
          <div key={data.url}>
            <a href={data.url} target="blank">
              <h3>{data.title}</h3>
            </a>
            <p>{data.desc}</p>
          </div>
        );
      })}
    </div>
  );
  // news.activity.map((news) => {
  //   return (
  //     <div>
  //       <h4>{data.title}</h4>
  //       <p>{data.desc}</p>
  //     </div>
  //   );
  // })
};

const DetailDate = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const { dateId } = params;

  useEffect(() => {
    setIsLoading(true);
    const db = app.database().ref('news');
    db.on('value', (snapshot) => {
      const firebaseNews = snapshot.val();
      const filteredByDate = firebaseNews.data.filter((newsResp) => {
        return newsResp.date === dateId;
      });
      setNews(filteredByDate);
      setIsLoading(false);
    });
  }, [dateId]);

  return (
    <div>
      <h1>Info Corona Detail</h1>
      <h3>{news.date}</h3>
      {!isLoading && news.length > 0 ? (
        <NewsItem news={news} />
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default DetailDate;
