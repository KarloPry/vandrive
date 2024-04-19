import Image from "next/image";
import ProfileClient from "../../components/ProfileClient";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Este es el botón de Login Auth0 y el de Logout Auth0 */}
      <a href="/api/auth/login">Login</a>
      <a href="/api/auth/logout">Logout</a>
      <ProfileClient/>
    </main>
  );
}
