import React, { useState, useEffect } from 'react';
import { Spinner } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/react";
import settingsImage from '../assets/settings.svg';
import logoImage from '../assets/logo.png';
import AccountButton from "../components/AccountButton";
import CrownIcon from "../assets/crown.png";
import PremiumDialog from '../components/PremiumDialog';


export default function dashboard() {

    const [loading_pag, setLoading_pag] = useState(true);

    useEffect(() => {
        // Establecer un temporizador para ocultar la pantalla de carga después de un tiempo específico
        const timer = setTimeout(() => {
            setLoading_pag(false);
        }, 2000);  // 3000 milisegundos = 3 segundos

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
                    <div class="w-full flex h-20 mb-10 text-center  bg-gradient-to-br from-blue-300 to-purple-500 ">
                        <div class="flex-1">
                            <div className="ml-10">
                                <img src={logoImage} style={{ width: '80px', height: '80px' }} />
                            </div>
                        </div>
                        <div class="flex-1">
                            <div className="flex justify-end p-3 gap-5 mt-3">
                                <PremiumDialog />
                                <AccountButton />˝
                            </div>
                        </div>
                    </div>
                    {/* configs */}
                    <div class="flex justify-center mx-auto w-4/5 bg-gray-500 mb-5 rounded-xl bg-gradient-to-br from-blue-300 to-purple-500">
                        <div class="flex-1">
                            <div className="flex p-3">
                                <Avatar className="ml-10" radius="lg" size="lg" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                                <div className="mt-1">
                                    <h1 className="text-white text-xl font-black ml-5">Paul Quezada</h1>
                                    <h1 className="text-white text-sm ml-5">The Owner</h1>
                                </div>
                            </div>
                        </div>

                        <div class="flex-1">
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
                            <div class="absolute mt-5 ml-10 text-3xl text-white font-black">Proyectos</div>
                        </div>

                        <div className="mt-10 row-span-3 w-full grid grid-cols-3 gap-4 text-center p-10">
                            <div className="bg-gray-300 rounded-xl"></div>
                            <div className="bg-gray-300 rounded-xl"></div>
                            <div className="bg-gray-300 rounded-xl"></div>
                            <div className="bg-gray-300 rounded-xl"></div>
                            <div className="bg-gray-300 rounded-xl"></div>
                            <div className="bg-gray-300 rounded-xl"></div>
                        </div>
                    </div>
                </div>
            )}

        </div>


    )
}
