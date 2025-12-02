import React from 'react'

const Input=React.forwardRef(function Input({
    label,
    type="text",
    className="",
    ...props
},ref) {
  return (
    <>
        {
            label ? <label> {label}  </label> : null 
        }
        <input type={type} className={`${className}`} ref={ref} {...props} />
    </>
  )
})

export default Input
