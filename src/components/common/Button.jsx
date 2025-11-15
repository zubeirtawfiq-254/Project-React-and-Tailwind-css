import React from 'react';
import PropTypes from 'prop-types';

/**
 * Button component with variants: primary, secondary, outline
 */
export default function Button({ variant = 'primary', children, className = '', ...rest }) {
  const base = 'inline-flex items-center justify-center rounded-lg font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-amber-500 text-white px-6 py-3 hover:opacity-95 focus:ring-amber-400',
    secondary: 'bg-teal-600 text-white px-6 py-3 hover:opacity-95 focus:ring-teal-400',
    outline: 'bg-transparent border border-gray-300 text-gray-800 px-6 py-3 hover:bg-gray-50 focus:ring-gray-200',
  };

  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};


