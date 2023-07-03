import React from 'react';
import './Portfolio.css'
import { portfolio } from '../../data';
import PortfolioItem from '../../components/PortfolioItem';
import { Bounce } from 'react-awesome-reveal';
import useTitle from '../../Hooks/useTitle';

const Portfolio = () => {
    useTitle('Portfolio')
    return (
        <section className="portfolio section">
            <Bounce delay={300}>
                <h2 className="section__title">My <span>Portfolio</span></h2>
            </Bounce>

            <div className="portfolio__container container grid">
                {
                    portfolio.map((item) => {
                        return <PortfolioItem key={item.id} {...item}></PortfolioItem>
                    })
                }
            </div>
        </section>
    );
};

export default Portfolio;