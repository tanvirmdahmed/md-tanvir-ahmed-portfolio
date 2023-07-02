import React from 'react';
import { personalInfo } from '../data';
import { Zoom } from 'react-awesome-reveal';

const Info = () => {
    return (
        <>
            <Zoom delay={700}>
                {
                    personalInfo.map(({ title, description }, index) => {
                        return (
                            <li className="info__item" key={index}>
                                <span className="info__title">{title}</span>
                                <span className="info__description">{description}</span>
                            </li>
                        )
                    })
                }
            </Zoom>
        </>
    );
};

export default Info;