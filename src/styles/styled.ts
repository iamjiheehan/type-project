import styled, {css} from 'styled-components';


const sizes = {
    phone: 768,
};

const media = {
    phone: (styles: TemplateStringsArray) => css`
        @media (max-width: ${sizes.phone}px) {
            ${styles}
        }
    `,
};

export const ContentBox = styled.div`
    border: 1px solid #ccc;
    padding: 3rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    margin: 4rem 1rem;

    ${media.phone`
        padding: 1rem 0.5rem;
    `}
`;

export const Text = styled.div`
    margin: 0;
    padding-right: 20px;

    ${media.phone`
        padding: 1rem 2.5rem;
        textStyle: 0.2rem;
    `}
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
`;

export const Intro = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;

    ${media.phone`
        justify-content: flex-end;
    `}
`;

export const Title = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;

    ${media.phone`
        justify-content: space-evenly;
        align-items: center;
        align-content: stretch;
        flex-direction: column;
    `}
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    margin: 1rem;
`;

export const Image = styled.img`
    height: 150px;
    border-radius: 200px;
`;

export const Icon = styled.img`
    width: 30px;
    margin-left: 10px;
`;

export const Gif = styled.img`
    width: 20rem;
    height: 10rem;
    margin-bottom: 1rem;
    margin-top: 2rem;

    ${media.phone`
        padding : 0.5rem;
    `}
`;


export const AbsoluteCenter = styled.div`
    text-align: center;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
`;
