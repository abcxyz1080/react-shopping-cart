/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */

import React from 'react';

export default function ShopService() {
  return (
    <div className="pt-5 bg-darker">
      <div className="container">
        <div className="row pb-3">
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="media">
              <i
                className="czi-rocket text-primary"
                style={{ fontSize: '2.25rem' }}
              />
              <div className="media-body pl-3">
                <h6 className="font-size-base text-light mb-1">
                  Fast and free delivery
                </h6>
                <p className="mb-0 font-size-ms text-light opacity-50">
                  Free delivery for all orders over $200
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="media">
              <i
                className="czi-currency-exchange text-primary"
                style={{ fontSize: '2.25rem' }}
              />
              <div className="media-body pl-3">
                <h6 className="font-size-base text-light mb-1">
                  Money back guarantee
                </h6>
                <p className="mb-0 font-size-ms text-light opacity-50">
                  We return money within 30 days
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="media">
              <i
                className="czi-support text-primary"
                style={{ fontSize: '2.25rem' }}
              />
              <div className="media-body pl-3">
                <h6 className="font-size-base text-light mb-1">
                  24/7 customer support
                </h6>
                <p className="mb-0 font-size-ms text-light opacity-50">
                  Friendly 24/7 customer support
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="media">
              <i
                className="czi-card text-primary"
                style={{ fontSize: '2.25rem' }}
              />
              <div className="media-body pl-3">
                <h6 className="font-size-base text-light mb-1">
                  Secure online payment
                </h6>
                <p className="mb-0 font-size-ms text-light opacity-50">
                  We possess SSL / Secure сertificate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
