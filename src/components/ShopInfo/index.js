/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */

import React from 'react';

export default function ShopInfo() {
  return (
    <section className="container-fluid px-0">
      <div className="row no-gutters">
        <div className="col-md-6">
          <a
            className="card border-0 rounded-0 text-decoration-none py-md-4 bg-faded-primary"
            href="blog-list-sidebar.html"
          >
            <div className="card-body text-center">
              <i className="czi-edit h3 mt-2 mb-4 text-primary" />
              <h3 className="h5 mb-1">Read the blog</h3>
              <p className="text-muted font-size-sm">
                Latest store, fashion news and trends
              </p>
            </div>
          </a>
        </div>
        <div className="col-md-6">
          <a
            className="card border-0 rounded-0 text-decoration-none py-md-4 bg-faded-accent"
            href="#"
          >
            <div className="card-body text-center">
              <i className="czi-instagram h3 mt-2 mb-4 text-accent" />
              <h3 className="h5 mb-1">Follow on Instagram</h3>
              <p className="text-muted font-size-sm">#ShopWithCartzilla</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
