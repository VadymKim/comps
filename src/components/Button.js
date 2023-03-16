
import classNames from 'classnames';

function Button({ 
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded, 
    ...rest
}) {

    const cssClasses = classNames(
        rest.className,
        'px-3 py-1.5 border flex justify-around items-center', 
        {
            'bg-blue-400 border-blue-600 text-white': primary,
            'bg-gray-900 border-gray-900 text-white': secondary,
            'bg-green-400 border-green-600 text-white': success,
            'bg-yellow-400 border-yellow-600 text-white': warning,
            'bg-red-400 border-red-600 text-white': danger,
            'rounded-full': rounded,
            'bg-white': outline,
            'text-blue-600': outline && primary,
            'text-gray-900': outline && secondary,
            'text-green-600': outline && success,
            'text-yellow-600': outline && warning,
            'text-red-600': outline && danger,
            
        }
    );
    
    return (
        <button {...rest} className={cssClasses}>{ children }</button>
    );
}

Button.propTypes = {
    checkPropsValue: ({ primary, secondary, success, warning, danger}) => {
        const count = Number(!!primary)
                        + Number(!!secondary)
                        + Number(!!success)
                        + Number(!!warning)
                        + Number(!!danger);

        if (count > 1) {
             return new Error('Only one props must be true');
        }
    },
};

export default Button;