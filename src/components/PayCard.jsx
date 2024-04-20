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
            <p>{km}</p>
            <p>{road}</p>
            <p>{trip}</p>
            <p>{date}</p>
            <p>{refund}</p>
            <p>It's recommended to read the terms and conditions</p>
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


