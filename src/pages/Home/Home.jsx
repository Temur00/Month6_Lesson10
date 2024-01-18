import React from "react";
import "./Home.scss";

const Home = () => {
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
      <section></section>
    </div>
  );
};

export default Home;
