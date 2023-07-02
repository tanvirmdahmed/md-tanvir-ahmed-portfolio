import React, { useEffect, useState } from 'react';
import './Themes.css'
import { FaCog } from 'react-icons/fa';
import { BsSun, BsMoon } from 'react-icons/bs';
import { themes } from '../data';
import ThemeItem from './ThemeItem';
import { Rotate, Zoom } from 'react-awesome-reveal';

const getStorageColor = () => {
    let color = 'hsl(252, 34%, 51%)';
    if (localStorage.getItem('color')) {
        color = localStorage.getItem('color')
    }
    return color;
}

const getStorageTheme = () => {
    let theme = 'dark-theme';
    if (localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme')
    }
    return theme;
}


const Themes = () => {
    const [showSwitcher, setShowSwitcher] = useState(false);
    const [color, setColor] = useState(getStorageColor());
    const [theme, setTheme] = useState(getStorageTheme());

    const changeColor = (color) => {
        setColor(color);
    };

    const toggleTheme = () => {
        if (theme === 'dark-theme') {
            setTheme('light-theme')
        }
        else {
            setTheme('dark-theme')
        }
    }

    useEffect(() => {
        document.documentElement.style.setProperty('--first-color', color);
        localStorage.setItem('color', color);
    }, [color]);

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme)
    }, [theme]);

    return (
        <div>
            <div className={`${showSwitcher ? 'show-switcher' : ''} style__switcher`}>
                <div className="style__switcher-toggler" onClick={() => setShowSwitcher(!showSwitcher)}>
                    <Zoom delay={400}>
                        <FaCog></FaCog>
                    </Zoom>
                </div>

                <div className="theme__toggler" onClick={toggleTheme}>
                    <Rotate delay={400}>
                        {
                            theme === 'dark-theme' ? <BsSun></BsSun> : <BsMoon></BsMoon>
                        }
                    </Rotate>
                </div>

                <h3 className='style__switcher-title'>Style Switcher</h3>
                <div className="style__switcher-items">
                    {
                        themes.map((theme, index) => {
                            return (
                                <ThemeItem key={index} {...theme} changeColor={changeColor}></ThemeItem>
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