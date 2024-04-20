"use client";

import React from "react";
import { Modal, ModalContent, ModalBody, Button, ModalHeader, Input, ModalFooter, Select, SelectItem, Selection, Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { useEffect, useState } from "react";

const ModalPersonActions = ({ person }) => {
  const [form, setForm] = useState({
    name: "",
    empresa: "",
    departamento: "",
    longitud: "",
    latitud: "",
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
        color: "primary",
        className: "min-w-min text-white",
      }, 
        "Add user"
      ), 

      React.createElement(Modal, { size: "3xl", isOpen: isModalOpen, onOpenChange: setIsModalOpen }, 
        React.createElement(ModalContent, null, 
          React.createElement(ModalHeader, null, 
            React.createElement("h4", null, person ? `${person.name} ${person.apaterno} ${person.amaterno}` : "Adding person")
          ), 
          React.createElement("form", { action: "" }, 
            React.createElement(ModalBody, { className: "max-h-96 overflow-y-scroll" }, 
              React.createElement(Input, {
                type: "text",
                label: "Name(s)",
                placeholder: "Enter the person's name",
                value: form.name,
                onValueChange: (name) => setForm({ ...form, name }),
                isRequired: true
              }), 
              React.createElement("div", { className: "flex gap-3 flex-1" }, 
                React.createElement(Input, {
                  type: "text",
                  label: "Enterprise",
                  placeholder: "Write the company it belongs to",
                  value: form.apaterno,
                  onValueChange: (apaterno) => setForm({ ...form, apaterno }),
                  isRequired: true
                }), 
                React.createElement(Input, {
                  type: "text",
                  label: "Department",
                  placeholder: "Write the department to which it belongs",
                  value: form.amaterno,
                  onValueChange: (amaterno) => setForm({ ...form, amaterno }),
                  isRequired: true
                })
              ), 
              React.createElement("div", { className: "flex gap-3 flex-1" }, 
                React.createElement(Input, {
                  type: "text",
                  label: "Longitude",
                  placeholder: "Longitude of the person's location",
                  value: form.longitud,
                  onValueChange: (longitud) => setForm({ ...form, longitud }),
                  isRequired: true
                }), 
                React.createElement(Input, {
                  type: "text",
                  label: "Latitude",
                  placeholder: "Latitude of the person's location",
                  value: form.latitud,
                  onValueChange: (latitud) => setForm({ ...form, latitud }),
                  isRequired: true
                })
              ),
            ), 
            React.createElement(ModalFooter, null, 
              React.createElement(Button, { color: "primary", className:"text-white" }, "Save")
            )
          )
        )
      )
    )
  );
}

export default ModalPersonActions;
