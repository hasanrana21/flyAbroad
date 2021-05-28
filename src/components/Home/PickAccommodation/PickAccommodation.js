import React from 'react';
import './PickAccommodation.css'
import villa1 from '../../../images/villa1.jpeg'
import villa2 from '../../../images/villa2.png'
import villa3 from '../../../images/villa3.jpeg'

const PickAccommodation = () => {
    return (
        <main>
            <div>
                <div className="row mt-5">
                    <h2 className="mb-3">Find your Accommodation</h2>
                    <div className="col-md-4">
                        <img className="w-100" src={villa1} alt="" />
                        <h5>Front Pool</h5>
                    </div>
                    <div className="col-md-4">
                        <img className="w-100" src={villa2} alt="" />
                        <h5>Hill View</h5>
                    </div>
                    <div className="col-md-4">
                        <img className="w-100" src={villa3} alt="" />
                        <h5>Outdoor Gateway</h5>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default PickAccommodation;