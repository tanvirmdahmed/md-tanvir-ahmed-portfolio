import React from 'react';
import './Home.css'
import Profile from '../../assets/home.jpg'

const Home = () => {
    return (
        <section className='home section grid'>
            <img src={Profile} alt="" className='home__img' />

            <div className="home__content">
                <div className="home__data">
                    h1
                </div>
            </div>
        </section>
    );
};

export default Home;