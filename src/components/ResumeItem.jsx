import React from 'react';
import parse from 'html-react-parser';
import { Bounce } from 'react-awesome-reveal';

const ResumeItem = ({ icon, year, title, desc, session, duration }) => {
    return (
        <Bounce delay={700}>
            <div className="resume__item">
                <div className="resume__icon">{icon}</div>

                <span className="resume__date">{year}</span>
                <h3 className="resume__subtitle">{parse(title)}</h3>
                {
                    desc && <p className="resume__description">{desc}</p>
                }

                {
                    (session && duration) && <p className="resume__description">
                        <span className='session'><strong>Session: </strong>{session}</span>
                        <span><strong>Duration: </strong>{duration}</span>
                    </p>
                }
            </div>
        </Bounce>
    );
};

export default ResumeItem;