"use client"
import { Avatar, Button, Input } from "@nextui-org/react";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ModalPersonActionsEN from "@/components/ModalPersonActionsEN";
import ModalEditUserEN from "@/components/ModalEditUserEN";

const columns = [
  { name: "NOMBRE", uid: "nombre" },
  { name: "ENTERPRISE", uid: "empresa" },
  { name: "DEPARTAMENTO", uid: "departamento" },
  { name: "LATITUD", uid: "latitud" },
  { name: "LONGITUD", uid: "longitud" },
  { name: "EDITAR", uid: "editar" }
]

const trips = [
  {
    "id": "1",
    "Nombre": "Juan Pérez",
    "Empresa": "ACME Corporation",
    "Departamento": "Ventas",
    "Latitud": 40.7128,
    "Longitud": -74.0060
  },
  {
    "id": "2",
    "Nombre": "María García",
    "Empresa": "ACME Corporation",
    "Departamento": "Marketing",
    "Latitud": 40.7128,
    "Longitud": -74.0060
  },
  {
    "id": "3",
    "Nombre": "Pedro López",
    "Empresa": "ACME Corporation",
    "Departamento": "Recursos humanos",
    "Latitud": 40.7128,
    "Longitud": -74.0060
  },
  {
    "id": "4",
    "Nombre": "Laura Martínez",
    "Empresa": "ACME Corporation",
    "Departamento": "Tecnología",
    "Latitud": 40.7128,
    "Longitud": -74.0060
  },
  {
    "id": "5",
    "Nombre": "Carlos Rodríguez",
    "Empresa": "ACME Corporation",
    "Departamento": "Ventas",
    "Latitud": 40.7128,
    "Longitud": -74.0060
  },
  {
    "id": "6",
    "Nombre": "Ana Ramírez",
    "Empresa": "ACME Corporation",
    "Departamento": "Marketing",
    "Latitud": 40.7128,
    "Longitud": -74.0060
  },
  {
    "id": "7",
    "Nombre": "Javier Gómez",
    "Empresa": "ACME Corporation",
    "Departamento": "Recursos humanos",
    "Latitud": 40.7128,
    "Longitud": -74.0060
  },
  {
    "id": "8",
    "Nombre": "Sara Torres",
    "Empresa": "ACME Corporation",
    "Departamento": "Tecnología",
    "Latitud": 40.7128,
    "Longitud": -74.0060
  },
  {
    "id": "9",
    "Nombre": "Mario Sánchez",
    "Empresa": "ACME Corporation",
    "Departamento": "Ventas",
    "Latitud": 40.7128,
    "Longitud": -74.0060
  },
  {
    "id": "10",
    "Nombre": "Elena Vargas",
    "Empresa": "ACME Corporation",
    "Departamento": "Marketing",
    "Latitud": 40.7128,
    "Longitud": -74.0060
  }
];




export default function Page() {
  // const [trips, setTrips] = useState();
  const router = useRouter();

  const [tripsData, setTripsData] = useState([]);

  const getData = async () => {
    const empresaId = localStorage.getItem("empresaId")

    const response = await fetch('/api/viajes' + empresaId)
    console.log(await response.json());
  }

  useEffect(() => {

  }, [])

  const [filteredTrips, setFilteredTrips] = useState(trips);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setFilteredTrips(
      trips.filter((trip) =>
        trip.Nombre.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  const renderCell = (trip, columnKey) => {
    switch (columnKey) {
      case "nombre":
        return (
          <>{trip.Nombre}</>
        );
      case "empresa":
        return (
          <>{trip.Empresa}</>
        );
      case "departamento":
        return (
          <>{trip.Departamento}</>
        );
      case "latitud":
        return (
          <>{trip.Latitud}</>
        );
      case "longitud":
        return (
          <>{trip.Longitud}</>
        );
      case "editar":
        return (
          <ModalEditUserEN />
        );
    }
  }

  return (
    <div className="flex flex-col flex-1 p-4 bg-[#F2F2F2] gap-4 overflow-y-auto overflow-x-hidden">
      <div className="bg-white p-4 rounded-xl">
        <div className="flex flex-row justify-between mb-4">
          <div className="flex gap-2 items-center">
            <h2 className="text-2xl inline-block">Empleados registrados</h2>
            <span className="material-symbols-rounded inline-block">badge</span>
          </div>
          <ModalPersonActionsEN />
        </div>
        <Input
          type="search"
          label="Search for an employee"
          endContent={<span className="material-symbols-rounded">search</span>}
          className="mb-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Table aria-label="adiwmaldw">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.uid} align="center" className="bg-[#f2b882] text-blue-950">
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={filteredTrips}>
            {(trip) => (
              <TableRow key={trip.id}>
                {(columnKey) => <TableCell key={columnKey}>{renderCell(trip, columnKey)}</TableCell>}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}