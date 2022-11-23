/////https://github.com/Packapeer/React_tutorial_netflix_app/blob/main/assets.md

import React from 'react'
import "./NavBar.css"
import { NavLink } from "react-router-dom"
function NavBar() {
  return (
    <div className='custom-navbar'>
    <section className='navbar-section'>
      <nav className="navbar navbar-expand-lg navbar-light bg-nav-color">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"> <img className='img-logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="NetFlix Logo" />  </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page"  to='/'>Home</NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Series</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Movies</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Originals</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Recenlty Added</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Mylist</a>
              </li>


            </ul>
            <form className="d-flex">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <button className='nav-btn-icon'>
                    <i className='fa fa-search nav-icon-color'></i>
                  </button>
                </li>


                <li className="nav-item">
                  <a className="nav-link" href="#">KIDS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">DVD</a>
                </li>

                <li className="nav-item">
                  <button className='nav-btn-icon'>
                    <i className="fa fa-bell nav-icon-color"></i>
                  </button>
                </li>

                <li className="nav-item">
                  <a className="navbar-brand" href="#"> <img className='img-logo' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avator" />  </a>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>

    </section>
    </div>
  )
}

export default NavBar