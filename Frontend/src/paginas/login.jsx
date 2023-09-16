import React, { useState } from 'react';
import { Input } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/react";
import { EyeFilledIcon } from "../components/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../components/EyeSlashFilledIcon";


export default function devlogin() {
    // Funciones de NextUi
    const [isVisible, setIsVisible] = React.useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
    // Funciones de React
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    // Funcion que se ejecute cuando el boton loading se presione
    const handleLoading = () => {
        if (email === '' || password === '') {
            alert('Por favor ingrese todos los campos');
            return;
        }
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };
    return (
        <div className="flex flex-row h-screen w-screen bg-gradient-to-br from-blue-300 to-purple-500">
            <div className='lg:w-1/3 md: w-1 relative bg-gray-100 content-center mx-auto mt-12 mb-12 rounded-xl backdrop-blur-xl backdrop-opacity-10'>
                <h1 className="text-slate-700 text-4xl font-black text-center mb-2 mt-20"> Login</h1>
                <form className=" flex-col shadow-x bg-gray-100 rounded-xl p-10">
                    <Input
                        isClearable
                        type="email"
                        label="Email"
                        variant="bordered"
                        placeholder="Ingresa tu email"
                        onChange={(e) => setEmail(e.target.value)}
                        onClear={() => console.log("input cleared")}
                        className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <Input
                        label="Contraseña"
                        variant="bordered"
                        placeholder="Ingresa tu contraseña"
                        onChange={(e) => setPassword(e.target.value)}
                        endContent={
                            <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                {isVisible ? (
                                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                ) : (
                                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                )}
                            </button>
                        }
                        type={isVisible ? "text" : "password"}
                        className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <div className='p-3 flex justify-center'>
                        <Button color="primary" className='w-2/3 bg-gradient-to-br from-blue-300 to-purple-500' isLoading={loading} onClick={handleLoading}>
                            Log in
                        </Button>
                    </div>
                    <div className='p-3 flex justify-center '>
                        <Button variant="bordered" className='w-2/3'>
                            <img 
                                src="./src/assets/google.png" 
                                className='w-6 h-6 mr-2'
                            />
                            Inicia sesión con Google
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}