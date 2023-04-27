import React from 'react';

import js from '../assets/images/javascript.png';
import ts from '../assets/images/typescript.png';
import css from '../assets/images/css.png';
import sass from '../assets/images/sass.png';
import html from '../assets/images/html.png';
import reactIco from '../assets/images/reactIco.png';
import reduxToolkit from '../assets/images/reduxToolkit.png';
import styledComponents from '../assets/images/styledComponents.png';

import StyledLink from './StyledLink';

import { contentBox, containerStyle, absoluteCenter, headerStyle, iconStyle, gifStyle, titleStyle } from './styles';

export default function Project(): JSX.Element {
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
                            <br />
                            <h5> - <strong>HTML,CSS/SCSS</strong>  만으로 구성된 정적인 웹사이트</h5>
                            <h5> - 랜딩페이지가 아닌 <strong>상세페이지</strong> 모두 구현</h5>
                            <h5> - <strong>iframe</strong> 태그를 이용한 구글지도 연동</h5>
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
                            <br />
                            <h5> - <strong>바닐라 자바스크립트</strong>로 구성된 SPA 웹사이트 </h5>
                            <h5> - <strong>Node.js</strong>를 활용한 서버 구축</h5>
                            <h5> - <strong>Local storage</strong>를 이용하여 사용자의 검색 결과를 저장 및 반영</h5>
                        </div>
                    </>
                    <hr style={{ width: '50%', margin:'3rem auto'}} />
                    <>
                        <div style={{...titleStyle, alignItems: 'center'}}>
                            <h3 style={titleStyle}>The Unbookclub</h3>
                            <img style={iconStyle} src={html} alt="html" />
                            <img style={iconStyle} src={css} alt="css" />
                            <img style={iconStyle} src={styledComponents} alt="styledComponents" />
                            <img style={iconStyle} src={js} alt="JavaScript" />
                            <img style={iconStyle} src={reactIco} alt="react" />
                            <img style={{ ...iconStyle, width: '100px', padding:'0' }} src={reduxToolkit} alt="reduxToolkit" />
                        </div>
                        <StyledLink href="https://the-unbook-club.web.app/" target="_blank">The Unbookclub 바로가기</StyledLink>
                        <StyledLink href="https://github.com/iamjiheehan/unbookclub" target="_blank">깃허브 바로가기</StyledLink>
                        <StyledLink href="https://hans-j.tistory.com/212?category=1072545" target="_blank">배포일지</StyledLink>
                        <div style={containerStyle}>
                            <img style={gifStyle} src="https://user-images.githubusercontent.com/102779433/231512655-5d531fa7-e3bb-445a-800c-6e9a03cedcc3.gif" alt="menu" />      
                            <img style={gifStyle} src="https://user-images.githubusercontent.com/102779433/231512888-525fc6ba-6261-4855-bd01-1c43920fdd9f.gif" alt="menu" />      
                            <img style={gifStyle} src="https://user-images.githubusercontent.com/102779433/231513187-0acc500f-2562-40f0-8ca2-1412eb4ae12e.gif" alt="menu" />      
                        </div>
                        <div>
                            <br />
                            <h5> - <strong>redux toolkit</strong> 을 이용하여 <strong>게시판, 장바구니 </strong> 기능 구현 </h5>
                            <h5> - <strong>firebase</strong>를 이용하여 <strong>로그인</strong> 기능 구현</h5>
                            <h5> - <strong>Context API</strong>를 이용하여 회원정보 전역 공유</h5>
                            <h5> - <strong>RESTful</strong> HTTP 요청을 사용하여 <strong>Kakao API</strong>를 적용한 <strong>검색</strong> 기능 구현</h5>
                        </div>
                    </>
                    <hr style={{ width: '50%', margin:'3rem auto'}} />
                    <>
                        <div style={titleStyle}>
                            <h3 style={titleStyle}>Portfolio Project</h3>
                            <img style={iconStyle} src={ts} alt="Typescript" />
                            <img style={iconStyle} src={styledComponents} alt="styledComponents" />
                            <img style={iconStyle} src={reactIco} alt="react" />
                        </div>
                        <StyledLink href="https://the-unbook-club.web.app/" target="_blank">깃허브 바로가기</StyledLink>
                    </>
                </div>
            </div>
        </div>


        
    );
}
