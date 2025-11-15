import React from 'react';
import PropTypes from 'prop-types';

export default function ResponsiveImage({ src, alt = '', className = '', srcSet, sizes }) {
  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={className}
    />
  );
}

ResponsiveImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
  srcSet: PropTypes.string,
  sizes: PropTypes.string,
};
