import React from 'react';
import styled from 'styled-components';

const StyledAnchor = styled.a`
    padding: 0.5rem;
    margin: 0.5rem 1rem 0.5rem 0;
    text-decoration: none;
    color: black;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
    transition: color 0.2s ease-out;

    &:hover {
        color: #3498db;
        text-decoration: none;
    }

    @media (max-width: 768px) {
        font-size: 14px;
        margin-top: 1rem;
        color: #2980b9;
        display: inline-block;
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
