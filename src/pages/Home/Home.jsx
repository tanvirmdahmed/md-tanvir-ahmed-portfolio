import React from 'react';
import './Home.css'
import Profile from '../../assets/home.jpg'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Home = () => {
    return (
        <section className='home section grid'>
            <img src={Profile} alt="" className='home__img' />

            <div className="home__content">
                <div className="home__data">
                    <h1 className="home__title">
                        <span>I'm Md. Tanvir Ahmed.</span> MERN Stack Web Developer
                    </h1>

                    <p className="home__description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequatur commodi, voluptatibus aliquid ratione earum, aspernatur nostrum nihil ipsam numquam nam blanditiis cupiditate. Voluptate, eius
                    </p>

                    <Link to='/about' className='button'>
                        More About Me{' '}
                        <span className='button__icon'>
                            <FaArrowRight></FaArrowRight>
                        </span>
                    </Link>
                </div>
            </div>

            <div className="color__block">

            </div>
        </section>
    );
};

export default Home;