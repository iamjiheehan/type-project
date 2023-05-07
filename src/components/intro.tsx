import React from 'react';
import { Column, AbsoluteCenter, ContentBox } from '../styles/styled';
import StyledLink from '../styles/StyledLink';

const Intro:React.FC = () => {
    return (
        <>
            <div style={{textAlign:"left"}}>
                <AbsoluteCenter><h2>자기소개</h2></AbsoluteCenter>
                <ContentBox>
                    <Column>
                        <h5>
                            지속적으로 발전을 추구하는 프론트엔드 개발자 한지희 입니다. <br />
                            <br />
                            목표 설정과 이를 성취하기 위한 노력을 즐기`며, <br />
                            <br />
                            두려움 없이 새로운 것을 배우고, <br />
                            <br />
                            끊임없이 더 나은 실력을 향해 열심히 공부합니다.
                            <br />
                        </h5>
                        <hr style={{ width: '50%', margin:'3rem auto'}} />
                        <h5>
                            최근에는 AI를 활용한 효율적인 개발과 Typescript에 관심을 가지고 있습니다.<br /><br />
                            많은 기업들이 Typescript를 도입하는 이유를 공부하며,<br /><br />
                            <strong>커리어리</strong> 와 <strong>미디엄</strong>같은 개발자 커뮤니티를 통해 <br /><br />최신 트렌드를 지속적으로 파악하고자 노력하고 있습니다.<br /><br />
                            <StyledLink href="https://hans-j.tistory.com/199?category=1095632" target="_blank">관련 블로그 게시글 바로가기</StyledLink>
                        </h5>
                    </Column>
                </ContentBox>
            </div>
        </>
    );
}

export default Intro;