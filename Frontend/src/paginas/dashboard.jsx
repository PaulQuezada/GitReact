import React, { useState, useEffect } from 'react';
import { Spinner } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/react";
import settingsImage from '../assets/settings.svg';
import logoImage from '../assets/logo.png';
import AccountButton from "../components/AccountButton";
import CrownIcon from "../assets/crown.png";
import PenIcon from "../assets/pen.png";
import DeleteIcon from "../assets/delete.png";
import RocketIcon from "../assets/rocket.gif";
import PremiumDialog from '../components/PremiumDialog';


export default function dashboard() {

    const [loading_pag, setLoading_pag] = useState(true);

    useEffect(() => {
        // Establecer un temporizador para ocultar la pantalla de carga después de un tiempo específico
        const timer = setTimeout(() => {
            setLoading_pag(false);
        }, 1000);  // 3000 milisegundos = 3 segundos

        // Limpiar el temporizador si el componente se desmonta antes de que se complete el tiempo
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex h-screen w-screen bg-gradient-to-br from-blue-300 to-purple-500">
            {loading_pag ? (
                <div className='flex justify-center mx-auto mt-12 p-10'>
                    <Spinner className='h-1/2 w-1/2' color="default" labelColor="secondary" />
                </div>
            ) : (
                <div className="w-screen h-screen bg-gray-100">
                    {/* header */}
                    <div className="w-full flex h-20 mb-10 text-center  bg-gradient-to-br from-blue-300 to-purple-500 ">
                        <div className="flex-1">
                            <h1 className='flex justify-start text-2xl text-white font-black mt-5 ml-12'>TR</h1>
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-end p-3 gap-5 mt-3">
                                <PremiumDialog />
                                <AccountButton />˝
                            </div>
                        </div>
                    </div>
                    {/* configs */}
                    <div className="flex justify-center mx-auto w-4/5 bg-gray-500 mb-5 rounded-xl bg-gradient-to-br from-blue-300 to-purple-500">
                        <div className="flex-1">
                            <div className="flex p-3">
                                <Avatar className="ml-10" radius="lg" size="lg" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                                <div className="mt-1">
                                    <h1 className="text-white text-xl font-black ml-5">Paul Quezada</h1>
                                    <h1 className="text-white text-sm ml-5">The Owner</h1>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1">
                            <div className="flex justify-end mt-5 mr-10">
                                <Button size="sm" className="mr-5 text-white hover:text-opacity-100 transform-gpu hover:scale-105" variant="bordered">
                                    Crear nuevo proyecto
                                </Button>
                                <Button isIconOnly size="sm" variant="bordered" className="hover:text-opacity-100 transform-gpu hover:scale-105">
                                    <img src={settingsImage} alt="Settings" style={{ width: '18px', height: '18px', filter: 'invert(1)' }} />
                                </Button>

                            </div>
                        </div>
                    </div>
                    {/* contents */}
                    <div className="flex mx-auto w-4/5 h-2/3 rounded-xl bg-gradient-to-br from-blue-300 to-purple-500">
                        <div className="relative">
                            <div className="absolute mt-5 ml-10 text-3xl text-white font-black">Proyectos</div>
                        </div>
                        <div className="mt-10 row-span-3 w-full grid grid-cols-3 gap-4 text-center p-10">
                            {Array(6).fill().map((_, index) => (
                                <div key={index} className="bg-gray-100 opacity-50 rounded-xl transition-transform hover:text-opacity-100 transform-gpu hover:scale-105">
                                    <ButtonGroup className='flex justify-end mt-2 mr-2' variant="bordered">
                                        <Button isIconOnly >
                                            <img src={PenIcon} alt="Settings" style={{ width: '18px', height: '18px' }} />
                                        </Button>
                                        <Button isIconOnly>
                                            <img src={DeleteIcon} alt="Settings" style={{ width: '18px', height: '18px' }} />
                                        </Button>
                                    </ButtonGroup>
                                    <div>
                                        <h1 className='font-black'>Proyecto {index+1}</h1>
                                        <img className='flex mx-auto opacity-10' src={RocketIcon} alt="Settings" style={{ width: '100px', height: '100px' }} />
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            )}

        </div>


    )
}
