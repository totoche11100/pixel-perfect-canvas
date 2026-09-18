import { createFileRoute } from "@tanstack/react-router";
import { Dashboard } from "../components/dashboard/dashboard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Achat Revente — Tableau de bord" },
      { name: "description", content: "Interface de suivi Achat Revente : ventes, achats, factures et trésorerie." },
      { property: "og:title", content: "Achat Revente — Tableau de bord" },
      { property: "og:description", content: "Interface de suivi Achat Revente : ventes, achats, factures et trésorerie." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <Dashboard />;
}
