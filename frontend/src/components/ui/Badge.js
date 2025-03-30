import classNames from 'classnames';

const Badge = ({ 
  children,
  variant = 'primary',
  size = 'md',
  rounded = 'full',
  className = ''
}) => {
  const variants = {
    primary: 'bg-primary-100 text-primary-800',
    secondary: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800',
    danger: 'bg-red-100 text-red-800',
    warning: 'bg-yellow-100 text-yellow-800',
    info: 'bg-blue-100 text-blue-800',
    dark: 'bg-gray-800 text-white'
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-0.5 text-sm',
    lg: 'px-3 py-1 text-base'
  };

  const roundedStyles = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full'
  };

  return (
    <span
      className={classNames(
        'inline-flex items-center font-medium',
        variants[variant],
        sizes[size],
        roundedStyles[rounded],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;