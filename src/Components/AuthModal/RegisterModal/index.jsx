/* eslint-disable react-hooks/exhaustive-deps */
import {
    ActionButton,
    RegisterCall,
    StyledHeader,
    StyledModal,
    StyledSection,
} from "../style";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

function RegisterModal({ closeModal, setType }) {
    const [emailRows, setEmailRows] = useState([]);
    const [emailCount, setEmailCount] = useState(1);

    const [phoneRows, setPhoneRows] = useState([]);
    const [phoneCount, setPhoneCount] = useState(1);

    const { register, /* setValue, */ handleSubmit } = useForm();

    const BackToLogin = (event) => {
        event.preventDefault();
        setType("Login");
    };

    const LoginEnter = (data) => {
        console.log(data);
    };

    const AddEmailField = (event) => {
        event.preventDefault();
        setEmailCount(emailCount + 1);
    };

    const AddPhoneField = (event) => {
        event.preventDefault();
        setPhoneCount(phoneCount + 1);
    };

    useEffect(() => {
        setEmailRows([]);
        let newEmails = [];
        for (let i = 0; i < emailCount; i++) {
            newEmails.push(
                <input type="email" {...register("email_" + i)} key={i} />
            );
        }
        setEmailRows(newEmails);
        console.log(emailRows);
    }, [emailCount]);

    useEffect(() => {
        setPhoneRows([]);
        let newPhones = [];
        for (let i = 0; i < phoneCount; i++) {
            newPhones.push(
                <input type="number" {...register("phone_" + i)} key={i} />
            );
        }
        setPhoneRows(newPhones);
        console.log(phoneRows);
    }, [phoneCount]);

    return (
        <StyledModal extraFieldsAmount={emailCount + phoneCount}>
            <StyledHeader>
                <h1>Cadastro</h1>
                <button
                    className="x"
                    onClick={() => {
                        closeModal();
                    }}
                >
                    X
                </button>
            </StyledHeader>
            <form onSubmit={handleSubmit(LoginEnter)}>
                <StyledSection>
                    <label>Nome completo:</label>
                    <input type="text" {...register("email")} />
                </StyledSection>
                <StyledSection>
                    <label>Emails</label>
                    <button onClick={AddEmailField}>+</button>
                    {emailRows.map((item) => {
                        return item;
                    })}
                </StyledSection>
                <StyledSection>
                    <label>Telefones</label>
                    <button onClick={AddPhoneField}>+</button>
                    {phoneRows.map((item) => {
                        return item;
                    })}
                </StyledSection>
                <StyledSection>
                    <label>Senha:</label>
                    <input type="password" {...register("password")} />
                </StyledSection>
                <ActionButton signin={true}>Efetuar cadastro</ActionButton>
                <RegisterCall>Já possui uma conta?</RegisterCall>
                <ActionButton onClick={BackToLogin}>
                    Voltar ao login
                </ActionButton>
            </form>
        </StyledModal>
    );
}

export default RegisterModal;
