"use client";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  ModalHeader,
  Input,
  ModalFooter,
  Select,
  SelectItem,
  Autocomplete,
  AutocompleteItem,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function ModalEditUser({ person }) {
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    departamento: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    console.log(form);
  }, [form]);

  return (
    <>
      <Button
        isIconOnly
        className="!bg-transparent"
        onPress={() => {
          setIsModalOpen(!isModalOpen);
        }}
      >
        <span className="material-symbols-rounded">edit</span>
      </Button>

      <Modal size="3xl" isOpen={isModalOpen} onOpenChange={setIsModalOpen}>
        <ModalContent>
          <ModalHeader>
            <h4>
              {person
                ? `${person.name} ${person.apaterno} ${person.amaterno}`
                : "Editar persona"}
            </h4>
          </ModalHeader>
          <form action="">
            <ModalBody className="max-h-96 overflow-y-scroll">
              <Input
                type="text"
                label="Nombre(s)"
                placeholder="Escriba el nombre de la persona"
                value={form.name}
                onValueChange={(name) => setForm({ ...form, name })}
                isRequired
              />
              <div className="flex gap-3 flex-1">
                <Input
                  type="text"
                  label="Empresa"
                  placeholder="Escribe el apellido paterno de la persona"
                  value={form.apaterno}
                  onValueChange={(apaterno) => setForm({ ...form, apaterno })}
                  isRequired
                />
              </div>
              <Select
                label="Género"
                placeholder="Selecciona un género"
                selectedKeys={form.genero ? [form.genero] : undefined}
                onChange={(e) => setForm({ ...form, genero: e.target.value })}
              >
                <SelectItem key="masculino" value="masculino">
                  Masculino
                </SelectItem>
                <SelectItem key="femenino" value="femenino">
                  Femenino
                </SelectItem>
              </Select>
              <div className="flex gap-3 flex-1">
                <Input
                  type="text"
                  label="RFC"
                  placeholder="Escribe el RFC de la persona"
                  value={form.RFC}
                  onValueChange={(RFC) => setForm({ ...form, RFC })}
                />
                <Input
                  type="text"
                  label="Clave de elector"
                  placeholder="Escribe la clave de elector de la persona"
                  value={form.claveElector}
                  onValueChange={(claveElector) =>
                    setForm({ ...form, claveElector })
                  }
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" className="text-white">Guardar</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
