import React from "react";

function Footer() {
  return (
    <nav className="navbar navbar-light bg-dark mt-5">
      <div className="container-fluid">
        <div className="text-center w-100">
          <p className="mb-0" style={{ color: 'white' }}>
            &copy; My First Landing page with React. Todos los derechos reservados.{new Date().getFullYear()}
          </p>
        </div>
      </div>
    </nav>
  );
}

export default Footer;