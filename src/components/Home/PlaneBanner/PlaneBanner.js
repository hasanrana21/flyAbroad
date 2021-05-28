import React from 'react';
import './PlaneBanner.css'

const PlaneBanner = () => {
    return (
        <div>
            <div className="planeBanner mt-5">
                <div className="d-none d-md-flex align-items-center" style={{height: '100%'}}>
                    <div className="ps-3 ms-5"> 
                        <h1 className="mainLogo main-text">fly<span style={{ color: 'black' }}>Abroad</span></h1>
                        <h2>All around the World</h2>
                        <button className="main-btn">Flight Reservation</button>
                    </div>
                </div>
                <div className="d-flex d-md-none align-items-center justify-content-center" style={{height: '100%'}}>
                    <div className="text-center"> 
                        <h1 className="mainLogo main-text">fly<span style={{ color: 'black' }}>Abroad</span></h1>
                        <h2>All around the World</h2>
                        <button className="main-btn">Flight Reservation</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaneBanner;