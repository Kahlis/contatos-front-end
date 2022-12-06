import styled from "styled-components";

export const ModalBackground = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #f5f5f5;
    z-index: 1000;
    position: absolute;
`;

export const StyledModal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 22px 22px;
    gap: 22px;
    z-index: 10000;

    position: absolute;
    width: 90%;
    max-width: 369px;
    height: fit-content;
    left: 50%;

    ${({ extraFieldsAmount }) =>
        extraFieldsAmount < 3 || !extraFieldsAmount
            ? "top: 50%; transform: translate(-50%, -50%);"
            : "top: 10px;  transform: translate(-50%, 0);"}

    background: #ffffff;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    form {
        display: flex;
        flex-direction: column;
        gap: 22px;
    }
`;

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    height: 70px;
    justify-content: space-between;
    align-items: center;

    h1 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 28px;
        /* identical to box height, or 156% */

        color: #00a6dd;
    }

    button {
        position: absolute;
        background: transparent;
        border: none;

        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 13px;

        top: 22px;
        right: 22px;

        color: #2b2b2b;
    }
`;

export const StyledSection = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 7px;

    label {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        color: #2b2b2b;
    }

    input {
        box-sizing: border-box;

        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px 16px;

        width: 330px;
        height: 45px;

        background: #ffffff;
        border: 1px solid #aeaeae;
        border-radius: 4px;
    }

    button {
        width: 17px;
        height: 17px;

        position: absolute;
        background: #2b2b2b;
        border: none;

        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 10px;
        border-radius: 2px;

        top: 0;
        right: 0;

        color: #ffffff;
    }
`;

export const ActionButton = styled.button`
    justify-content: center;
    align-items: center;
    padding: 0px 22px;
    gap: 10px;

    width: 330px;
    height: 45px;

    color: white;
    background: ${({ signin }) => (signin ? "#00a6dd" : "#2B2B2B")};
    border-radius: 4px;

    border: none;
`;

export const RegisterCall = styled.label`
    width: 100%;
    text-align: center;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;

    color: #2b2b2b;
`;
