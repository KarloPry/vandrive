import { redirect } from "next/dist/server/api-utils";

export default function Empty() {
  redirect("/en/app/dashboard");
}