import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ image, title, children, className = '' }) {
  return (
    <article className={`bg-white rounded-lg shadow-sm overflow-hidden ${className}`}>
      {image && (
        <div className="w-full h-48 bg-gray-100 overflow-hidden">
          <img src={image} alt={title || 'card image'} className="w-full h-full object-cover" loading="lazy" />
        </div>
      )}
      <div className="p-6">
        {title && <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>}
        <div className="text-sm text-gray-600">{children}</div>
      </div>
    </article>
  );
}

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};
import PropTypes from 'prop-types';
export default function Card({ title, body, image, alt }) {
  return (
    <article className="bg-white rounded-lg shadow-sm p-4">
      {image && <img src={image} alt={alt} className="w-full h-40 object-cover rounded-md mb-3" loading="lazy" />}
      <h3 className="font-semibold">{title}</h3>
      <p className="text-gray-600 text-sm mt-2">{body}</p>
    </article>
  );
}
Card.propTypes = { title: PropTypes.string, body: PropTypes.string, image: PropTypes.string, alt: PropTypes.string };
