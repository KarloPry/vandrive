"use client";

import React from "react";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function PayCard({ plan, km, road, trip, date, refund, price, isEnglish }) {

  const router = useRouter()

  const handlePay = async () => {
    try {
      const empresa = localStorage.getItem("companyName")

      const res = await fetch("/api/empresas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: empresa
        })
      })

      const resBody = await res.json()

      const empresaId = resBody.data.id
      const email = localStorage.getItem("email")

      if (resBody.code === 200) {
        const response = await fetch(`/api/accounts`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            empresaId: empresaId
          })
        })

        const responseBody = await response.json()

        if (responseBody.code === 200) {
          router.push('/dashboard')
        }

      }
    } catch (error) {
      console.log(error);
    }
  }

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
              <p>Se recomienda leer los términos y condiciones</p>
            </div>
          </div>
          <div className="flex flex-row justify-end w-full gap-8 items-center">
            <p>{price}</p>
            <Button color="primary" className="text-white" onClick={handlePay}>
              Pagar
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}


