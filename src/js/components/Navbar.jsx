import React from "react";

function Navbar() {
    return (
        <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between mb-5">
            <a className="navbar-brand" href="#" style={{color: 'white'}}>Start Bootstrap</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{color: 'white'}}>
                <span className="navbar-toggler-icon" style={{color: 'white'}}></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav " >
                    <li className="nav-item active">
                        <a className="nav-link" href="#" style={{color: 'white'}}>Home </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" style={{color: 'grey'}}>About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" style={{color: 'grey'}}>Service</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" style={{color: 'grey'}}>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
        </div>
    )
}

export default Navbar;