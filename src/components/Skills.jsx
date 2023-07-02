import React from 'react';
import { skills } from '../data';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Zoom } from 'react-awesome-reveal';

const Skills = () => {
    return (
        <>
            <Zoom>
                {
                    skills.map(({ title, percentage }, index) => {
                        return (
                            <div className="progress__box" key={index}>
                                <div className="progress__circle">
                                    <CircularProgressbar strokeWidth={7.5} text={`${percentage}%`} value={percentage}></CircularProgressbar>
                                </div>

                                <h3 className="skills__title">{title}</h3>
                            </div>
                        )
                    })
                }
            </Zoom>

            {
                // skills.map(({ title, percentage }, index) => {
                //     return (
                //         <div className="progress__box" key={index}>
                //             <div className="progress__circle">
                //                 <AnimatedProgressProvider
                //                     valueStart={0}
                //                     valueEnd={parseInt(percentage)}
                //                     duration={1.4}
                //                     easingFunction={easeQuadInOut}
                //                 repeat
                //                 >
                //                     {value => {
                //                         const roundedValue = Math.round(parseInt(percentage));
                //                         return (
                //                             <CircularProgressbar
                //                                 value={value}
                //                                 text={`${roundedValue}%`}
                //                                 /* This is important to include, because if you're fully managing the
                //                           animation yourself, you'll want to disable the CSS animation. */
                //                                 styles={buildStyles({ pathTransition: "none" })}
                //                             />
                //                         );
                //                     }}
                //                 </AnimatedProgressProvider>
                //             </div>

                //             <h3 className="skills__title">{title}</h3>
                //         </div>
                //     )
                // })
            }
        </>
    );
};

export default Skills;