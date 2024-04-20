"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProfileClient() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  const DefineUser = async (email, user) => {
    try {

      console.log(email);
      console.log(user)
      
      const res = await fetch(`/api/accounts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          name: user,
        }),
      });

      const resBody = await res.json();

      console.log(resBody);

      if (resBody.code === 200) {
        localStorage.setItem("empresaId", resBody.data.empresaId)
        localStorage.setItem("email", resBody.data.email)
        localStorage.setItem("name", resBody.data.name)
        router.push("/en/app/dashboard")
      }

      if (resBody.code === 201) {
        // TODO: user exists but has no enterprice, send to enterprice registration
        localStorage.setItem("email", resBody.data.email)
        localStorage.setItem("name", resBody.data.name)
        router.push('/en/GetService')

      }

      if (resBody.code === 202) {
        // TODO: user created, send to enterprice registration
        localStorage.setItem("email", resBody.data.email)
        localStorage.setItem("name", resBody.data.name)
        router.push('/en/GetService')
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user !== undefined) {
      if (!user.email_verified) {
        // TODO: Send user to verify email or show popup to verify email

        console.log(user);
      }

      DefineUser(user.email, user.nickname);
    }
  }, [user]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
}
