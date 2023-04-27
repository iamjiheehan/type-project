import React from 'react';
import styled from 'styled-components';

import { contentBox, columnStyle, absoluteCenter, headerStyle, linkStyle, linkHoverStyle } from './styles';


const StyledLink = styled.a`
    ${linkStyle}
    &:hover {
        ${linkHoverStyle}
    }
`;

const Project: React.FC = () => {
    return (
        <>
            <div style={headerStyle}>
                <h2 style={absoluteCenter}>Contact</h2>
                <div style={contentBox}>
                    <div style={columnStyle}>
                        <h5>
                            연락처 :  010-8608-8219
                        </h5><br />
                        <h5>
                            이메일 : hatrix1014@gmail.com
                        </h5><br />
                        <h5>
                            Github : <StyledLink href="https://github.com/iamjiheehan" target="_blank">깃허브 바로가기</StyledLink>
                        </h5><br />
                        <h5>
                            Tistory : <StyledLink href="https://hans-j.tistory.com/" target="_blank">티스토리 바로가기</StyledLink>
                        </h5>
                    </div>
                </div>
            </div>
            <div style={headerStyle}>
                <h2 style={absoluteCenter}>학력사항</h2>
                <div style={contentBox}>
                    <div style={columnStyle}>
                        <h5>
                            한국방송통신대학교 컴퓨터과학과 <strong>졸업</strong> (3.4 / 4.5)
                        </h5><br />
                        <h5>
                            2019.09 ~ 2022.08
                        </h5><br />
                        <hr style={{ width: '50%', margin:'3rem auto'}} />
                        <h5>
                            선문대학교 영어학과 중퇴
                        </h5><br />
                        <h5>
                            2013.03 ~ 2013.12
                        </h5>
                    </div>
                </div>
            </div>
            <div style={headerStyle}>
                <h2 style={absoluteCenter}>자격사항</h2>
                <div style={contentBox}>
                    <div style={columnStyle}>
                        <h5>
                            <strong>SQLD</strong> 개발자 자격증
                        </h5><br />
                        <h5>
                            2022.06.24 취득
                        </h5>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Project;