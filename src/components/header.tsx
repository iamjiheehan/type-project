import React from 'react';
import myImage from '../assets/images/myImage.jpg';
import { containerStyle, headerStyle, imageStyle, introStyle,textStyle } from './styles';

import StyledLink from './StyledLink';


const Header : React.FC = () => {
    const pdfPath = 'https://drive.google.com/file/d/1Kx9DjLAIBUSYbV-NvwhkHlPv8Sy51CEr/view?usp=share_link';

    const handleButtonClick = (): void => {
        window.open(pdfPath, '_blank');
    };

    return (
        <div style={containerStyle}>
            <div style={headerStyle}>
                <div style={introStyle}>
                    <div>
                        <h2 style={textStyle}>내일이 더 기대되는</h2>
                        <h2 style={textStyle}>프론트 엔드 개발자 한지희</h2>
                    </div>
                    <div>
                        <h5>
                            <StyledLink href="https://drive.google.com/file/d/1kXn6rGmLhnzOvUTcXSH7iZR-NPgNtLDq/view?usp=share_link" target="_blank">pdf 출력</StyledLink>
                        </h5>
                    </div>
                </div>
            </div>
            <div>
                <img style={imageStyle} src={myImage} alt="MyImage" />
            </div>
        </div>
    );
}

export default Header;