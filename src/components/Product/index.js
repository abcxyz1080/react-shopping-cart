/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React from 'react';

export default function Product() {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
      <div className="card product-card">
        <button
          className="btn-wishlist btn-sm"
          type="button"
          data-toggle="tooltip"
          data-placement="left"
          title="Add to wishlist"
        >
          <i className="czi-heart" />
        </button>
        <a
          className="card-img-top d-block overflow-hidden"
          href="shop-single.html"
        >
          <img src="./img/shop/catalog/03.jpg" alt="Product" />
        </a>
        <div className="card-body py-2">
          <a className="product-meta d-block font-size-xs pb-1" href="#">
            Women’s Shorts
          </a>
          <h3 className="product-title font-size-sm">
            <a href="shop-single.html">Mom High Waist Shorts</a>
          </h3>
          <div className="d-flex justify-content-between">
            <div className="product-price">
              <span className="text-accent">
                $39.<small>50</small>
              </span>
            </div>
            <div className="star-rating">
              <i className="sr-star czi-star-filled active" />
              <i className="sr-star czi-star-filled active" />
              <i className="sr-star czi-star-filled active" />
              <i className="sr-star czi-star-filled active" />
              <i className="sr-star czi-star" />
            </div>
          </div>
        </div>
        <div className="card-body card-body-hidden">
          <div className="text-center pb-2">
            <div className="custom-control custom-option custom-control-inline mb-2">
              <input
                className="custom-control-input"
                type="radio"
                name="size2"
                id="xs"
              />
              <label className="custom-option-label" htmlFor="xs">
                XS
              </label>
            </div>
            <div className="custom-control custom-option custom-control-inline mb-2">
              <input
                className="custom-control-input"
                type="radio"
                name="size2"
                id="s"
                checked=""
              />
              <label className="custom-option-label" htmlFor="s">
                S
              </label>
            </div>
            <div className="custom-control custom-option custom-control-inline mb-2">
              <input
                className="custom-control-input"
                type="radio"
                name="size2"
                id="m"
              />
              <label className="custom-option-label" htmlFor="m">
                M
              </label>
            </div>
            <div className="custom-control custom-option custom-control-inline mb-2">
              <input
                className="custom-control-input"
                type="radio"
                name="size2"
                id="l"
              />
              <label className="custom-option-label" htmlFor="l">
                L
              </label>
            </div>
          </div>
          <button
            className="btn btn-primary btn-sm btn-block mb-2"
            type="button"
            data-toggle="toast"
            data-target="#cart-toast"
          >
            <i className="czi-cart font-size-sm mr-1" />
            Add to Cart
          </button>
          <div className="text-center">
            <a
              className="nav-link-style font-size-ms"
              href="#quick-view"
              data-toggle="modal"
            >
              <i className="czi-eye align-middle mr-1" />
              Quick view
            </a>
          </div>
        </div>
      </div>
      <hr className="d-sm-none" />
    </div>
  );
}
