import React, { useState } from 'react';
import './Themes.css'
import { FaCog } from 'react-icons/fa';
import { BsSun, BsMoon } from 'react-icons/bs';
import { themes } from '../data';
import ThemeItem from './ThemeItem';


const Themes = () => {
    const [showSwitcher, setShowSwitcher] = useState(false);

    return (
        <div>
            <div className={`${showSwitcher ? 'show-switcher' : ''} style__switcher`}>
                <div className="style__switcher-toggler" onClick={() => setShowSwitcher(!showSwitcher)}>
                    <FaCog></FaCog>
                </div>

                <div className="theme__toggler">
                    <BsMoon></BsMoon>
                </div>

                <h3 className='style__switcher-title'>Style Switcher</h3>
                <div className="style__switcher-items">
                    {
                        themes.map((theme, index) => {
                            return (
                                <ThemeItem key={index} {...theme}></ThemeItem>
                            )
                        })
                    }
                </div>

                <div className="style__switcher-close" onClick={() => setShowSwitcher(!showSwitcher)}>
                    &times;
                </div>
            </div>
        </div>
    );
};

export default Themes;