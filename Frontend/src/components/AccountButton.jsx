import React from "react";
import { useNavigate } from 'react-router-dom';
import CrownIcon from "../assets/crown.png";
import DashboardIcon from "../assets/dashboard.png";
import HomeIcon from "../assets/home.png";
import Logout from "../assets/logout.png";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { Divider, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User } from "@nextui-org/react";
import RewardIcon from "../assets/reward.png";

export default function AccountButton() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const navigate = useNavigate();   // Cambio aquí

    const handleObtenerClick = () => {
        navigate("/premium");   // Cambio aquí
    };
    return (
        <>
            <Dropdown backdrop="blur">
                <DropdownTrigger>
                    <User
                        as="button"
                        avatarProps={{
                            src: "https://i.pravatar.cc/150?u=a04258114e29026302d",
                        }}
                        className="transition-transform text-white hover:text-opacity-100 transform-gpu hover:scale-105"
                        name="Paul Quezada"
                        description={<span style={{ color: 'yellow' }}>Free Account</span>}
                    />
                </DropdownTrigger>
                <DropdownMenu variant="faded" aria-label="Static Actions">
                    <DropdownItem
                        startContent={<img src={HomeIcon} alt="Inicio" style={{ width: '20px', height: '20px' }} />}
                        key="home">
                        Inicio
                    </DropdownItem>
                    <DropdownItem
                        startContent={<img src={DashboardIcon} alt="Dashboard" style={{ width: '20px', height: '20px' }} />}
                        key="dashboard">
                        Dashboard
                    </DropdownItem>
                    <DropdownItem
                        startContent={<img src={CrownIcon} alt="Corona" style={{ width: '20px', height: '20px' }} />}
                        key="premium"
                        onPress={onOpen}>
                        Get Premium
                    </DropdownItem>
                    <DropdownItem
                        startContent={<img src={Logout} alt="Logout" style={{ width: '20px', height: '20px' }} />}
                        key="logout">
                        Cerrar sesion
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
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
