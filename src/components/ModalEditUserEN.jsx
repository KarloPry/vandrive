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

export default function ModalEditUserEN({ person }) {
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
                : "Edit person"}
            </h4>
          </ModalHeader>
          <form action="">
            <ModalBody className="max-h-96 overflow-y-scroll">
              <Input
                type="text"
                label="Name(s)"
                placeholder="Type the person's name"
                value={form.name}
                onValueChange={(name) => setForm({ ...form, name })}
                isRequired
              />
              <div className="flex gap-3 flex-1">
                <Input
                  type="text"
                  label="Enterprise"
                  placeholder="Type the person's last name"
                  value={form.apaterno}
                  onValueChange={(apaterno) => setForm({ ...form, apaterno })}
                  isRequired
                />
              </div>
              <Select
                label="Gender"
                placeholder="Select a gender"
                selectedKeys={form.genero ? [form.genero] : undefined}
                onChange={(e) => setForm({ ...form, genero: e.target.value })}
              >
                <SelectItem key="masculino" value="masculino">
                    Male
                </SelectItem>
                <SelectItem key="femenino" value="femenino">
                    Female
                </SelectItem>
              </Select>
              <div className="flex gap-3 flex-1">
                <Input
                  type="text"
                  label="RFC"
                  placeholder="Write the RFC of the person"
                  value={form.RFC}
                  onValueChange={(RFC) => setForm({ ...form, RFC })}
                />
                <Input
                  type="text"
                  label="Voter ID"
                  placeholder="Enter the person's voter ID number"
                  value={form.claveElector}
                  onValueChange={(claveElector) =>
                    setForm({ ...form, claveElector })
                  }
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" className="text-white">Save</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
