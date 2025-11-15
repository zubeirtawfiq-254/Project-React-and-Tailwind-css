import React from 'react';
import PropTypes from 'prop-types';

export default function Section({ id, children, className = '', twoColumn = false, reverse = false, gap = '8', rightImages = null, topImages = null, ...rest }) {
  // twoColumn: when true, expects `children` to be an array of two nodes
  // reverse: flips columns order on larger screens
  const containerClass = `max-w-6xl mx-auto px-6 lg:px-24`;

  // Top gallery: 4 images in horizontal row above content
  if (topImages && Array.isArray(topImages) && topImages.length) {
    const imgs = topImages.slice(0, 4);

    return (
      <section id={id} className={`py-16 ${className}`} {...rest}>
        <div className={containerClass}>
          <div className="grid grid-cols-4 gap-4 mb-12">
            {imgs.map((img, i) => (
              <div key={i} className="h-40 overflow-hidden rounded-lg bg-gray-100">
                <img src={img.src} alt={img.alt || `gallery-${i+1}`} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
          <div>{children}</div>
        </div>
      </section>
    );
  }

  // Right-side gallery: single-section layout that places a 2x2 image grid on the right (LG+)
  if (rightImages && Array.isArray(rightImages) && rightImages.length) {
    const imgs = rightImages.slice(0, 4);

    return (
      <section id={id} className={`py-16 ${className}`} {...rest}>
        <div className={containerClass}>
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-start`}>
            <div>
              {children}
            </div>

            <div>
              <div className="grid grid-cols-2 gap-4">
                {imgs.map((img, i) => (
                  <div key={i} className="h-40 overflow-hidden rounded-lg bg-gray-100">
                    <img src={img.src} alt={img.alt || `gallery-${i+1}`} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (twoColumn) {
    // ensure children is an array-like with two items
    const left = Array.isArray(children) ? children[0] : null;
    const right = Array.isArray(children) ? children[1] : null;

    const orderLeft = reverse ? 'lg:order-2' : 'lg:order-1';
    const orderRight = reverse ? 'lg:order-1' : 'lg:order-2';

    return (
      <section id={id} className={`py-16 ${className}`} {...rest}>
        <div className={containerClass}>
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-${gap} items-center`}>
            <div className={orderLeft}>{left}</div>
            <div className={orderRight}>{right}</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id={id} className={`py-16 ${className}`} {...rest}>
      <div className={containerClass}>{children}</div>
    </section>
  );
}

Section.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  twoColumn: PropTypes.bool,
  reverse: PropTypes.bool,
  gap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rightImages: PropTypes.arrayOf(PropTypes.shape({ src: PropTypes.string, alt: PropTypes.string })),
  topImages: PropTypes.arrayOf(PropTypes.shape({ src: PropTypes.string, alt: PropTypes.string })),
};
