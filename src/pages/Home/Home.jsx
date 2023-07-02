import React from 'react';
import './Home.css'
import Profile from '../../assets/home.jpg'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import { Bounce, Zoom } from 'react-awesome-reveal';

const Home = () => {
    // const { text } = useTypewriter({
    //     words: ['Web Developer', 'Front-End Developer', 'MERN Stack Developer', 'Full Stack Developer'],
    //     loop: {},
    // });

    const handleType = () => {

    }

    const handleDone = () => {

    }

    return (
        <section className='home section grid'>
            <img src={Profile} alt="" className='home__img' />

            <div className="home__content">
                <div className="home__data">
                    <Bounce delay={500}>
                        <p className="home__greeting">
                            --- Welcome to my world ---
                        </p>
                    </Bounce>
                    <h1 className="home__title">
                        Hi, I'm<span> Md. Tanvir Ahmed</span>
                    </h1>

                    <h2 className="home__subtitle">
                        I'm a
                        <span>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={[' Web Developer', ' Frontend Web Developer', ' MERN Stack Web Developer', ' Full Stack Web Developer']}
                                loop={Infinity}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                onLoopDone={handleDone}
                                onType={handleType}
                            />
                        </span>
                    </h2>

                    <Zoom delay={800}>
                        <p className="home__description">
                            I'm highly motivated and dedicated to MERN stack web developer seeking an opportunity to
                            contribute to a dynamic organization as part of a collaborative team. Eager to apply my strong foundation in web development and passion for creating user-friendly and visually appealing websites. Committed to continuous learning and growth, I aim to utilize my technical skills in HTML, Vanilla CSS, Bootstrap, Tailwind CSS, JavaScript, React JS, Node JS, Express JS, and MongoDB to contribute to the success of projects and exceed client expectations.
                        </p>
                    </Zoom>

                    <Bounce delay={1000}>
                        <Link to='/about' className='button'>
                            More About Me{' '}
                            <span className='button__icon'>
                                <FaArrowRight></FaArrowRight>
                            </span>
                        </Link>
                    </Bounce>
                </div>
            </div>

            <div className="color__block">

            </div>
        </section>
    );
};

export default Home;