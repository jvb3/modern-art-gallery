import React from "react";
import { useNavigate } from "react-router-dom";

function Map() {
  let navigate = useNavigate();
  return (
    <div className="container">
      <section className="top-container">
        <figure className="map">
          <img
            className="map__img"
            src="images-m/image-map@2x.png"
            alt="map of art gallery location"
          />
          <img
            className="map__img-tb"
            src="images-tb/image-map@2x.png"
            alt="map of art gallery location"
          />
          <img
            className="map__img-dt"
            src="images-dt/image-map@2x.png"
            alt="map of art gallery location"
          />
        </figure>
        <div onClick={() => navigate("/")} className="map-button-container">
          <figure className="button">
            <img
              className="btn__icon"
              src="icons/icon-arrow-left.svg"
              alt="arrow icon"
            />
            <p className="btn__text">BACK TO HOME</p>
          </figure>
        </div>
      </section>
      <section className="mid-container">
        <div className="title">OUR LOCATION</div>
        <div className="mid-text-container">
          <div className="sub-title">99 King Street</div>
          <div className="text">
            Newport <br /> RI 02840 <br /> United States of America <br />
            <br />
            Our newly opened gallery is located near the Edward King House on 99
            King Street, the Modern Art Gallery is free to all visitors and open
            seven days a week from 8am to 9pm.
          </div>
        </div>
      </section>
      <section className="bottom-container">
        <div className="logo">
          <img className="logo_img" src="icons/logo-dark.svg" alt="" />
        </div>
        <div className="text">
          The Modern Art Gallery is free to all visitors and open seven days a
          week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
        </div>
        <figure className="icons">
          <img
            className="icon"
            src="icons/icon-facebook.svg"
            alt="facebook icon"
          />

          <img
            className="icon"
            src="icons/icon-instagram.svg"
            alt="instagram icon"
          />

          <img
            className="icon"
            src="icons/icon-twitter.svg"
            alt="twitter icon"
          />
        </figure>
        <figure className="icons-dark">
          <img
            className="icon-dark"
            src="icons/icon-facebook-dark.svg"
            alt="facebook icon"
          />
          <img
            className="icon-dark"
            src="icons/icon-instagram-dark.svg"
            alt="instagram icon"
          />
          <img
            className="icon-dark"
            src="icons/icon-twitter-dark.svg"
            alt="twitter icon"
          />
        </figure>
      </section>
    </div>
  );
}

export default Map;
