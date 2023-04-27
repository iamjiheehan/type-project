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
        <>
            <div style={headerStyle}>
                <h2 style={absoluteCenter}>Contact</h2>
                <div style={contentBox}>
                    <div style={columnStyle}>
                        <h4>
                            연락처 :  010-8608-8219
                        </h4>
                        <h4>
                            이메일 : hatrix1014@gmail.com
                        </h4>
                        <h4>
                            Github : <StyledLink href="https://github.com/iamjiheehan" target="_blank">깃허브 바로가기</StyledLink>
                        </h4>
                        <h4>
                            Tistory : <StyledLink href="https://hans-j.tistory.com/" target="_blank">티스토리 바로가기</StyledLink>
                        </h4>
                    </div>
                </div>
            </div>
            <div style={headerStyle}>
                <h2 style={absoluteCenter}>학력사항</h2>
                <div style={contentBox}>
                    <div style={columnStyle}>
                        <h4>
                            한국방송통신대학교 컴퓨터과학과 <strong>졸업</strong> (3.4 / 4.5)
                        </h4>
                        <h4>
                            2019.09 ~ 2022.08
                        </h4>
                        <hr style={{ width: '50%', margin:'3rem auto'}} />
                        <h4>
                            선문대학교 영어학과 중퇴
                        </h4>
                        <h4>
                            2013.03 ~ 2013.12
                        </h4>
                    </div>
                </div>
            </div>
            <div style={headerStyle}>
                <h2 style={absoluteCenter}>자격사항</h2>
                <div style={contentBox}>
                    <div style={columnStyle}>
                        <h4>
                            <strong>SQLD</strong> 개발자 자격증
                        </h4>
                        <h4>
                            2022.06.24 취득
                        </h4>
                    </div>
                </div>
            </div>

        </>
    );
}
