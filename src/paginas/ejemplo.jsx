import React, { useState } from 'react';
import { Input } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/react";
import { EyeFilledIcon } from "../utility/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../utility/EyeSlashFilledIcon";


export default function ejemplo() {
  // Funciones de NextUi
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  // Funciones de React
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  // Funcion que se ejecute cuando el boton loading se presione
  const handleLoading = () => {
    if(email === '' || password === ''){
      alert('Por favor ingrese todos los campos');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <div className="mt-12">
      <form className="w-full shadow-xl bg-gray-100 rounded-xl p-10">
        <h1 className="text-sky-600 text-4xl font-black text-center mb-5"> Iniciar <span className="text-slate-700">Sesion</span></h1>
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
        <div className='p-3'>
          <Button color="primary" className='w-full p-2 bg-sky-600' isLoading={loading} onClick={handleLoading}>
            Inciar
          </Button>
        </div>
      </form>
    </div>
  )
}