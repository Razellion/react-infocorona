import React, { useEffect, useState } from 'react';
import app from '../../service/firebase';
import 'firebase/database';

const CoronaNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const db = app.database().ref('news');
    db.on('value', (snapshot) => {
      const firebaseNews = snapshot.val();
      setNews(firebaseNews.data);
    });
  }, []);
  console.log(news);

  return (
    <div>
      <h2>data corona</h2>
      {news.length !== 0 ? (
        news.map((data) => {
          return data.activity.map((berita, index) => {
            return (
              <div key={index}>
                <h4>{berita.title}</h4>
                <h5>{berita.desc}</h5>
                <p>{berita.url}</p>
                <br />
              </div>
            );
          });
        })
      ) : (
        <p>no data</p>
      )}
      {/* {news.map((data) => {
        return <p>{data}</p>;
      })} */}
    </div>
  );
};

export default CoronaNews;
