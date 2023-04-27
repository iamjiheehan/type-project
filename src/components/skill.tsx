import React from 'react';

import js from '../assets/images/javascript.png';
import ts from '../assets/images/typescript.png';
import css from '../assets/images/css.png';
import sass from '../assets/images/sass.png';
import html from '../assets/images/html.png';
import reactIco from '../assets/images/reactIco.png';
import reduxToolkit from '../assets/images/reduxToolkit.png';
import github from '../assets/images/github.png';
import vscode from '../assets/images/vscode.png';

import { contentBox, containerStyle, absoluteCenter, headerStyle, iconStyle, linkStyle } from './styles';

interface StyledLinkProps {
    href: string;
    target: string;
    children: React.ReactNode;
}

const StyledLink: React.FC<StyledLinkProps> = ({ href, target, children }) => {
    return (
        <a href={href} target={target} style={linkStyle}>
            {children}
        </a>
    );
};
//FC : function component
// StyledLinkProps 타입의 props를 받아서 ReactNode를 리턴하는 함수형 컴포넌트

StyledLink.displayName = 'StyledLink';

export default function Skill(): JSX.Element {
    return (
        <div>
            <div style={headerStyle}>
                <h2 style={absoluteCenter}>Skill Set</h2>
                <div style={contentBox}>
                    <div style={containerStyle}>
                        <img style={{ ...iconStyle, width: '50px' }} src={html} alt="html" />
                        <img style={{ ...iconStyle, width: '50px' }} src={css} alt="css" />
                        <img style={{ ...iconStyle, width: '50px' }} src={sass} alt="sass" />
                        <img style={{ ...iconStyle, width: '50px' }} src={js} alt="JavaScript" />
                        <img style={{ ...iconStyle, width: '50px' }} src={ts} alt="Typescript" />
                        <img style={{ ...iconStyle, width: '50px' }} src={reactIco} alt="react" />
                        <img style={{ ...iconStyle, width: '130px' }} src={reduxToolkit} alt="reduxToolkit" />
                        <img style={{ ...iconStyle, width: '50px' }} src={github} alt="github" />
                        <img style={{ ...iconStyle, width: '50px' }} src={vscode} alt="vscode" />
                    </div>
                </div>
            </div>
        </div>


        
    );
}
