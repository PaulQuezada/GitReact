import React from "react";
import { useNavigate } from 'react-router-dom';
import CrownIcon from "../assets/crown.png";
import RewardIcon from "../assets/reward.png";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

export default function PremiumDialog() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const navigate = useNavigate();   // Cambio aquí

    const handleObtenerClick = () => {
        navigate("/premium");   // Cambio aquí
    };
    return (
        <>
            <Button
                startContent={<img src={CrownIcon} alt="Corona" style={{ width: '20px', height: '20px' }} />}
                className="hover:text-opacity-100 transform-gpu hover:scale-105 text-white"
                size="md" variant="bordered"
                onPress={onOpen}
                >
                Obten Premium
            </Button>
            <Modal backdrop="blur" size="sm" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <img src={CrownIcon} className="flex justify-center mx-auto" style={{ width: '100px', height: '100px' }}/>
                            <ModalHeader className="flex mx-auto">Obten Premium</ModalHeader>
                            <ModalBody>
                                <h1 className="text-lg font-black mb-5"> Beneficios al obtener <span className="text-xl text-yellow-400">Premium</span> </h1>
                                <div className="flex">
                                    <img src={RewardIcon} style={{ width: '30px', height: '30px' }}/>
                                    <h1 className="ml-2">Podras realizar proyectos ilimitados, recuerda que en la version gratuita solo puedes realizar 3 proyectos.</h1>
                                </div>
                                <div className="flex"> 
                                    <img src={RewardIcon} style={{ width: '30px', height: '30px' }}/>
                                    <h1 className="ml-2">Podras agregar a mas personas a tus proyectos, recuerda que en la version gratuita solo puedes agregar a 3 personas.</h1>
                                </div>
                                <div className="flex">
                                   <img src={RewardIcon} style={{ width: '30px', height: '30px' }}/>
                                   <h1 className="ml-2">Podras agregar mas tareas a tus proyectos, recuerda que en la version gratuita solo puedes agregar 10 tareas por proyecto.</h1>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cerrar
                                </Button>
                                <Button color="primary" onPress={handleObtenerClick}>
                                    Obtener
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
