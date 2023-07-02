import React from 'react';
import './About.css'
import Info from '../../components/Info';
import { FaDownload } from 'react-icons/fa';
import Resume from '../../assets/wd-resume-of-tanvir.pdf'
import Stats from '../../components/Stats';
import Skills from '../../components/Skills';
import { resume } from '../../data';
import ResumeItem from '../../components/ResumeItem';
import { Bounce } from 'react-awesome-reveal';

const About = () => {
    return (
        <main className="section container">
            <section className="about">
                <Bounce delay={500}>
                    <h2 className="section__title">
                        About <span>Me</span>
                    </h2>
                </Bounce>

                <div className="about__container grid">
                    <div className="about__info">
                        <Bounce delay={700}>
                            <h3 className="section__subtitle">Personal Infos</h3>
                        </Bounce>

                        <ul className="info__list grid">
                            <Info></Info>
                        </ul>

                        <Bounce delay={700}>
                            <a href={Resume} download='' className="button btn-resume">
                                Download Resume <span className="button__icon"><FaDownload></FaDownload></span>
                            </a>
                        </Bounce>
                    </div>

                    <div className="stats grid">
                        <Stats></Stats>
                    </div>
                </div>
            </section>

            <div className="separator"></div>

            <section className="skills">
                <Bounce delay={700}>
                    <h3 className="section__subtitle subtitle__center">MY Skills</h3>
                </Bounce>

                <div className="skills__container grid">
                    <Skills></Skills>
                </div>
            </section>

            <div className="separator"></div>

            <section className="resume">
                <Bounce delay={700}>
                    <h3 className="section__subtitle subtitle__center">Experience & Education</h3>
                </Bounce>

                <div className="resume__container grid">
                    <div className="resume__data">
                        {
                            resume.map((val) => {
                                if (val.category === 'experience') {
                                    return <ResumeItem key={val.id} {...val}></ResumeItem>
                                }
                            })
                        }
                    </div>

                    <div className="resume__data">
                        {
                            resume.map((val) => {
                                if (val.category === 'education') {
                                    return <ResumeItem key={val.id} {...val}></ResumeItem>
                                }
                            })
                        }
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;