import React from "react";

function Card() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3 col-sm-6 col-12 d-flex gap-3 mb-2">
                    <div className="card" style={{ width: '18rem' }} data-bs-toggle="collapse" data-bs-target="#collapse1">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpFokFSHiOFgFblXm4c0bcRB4xH9nez6OPy66vvSeFKMHNq2Tvj6j55OmFoyhS_AYt8oc&usqp=CAU" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6 col-12 d-flex gap-3 mb-2">
                    <div className="card" style={{ width: '18rem' }} data-bs-toggle="collapse" data-bs-target="#collapse1">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-6sEedFpr-TmfOieC5LI7x1Y2aEebWGFJ5A&s" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6 col-12 d-flex gap-3 mb-2">
                    <div className="card" style={{ width: '18rem' }} data-bs-toggle="collapse" data-bs-target="#collapse1">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeq03GZFf4BeaIYmkN8U0bTXPS9BnnRe66Wg&s" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6 col-12 d-flex gap-3 mb-2 mx-auto">
                    <div className="card" style={{ width: '18rem' }} data-bs-toggle="collapse" data-bs-target="#collapse1">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIxIWaWwWFhS0g-FksPQuEZxJRJDPKKuUviPZFx-HT6lNv9OVflI6EKiy5qy-zJ9PHjYo&usqp=CAU" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>


                
            </div>
        </div>
    )
}

export default Card;