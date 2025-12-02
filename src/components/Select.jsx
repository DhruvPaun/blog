import React from 'react'

const Select=React.forwardRef(function Select({
    options,
    className,
    label,
    ...props
},ref) {
  return (
    <div>
    {label && <label>{label}</label>}
        <select className={`${className}`} {...props} ref={ref}>
            {
                options?.map((val)=>(
                    <option key={val} value={val}>{val}</option>
                ))
            }
        </select>
    </div>
  )
})

export default Select
