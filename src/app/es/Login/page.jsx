"use client";

// import React, { useState } from "react";
import Image from "next/image";
import { Input, Button, Checkbox, Link } from "@nextui-org/react";
import Logo from "../../../../public/Logo.svg";
import { useState } from "react";



export default function Page()  {
  const [rememberData, setRememberData] = useState(false);

  const handleRememberData = () => {
    setRememberData(!rememberData);
  };

  const handleLogin = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (rememberData) {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
    } else {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
    }
    // Aquí puedes agregar la lógica para iniciar sesión
  };

  return (
    <>
      <div className="flex flex-col gap-6 w-full h-full justify-between items-center">
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl">VanDrive</h1>
          <Image
            src={Logo}
            width={150}
            height={200}
            alt="Picture of the author"
            className="rounded-full"
          />
        </div>
        <h2 className="text-3xl mb-2">Inicia Sesión en VanDrive</h2>
        <div className="flex flex-col w-full items-center gap-8">
          <Input
            isRequired
            type="email"
            label="Correo Electronico"
            labelPlacement="outside"
            defaultValue="junior@nextui.org"
            className="w-1/4"
          />
          <Input
            isRequired
            type="password"
            label="Contraseña"
            labelPlacement="outside"
            defaultValue="junior@nextui.org"
            className="w-1/4"
          />
        </div>
        <div className="flex flex-row gap-8 w-1/4 justify-center">
          <Button className="bg-[#1C385F] text-white">Iniciar Sesión</Button>
          <Checkbox defaultSelected={rememberData} onClick={handleRememberData}>
            Recordar Datos
          </Checkbox>
        </div>
        <div className="flex flex-col gap-4 w-1/4 justify-center items-center align-middle">
          <div className="flex flex-row gap-2 items-center">
            <p>No tienes cuenta?</p>
            <Button variant="light">Registrate</Button>
          </div>
          <Button className="bg-white shadow-md">Continua con Google</Button>
        </div>
      </div>
    </>
  );
};

// export default page;
