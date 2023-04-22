import React from 'react';
import js from '../assets/images/javascript.png';
import css from '../assets/images/css.png';
import sass from '../assets/images/sass.png';
import html from '../assets/images/html.png';
import styled from 'styled-components';


import { contentBox, containerStyle, absoluteCenter, headerStyle, buttonStyle, imageStyle, introStyle,textStyle, iconStyle, gifStyle, titleStyle, linkStyle, linkHoverStyle } from './styles';


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
                <h2 style={absoluteCenter}>개인 프로젝트</h2>
                <div style={contentBox}>
                    <div style={titleStyle}>
                        <h3 style={titleStyle}>JIHEE'S BREAKFAST</h3>
                        <img style={iconStyle} src={js} alt="JavaScript" />
                        <img style={iconStyle} src={css} alt="css" />
                        <img style={iconStyle} src={html} alt="html" />
                        <img style={iconStyle} src={sass} alt="sass" />
                    </div>
                    <StyledLink href="https://jihee-breakfast-restaurant.netlify.app/" target="_blank">JIHEE'S BREAKFAST 바로가기</StyledLink>
                    <StyledLink href="https://github.com/iamjiheehan/Breakfast-Website" target="_blank">깃허브 바로가기</StyledLink>
                    <div>
                        <img style={gifStyle} src="https://user-images.githubusercontent.com/102779433/219938124-8fb4416c-7e94-4806-b1c9-42d2985e28f8.gif" alt="menu" />      
                        <img style={gifStyle} src="https://user-images.githubusercontent.com/102779433/219938128-e9c81522-6ac3-4beb-969f-86d3e3f56e3b.gif" alt="menu" />      
                        <img style={gifStyle} src="https://user-images.githubusercontent.com/102779433/219938111-4de0b317-ed01-4858-9718-ed64c5cac06e.gif" alt="menu" />      
                    </div>
                    <div>
                        <h4> - HTML,CSS/SCSS 만으로 구성된 정적인 웹사이트 입니다.</h4>
                        <h4> - 반응형 웹사이트로, 메뉴를 클릭하면 해당 메뉴의 상세 정보를 볼 수 있습니다.</h4>
                        <h4> - iframe 태그를 이용한 구글지도를 연동했습니다.</h4>
                    </div>
                    </div>
                </div>
                <hr style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto' }} />
                <div>
            </div>
        </div>


        
    );
}
