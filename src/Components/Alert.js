import React from 'react'

const Alert = (props) => {
  return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show w-10`} role="alert">
            {props.alert.msg}
            
        </div>
    
  )
}

export default Alert

