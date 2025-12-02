import React from 'react'

function Button({
    type = 'button', // Default to 'button' if not provided
    onClick,
    // Include default styling here
    className = "", 
    bgColor = "bg-blue-600", // Default background color
    textColor = "text-white", // Default text color
    children,
    ...props
}) {
    // Combine default and custom classes
    return (
        <button 
            type={type} 
            onClick={onClick} 
            className={`
                px-4 py-2 rounded-lg 
                ${bgColor} 
                ${textColor} 
                ${className} 
                hover:bg-blue-700 
                transition duration-200 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
            `} 
            {...props}
        >
            {children}
        </button>
    )
}

export default Button