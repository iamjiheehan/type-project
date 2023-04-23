import React from 'react';
import phone from '../assets/images/phone.png';
import tstory from '../assets/images/tstory.png';
import git from '../assets/images/github.png';
import styled from 'styled-components';

import { contentBox, columnStyle, absoluteCenter, headerStyle, buttonStyle, imageStyle, introStyle,textStyle, iconStyle, gifStyle, titleStyle, linkStyle, linkHoverStyle } from './styles';


const StyledLink = styled.a`
    ${linkStyle}
    &:hover {
        ${linkHoverStyle}
    }
`;

export default function Project() {
    return (
        <div>
            <div style={headerStyle}>
                <h2 style={absoluteCenter}>Contact</h2>
                <div style={contentBox}>
                    <>
                        <div style={columnStyle}>
                            <div style={introStyle}>
                                <img style={iconStyle} src={phone} alt="phone" />
                                <h4 style={{margin:'0'}}> Mobile : 010-8608-8219</h4>
                            </div>
                            <div style={introStyle}>
                                <img style={{ ...iconStyle, width: '35px' }} src={git} alt="git" />
                                <h4 style={{margin:'0'}}> GitHub : https://github.com/iamjiheehan </h4>
                            </div>
                            <div style={introStyle}>
                                <img style={{ ...iconStyle, width: '150px' }} src={tstory} alt="tstory" />
                                <h4>  : https://hans-j.tistory.com/ </h4>
                            </div>
                            
                        </div>
                    </>
                </div>
            </div>
        </div>


        
    );
}
