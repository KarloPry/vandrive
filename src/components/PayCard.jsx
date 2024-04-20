"use client";

import React from "react";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";

export default function PayCard({ plan, km, road, trip, date, refund, price, isEnglish }) {
  return (
    <div className="flex flex-col justify-start w-full">
      <Card className="w-full p-8">
        <CardHeader><h1 className="text-3xl">Plan {plan}</h1></CardHeader>
        <CardBody>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-1">
              <span className="material-symbols-rounded">done</span>
              <p>{km}</p>
            </div>
            <div className="flex flex-row gap-1">
              <span className="material-symbols-rounded">done</span>
              <p>{road}</p>
            </div>
            <div className="flex flex-row gap-1">
              <span className="material-symbols-rounded">done</span>
              <p>{trip}</p>
            </div>
            <div className="flex flex-row gap-1">
              <span className="material-symbols-rounded">done</span>
              <p>{date}</p>
            </div>
            <div className="flex flex-row gap-1">
              <span className="material-symbols-rounded">done</span>
              <p>{refund}</p>
            </div>
            <div className="flex flex-row gap-1">
              <span className="material-symbols-rounded">done</span>
              <p>Its recommended to read the terms and conditions</p>
            </div>
          </div>
          <div className="flex flex-row justify-end w-full gap-8 items-center">
            <p>{price}</p>
            <Button color="primary" className="text-white">
              {isEnglish ? "Pay" : "Pagar"}
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}


