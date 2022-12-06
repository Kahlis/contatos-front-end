import {
    ActionButton,
    RegisterCall,
    StyledHeader,
    StyledModal,
    StyledSection,
} from "../style";
import { useForm } from "react-hook-form";

function LoginModal({ closeModal, setType }) {
    const { register, /* setValue, */ handleSubmit } = useForm();

    const LoginEnter = (data) => {
        console.log(data);
    };

    const GoToRegister = () => {
        setType("Register");
    };

    return (
        <StyledModal>
            <StyledHeader>
                <h1>Login</h1>
                <button
                    onClick={() => {
                        closeModal();
                    }}
                >
                    X
                </button>
            </StyledHeader>
            <form onSubmit={handleSubmit(LoginEnter)}>
                <StyledSection>
                    <label>Email</label>
                    <input type="text" {...register("email")} />
                </StyledSection>
                <StyledSection>
                    <label>Senha</label>
                    <input type="password" {...register("password")} />
                </StyledSection>
                <ActionButton signin={true}>Entrar</ActionButton>
                <RegisterCall>Ainda não possui uma conta?</RegisterCall>
                <ActionButton onClick={GoToRegister}>Cadastrar-me</ActionButton>
            </form>
        </StyledModal>
    );
}

export default LoginModal;
