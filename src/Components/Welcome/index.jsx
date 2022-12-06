import { StyledWelcome } from "./style";

function Welcome({ setIsModalOpened }) {
    return (
        <StyledWelcome>
            <h1>Bem-vindo!</h1>
            <p>você não está logado, faça login para continuar</p>
            <button
                onClick={() => {
                    setIsModalOpened(true);
                }}
            >
                Acessar login
            </button>
        </StyledWelcome>
    );
}

export default Welcome;
