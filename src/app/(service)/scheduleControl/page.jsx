"use client"
import { Calendar } from "@nextui-org/react"
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { LineGraph } from "@/components/LineGraph";

const columns = [
  { name: "NOMBRE", uid: "name" },
  { name: "TIEMPO DE INICIO", uid: "startTime" },
  { name: "TIEMPO DE LLEGADA", uid: "arriveTime" }
];

const employeesList = [
  {
    "id": 1,
    "name": "Reunión de equipo",
    "startTime": "10:00 AM",
    "arriveTime": "11:00 AM"
  },
  {
    "id": 2,
    "name": "Entrenamiento de desarrollo",
    "startTime": "02:30 PM",
    "arriveTime": "04:00 PM"
  },
  {
    "id": 3,
    "name": "Presentación de proyecto",
    "startTime": "03:00 PM",
    "arriveTime": "05:00 PM"
  },
  {
    "id": 4,
    "name": "Sesión de diseño",
    "startTime": "09:00 AM",
    "arriveTime": "10:30 AM"
  },
  {
    "id": 5,
    "name": "Revisión de código",
    "startTime": "01:00 PM",
    "arriveTime": "03:00 PM"
  },
  {
    "id": 6,
    "name": "Entrevista de candidato",
    "startTime": "11:30 AM",
    "arriveTime": "12:30 PM"
  },
  {
    "id": 7,
    "name": "Llamada con el cliente",
    "startTime": "04:30 PM",
    "arriveTime": "05:30 PM"
  },
  {
    "id": 8,
    "name": "Revisión de progreso",
    "startTime": "11:00 AM",
    "arriveTime": "12:00 PM"
  },
  {
    "id": 9,
    "name": "Planificación de proyecto",
    "startTime": "02:00 PM",
    "arriveTime": "03:30 PM"
  },
  {
    "id": 10,
    "name": "Reunión de retroalimentación",
    "startTime": "03:30 PM",
    "arriveTime": "04:30 PM"
  }
]

const renderCell = (item, columnKey) => {
  switch (columnKey) {
    case "name":
      return <>{item.name}</>;
    case "startTime":
      return <>{item.startTime}</>;
    case "arriveTime":
      return <>{item.arriveTime}</>;
  }
};

export default function Page() {
  return (
    <div className="flex flex-col flex-1 p-4 bg-[#F2F2F2] gap-4 overflow-y-auto overflow-x-hidden">
      <div className="flex  gap-4 justify-between items-center">
        <div className="flex flex-col gap-4">
          <Calendar
            aria-label="Fecha con selección de més y año"
            className="text-white"
            showMonthAndYearPickers
          />
          <Button color="primary" className="text-white">Consultar</Button>
        </div>
        <div className="flex-1">
          <Table aria-label="Horarios de entrada y salida de empleados">
            <TableHeader columns={columns}>
              {
                (column) => (
                  <TableColumn key={column.uid} align="center">
                    {column.name}
                  </TableColumn>
                )
              }
            </TableHeader>
            <TableBody items={employeesList}>
              {(listItem) => (
                <TableRow key={listItem.id} align="center">
                  {(columnKey) => (
                    <TableCell key={columnKey}>
                      {renderCell(listItem, columnKey)}
                    </TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="h-96 flex-1 bg-white rounded-2xl p-4">
          <LineGraph
            chartData={[1, 2, 3, 5, 6, 7]}
            chartLabels={[
              "27 Jun",
              "10 Jul",
              "15 Ago",
              "20 Sep",
              "24 Oct",
              "30 Nov",
            ]}
            chartTitle={"Km/Viaje"}
            color={"#E26969"}
            bgColor={"#BB3535"}
          />
        </div>
        <div className="h-96 flex-1 bg-white rounded-2xl p-4">
          <LineGraph
            chartData={[15, 17, 20, 20, 10, 12]}
            chartLabels={[
              "27 Jun",
              "10 Jul",
              "15 Ago",
              "20 Sep",
              "24 Oct",
              "30 Nov",
            ]}
            chartTitle={"Pasajeros/Viaje"}
            color={"#416C95"}
            bgColor={"#16436D"}
          />
        </div>
      </div>
    </div>
  );
}