import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../../service/firebase';
import 'firebase/database';

const Activity = (props) => {
  const { data } = props;
  return (
    <div>
      <h4>{data.title}</h4>
      <p>{data.desc}</p>
    </div>
  );
};

const NewsPerDate = (props) => {
  const { data } = props;
  return (
    <div>
      <Link to={`/infoCorona/${data.date}`}>
        <h3>{data.date}</h3>
      </Link>
      {data.activity.map((data) => {
        return <Activity key={data.url} data={data} />;
      })}
    </div>
  );
};

const CoronaNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const db = app.database().ref('news');
    db.on('value', (snapshot) => {
      const firebaseNews = snapshot.val();
      setNews(firebaseNews.data);
    });
  }, []);

  return (
    <div>
      <h2>data corona</h2>
      {news.length !== 0 ? (
        news.map((data) => {
          return <NewsPerDate data={data} key={data.id} />;
          // return data.activity.map((berita, index) => {
          //   return (
          //     <div key={index}>
          //       <h4>{berita.title}</h4>
          //       <h5>{berita.desc}</h5>
          //       <p>{berita.url}</p>
          //       <br />
          //     </div>
          //   );
          // });
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
