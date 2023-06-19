import React from 'react'
import PropTypes from 'prop-types'
const Footer = (props) => {
  return (
    <>
        <footer className={`py-3 my-4 bg-${props.theme}`} >
            <p className="text-center text-muted border-top ">© 2023 {props.name} All rights reserved</p>
        </footer>
    </>
  )
}

Footer.propTypes={
    name: PropTypes.string,
}
Footer.defaultProps={
    name:"Gurunanthan",
}

export default Footer