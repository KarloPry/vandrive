"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProfileClient() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  const DefineUser = async (email, user) => {
    try {
      
      const res = await fetch(`/api/accounts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          email: email,
          user: user,
        },
      });

      const resBody = await res.json();

      if (resBody.code === 200) {
        // TODO: user exists, send to dashboard
        // store entreprice id in localstorage
      }

      if (resBody.code === 201) {
        // TODO: user exists but has no enterprice, send to enterprice registration
      }

      if (resBody.code === 202) {
        // TODO: user created, send to enterprice registration
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
