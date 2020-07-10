/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */

import React from 'react';

export default function BackButton() {
  return (
    <a className="btn-scroll-top" href="#top" data-scroll="">
      <span className="btn-scroll-top-tooltip text-muted font-size-sm mr-2">
        Top
      </span>
      <i className="btn-scroll-top-icon czi-arrow-up" />
    </a>
  );
}
