import React from 'react';
import { Bounce, Roll, Zoom } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

const PortfolioItem = ({ img, title, usedTech, live, client, server, details }) => {
    const bgImg = {
        backgroundImage: `url(${img})`,
        borderRadius: '10px'
    }
    return (
        <div className='portfolio__item'>
            <Bounce delay={700}>
                <div className='img__container'>
                    <div style={bgImg} className='bg__img'></div>
                </div>
            </Bounce>

            <div className='info__container'>
                <Zoom delay={700}>
                    <h3 className='portfolio__subtitle'>{title}</h3>
                    <span className='portfolio__description'>{details}</span>
                </Zoom>
                <br />
                <div className='techs'>
                    <Bounce delay={700}>
                        {
                            usedTech.map((tech, index) => <span key={index} className='tech'>{tech}</span>)
                        }
                    </Bounce>
                </div>
                <Roll delay={700}>
                    <div className='link__btns'>
                        <Link to={live} className='link__btn'>Live Link</Link>
                        <Link to={client} className='link__btn'>Client Site</Link>
                        <Link to={server} className='link__btn'>Server Site</Link>
                    </div>
                </Roll>
            </div>

        </div>
    );
};

export default PortfolioItem;
