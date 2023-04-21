import React from 'react';
import myImage from '../assets/images/myImage.jpg';
import js from '../assets/images/javascript.png';
import css from '../assets/images/css.png';
import sass from '../assets/images/sass.png';
import html from '../assets/images/html.png';

import { containerStyle, headerStyle, buttonStyle, imageStyle, introStyle,textStyle, iconStyle, gifStyle } from './styles';

export default function Project() {
    return (
        <div style={headerStyle}>
            <h2>개인 프로젝트</h2>
            <div style={headerStyle}>
                <h3>JIHEE BREAKFAST</h3>
                <a href="https://jihee-breakfast-restaurant.netlify.app/">https://jihee-breakfast-restaurant.netlify.app/</a>
                <img style={iconStyle} src={js} alt="JavaScript" />
                <img style={iconStyle} src={css} alt="css" />
                <img style={iconStyle} src={html} alt="html" />
                <img style={iconStyle} src={sass} alt="sass" />
            </div> 
            <img style={gifStyle} src="https://user-images.githubusercontent.com/102779433/219938124-8fb4416c-7e94-4806-b1c9-42d2985e28f8.gif" alt="menu" />      
            <img style={gifStyle} src="https://user-images.githubusercontent.com/102779433/219938128-e9c81522-6ac3-4beb-969f-86d3e3f56e3b.gif" alt="menu" />      
            <img style={gifStyle} src="https://user-images.githubusercontent.com/102779433/219938111-4de0b317-ed01-4858-9718-ed64c5cac06e.gif" alt="menu" />      
        </div>
    );
}
