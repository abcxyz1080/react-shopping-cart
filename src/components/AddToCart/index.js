/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */

import React from 'react';

export default function AddToCart() {
  return (
    <div className="toast-container toast-bottom-center">
      <div
        className="toast mb-3"
        id="cart-toast"
        data-delay="5000"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header bg-success text-white">
          <i className="czi-check-circle mr-2" />
          <h6 className="font-size-sm text-white mb-0 mr-auto">
            Added to cart!
          </h6>
          <button
            className="close text-white ml-2 mb-1"
            type="button"
            data-dismiss="toast"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="toast-body">This item has been added to your cart.</div>
      </div>
    </div>
  );
}
