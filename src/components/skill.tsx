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
import styledComponents from '../assets/images/styledComponents.png';

import { AbsoluteCenter, ContentBox, Container, Icon} from '../styles/styled';

export default function Skill(): JSX.Element {
    return (
        <>
            <div style={{textAlign:"left"}}>
                <AbsoluteCenter><h2>Skill Set</h2></AbsoluteCenter>
                <ContentBox>
                    <Container>
                        <Icon style={{width: '50px' }} src={html} alt="html" />
                        <Icon style={{width: '50px' }} src={css} alt="css" />
                        <Icon style={{width: '50px' }} src={sass} alt="sass" />
                        <Icon src={styledComponents} alt="styledComponents" />
                        <Icon style={{width: '50px' }} src={js} alt="JavaScript" />
                        <Icon style={{width: '50px' }} src={ts} alt="Typescript" />
                        <Icon style={{width: '50px' }} src={reactIco} alt="react" />
                        <Icon style={{width: '130px' }} src={reduxToolkit} alt="reduxToolkit" />
                        <Icon style={{width: '50px' }} src={github} alt="github" />
                    </Container>
                </ContentBox>
            </div>
        </>


        
    );
}
