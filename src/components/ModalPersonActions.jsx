"use client";

import React from "react";
import { Modal, ModalContent, ModalBody, Button, ModalHeader, Input, ModalFooter, Select, SelectItem, Selection, Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { useEffect, useState } from "react";

const ModalPersonActions = ({ person }) => {
  const [form, setForm] = useState({
    name: "",
    apaterno: "",
    amaterno: "",
    longitud: "",
    latitud: "",
    tags: [""]
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    console.log(form);
  }, [form]);

  return (
    React.createElement(React.Fragment, null, 
      React.createElement(Button, {
        onPress: () => {
          setIsModalOpen(!isModalOpen);
        },
        color: "secondary",
        className: "min-w-min"
      }, 
        "Agregar usuario"
      ), 

      React.createElement(Modal, { size: "3xl", isOpen: isModalOpen, onOpenChange: setIsModalOpen }, 
        React.createElement(ModalContent, null, 
          React.createElement(ModalHeader, null, 
            React.createElement("h4", null, person ? `${person.name} ${person.apaterno} ${person.amaterno}` : "Agregando persona")
          ), 
          React.createElement("form", { action: "" }, 
            React.createElement(ModalBody, { className: "max-h-96 overflow-y-scroll" }, 
              React.createElement(Input, {
                type: "text",
                label: "Nombre(s)",
                placeholder: "Escriba el nombre de la persona",
                value: form.name,
                onValueChange: (name) => setForm({ ...form, name }),
                isRequired: true
              }), 
              React.createElement("div", { className: "flex gap-3 flex-1" }, 
                React.createElement(Input, {
                  type: "text",
                  label: "Apellido Paterno",
                  placeholder: "Escribe el apellido paterno de la persona",
                  value: form.apaterno,
                  onValueChange: (apaterno) => setForm({ ...form, apaterno }),
                  isRequired: true
                }), 
                React.createElement(Input, {
                  type: "text",
                  label: "Apellido Materno",
                  placeholder: "Escribe el apellido materno de la persona",
                  value: form.amaterno,
                  onValueChange: (amaterno) => setForm({ ...form, amaterno }),
                  isRequired: true
                })
              ), 
              React.createElement("div", { className: "flex gap-3 flex-1" }, 
                React.createElement(Input, {
                  type: "text",
                  label: "Longitud",
                  placeholder: "Longitud de la ubicación de la persona",
                  value: form.longitud,
                  onValueChange: (longitud) => setForm({ ...form, longitud }),
                  isRequired: true
                }), 
                React.createElement(Input, {
                  type: "text",
                  label: "Latitud",
                  placeholder: "Latitud de la ubicación de la persona",
                  value: form.latitud,
                  onValueChange: (latitud) => setForm({ ...form, latitud }),
                  isRequired: true
                })
              ),
            ), 
            React.createElement(ModalFooter, null, 
              React.createElement(Button, { color: "secondary" }, "Guardar")
            )
          )
        )
      )
    )
  );
}

export default ModalPersonActions;
