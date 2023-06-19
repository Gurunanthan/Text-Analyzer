import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const Navbar = (props) => {
    return (
        <>
            <nav className={`navbar navbar-expand-lg bg-body-tertiary  text-${props.theme==='dark'?'light':'light'}`} style={{background:props.theme==='dark'?'black':'#1f6f8c'}}>
                <div className="container-fluid ">
                    <a className={`navbar-brand text-${props.theme==='light'?'dark':'light'}`} href="/"><h3>{props.title}</h3></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className={`navbar-toggler-icon p-2bg-${props.theme} text-${props.theme==='light'?'dark':'light'} `}>
                            <svg className="mt-1 bi bi-three-dots-vertical" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                            </svg>
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <Link className={`nav-link active text-${props.theme==='light'?'dark':'light'}`} to="/">{props.home}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link active text-${props.theme==='light'?'dark':'light'}`} to="/About">{props.aboutText}</Link>
                            </li>
                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-success " type="submit">Search</button>
                        </form> */}
                        {/* <div className={`form-check form-switch text-`}>
                            <input className={`form-check-input`} type="checkbox" style={{border:'2px solid white'}}role="switch" id="flexSwitchCheckChecked" onClick={props.toggle}/>
                            <label className={`form-check-label text-${props.theme==='light'?'dark':'light'} `} htmlFor="flexSwitchCheckChecked" >Switch theme </label>
                        </div> */}

                        <div className="checkbox-wrapper-55 form-check form-switch" style={{paddingLeft:'0px'}}>

                            <label  className={`rocker rocker form-check-label text-${props.theme==='light'?'dark':'light'} `} htmlFor="flexSwitchCheckChecked">
                                <input type="checkbox" className={`form-check-input`}  style={{border:'2px solid white'}}role="switch" id="flexSwitchCheckChecked" onClick={props.toggle}/>
                                <span className="switch-left">Dark</span>
                                <span className="switch-right">Light</span>
                            </label>
                            
                        </div>
                        
                    </div>
                </div>
            </nav>
        </>
    )
}
Navbar.propType = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}
Navbar.defaultProps={
    title:"Text-utilizer",
    aboutText:'About',
    home:'Home'
}

export default Navbar