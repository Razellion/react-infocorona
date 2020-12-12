import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productService } from '../../service';

const DetailProduct = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const params = useParams();
  const { slug } = params;

  useEffect(() => {
    setLoading(true);
    productService
      .products(40, 0, '')
      .then((res) => {
        const filteredById = res.data.filter((prod) => {
          return prod.slug === slug;
        });
        setProduct(filteredById);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [slug]);

  return (
    <div>
      {!isLoading && product.length > 0 ? (
        <>
          {console.log(product)}
          <h2>{product[0].name}</h2>
          <img src={product[0].variants[0].images[0].product_url} alt="none" />
          <p>{product[0].description}</p>
          <p>{product[0].display_normal_price}</p>
          <p>{}</p>
        </>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default DetailProduct;
