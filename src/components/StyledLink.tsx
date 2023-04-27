import React, { useState } from 'react';
import { linkStyle, linkHoverStyle } from './styles';

interface StyledLinkProps {
    href: string;
    target: string;
    children: React.ReactNode;
}

const StyledLink: React.FC<StyledLinkProps> = ({ href, target, children }) => {
const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = (): void => {
        setIsHovered(true);
    };

    const handleMouseLeave = (): void => {
        setIsHovered(false);
    };

    const linkStyleToApply = isHovered ? { ...linkStyle, ...linkHoverStyle } : linkStyle;

    return (
        <a href={href} target={target} style={linkStyleToApply} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
        </a>
    );
};

StyledLink.displayName = 'StyledLink';

export default StyledLink;
