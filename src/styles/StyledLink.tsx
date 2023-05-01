import React, { useState } from 'react';

const linkStyle : React.CSSProperties = {
    padding: '0.5rem',
    margin: '0.5rem 1rem 0.5rem 0',
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.5)',
    transition: 'color 0.2s ease-out',
};

const linkHoverStyle = {
    color: '#2980b9',
    textDecoration: 'none',
};

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
