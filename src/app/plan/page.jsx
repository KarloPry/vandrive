"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Checkbox, Input } from "@nextui-org/react";
import CardPricing from "@/components/CardPricing";
import LogoLetras from "../../../public/logo-letras.svg";
import Pagos from "../../../public/Pago.svg";
import PayCard from "@/components/PayCard";

const cardsData = [
  {
    id: 1,
    level: "On Demand",
    price: "Por viaje",
    km: "100 km/día",
    road: "Viaje redondo",
    trip: "1 destino por viaje",
  },
  {
    id: 2,
    level: "Gold",
    price: "$999",
    km: "200 km/día",
    road: "Viaje redondo",
    trip: "2 destinos por viaje",
  },
  {
    id: 3,
    level: "Platinum",
    price: "$1,999",
    km: "400 km/día",
    road: "Viaje redondo",
    trip: "4 destinos por viaje",
  }
];

const payData = [
  {
    date: 'El plan se renovará el 24 de Abril de 2024',
    refund: 'No reembolsable',
  }
]

export default function Page() {
  const [activeCard, setActiveCard] = useState(1);
  const [companyName, setcompanyName] = useState("")
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);
  const activeCardData = cardsData.find((card) => card.id === activeCard);

  const handleCheckboxClick = (index) => {
    setSelectedCheckbox(selectedCheckbox === index ? null : index);
  };

  const isEnglish = true; // Set the language manually here

  return (
    <>
      <div className="flex flex-col gap-8 w-full h-full justify-between items-center">
        <div className="flex flex-col gap-8 items-center">
          <Image
            src={LogoLetras}
            width={150}
            height={200}
            alt="Picture of the author"
            className="rounded-full"
          />
          <h2 className="text-3xl">Adquiere el servicio</h2>
          <div className="flex flex-row gap-4">
            <Checkbox
              defaultSelected={selectedCheckbox === 0}
              color="primary"
              className="text-white"
              onClick={() => handleCheckboxClick(0)}
            >
              Mensual
            </Checkbox>
            <Checkbox
              defaultSelected={selectedCheckbox === 1}
              color="primary"
              className="text-white"
              onClick={() => handleCheckboxClick(1)}
            >
              Anual
            </Checkbox>
          </div>
        </div>
        <div className="flex flex-row gap-8 items-center">
          {cardsData.map((card, index) => (
            <CardPricing
              id={card.id}
              key={card.id}
              title={card.title}
              price={card.price}
              km={card.km}
              road={card.road}
              trip={card.trip}
              isActive={activeCard}
              setActive={setActiveCard}
            />
          ))}
        </div>
        <div className="flex flex-col w-3/4">
          <div className="flex flex-col gap-4 w-full items-center py-4">
            <h1 className="text-4xl">Información de la compañía</h1>
            <Input
              isRequired
              type="name"
              label="Company Name"
              labelPlacement="outside"
              defaultValue=""
              className="w-full"
              onChange={(e) => {
                setcompanyName(e.target.value)
                localStorage.setItem("companyName", e.target.value)
              }}
            />
          </div>
          <div className="flex flex-col justify-start gap-8 w-full">
            <h1 className="text-4xl">Métodos de pago</h1>
            <Image
              src={Pagos}
              width={300}
              height={300}
              alt="Picture of the author"
            />
            <Input
              isRequired
              type="name"
              label="Card Owner's Name"
              labelPlacement="outside"
              className="w-full text-2xl"
            />
            <div className="flex flex-row gap-4 w-full">
              <Input
                isRequired
                type="number"
                label="Card Number"
                labelPlacement="outside"
                className="1/8 text-2xl"
              />
              <div className="flex flex-row gap-8 w-full justify-end">
                <Input
                  isRequired
                  type="date"
                  label="Expiration Date"
                  labelPlacement="outside-left"
                  className=" text-2xl"
                />
                <Input
                  isRequired
                  type="number"
                  label="CVV"
                  labelPlacement="outside-left"
                  className=" text-2xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/4">
          <PayCard
            plan={activeCardData.level}
            km={activeCardData.km}
            road={activeCardData.road}
            trip={activeCardData.trip}
            price={activeCardData.price}
            date={payData[0].date}
            refund={payData[0].refund}
            isEnglish={isEnglish}
          />
        </div>
      </div>
    </>
  );
}

