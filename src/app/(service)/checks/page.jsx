"use client"
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react'

const columns = [
  { name: "NAME", uid: "name" },
  { name: "CHECK IN", uid: "checkin" },
  { name: "CHECK OUT", uid: "checkout" }
]

const registerData = [
  {
    "id": "001",
    "fullName": "Juan Pérez",
    "checkIn": "09:00 AM",
    "checkOut": "05:00 PM"
  },
  {
    "id": "002",
    "fullName": "María García",
    "checkIn": "08:30 AM",
    "checkOut": "04:30 PM"
  },
  {
    "id": "003",
    "fullName": "Carlos Martínez",
    "checkIn": "09:15 AM",
    "checkOut": "05:15 PM"
  },
  {
    "id": "004",
    "fullName": "Ana López",
    "checkIn": "09:30 AM",
    "checkOut": "05:30 PM"
  },
  {
    "id": "005",
    "fullName": "Luis Rodríguez",
    "checkIn": "08:45 AM",
    "checkOut": "04:45 PM"
  },
  {
    "id": "006",
    "fullName": "Laura Gutiérrez",
    "checkIn": "09:45 AM",
    "checkOut": "05:45 PM"
  }
]


export default function Page() {

  const renderCell = (registerItem, columnKey) => {
    switch (columnKey) {
      case "name":
        return <>{registerItem.fullName}</>;
      case "checkin":
        return <>{registerItem.checkIn}</>;
      case "checkout":
        return <>{registerItem.checkOut}</>;
    }
  };

  return (
    <div className='flex flex-1 p-4'>
      <Table aria-label='Tabla de checks'>
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.uid} align='center' className='className="bg-[#f2b882] text-blue-950'>
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={registerData}>
          {
            (registerItem) => (
              <TableRow>
                {
                  (columnKey) => (
                    <TableCell key={columnKey}>
                      {renderCell(registerItem, columnKey)}
                    </TableCell>
                  )
                }
              </TableRow>
            )
          }
        </TableBody>
      </Table>
    </div>
  );
}