import React from 'react';
import './Header.css'
import city from '../../../images/city.svg';


const Header = () => {
    return (
        <header>
            <div className="mt-md-5 pt-md-5">
                <div className="row mt-md-5">
                    <div className="col-md-6">
                        <h1 className="head-text">Travel is an <br /> in yourself</h1>
                        <p className="mt-md-3">“The biggest adventure you can take is to live the life of your dreams”</p>
                        <button className="mt-md-3 main-btn">Book now</button>
                    </div>
                    <div className="col-md-6 text-center text-md-none">
                        <img src={city} alt="" className="fluid headerImg mt-md-5" />
                    </div>
                </div>
           </div>
        </header>
    );
};

export default Header;