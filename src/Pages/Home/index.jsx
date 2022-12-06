import { useState } from "react";
import Modal from "../../Components/AuthModal";
import Welcome from "../../Components/Welcome";

function Home() {
    const [type, setType] = useState("Login");
    const [isModalOpened, setIsModalOpened] = useState(false);

    const closeModal = () => {
        setIsModalOpened(false);
        setType("Login");
    };

    return (
        <>
            {isModalOpened ? (
                <Modal type={type} closeModal={closeModal} setType={setType} />
            ) : (
                <Welcome setIsModalOpened={setIsModalOpened} />
            )}
        </>
    );
}

export default Home;
