import React from "react";
import "./styles/styles.css";
import Location from "./components/Location";

function App() {
  return (
    <div className="main-wrapper">
      <section className="head-block">
        <img src="images-m/image-hero.jpg" alt="" />
        <div>
          <h1 className="head-block__heading">MODERN ART GALLERY</h1>
          <p className="head-block__text">
            The arts in the collection of the Modern Art Gallery all started
            from a spark of inspiration. Will these pieces inspire you? Visit us
            and find out.
          </p>
          <div className="button-container">
            <figure className="head-block__button">
              <p className="head-block__btn-text">OUR LOCATION</p>
              <img
                className="head-block__btn-arrow"
                src="icons/icon-arrow-right.svg"
                alt=""
              />
            </figure>
          </div>
        </div>
      </section>
      <section className="mid-block">
        <div>
          <img
            className="mid-block__image"
            src="images-m/image-grid-1.jpg"
            alt=""
          />
          <div className="text-container--white">
            <h1 className="mid-block__heading">YOUR DAY AT THE GALLERY</h1>
            <p className="mid-block__text">
              Wander through our distinct collections and find new insights
              about our artists. Dive into the details of their creative
              process.
            </p>
          </div>
        </div>
        <img
          className="mid-block__image"
          src="images-m/image-grid-2.jpg"
          alt=""
        />

        <img
          className="mid-block__image"
          src="images-m/image-grid-3.jpg"
          alt=""
        />
        <div className="mid-block-bottom-container">
          <div className="text-container--black">
            <h1 className="mid-block__heading--white">COME & BE INSPIRED</h1>
            <p className="mid-block__text--white">
              We're excited to welcome you to our gallery and see how our
              collections influence you.
            </p>
          </div>
        </div>
      </section>
      <div className="footer-container">
        <footer className="footer">
          <img className="footer__logo" src="icons/logo-light.svg" alt="" />
          <p className="footer__text">
            The Modern Art Gallery is free to all visitors and open seven days a
            week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
          </p>
          <div className="footer__icons">
            <img src="icons/icon-facebook.svg" alt="" />
            <img src="icons/icon-instagram.svg" alt="" />
            <img src="icons/icon-twitter.svg" alt="" />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
