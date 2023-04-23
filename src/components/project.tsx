import React from 'react';
import js from '../assets/images/javascript.png';
import ts from '../assets/images/typescript.png';
import css from '../assets/images/css.png';
import sass from '../assets/images/sass.png';
import html from '../assets/images/html.png';
import styled from 'styled-components';
import reactIco from '../assets/images/reactIco.png';

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
                    <>
                        <div style={titleStyle}>
                            <h3 style={titleStyle}>JIHEE'S BREAKFAST</h3>
                            <img style={iconStyle} src={html} alt="html" />
                            <img style={iconStyle} src={css} alt="css" />
                            <img style={iconStyle} src={sass} alt="sass" />
                        </div>
                        <StyledLink href="https://jihee-breakfast-restaurant.netlify.app/" target="_blank">JIHEE'S BREAKFAST 바로가기</StyledLink>
                        <StyledLink href="https://github.com/iamjiheehan/Breakfast-Website" target="_blank">깃허브 바로가기</StyledLink>
                        <StyledLink href="https://hans-j.tistory.com/193" target="_blank">배포일지</StyledLink>
                        <div style={containerStyle}>
                            <img style={gifStyle} src="https://user-images.githubusercontent.com/102779433/233838327-8996b663-c414-4b6a-a62c-207039e523c7.gif" alt="menu" />      
                            <img style={gifStyle} src="https://user-images.githubusercontent.com/102779433/219938128-e9c81522-6ac3-4beb-969f-86d3e3f56e3b.gif" alt="menu" />      
                            <img style={gifStyle} src="https://user-images.githubusercontent.com/102779433/219938111-4de0b317-ed01-4858-9718-ed64c5cac06e.gif" alt="menu" />      
                        </div>
                        <div>
                            <h4> - HTML,CSS/SCSS 만으로 구성된 정적인 웹사이트</h4>
                            <h4> - 랜딩페이지가 아닌 상세페이지로써 모두 구현</h4>
                            <h4> - iframe 태그를 이용한 구글지도 연동</h4>
                        </div>
                    </>
                    <hr style={{ width: '50%', margin:'3rem auto'}} />
                    <>
                        <div style={titleStyle}>
                            <h3 style={titleStyle}>VINTERIOR</h3>
                            <img style={iconStyle} src={html} alt="html" />

                            <img style={iconStyle} src={css} alt="css" />
                            <img style={iconStyle} src={sass} alt="sass" />
                            <img style={iconStyle} src={js} alt="JavaScript" />

                        </div>
                        <StyledLink href="https://jihee-vinterior.netlify.app/" target="_blank">VINTERIOR 바로가기</StyledLink>
                        <StyledLink href="https://github.com/iamjiheehan/vanilla-interior" target="_blank">깃허브 바로가기</StyledLink>
                        <StyledLink href="https://hans-j.tistory.com/203" target="_blank">배포일지</StyledLink>
                        <div style={containerStyle}>
                            <img style={gifStyle} src="https://user-images.githubusercontent.com/102779433/231810527-e6af320c-bdd1-4972-bb66-c8d7e81fb732.gif" alt="menu" />      
                            <img style={gifStyle} src="https://user-images.githubusercontent.com/102779433/231810553-15af784a-2387-4145-92ea-2200a0756bae.gif" alt="menu" />      
                            <img style={gifStyle} src="https://user-images.githubusercontent.com/102779433/231810572-1d4e44db-b073-429f-891c-21934e67c0fd.gif" alt="menu" />      
                        </div>
                        <div>
                            <h4> - 바닐라 자바스크립트만으로 구성된 SPA 웹사이트 </h4>
                            <h4> - 미디어 쿼리를 이용한 반응형 레이아웃 구현</h4>
                            <h4> - storage를 이용하여 사용자의 검색결과를 저장 및 반영</h4>
                        </div>
                    </>
                    <hr style={{ width: '50%', margin:'3rem auto'}} />
                    <>
                        <div style={titleStyle}>
                            <h3 style={titleStyle}>The Unbookclub</h3>
                            <img style={iconStyle} src={html} alt="html" />
                            <img style={iconStyle} src={css} alt="css" />
                            <img style={iconStyle} src={js} alt="JavaScript" />
                            <img style={iconStyle} src={reactIco} alt="react" />
                        </div>
                        <StyledLink href="https://the-unbook-club.web.app/" target="_blank">The Unbookclub 바로가기</StyledLink>
                        <StyledLink href="https://the-unbook-club.web.app/" target="_blank">깃허브 바로가기</StyledLink>
                        <StyledLink href="https://hans-j.tistory.com/212?category=1072545" target="_blank">배포일지</StyledLink>
                        <div style={containerStyle}>
                            <img style={gifStyle} src="https://user-images.githubusercontent.com/102779433/231512655-5d531fa7-e3bb-445a-800c-6e9a03cedcc3.gif" alt="menu" />      
                            <img style={gifStyle} src="https://user-images.githubusercontent.com/102779433/231512888-525fc6ba-6261-4855-bd01-1c43920fdd9f.gif" alt="menu" />      
                            <img style={gifStyle} src="https://user-images.githubusercontent.com/102779433/231513187-0acc500f-2562-40f0-8ca2-1412eb4ae12e.gif" alt="menu" />      
                        </div>
                        <div>
                            <h4> - redux toolkit을 이용하여 게시판 기능 구현 </h4>
                            <h4> - firebase를 이용하여 로그인 기능 구현</h4>
                            <h4> - 도서 API를 이용하여 검색 기능 구현</h4>
                        </div>
                    </>
                    <hr style={{ width: '50%', margin:'3rem auto'}} />
                    <>
                        <div style={titleStyle}>
                            <h3 style={titleStyle}>Portfolio Project</h3>
                            <img style={iconStyle} src={ts} alt="Typescript" />
                            <img style={iconStyle} src={reactIco} alt="react" />
                        </div>
                        <StyledLink href="https://the-unbook-club.web.app/" target="_blank">깃허브 바로가기</StyledLink>
                    </>
                </div>
            </div>
        </div>


        
    );
}
