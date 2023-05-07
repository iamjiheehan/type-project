import React from 'react';

import js from '../assets/images/javascript.png';
import ts from '../assets/images/typescript.png';
import css from '../assets/images/css.png';
import sass from '../assets/images/sass.png';
import html from '../assets/images/html.png';
import reactIco from '../assets/images/reactIco.png';
import reduxToolkit from '../assets/images/reduxToolkit.png';
import styledComponents from '../assets/images/styledComponents.png';
import firebase from '../assets/images/firebase.png';

import StyledLink from '../styles/StyledLink';

import { AbsoluteCenter, ContentBox, Title, Container, Icon, Gif } from '../styles/styled';

export default function Project(): JSX.Element {
    return (
        <> 
            <div style={{textAlign:"left"}}>
                <AbsoluteCenter><h2>개인 프로젝트</h2></AbsoluteCenter>
                <ContentBox>
                    <Title>
                        <h3>JIHEE'S BREAKFAST</h3>
                        <div>
                            <Icon src={html} alt="html" />
                            <Icon src={css} alt="css" />
                            <Icon src={sass} alt="sass" />
                        </div>
                    </Title>
                    <h6>
                        <StyledLink href="https://jihee-breakfast-restaurant.netlify.app/" target="_blank">JIHEE'S BREAKFAST 바로가기</StyledLink>
                        <StyledLink href="https://github.com/iamjiheehan/Breakfast-Website" target="_blank">깃허브 바로가기</StyledLink>
                        <StyledLink href="https://hans-j.tistory.com/193" target="_blank">배포일지</StyledLink>
                    </h6>
                    <Container>
                        <Gif src="https://user-images.githubusercontent.com/102779433/233838327-8996b663-c414-4b6a-a62c-207039e523c7.gif" alt="menu" />      
                        <Gif src="https://user-images.githubusercontent.com/102779433/219938128-e9c81522-6ac3-4beb-969f-86d3e3f56e3b.gif" alt="menu" />      
                        <Gif src="https://user-images.githubusercontent.com/102779433/219938111-4de0b317-ed01-4858-9718-ed64c5cac06e.gif" alt="menu" />      
                    </Container>
                    <div>
                        <br />
                        <h5> - <strong>HTML,CSS/SCSS</strong>  만으로 구성된 정적인 웹사이트</h5>
                        <h5> - <strong>iframe</strong> 태그를 이용한 구글지도 연동</h5>
                    </div>
                    <hr style={{ width: '50%', margin:'3rem auto'}} />
                    <Title>
                        <h3>VINTERIOR</h3>
                        <div>
                            <Icon src={html} alt="html" />
                            <Icon src={css} alt="css" />
                            <Icon src={sass} alt="sass" />
                            <Icon src={js} alt="JavaScript" />
                        </div>
                        
                    </Title>
                    <h6>
                        <StyledLink href="https://jihee-vinterior.netlify.app/" target="_blank">VINTERIOR 바로가기</StyledLink>
                        <StyledLink href="https://github.com/iamjiheehan/vanilla-interior" target="_blank">깃허브 바로가기</StyledLink>
                        <StyledLink href="https://hans-j.tistory.com/203" target="_blank">배포일지</StyledLink>
                    </h6>
                    <Container>
                        <Gif src="https://user-images.githubusercontent.com/102779433/231810527-e6af320c-bdd1-4972-bb66-c8d7e81fb732.gif" alt="menu" />      
                        <Gif src="https://user-images.githubusercontent.com/102779433/231810553-15af784a-2387-4145-92ea-2200a0756bae.gif" alt="menu" />      
                        <Gif src="https://user-images.githubusercontent.com/102779433/231810572-1d4e44db-b073-429f-891c-21934e67c0fd.gif" alt="menu" />      
                    </Container>
                    <div>
                        <br />
                        <h5> - <strong>바닐라 자바스크립트</strong>로 구성된 SPA 웹사이트 </h5>
                        <h5> - <strong>Node.js</strong>를 활용한 서버 구축</h5>
                        <h5> - <strong>Local storage</strong>를 이용하여 사용자의 검색 결과를 저장 및 반영</h5>
                    </div>
                    <hr style={{ width: '50%', margin:'3rem auto'}} />
                    <Title style={{ alignItems: 'center'}}>
                        <h3>The Unbookclub</h3>
                            <div>
                                <Icon src={html} alt="html" />
                                <Icon src={css} alt="css" />
                                <Icon src={styledComponents} alt="styledComponents" />
                                <Icon src={js} alt="JavaScript" />
                                <Icon src={reactIco} alt="react" />
                                <Icon style={{width: '25px', padding:'0' }} src={firebase} alt="firebase" />
                                <Icon style={{width: '100px', padding:'0' }} src={reduxToolkit} alt="reduxToolkit" />
                            </div>
                    </Title>
                    <h6>
                        <StyledLink href="https://the-unbook-club.web.app/" target="_blank">The Unbookclub 바로가기</StyledLink>
                        <StyledLink href="https://github.com/iamjiheehan/unbookclub" target="_blank">깃허브 바로가기</StyledLink>
                        <StyledLink href="https://hans-j.tistory.com/212?category=1072545" target="_blank">배포일지</StyledLink>
                    </h6>
                    <Container>
                        <Gif src="https://user-images.githubusercontent.com/102779433/231512655-5d531fa7-e3bb-445a-800c-6e9a03cedcc3.gif" alt="menu" />      
                        <Gif src="https://user-images.githubusercontent.com/102779433/231512888-525fc6ba-6261-4855-bd01-1c43920fdd9f.gif" alt="menu" />      
                        <Gif src="https://user-images.githubusercontent.com/102779433/231513187-0acc500f-2562-40f0-8ca2-1412eb4ae12e.gif" alt="menu" />      
                    </Container>
                    <div>
                        <br />
                        <h5> - <strong>firestore Database</strong> 을 이용하여 <strong>게시판</strong> 기능 구현 </h5>
                        <h5> - <strong>firesbase</strong>를 이용하여 <strong>로그인</strong> 기능 구현</h5>
                        <h5> - <strong>Context API</strong>를 이용하여 <strong>마이페이지</strong>기능 구현</h5>
                        <h5> - <strong>Redux toolkit</strong>상태관리를 이용하여 사용자가 선택한 도서 목록을 <strong>마이페이지</strong>에서 호출 기능 구현</h5>
                        <h5> - <strong>Local storage</strong>를 이용하여 <strong>도서목록 저장</strong> 기능 구현</h5>
                        <h5> - <strong>Kakao API</strong>를 적용한 <strong>검색</strong> 기능 구현</h5>
                    </div>
                    <hr style={{ width: '50%', margin:'3rem auto'}} />
                    <Title>
                        <h3>Resume Project</h3>
                        <div>
                            <Icon src={ts} alt="Typescript" />
                            <Icon src={styledComponents} alt="styledComponents" />
                            <Icon src={reactIco} alt="react" />
                        </div>
                    </Title>
                    <h6>
                        <StyledLink href="https://github.com/iamjiheehan/type-project" target="_blank">깃허브 바로가기</StyledLink>
                        <StyledLink href="https://hans-j.tistory.com/217" target="_blank">배포일지</StyledLink>
                    </h6>
                    <div>
                        <br />
                        <h5> - <strong>Typescript</strong> 을 이용하여 이력서 웹사이트 구현 </h5>
                    </div>
                </ContentBox>
            </div>
        </>


        
    );
}
