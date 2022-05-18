import React, { useState, useEffect } from "react";
import fetchDataFromApi from "../../services/api/handlers/api-handler";

// components
import Layout from "../../components/layout";
import Product from "./Product";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  const hydrateData = (data) => {
    return data.map((item, ind) => {
      return {
        product_name: item.name,
        product_image: ind+"",
        net_price: item.net_price,
        taxes: item.taxes,
        price: item.price,
      };
    });
  };

  useEffect(() => {
    setLoading(true);
    fetchDataFromApi("products")
      .then((res) => {
        const data = hydrateData(res.data.data);
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setIsError(true);
        setError(err);
      });
  }, []);

  return (
    <Layout>
      {loading && "Loading..."}
      {isError && error}
      {data.length > 0 ? (
        <div className="mt-3">
          <div className="row">
            <h1>Products</h1>
            {data.map((item) => (
              <Product key={item.id} item={item} />
            
            ))}
          </div>
        </div>
      ) : (
        !loading && `${data.length} records available`
      )}
    </Layout>
  );
};

export default Products;
