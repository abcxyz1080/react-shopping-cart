/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */

import React from 'react';

export default function Slider() {
  return (
    <section className="cz-carousel cz-controls-lg">
      <div
        className="cz-carousel-inner"
        data-carousel-options='{"mode": "gallery", "responsive": {"0":{"nav":true, "controls": false},"992":{"nav":false, "controls": true}}}'
      >
        <div className="px-lg-5" style={{ backgroundColor: '#3aafd2' }}>
          <div className="d-lg-flex justify-content-between align-items-center pl-lg-4">
            <img
              className="d-block order-lg-2 mr-lg-n5 flex-shrink-0"
              src="./img/home/hero-slider/01.jpg"
              alt="Summer Collection"
            />
            <div
              className="position-relative mx-auto mr-lg-n5 py-5 px-4 mb-lg-5 order-lg-1"
              style={{ maxWidth: '42rem', zIndex: 10 }}
            >
              <div className="pb-lg-5 mb-lg-5 text-center text-lg-left text-lg-nowrap">
                <h2 className="text-light font-weight-light pb-1 from-left">
                  Has just arrived!
                </h2>
                <h1 className="text-light display-4 from-left delay-1">
                  Huge Summer Collection
                </h1>
                <p className="font-size-lg text-light pb-3 from-left delay-2">
                  Swimwear, Tops, Shorts, Sunglasses &amp; much more...
                </p>
                <a
                  className="btn btn-primary scale-up delay-4"
                  href="shop-list.html"
                >
                  Shop Now
                  <i className="czi-arrow-right ml-2 mr-n1" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="px-lg-5" style={{ backgroundColor: '#f5b1b0' }}>
          <div className="d-lg-flex justify-content-between align-items-center pl-lg-4">
            <img
              className="d-block order-lg-2 mr-lg-n5 flex-shrink-0"
              src="./img/home/hero-slider/02.jpg"
              alt="Women Sportswear"
            />
            <div
              className="position-relative mx-auto mr-lg-n5 py-5 px-4 mb-lg-5 order-lg-1"
              style={{ maxWidth: '42rem', zIndex: 10 }}
            >
              <div className="pb-lg-5 mb-lg-5 text-center text-lg-left text-lg-nowrap">
                <h2 className="text-light font-weight-light pb-1 from-bottom">
                  Hurry up! Limited time offer.
                </h2>
                <h1 className="text-light display-4 from-bottom delay-1">
                  Women Sportswear Sale
                </h1>
                <p className="font-size-lg text-light pb-3 from-bottom delay-2">
                  Sneakers, Keds, Sweatshirts, Hoodies &amp; much more...
                </p>
                <a
                  className="btn btn-primary scale-up delay-4"
                  href="shop-grid-ls.html"
                >
                  Shop Now
                  <i className="czi-arrow-right ml-2 mr-n1" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="px-lg-5" style={{ backgroundColor: '#eba170' }}>
          <div className="d-lg-flex justify-content-between align-items-center pl-lg-4">
            <img
              className="d-block order-lg-2 mr-lg-n5 flex-shrink-0"
              src="./img/home/hero-slider/03.jpg"
              alt="Men Accessories"
            />
            <div
              className="position-relative mx-auto mr-lg-n5 py-5 px-4 mb-lg-5 order-lg-1"
              style={{ maxWidth: '42rem', zIndex: 10 }}
            >
              <div className="pb-lg-5 mb-lg-5 text-center text-lg-left text-lg-nowrap">
                <h2 className="text-light font-weight-light pb-1 from-top">
                  Complete your look with
                </h2>
                <h1 className="text-light display-4 from-top delay-1">
                  New Men Accessories
                </h1>
                <p className="font-size-lg text-light pb-3 from-top delay-2">
                  Hats &amp; Caps, Sunglasses, Bags &amp; much more...
                </p>
                <a
                  className="btn btn-primary scale-up delay-4"
                  href="shop-grid-ls.html"
                >
                  Shop Now
                  <i className="czi-arrow-right ml-2 mr-n1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
