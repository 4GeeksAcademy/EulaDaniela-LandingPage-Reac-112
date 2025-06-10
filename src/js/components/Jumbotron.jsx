import React from "react";

function Jumbotron() {
    return (
        <div className="container-fluid">
            <div className="jumbotron bg-body-tertiary mb-5" style={{textAlign: 'left' }}>
                <h1 className="display-4">A Warm Welcome</h1>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam est erat, commodo id arcu sed, volutpat rhoncus mi. Sed imperdiet volutpat nisl, a commodo velit. Aenean tellus neque, aliquam eget tellus tempor, sagittis venenatis purus. Etiam eget ultrices mauris. </p>
                <a className="btn btn-primary btn-lg mb-5" href="#" role="button">Call to action!</a>
            </div>
        </div>
    )
}

export default Jumbotron;