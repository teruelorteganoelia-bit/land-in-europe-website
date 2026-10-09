import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ofertas de ventas B2B en Valencia | Land in Europe",
  description: "Dos posiciones comerciales en una empresa tecnológica cotizada con sede en Valencia. Proceso gestionado por Land in Europe Coaching.",
};

export default function RolesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
