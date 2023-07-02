import React from 'react';
import { stats } from '../data';
import parse from 'html-react-parser';
import CountUp from 'react-countup';
import { Bounce } from 'react-awesome-reveal';

const Stats = () => {
    return (
        <>
            <Bounce>
                {
                    stats.map(({ no, title }, index) => {
                        return (
                            <div className="stats__box" key={index}>
                                <h3 className="stats__no">
                                    <CountUp start={0} end={parseInt(no)} duration={2}></CountUp>
                                </h3>
                                <p className="stats__title">{parse(title)}</p>
                            </div>
                        )
                    })
                }
            </Bounce>
        </>
    );
};

export default Stats;