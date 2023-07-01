import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioItem = ({ img, title, usedTech, live, client, server, details }) => {
    const bgImg = {
        backgroundImage: `url(${img})`,
        borderRadius: '10px'
    }
    return (
        <div className='portfolio__item'>
            <div className='img__container'>
                <div style={bgImg} className='bg__img'></div>
            </div>
            <div className='info__container'>
                <h3 className='portfolio__subtitle'>{title}</h3>
                <span className='portfolio__description'>{details}</span>
                <br />
                <div className='techs'>
                    {
                        usedTech.map((tech, index) => <span key={index} className='tech'>{tech}</span>)
                    }
                </div>
                <div className='link__btns'>
                    <Link to={live} className='link__btn'>Live Link</Link>
                    <Link to={client} className='link__btn'>Client Site</Link>
                    <Link to={server} className='link__btn'>Server Site</Link>
                </div>
            </div>
        </div>
    );
};

export default PortfolioItem;
