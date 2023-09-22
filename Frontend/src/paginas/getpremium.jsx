import React, { useRef, useState, useEffect } from 'react';
import {Spinner} from "@nextui-org/react";
import { Button } from '@nextui-org/react';
import confetti from 'canvas-confetti';
import CrownIcon from '../assets/crown.png';
export default function getpremium() {
    const buttonRef = useRef(null);
    // Mostrar el confetti cuando se inicie la página.
    React.useEffect(() => {
        handleConfetti();
    }, []);
    const handleConfetti = () => {
        const confettiOptions = {
            origin: { x: 0.5, y: 0.4 } 
        };
    
        setTimeout(() => {
            confetti(confettiOptions);
        }, 2200);
        setTimeout(() => {
            confetti(confettiOptions);
        }, 2400);
        setTimeout(() => {
            confetti(confettiOptions);
        }, 2600);
        setTimeout(() => {
            confetti(confettiOptions);
        }, 2800);
    };
    const [loading_pag, setLoading_pag] = useState(true);

    useEffect(() => {
        // Establecer un temporizador para ocultar la pantalla de carga después de un tiempo específico
        const timer = setTimeout(() => {
            setLoading_pag(false);
        }, 2000); 

        // Limpiar el temporizador si el componente se desmonta antes de que se complete el tiempo
        return () => clearTimeout(timer);
    }, []);
    return (
        <div className='h-screen w-screen bg-gradient-to-br from-blue-300 to-purple-500 flex'>
            {loading_pag ? (
                 <div className='flex justify-center mx-auto mt-12 p-10'>
                    <Spinner className='h-1/2 w-1/2' color="default" labelColor="secondary"/>
                 </div>
            ) : (
                <div className='flex flex-col mx-auto justify-center item-center mt-[-100px]'>
                <img className='mx-auto' src={CrownIcon} style={{ width: '100px', height: '100px' }} />
                <h1 className='text-4xl text-white font-black'>
                    Gracias por adquirir la versión
                    <span className="text-4xl text-yellow-200"> Premium!!</span>
                </h1>
            </div>
            )}
        </div>
    )
}
