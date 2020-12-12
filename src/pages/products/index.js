import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { productService } from '../../service';

const Products = () => {
  const [search, setSearch] = useState('');
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  useEffect(() => {
    // const db = app.database().ref('news');
    // db.on('value', (snapshot) => {
    //   const firebaseNews = snapshot.val();
    //   setProducts(firebaseNews.data);
    // });

    setLoading(true);
    productService
      .products(rowsPerPage, offset, search)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [search, rowsPerPage, offset]);

  return (
    <div>
      <h2>Products</h2>
      {products.map((data) => {
        return (
          <div key={data.id}>
            <Link to={`/product/${data.slug}`}>
              <h3>{data.name}</h3>
            </Link>
            {/* <a href={data.id} target="blank">
              <h3>{data.name}</h3>
            </a> */}
            {/* <p>{data.desc}</p> */}
          </div>
        );
      })}
      <input
        type="button"
        onClick={() => {
          setRowsPerPage(rowsPerPage + 5);
        }}
        value="See More"
      />
    </div>
  );
};

export default Products;
