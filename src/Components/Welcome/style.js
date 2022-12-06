import styled from "styled-components";

export const StyledWelcome = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;

    width: fit-content;
    height: fit-content;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: 15px;

    h1 {
        width: 325px;
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        text-align: center;

        color: #00a6dd;
    }

    p {
        width: 325px;

        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 18px;
        text-align: center;

        color: #2b2b2b;
    }

    button {
        margin-top: 40px;
        justify-content: center;
        align-items: center;
        padding: 0px 22px;

        width: 330px;
        height: 45px;

        color: white;
        background: #00a6dd;
        border-radius: 4px;

        border: none;
    }
`;
