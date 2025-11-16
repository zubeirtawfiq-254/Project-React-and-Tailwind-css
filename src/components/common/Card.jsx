import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ title, body, image, alt = '', className = '' }) {
  return (
    <article className={`bg-white rounded-lg shadow-sm overflow-hidden ${className}`}>
      {image && (
        <div className="w-full h-48 bg-gray-100 overflow-hidden">
          <img src={image} alt={alt || title || 'card image'} className="w-full h-full object-cover" loading="lazy" />
        </div>
      )}
      <div className="p-6">
        {title && <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>}
        {body && <p className="text-sm text-gray-600">{body}</p>}
      </div>
    </article>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};
