/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React from 'react';

export default function Header() {
  return (
    <header className="box-shadow-sm">
      <div className="navbar-sticky bg-light">
        <div className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a
              className="navbar-brand d-none d-sm-block mr-3 flex-shrink-0"
              href="index.html"
              style={{ minWidth: '7rem' }}
            >
              <img width="142" src="img\logo-dark.png" alt="Cartzilla" />
            </a>
            <a
              className="navbar-brand d-sm-none mr-2"
              href="index.html"
              style={{ minWidth: '4.625rem' }}
            >
              <img width="74" src="img\logo-icon.png" alt="Cartzilla" />
            </a>
            <div className="input-group-overlay d-none d-lg-flex mx-4">
              <input
                className="form-control appended-form-control"
                type="text"
                placeholder="Search for products"
              />
              <div className="input-group-append-overlay">
                <span className="input-group-text">
                  <i className="czi-search" />
                </span>
              </div>
            </div>
            <div className="navbar-toolbar d-flex flex-shrink-0 align-items-center">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <a className="navbar-tool navbar-stuck-toggler" href="#">
                <span className="navbar-tool-tooltip">Expand menu</span>
                <div className="navbar-tool-icon-box">
                  <i className="navbar-tool-icon czi-menu" />
                </div>
              </a>
              <a
                className="navbar-tool d-none d-lg-flex"
                href="account-wishlist.html"
              >
                <span className="navbar-tool-tooltip">Wishlist</span>
                <div className="navbar-tool-icon-box">
                  <i className="navbar-tool-icon czi-heart" />
                </div>
              </a>
              <a
                className="navbar-tool ml-1 ml-lg-0 mr-n1 mr-lg-2"
                href="#signin-modal"
                data-toggle="modal"
              >
                <div className="navbar-tool-icon-box">
                  <i className="navbar-tool-icon czi-user" />
                </div>
                <div className="navbar-tool-text ml-n3">
                  <small>Hello, Sign in</small>My Account
                </div>
              </a>
              <div className="navbar-tool dropdown ml-3">
                <a
                  className="navbar-tool-icon-box bg-secondary dropdown-toggle"
                  href="shop-cart.html"
                >
                  <span className="navbar-tool-label">4</span>
                  <i className="navbar-tool-icon czi-cart" />
                </a>
                <a className="navbar-tool-text" href="shop-cart.html">
                  <small>My Cart</small>$265.00
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  style={{ width: '20rem' }}
                >
                  <div className="widget widget-cart px-3 pt-2 pb-3">
                    <div
                      style={{ height: '15rem' }}
                      data-simplebar=""
                      data-simplebar-auto-hide="false"
                    >
                      <div className="widget-cart-item pb-2 border-bottom">
                        <button
                          className="close text-danger"
                          type="button"
                          aria-label="Remove"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="media align-items-center">
                          <a className="d-block mr-2" href="shop-single.html">
                            <img
                              width="64"
                              src="./img/shop/cart/widget/01.jpg"
                              alt="Product"
                            />
                          </a>
                          <div className="media-body">
                            <h6 className="widget-product-title">
                              <a href="shop-single.html">
                                Women Colorblock Sneakers
                              </a>
                            </h6>
                            <div className="widget-product-meta">
                              <span className="text-accent mr-2">
                                $150.<small>00</small>
                              </span>
                              <span className="text-muted">x 1</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="widget-cart-item py-2 border-bottom">
                        <button
                          className="close text-danger"
                          type="button"
                          aria-label="Remove"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="media align-items-center">
                          <a className="d-block mr-2" href="shop-single.html">
                            <img
                              width="64"
                              src="./img/shop/cart/widget/02.jpg"
                              alt="Product"
                            />
                          </a>
                          <div className="media-body">
                            <h6 className="widget-product-title">
                              <a href="shop-single.html">
                                TH Jeans City Backpack
                              </a>
                            </h6>
                            <div className="widget-product-meta">
                              <span className="text-accent mr-2">
                                $79.<small>50</small>
                              </span>
                              <span className="text-muted">x 1</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="widget-cart-item py-2 border-bottom">
                        <button
                          className="close text-danger"
                          type="button"
                          aria-label="Remove"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="media align-items-center">
                          <a className="d-block mr-2" href="shop-single.html">
                            <img
                              width="64"
                              src="./img/shop/cart/widget/03.jpg"
                              alt="Product"
                            />
                          </a>
                          <div className="media-body">
                            <h6 className="widget-product-title">
                              <a href="shop-single.html">
                                3-Color Sun Stash Hat
                              </a>
                            </h6>
                            <div className="widget-product-meta">
                              <span className="text-accent mr-2">
                                $22.<small>50</small>
                              </span>
                              <span className="text-muted">x 1</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="widget-cart-item py-2 border-bottom">
                        <button
                          className="close text-danger"
                          type="button"
                          aria-label="Remove"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="media align-items-center">
                          <a className="d-block mr-2" href="shop-single.html">
                            <img
                              width="64"
                              src="./img/shop/cart/widget/04.jpg"
                              alt="Product"
                            />
                          </a>
                          <div className="media-body">
                            <h6 className="widget-product-title">
                              <a href="shop-single.html">
                                Cotton Polo Regular Fit
                              </a>
                            </h6>
                            <div className="widget-product-meta">
                              <span className="text-accent mr-2">
                                $9.<small>00</small>
                              </span>
                              <span className="text-muted">x 1</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between align-items-center py-3">
                      <div className="font-size-sm mr-2 py-2">
                        <span className="text-muted">Subtotal:</span>
                        <span className="text-accent font-size-base ml-1">
                          $265.<small>00</small>
                        </span>
                      </div>
                      <a
                        className="btn btn-outline-secondary btn-sm"
                        href="shop-cart.html"
                      >
                        Expand cart
                        <i className="czi-arrow-right ml-1 mr-n1" />
                      </a>
                    </div>
                    <a
                      className="btn btn-primary btn-sm btn-block"
                      href="checkout-details.html"
                    >
                      <i className="czi-card mr-2 font-size-base align-middle" />
                      Checkout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar navbar-expand-lg navbar-light navbar-stuck-menu mt-n2 pt-0 pb-2">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="input-group-overlay d-lg-none my-3">
                <div className="input-group-prepend-overlay">
                  <span className="input-group-text">
                    <i className="czi-search" />
                  </span>
                </div>
                <input
                  className="form-control prepended-form-control"
                  type="text"
                  placeholder="Search for products"
                />
              </div>

              <ul className="navbar-nav">
                <li className="nav-item dropdown active">
                  <a className="nav-link dropdown-toggle" href="index.html">
                    Home
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="shop-list.html">
                    Shop
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="shop-categories.html"
                  >
                    Category
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                  >
                    Account
                  </a>
                  <ul className="dropdown-menu">
                    <li className="dropdown">
                      <a
                        className="dropdown-item dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                      >
                        Shop User Account
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item"
                            href="account-orders.html"
                          >
                            Orders History
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="account-profile.html"
                          >
                            Profile Settings
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="account-address.html"
                          >
                            Account Addresses
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="account-payment.html"
                          >
                            Payment Methods
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="account-wishlist.html"
                          >
                            Wishlist
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="account-tickets.html"
                          >
                            My Tickets
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="account-single-ticket.html"
                          >
                            Single Ticket
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a
                        className="dropdown-item dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                      >
                        Vendor Dashboard
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item"
                            href="dashboard-settings.html"
                          >
                            Settings
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="dashboard-purchases.html"
                          >
                            Purchases
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="dashboard-favorites.html"
                          >
                            Favorites
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="dashboard-sales.html"
                          >
                            Sales
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="dashboard-products.html"
                          >
                            Products
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="dashboard-add-new-product.html"
                          >
                            Add New Product
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="dashboard-payouts.html"
                          >
                            Payouts
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="dropdown-item" href="account-signin.html">
                        Sign In / Sign Up
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="account-password-recovery.html"
                      >
                        Password Recovery
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="blog.html">
                    Blog
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="about.html">
                    About
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="contacts.html">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
