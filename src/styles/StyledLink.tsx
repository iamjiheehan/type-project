import React from 'react';
import styled from 'styled-components';

const StyledAnchor = styled.a`
    padding: 0.5rem;
    text-decoration: none;
    margin-right: 1.5rem;
    color: black;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
    transition: color 0.2s ease-out;
    display: inline-block;

    &:hover {
        color: #3498db;
        text-decoration: none;
    }

    @media (max-width: 768px) {
        font-size: 14px;
        margin: 0.5rem 1rem 0.5rem 0;
        color: #2980b9;
    }
`;

interface StyledLinkProps {
    href: string;
    target: string;
    children: React.ReactNode;
}

const StyledLink: React.FC<StyledLinkProps> = ({ href, target, children }) => {
    return (
        <StyledAnchor href={href} target={target}>
        {children}
        </StyledAnchor>
    );
};

StyledLink.displayName = 'StyledLink';

export default StyledLink;
