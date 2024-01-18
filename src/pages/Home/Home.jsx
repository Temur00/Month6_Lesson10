import React, { useEffect, useState } from "react";
import "./Home.scss";
import productsData from "../../../db.json";

const Home = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    try {
      setProducts(productsData.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container  my-5">
      <section>
        <img src="main.png" alt="furniro" />
        <div className="like-card">
          <p>New Arrival</p>
          <p>Discover Our New Collection</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="button"> BUY NOW</button>
        </div>
      </section>
      <section>
        <p className="browse">Browse The Range</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="images">
          <img src="dining.png" alt="Dining" />
          <img src="living.png" alt="living" />
          <img src="bedroom.png" alt="bedroom" />
        </div>
        <div className="texts">
          <p>Dining</p>
          <p>Living</p>
          <p>Bedroom</p>
        </div>
      </section>
      <section>
        <p className="OurProduct">Our Products</p>
        <div className="cards">
          {products.map((product) => (
            <div key={product.id} className="product">
              <p className="prId">{product.id}</p>
              <img src={product.image} />

              <p className="p-2 category">{product.category}</p>
              <p className="ps-2 description">{product.description}</p>
              <div className="d-flex p-2 gap-2 price">
                <p className="current">{product.currentCost}</p>
                <p className="discount">{product.discount}</p>
              </div>
              {/* <button onClick={() => getUserPosts(user.id)}>Posts</button> */}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
