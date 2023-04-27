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

export default function Intro() {

    return (
        <>
            <div style={headerStyle}>
                <h2 style={absoluteCenter}>자기소개</h2>
                <div style={contentBox}>
                    <div style={columnStyle}>
                        <h6>
                            지속적으로 발전을 추구하는 프론트엔드 개발자 한지희 입니다. <br /><br />
                            목표 설정과 이를 성취하기 위한 노력을 즐기며, <br /><br />
                            두려움 없이 새로운 것을 배우고, <br /><br />끊임없이 더 나은 실력을 향해 열심히 공부합니다.<br /><br />
                            <StyledLink href="https://hans-j.tistory.com/207" target="_blank">관련 블로그 게시글 바로가기</StyledLink>
                        </h6>
                        <hr style={{ width: '50%', margin:'3rem auto'}} />
                        <h6>
                            저는 협업에 중점을 두고 직관적이며 재사용 가능한 코드 작성을 지향합니다. <br /><br />
                            이를 통해 팀원들과 원활한 커뮤니케이션을 이루며, <br /><br />효율적인 프로젝트 진행을 도모하고자 합니다. <br /><br />
                            <StyledLink href="https://hans-j.tistory.com/214" target="_blank">관련 블로그 게시글 바로가기</StyledLink>
                        </h6>
                        <hr style={{ width: '50%', margin:'3rem auto'}} />
                        <h6>
                            최근에는 AI를 활용한 효율적인 개발과 Typescript에 관심을 가지고 있습니다.<br /><br />
                            많은 기업들이 Typescript를 도입하는 이유를 공부하며,<br /><br />
                            <StyledLink href="https://careerly.co.kr/home" target="_blank">커리어리</StyledLink>같은 개발자 커뮤니티를 통해 <br /><br />최신 트렌드를 지속적으로 파악하고자 노력하고 있습니다.<br /><br />
                            <StyledLink href="https://hans-j.tistory.com/200" target="_blank">관련 블로그 게시글 바로가기</StyledLink>
                        </h6>
                    </div>
                </div>
            </div>
        </>
    );
}
