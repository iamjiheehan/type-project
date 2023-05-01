import React from 'react';

import StyledLink from '../styles/StyledLink';

import { AbsoluteCenter, ContentBox, Column  } from '../styles/styled';


const Project: React.FC = () => {
    return (
        <>
            <div style={{textAlign:"left"}}>
                <AbsoluteCenter><h2>Contact</h2></AbsoluteCenter>
                <ContentBox>
                    <Column>
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
                    </Column>
                </ContentBox>
            </div>
            <div style={{textAlign:"left"}}>
                <AbsoluteCenter><h2>학력사항</h2></AbsoluteCenter>
                <ContentBox>
                    <Column>
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
                    </Column>
                </ContentBox>
            </div>
            <div style={{textAlign:"left"}}>
                <AbsoluteCenter><h2>자격사항</h2></AbsoluteCenter>
                <ContentBox>
                    <Column>
                        <h5>
                            <StyledLink href="https://drive.google.com/file/d/1kXn6rGmLhnzOvUTcXSH7iZR-NPgNtLDq/view?usp=share_link" target="_blank">SQLD</StyledLink> 개발자 자격증
                        </h5><br />
                        <h5>
                            2022.06.24 취득
                        </h5>
                    </Column>
                </ContentBox>
            </div>

        </>
    );
}

export default Project;