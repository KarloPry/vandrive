"use client";
import { Avatar, Button } from "@nextui-org/react";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { LineGraph } from "@/components/LineGraph";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const columns = [
  { name: "START ADDRESS", uid: "startAdrress" },
  { name: "END ADDRESS", uid: "endAddress" },
  { name: "INTERMEDIATE POINTS", uid: "intPoint" },
  { name: "DISTANCE", uid: "distance" },
  { name: "PASSENGERS NUMBER", uid: "passNumber" },
  { name: "ACTIONS", uid: "actions" },
];

const trips = [
  {
    id: "1",
    StartAddress: "Calle 1, Ciudad A",
    EndAddress: "Avenida Principal, Ciudad B",
    IntermediatePoints: 2,
    Distance: 10.5,
    PassengersNumber: 3,
  },
  {
    id: "2",
    StartAddress: "Avenida Central, Ciudad C",
    EndAddress: "Calle 5, Ciudad D",
    IntermediatePoints: 1,
    Distance: 8.2,
    PassengersNumber: 2,
  },
  {
    id: "3",
    StartAddress: "Bulevar Norte, Ciudad E",
    EndAddress: "Calle 10, Ciudad F",
    IntermediatePoints: 3,
    Distance: 15.7,
    PassengersNumber: 4,
  },
  {
    id: "4",
    StartAddress: "Calle 20, Ciudad G",
    EndAddress: "Avenida Sur, Ciudad H",
    IntermediatePoints: 0,
    Distance: 5.3,
    PassengersNumber: 1,
  },
  {
    id: "5",
    StartAddress: "Avenida Este, Ciudad I",
    EndAddress: "Calle 15, Ciudad J",
    IntermediatePoints: 2,
    Distance: 12.1,
    PassengersNumber: 3,
  },
];

export default function Page() {
  // const [trips, setTrips] = useState();
  const router = useRouter();
  useEffect(() => {
    //
    // setTrips(respuesta de la API)
  }, []);

  const renderCell = (trip, columnKey) => {
    switch (columnKey) {
      case "startAdrress":
        return <>{trip.StartAddress}</>;
      case "endAddress":
        return <>{trip.EndAddress}</>;
      case "intPoint":
        return <>-</>;
      case "distance":
        return <>{trip.Distance}</>;
      case "passNumber":
        return <>{trip.PassengersNumber}</>;
      case "actions":
        return (
          <Button isIconOnly color="primary">
            <span className="material-symbols-rounded !text-white">
              visibility
            </span>
          </Button>
        );
    }
  };

  return (
    <div className="flex flex-col flex-1 p-4 bg-[#F2F2F2] gap-4 overflow-y-auto overflow-x-hidden">
      <div className="bg-white p-4 rounded-xl">
        <div className="flex flex-row justify-between mb-4">
          <div className="flex gap-2 items-center">
            <h2 className="text-2xl inline-block">Trip record</h2>
            <span className="material-symbols-rounded inline-block">
              history
            </span>
          </div>
          <Button
            onPress={() => router.push("/en/app/map")}
            color="primary"
            className="text-white"
            startContent={
              <span className="material-symbols-rounded !text-white">add</span>
            }
          >
            Add trip
          </Button>
        </div>
        <Table aria-label="adiwmaldw" align="center">
          <TableHeader columns={columns} className="">
            {(column) => (
              <TableColumn key={column.uid} align="center" className="bg-[#f2b882] text-blue-950">
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={trips}>
            {(trip) => (
              <TableRow key={trip.id} align="center">
                {(columnKey) => (
                  <TableCell key={columnKey}>
                    {renderCell(trip, columnKey)}
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
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
            chartTitle={"Km/Trip"}
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
            chartTitle={"Passengers/Trip"}
            color={"#416C95"}
            bgColor={"#16436D"}
          />
        </div>
      </div>
    </div>
  );
}
