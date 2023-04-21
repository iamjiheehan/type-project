import React from 'react';
import myImage from '../assets/images/myImage.jpg';
import { containerStyle, headerStyle, buttonStyle, imageStyle, introStyle,textStyle } from './styles';

export default function Header() {
    return (
        <div style={containerStyle}>
            <div style={headerStyle}>
                <div style={introStyle}>
                    <div>
                        <h2 style={textStyle}>내일이 더 기대되는</h2>
                        <h2 style={textStyle}>프론트 엔드 개발자 한지희</h2>
                    </div>
                    <div>
                        <button style={buttonStyle}><span>pdf 출력</span></button>
                    </div>
                </div>
            </div>
            <div>
                <img style={imageStyle} src={myImage} alt="MyImage" />
            </div>
        </div>
    );
}
