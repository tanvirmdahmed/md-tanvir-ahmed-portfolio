import React from 'react';
import './About.css'
import Info from '../../components/Info';
import { FaDownload } from 'react-icons/fa';
import Resume from '../../assets/wd-resume-of-tanvir.pdf'
import Stats from '../../components/Stats';

const About = () => {
    return (
        <main className="section container">
            <section className="about">
                <h2 className="section__title">
                    About <span>Me</span>
                </h2>

                <div className="about__container grid">
                    <div className="about__info">
                        <h3 className="section__subtitle">Personal Infos</h3>

                        <ul className="info__list grid">
                            <Info></Info>
                        </ul>

                        <a href={Resume} download='' className="button">
                            Download Resume <span className="button__icon"><FaDownload></FaDownload></span>
                        </a>
                    </div>

                    <div className="stats grid">
                        <Stats></Stats>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;