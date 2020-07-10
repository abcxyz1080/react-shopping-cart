/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */

import React from 'react';

export default function QuickView() {
  return (
    <div className="modal-quick-view modal fade" id="quick-view" tabIndex="-1">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title product-title">
              <a
                href="shop-single.html"
                data-toggle="tooltip"
                data-placement="right"
                title="Go to product page"
              >
                Sports Hooded Sweatshirt
                <i className="czi-arrow-right font-size-lg ml-2" />
              </a>
            </h4>
            <button
              className="close"
              type="button"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-lg-7 pr-lg-0">
                <div className="cz-product-gallery">
                  <div className="cz-preview order-sm-2">
                    <div className="cz-preview-item active" id="first">
                      <img
                        className="cz-image-zoom"
                        src="./img/shop/single/gallery/01.jpg"
                        data-zoom="./img/shop/single/gallery/01.jpg"
                        alt="Product"
                      />
                      <div className="cz-image-zoom-pane" />
                    </div>
                    <div className="cz-preview-item" id="second">
                      <img
                        className="cz-image-zoom"
                        src="./img/shop/single/gallery/03.jpg"
                        data-zoom="./img/shop/single/gallery/02.jpg"
                        alt="Product"
                      />
                      <div className="cz-image-zoom-pane" />
                    </div>
                    <div className="cz-preview-item" id="third">
                      <img
                        className="cz-image-zoom"
                        src="./img/shop/single/gallery/03.jpg"
                        data-zoom="img/shop/single/gallery/03.jpg"
                        alt="Product"
                      />
                      <div className="cz-image-zoom-pane" />
                    </div>
                    <div className="cz-preview-item" id="fourth">
                      <img
                        className="cz-image-zoom"
                        src="./img/shop/single/gallery/04.jpg"
                        data-zoom="./img/shop/single/gallery/04.jpg"
                        alt="Product"
                      />
                      <div className="cz-image-zoom-pane" />
                    </div>
                  </div>
                  <div className="cz-thumblist order-sm-1">
                    <a className="cz-thumblist-item active" href="#first">
                      <img
                        src="img\shop\single\gallery\th01.jpg"
                        alt="Product thumb"
                      />
                    </a>
                    <a className="cz-thumblist-item" href="#second">
                      <img
                        src="img\shop\single\gallery\th02.jpg"
                        alt="Product thumb"
                      />
                    </a>
                    <a className="cz-thumblist-item" href="#third">
                      <img
                        src="img\shop\single\gallery\th03.jpg"
                        alt="Product thumb"
                      />
                    </a>
                    <a className="cz-thumblist-item" href="#fourth">
                      <img
                        src="img\shop\single\gallery\th04.jpg"
                        alt="Product thumb"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 pt-4 pt-lg-0 cz-image-zoom-pane">
                <div className="product-details ml-auto pb-3">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <a href="shop-single.html#reviews">
                      <div className="star-rating">
                        <i className="sr-star czi-star-filled active" />
                        <i className="sr-star czi-star-filled active" />
                        <i className="sr-star czi-star-filled active" />
                        <i className="sr-star czi-star-filled active" />
                        <i className="sr-star czi-star" />
                      </div>
                      <span className="d-inline-block font-size-sm text-body align-middle mt-1 ml-1">
                        74 Reviews
                      </span>
                    </a>
                    <button
                      className="btn-wishlist"
                      type="button"
                      data-toggle="tooltip"
                      title="Add to wishlist"
                    >
                      <i className="czi-heart" />
                    </button>
                  </div>
                  <div className="mb-3">
                    <span className="h3 font-weight-normal text-accent mr-1">
                      $18.<small>99</small>
                    </span>
                    <del className="text-muted font-size-lg mr-3">
                      $25.<small>00</small>
                    </del>
                    <span className="badge badge-danger badge-shadow align-middle mt-n2">
                      Sale
                    </span>
                  </div>
                  <div className="font-size-sm mb-4">
                    <span className="text-heading font-weight-medium mr-1">
                      Color:
                    </span>
                    <span className="text-muted">Red/Dark blue/White</span>
                  </div>
                  <div className="position-relative mr-n4 mb-3">
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input
                        className="custom-control-input"
                        type="radio"
                        name="color"
                        id="color1"
                        checked=""
                      />
                      <label
                        className="custom-option-label rounded-circle"
                        htmlFor="color1"
                      >
                        <span
                          className="custom-option-color rounded-circle"
                          style={{
                            backgroundImage:
                              'url("./img/shop/single/color-opt-1.png")',
                          }}
                        />
                      </label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input
                        className="custom-control-input"
                        type="radio"
                        name="color"
                        id="color2"
                      />
                      <label
                        className="custom-option-label rounded-circle"
                        htmlFor="color2"
                      >
                        <span
                          className="custom-option-color rounded-circle"
                          style={{
                            backgroundImage:
                              'url(img/shop/single/color-opt-2.png)',
                          }}
                        />
                      </label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input
                        className="custom-control-input"
                        type="radio"
                        name="color"
                        id="color3"
                      />
                      <label
                        className="custom-option-label rounded-circle"
                        htmlFor="color3"
                      >
                        <span
                          className="custom-option-color rounded-circle"
                          style={{
                            backgroundImage:
                              'url("./img/shop/single/color-opt-3.png")',
                          }}
                        />
                      </label>
                    </div>
                    <div className="product-badge product-available mt-n1">
                      <i className="czi-security-check" />
                      Product available
                    </div>
                  </div>
                  <form className="mb-grid-gutter">
                    <div className="form-group">
                      <label
                        className="font-weight-medium pb-1"
                        htmlFor="product-size"
                      >
                        Size:
                      </label>
                      <select
                        className="custom-select"
                        required=""
                        id="product-size"
                      >
                        <option value="">Select size</option>
                        <option value="xs">XS</option>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                      </select>
                    </div>
                    <div className="form-group d-flex align-items-center">
                      <select
                        className="custom-select mr-3"
                        style={{ width: '5rem' }}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                      <button
                        className="btn btn-primary btn-shadow btn-block"
                        type="submit"
                      >
                        <i className="czi-cart font-size-lg mr-2" />
                        Add to Cart
                      </button>
                    </div>
                  </form>
                  <h5 className="h6 mb-3 pb-2 border-bottom">
                    <i className="czi-announcement text-muted font-size-lg align-middle mt-n1 mr-2" />
                    Product info
                  </h5>
                  <h6 className="font-size-sm mb-2">Style</h6>
                  <ul className="font-size-sm pl-4">
                    <li>Hooded top</li>
                  </ul>
                  <h6 className="font-size-sm mb-2">Composition</h6>
                  <ul className="font-size-sm pl-4">
                    <li>Elastic rib: Cotton 95%, Elastane 5%</li>
                    <li>Lining: Cotton 100%</li>
                    <li>Cotton 80%, Polyester 20%</li>
                  </ul>
                  <h6 className="font-size-sm mb-2">Art. No.</h6>
                  <ul className="font-size-sm pl-4 mb-0">
                    <li>183260098</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
