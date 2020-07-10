/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React from 'react';

export default function ProductListFeature() {
  return (
    <section className="container mb-4 pb-3 pb-sm-0 mb-sm-5">
      <div className="row">
        <div className="col-md-5">
          <div
            className="d-flex flex-column h-100 overflow-hidden rounded-lg"
            style={{ backgroundColor: '#e2e9ef' }}
          >
            <div className="d-flex justify-content-between px-grid-gutter py-grid-gutter">
              <div>
                <h3 className="mb-1">Hoodie day</h3>
                <a className="font-size-md" href="shop-list.html">
                  Shop hoodies
                  <i className="czi-arrow-right font-size-xs align-middle ml-1" />
                </a>
              </div>
              <div className="cz-custom-controls" id="hoodie-day">
                <button type="button">
                  <i className="czi-arrow-left" />
                </button>
                <button type="button">
                  <i className="czi-arrow-right" />
                </button>
              </div>
            </div>
            <a className="d-none d-md-block mt-auto" href="shop-list.html">
              <img
                className="d-block w-100"
                src="./img/home/categories/cat-lg04.jpg"
                alt="For Women"
              />
            </a>
          </div>
        </div>
        <div className="col-md-7 pt-4 pt-md-0">
          <div className="cz-carousel">
            <div
              className="cz-carousel-inner"
              data-carousel-options='{"nav": false, "controlsContainer": "#hoodie-day"}'
            >
              <div>
                <div className="row mx-n2">
                  <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                    <div className="card product-card card-static">
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
                        <img src="./img/shop/catalog/20.jpg" alt="Product" />
                      </a>
                      <div className="card-body py-2">
                        <a
                          className="product-meta d-block font-size-xs pb-1"
                          href="#"
                        >
                          Hoodies &amp; Sweatshirts
                        </a>
                        <h3 className="product-title font-size-sm">
                          <a href="shop-single.html">
                            Block-colored Hooded Top
                          </a>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $24.<small>99</small>
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
                    </div>
                  </div>
                  <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                    <div className="card product-card card-static">
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
                        <img src="./img/shop/catalog/21.jpg" alt="Product" />
                      </a>
                      <div className="card-body py-2">
                        <a
                          className="product-meta d-block font-size-xs pb-1"
                          href="#"
                        >
                          Hoodies &amp; Sweatshirts
                        </a>
                        <h3 className="product-title font-size-sm">
                          <a href="shop-single.html">
                            Block-colored Hooded Top
                          </a>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $26.<small>99</small>
                            </span>
                          </div>
                          <div className="star-rating">
                            <i className="sr-star czi-star-filled active" />
                            <i className="sr-star czi-star-filled active" />
                            <i className="sr-star czi-star-filled active" />
                            <i className="sr-star czi-star-filled active" />
                            <i className="sr-star czi-star-filled active" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                    <div className="card product-card card-static">
                      <span className="badge badge-danger badge-shadow">
                        Sale
                      </span>
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
                        <img src="./img/shop/catalog/23.jpg" alt="Product" />
                      </a>
                      <div className="card-body py-2">
                        <a
                          className="product-meta d-block font-size-xs pb-1"
                          href="#"
                        >
                          Hoodies &amp; Sweatshirts
                        </a>
                        <h3 className="product-title font-size-sm">
                          <a href="shop-single.html">
                            Block-colored Hooded Top
                          </a>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $17.<small>99</small>
                            </span>
                            <del className="font-size-sm text-muted">
                              24.<small>99</small>
                            </del>
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
                    </div>
                  </div>
                  <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                    <div className="card product-card card-static">
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
                        <img src="./img/shop/catalog/51.jpg" alt="Product" />
                      </a>
                      <div className="card-body py-2">
                        <a
                          className="product-meta d-block font-size-xs pb-1"
                          href="#"
                        >
                          Hoodies &amp; Sweatshirts
                        </a>
                        <h3 className="product-title font-size-sm">
                          <a href="shop-single.html">Mono Color Hooded Top</a>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $21.<small>99</small>
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
                    </div>
                  </div>
                  <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4 d-none d-lg-block">
                    <div className="card product-card card-static">
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
                        <img src="./img/shop/catalog/24.jpg" alt="Product" />
                      </a>
                      <div className="card-body py-2">
                        <a
                          className="product-meta d-block font-size-xs pb-1"
                          href="#"
                        >
                          Hoodies &amp; Sweatshirts
                        </a>
                        <h3 className="product-title font-size-sm">
                          <a href="shop-single.html">
                            Block-colored Hooded Top
                          </a>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $24.<small>99</small>
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
                    </div>
                  </div>
                  <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4 d-none d-lg-block">
                    <div className="card product-card card-static">
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
                        <img src="./img/shop/catalog/54.jpg" alt="Product" />
                      </a>
                      <div className="card-body py-2">
                        <a
                          className="product-meta d-block font-size-xs pb-1"
                          href="#"
                        >
                          Hoodies &amp; Sweatshirts
                        </a>
                        <h3 className="product-title font-size-sm">
                          <a href="shop-single.html">Mono Color Hooded Top</a>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $21.<small>99</small>
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
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="row mx-n2">
                  <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4 d-none d-lg-block">
                    <div className="card product-card card-static">
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
                        <img src="./img/shop/catalog/53.jpg" alt="Product" />
                      </a>
                      <div className="card-body py-2">
                        <a
                          className="product-meta d-block font-size-xs pb-1"
                          href="#"
                        >
                          Hoodies &amp; Sweatshirts
                        </a>
                        <h3 className="product-title font-size-sm">
                          <a href="shop-single.html">Mono Color Hooded Top</a>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $21.<small>99</small>
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
                    </div>
                  </div>
                  <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4 d-none d-lg-block">
                    <div className="card product-card card-static">
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
                        <img src="./img/shop/catalog/52.jpg" alt="Product" />
                      </a>
                      <div className="card-body py-2">
                        <a
                          className="product-meta d-block font-size-xs pb-1"
                          href="#"
                        >
                          Hoodies &amp; Sweatshirts
                        </a>
                        <h3 className="product-title font-size-sm">
                          <a href="shop-single.html">Printed Hooded Top</a>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $25.<small>99</small>
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
                    </div>
                  </div>
                  <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                    <div className="card product-card card-static">
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
                        <img src="./img/shop/catalog/22.jpg" alt="Product" />
                      </a>
                      <div className="card-body py-2">
                        <a
                          className="product-meta d-block font-size-xs pb-1"
                          href="#"
                        >
                          Hoodies &amp; Sweatshirts
                        </a>
                        <h3 className="product-title font-size-sm">
                          <a href="shop-single.html">
                            Block-colored Hooded Top
                          </a>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $24.<small>99</small>
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
                    </div>
                  </div>
                  <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                    <div className="card product-card card-static">
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
                        <img src="./img/shop/catalog/56.jpg" alt="Product" />
                      </a>
                      <div className="card-body py-2">
                        <a
                          className="product-meta d-block font-size-xs pb-1"
                          href="#"
                        >
                          Hoodies &amp; Sweatshirts
                        </a>
                        <h3 className="product-title font-size-sm">
                          <a href="shop-single.html">Printed Hooded Top</a>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $25.<small>99</small>
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
                    </div>
                  </div>
                  <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                    <div className="card product-card card-static">
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
                        <img src="./img/shop/catalog/55.jpg" alt="Product" />
                      </a>
                      <div className="card-body py-2">
                        <a
                          className="product-meta d-block font-size-xs pb-1"
                          href="#"
                        >
                          Hoodies &amp; Sweatshirts
                        </a>
                        <h3 className="product-title font-size-sm">
                          <a href="shop-single.html">
                            Block-colored Hooded Top
                          </a>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $24.<small>99</small>
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
                    </div>
                  </div>
                  <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                    <div className="card product-card card-static">
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
                        <img src="./img/shop/catalog/57.jpg" alt="Product" />
                      </a>
                      <div className="card-body py-2">
                        <a
                          className="product-meta d-block font-size-xs pb-1"
                          href="#"
                        >
                          Hoodies &amp; Sweatshirts
                        </a>
                        <h3 className="product-title font-size-sm">
                          <a href="shop-single.html">
                            Block-colored Hooded Top
                          </a>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $23.<small>99</small>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
