/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */

import React from 'react';

export default function Promotion() {
  return (
    <section className="container pb-4 mb-md-3">
      <div className="row">
        <div className="col-md-8 mb-4">
          <div className="d-sm-flex justify-content-between align-items-center bg-secondary overflow-hidden rounded-lg">
            <div className="py-4 my-2 my-md-0 py-md-5 px-4 ml-md-3 text-center text-sm-left">
              <h4 className="font-size-lg font-weight-light mb-2">
                Hurry up! Limited time offer
              </h4>
              <h3 className="mb-4">Converse All Star on Sale</h3>
              <a className="btn btn-primary btn-shadow btn-sm" href="#">
                Shop Now
              </a>
            </div>
            <img
              className="d-block ml-auto"
              src="img\shop\catalog\banner.jpg"
              alt="Shop Converse"
            />
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div
            className="d-flex flex-column h-100 justify-content-center bg-size-cover bg-position-center rounded-lg"
            style={{ backgroundImage: 'url("./img/blog/banner-bg.jpg")' }}
          >
            <div className="py-4 my-2 px-4 text-center">
              <div className="py-1">
                <h5 className="mb-2">Your Add Banner Here</h5>
                <p className="font-size-sm text-muted">
                  Hurry up to reserve your spot
                </p>
                <a className="btn btn-primary btn-shadow btn-sm" href="#">
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
