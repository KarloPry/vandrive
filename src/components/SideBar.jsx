"use client";

import { Listbox, ListboxItem, ListboxSection, User, Divider, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { useRouter, usePathname } from "next/navigation";
import React from 'react';

export default function SideBar() {
    const router = useRouter();
    const pathname = usePathname();

    let disabledKeys = [];
    const selected = pathname.split("/").pop() || "/dashboard/login";

    // Determine if the language is English based on the URL
    const isEnglish = pathname.includes("/en/");

    return (
        <div className="flex flex-col px-2 py-4 gap-4 w-full max-w-60 shadow-lg ">
            <Listbox
                color="primary"
                aria-label="Main Navigation"
                disabledKeys={disabledKeys}
                selectedKeys={[selected]}
                onAction={(key) => { router.push(String(key)); }}
                className='flex items-center h-full'
                classNames={{ list: "h-full", }}
                topContent={<SideBarTopContent />}
                bottomContent={<SideBarBottomContent />}
            >
                {/* Normal User Routes */}
                <ListboxSection title={isEnglish ? "Modules" : "Modulos"} classNames={{ heading: "text-black opacity-70" } + " gap-4"}>
                    <ListboxItem key={"/es/app/dashboard"} className="transition-all mt-4 flex items-center gap-4 py-2 px-3 hover:!bg-red-400 hover:!text-white">
                        <span className="text-xl">{isEnglish ? "Home" : "Inicio"}</span>
                    </ListboxItem>
                    <ListboxItem key={"/es/app/map"} className="transition-all mt-4 flex items-center gap-4 py-2 px-3 hover:!bg-red-400 hover:!text-white">
                        <span className="text-xl">{isEnglish ? "Map" : "Mapa"}</span>
                    </ListboxItem>
                    <ListboxItem key={"/dashboard/"} className="transition-all mt-4 flex items-center gap-4 py-2 px-3 hover:!bg-red-400 hover:!text-white">
                        <span className="text-xl">{isEnglish ? "Schedule Control" : "Control de Horarios"}</span>
                    </ListboxItem>
                    <ListboxItem key={"/es/app/employees"} className="transition-all mt-4 flex items-center gap-4 py-2 px-3 hover:!bg-red-400 hover:!text-white">
                        <span className="text-xl">{isEnglish ? "Employee Management" : "Gestion de Empleados"}</span>
                    </ListboxItem>
                </ListboxSection>
            </Listbox>
        </div>
    );
}

function SideBarTopContent() {
    return (
        <h2 className="text-2xl font-medium text-center my-2">Sidebar</h2>
    );
}

function SideBarBottomContent() {
    return (
        <>
            <Divider className='my-3 bg-red-400' />
            <Dropdown placement="right-end" showArrow>
                <DropdownTrigger>
                    <User
                        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                        as="button"
                        className="w-full py-2 px-4 bg-primary-700 justify-start gap-2"
                        description="@tonyreichert"
                        name="Tony Reichert"
                    />
                </DropdownTrigger>
                <DropdownMenu aria-label="User Actions" variant="flat">
                    <DropdownItem key="settings">
                        Configuración
                    </DropdownItem>
                    <DropdownItem key="logout" color="danger">
                        Cerrar Sesión
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </>
    );
}
