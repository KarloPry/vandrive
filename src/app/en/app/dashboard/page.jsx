"use client"
import { Avatar, Button } from "@nextui-org/react";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import { LineGraph } from "@/components/LineGraph";

const columns = [
  { name: "START ADDRESS", uid: "startAdrress" },
  { name: "END ADDRESS", uid: "endAddress" },
  { name: "INTERMEDIATE POINTS", uid: "intPoint" },
  { name: "DISTANCE", uid: "distance" },
  { name: "PASSENGERS NUMBER", uid: "passNumber" },
  { name: "ACTIONS", uid: "actions" }
]

const trips = [
  {
    "id": "1",
    "StartAddress": "Calle 1, Ciudad A",
    "EndAddress": "Avenida Principal, Ciudad B",
    "IntermediatePoints": 2,
    "Distance": 10.5,
    "PassengersNumber": 3
  },
  {
    "id": "2",
    "StartAddress": "Avenida Central, Ciudad C",
    "EndAddress": "Calle 5, Ciudad D",
    "IntermediatePoints": 1,
    "Distance": 8.2,
    "PassengersNumber": 2
  },
  {
    "id": "3",
    "StartAddress": "Bulevar Norte, Ciudad E",
    "EndAddress": "Calle 10, Ciudad F",
    "IntermediatePoints": 3,
    "Distance": 15.7,
    "PassengersNumber": 4
  },
  {
    "id": "4",
    "StartAddress": "Calle 20, Ciudad G",
    "EndAddress": "Avenida Sur, Ciudad H",
    "IntermediatePoints": 0,
    "Distance": 5.3,
    "PassengersNumber": 1
  },
  {
    "id": "5",
    "StartAddress": "Avenida Este, Ciudad I",
    "EndAddress": "Calle 15, Ciudad J",
    "IntermediatePoints": 2,
    "Distance": 12.1,
    "PassengersNumber": 3
  }
];



export default function Page() {

  const renderCell = (trip, columnKey) => {
    console.log(columnKey);
    switch (columnKey) {
      case "startAdrress":
        console.log(trip.StartAddress);
        return (
          <>{trip.StartAddress}</>
        );
      case "endAddress":
        return (
          <>{trip.EndAddress}</>
        );
      case "intPoint":
        return (
          <>-</>
        );
      case "distance":
        return (
          <>{trip.Distance}</>
        );
      case "passNumber":
        return (
          <>{trip.PassengersNumber}</>
        );
      case "actions":
        return (
          <Button isIconOnly color="primary"><span className="material-symbols-rounded">visibility</span></Button>
        );
    }
  }

  return (
    <div className="flex flex-col flex-1 p-4 bg-[#F2F2F2] gap-4">
      <div className="flex w-full gap-2 items-center justify-end">
        <Avatar showFallback src='https://images.unsplash.com/broken' />
        <p>Diego Martínez García</p>
      </div>
      <div className="bg-white p-4 rounded-xl">
        <div className="flex gap-2 items-center">
          <h2 className="text-2xl inline-block">Trip record</h2>
          <span className="material-symbols-rounded inline-block">history</span>
        </div>

        <Table aria-label="adiwmaldw">
          <TableHeader columns={columns}>
            {
              (column) => (
                <TableColumn key={column.uid} align="center">
                  {column.name}
                </TableColumn>
              )
            }
          </TableHeader>
          <TableBody items={trips}>
            {
              (trip) => (
                <TableRow key={trip.id}>
                  {(columnKey) => <TableCell key={columnKey}>{renderCell(trip, columnKey)}</TableCell>}
                </TableRow>
              )
            }
          </TableBody>
        </Table>
      </div>
      <div className="flex gap-2">
        <div className="w-full h-96 bg-white rounded-2xl p-4">
          <LineGraph />
        </div>
        <div className="w-full h-96 bg-white rounded-2xl p-4">
          <LineGraph />
        </div>
      </div>
    </div>
  );
}