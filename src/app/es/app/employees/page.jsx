"use client";

import ModalPersonActions from "@/components/ModalPersonActions";
import { Input, Table, TableHeader, TableBody, TableRow, TableCell, TableColumn, Button } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

const columns = [
  { name: "Nombre", id: "name" },
  { name: "Longitud", id: "longitud" },
  { name: "Latitud", id: "latitud" },
  { name: "Acciones", id: "actions" }
];

const fakeData = [
  {
    "id": "1",
    "name": "Juan",
    "apaterno": "Pérez",
    "amaterno": "González",
    "genero": "Masculino",
    "longitud": "20.60641755391972",
    "latitud": "-100.18626905743827",
    "tags": ["programación", "desarrollo web"]
  },
  {
    "id": "2",
    "name": "María",
    "apaterno": "López",
    "amaterno": "Martínez",
    "genero": "Femenino",
    "longitud": "20.60641755391972",
    "latitud": "-100.18626905743827",
    "tags": ["programación", "desarrollo web"]
  },
  {
    "id": "3",
    "name": "Carlos",
    "apaterno": "García",
    "amaterno": "Hernández",
    "genero": "Masculino",
    "longitud": "20.60641755391972",
    "latitud": "-100.18626905743827",
    "tags": ["programación", "desarrollo web"]
  },
  {
    "id": "4",
    "name": "Ana",
    "apaterno": "Martínez",
    "amaterno": "Gómez",
    "genero": "Femenino",
    "longitud": "20.60641755391972",
    "latitud": "-100.18626905743827",
    "tags": ["programación", "desarrollo web"]
  },
  {
    "id": "5",
    "name": "Jorge",
    "apaterno": "Sánchez",
    "amaterno": "Rodríguez",
    "genero": "Masculino",
    "longitud": "20.60641755391972",
    "latitud": "-100.18626905743827",
    "tags": ["programación", "desarrollo web"]
  },
  {
    "id": "6",
    "name": "Laura",
    "apaterno": "Gómez",
    "amaterno": "Díaz",
    "genero": "Femenino",
    "longitud": "20.60641755391972",
    "latitud": "-100.18626905743827",
    "tags": ["programación", "desarrollo web"]
  }
];

const renderCell = (columnKey, person) => {
  if (columnKey == "name") return React.createElement(React.Fragment, null, person.name);
  if (columnKey == "longitud") return React.createElement(React.Fragment, null, person.longitud);
  if (columnKey == "latitud") return React.createElement(React.Fragment, null, person.latitud);
  if (columnKey == "actions") return (
    React.createElement(Button, { size: "sm", variant: "light", color: "default", isIconOnly: true },
      React.createElement("span", { className: "material-symbols-outlined icon-sm" }, "edit"))
  );
};

export default function Page() {
  const [peopleFiltered, setPeopleFiltered] = useState(fakeData);
  const [people, setPeople] = useState(fakeData);
  const [personSearched, setPersonSearched] = useState("");

  return (
    React.createElement("div", { className: "flex flex-col flex-1 p-8" },
      React.createElement("div", { className: "flex gap-4 my-4" },
        React.createElement(Input, {
          type: "text",
          placeholder: "Busca una persona",
          value: personSearched,
          onValueChange: setPersonSearched,
          startContent: React.createElement("span", { className: "material-symbols-outlined icon-sm" }, "search")
        }),
        React.createElement(ModalPersonActions, null)
      ),
      React.createElement(Table, { "aria-label": "Directorio de personas" },
        React.createElement(TableHeader, { columns: columns },
          columns.map(column =>
            React.createElement(TableColumn, { key: column.id, align: "center" }, column.name)
          )
        ),
        React.createElement(TableBody, { items: peopleFiltered, emptyContent: "Ningún resultado coincide" }, (item) => (
          React.createElement(TableRow, { key: item.id },
            (columnKey) => React.createElement(TableCell, null, renderCell(columnKey, item))
          )
        ))
      )
    )
  );
}

