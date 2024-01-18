import React, { useEffect, useState } from "react";
import "./Home.scss";
import productsData from "../../../db.json";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";

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
    <div>
      <div className="container part-1 my-5">
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
            <button className="show-btn mx-auto">Show More</button>
          </div>
        </section>
      </div>
      <section className="another-child d-flex">
        <div className="texts">
          <p className="beautiful">50+ Beautiful rooms inspiration</p>
          <p>
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <button>Explore More</button>
        </div>

        <Carousel fade className="carousel">
          <Carousel.Item>
            <img
              src="inner-last.jpg"
              alt="img"
              style={{ width: 450, height: 500 }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="right-inner.jpg"
              alt="img"
              style={{ width: 450, height: 500 }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="inner-peace.jpg"
              alt="img"
              style={{ width: 450, height: 500 }}
            />
          </Carousel.Item>
        </Carousel>
      </section>
    </div>
  );
};

export default Home;
