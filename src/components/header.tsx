import React from 'react';
import myImage from '../assets/images/myImage.jpg';

import { Container, Intro, Text, Image  } from '../styles/styled';

import StyledLink from '../styles/StyledLink';

const Header : React.FC = () => {
    return (
        <Container>
            <div style={{textAlign:"left"}}>
                <Intro>
                    <Text>
                        <h2>내일이 더 기대되는</h2>
                        <h2>프론트 엔드 개발자 한지희</h2>
                    </Text>
                    <div>
                        <h5>
                            <StyledLink href="https://drive.google.com/file/d/1Kx9DjLAIBUSYbV-NvwhkHlPv8Sy51CEr/view?usp=share_link" target="_blank">pdf 출력</StyledLink>
                        </h5>
                    </div>
                </Intro>
            </div>
            <div>
                <Image src={myImage} alt="MyImage" />
            </div>
        </Container>
    );
}

export default Header;