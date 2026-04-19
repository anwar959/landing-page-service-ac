import PropTypes from 'prop-types';

export const Button = ({ className, size, variant, children, ...props }) => {

    const baseClasses = "relative overflow-hidden rounded-lg font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-success transition-all duration-300"

    const variantClasses = {
        default: "bg-success hover:bg-success/90 text-success-foreground shadow-success/25",
        outline: "border-2 border-success text-success hover:bg-success hover:text-success-foreground bg-transparent",
    }

    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        default: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",    
    }

    const classes = `${baseClasses} ${variantClasses[variant] || variantClasses.default} ${sizeClasses[size] || sizeClasses.default} ${className || ''}`;
    return ( 
        <button className={classes} {...props}>
            <span className="relative flex items-center justify-center gap-2">{children}</span>
        </button>
    )
}

Button.propTypes = {
    className: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'default', 'lg']),
    variant: PropTypes.oneOf(['default', 'outline']),
    children: PropTypes.node
};