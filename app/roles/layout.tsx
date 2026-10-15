import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roles | Land in Europe",
  description: "Roles abiertos gestionados por Noelia Teruel Ortega, reclutadora independiente especializada en talento internacional en Europa.",
};

export default function RolesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
