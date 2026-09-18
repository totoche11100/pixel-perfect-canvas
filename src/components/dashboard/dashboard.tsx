import {
  ChartNoAxesColumnIncreasing,
  EyeOff,
  Fullscreen,
  LayoutDashboard,
  MapPin,
  Package,
  ReceiptText,
  Settings,
  ShoppingBag,
  Tag,
  Trash2,
  WalletCards,
  Wrench,
} from "lucide-react";
import { ChartCard } from "./chart-card";
import { EntryPanel } from "./entry-panel";
import { Header } from "./header";
import { IconButton } from "./icon-button";
import { Sidebar } from "./sidebar";

const shortcuts = [
  ["Paramètres", Settings, "violet"], ["Comptabilité", ChartNoAxesColumnIncreasing, "indigo"],
  ["Outils", Wrench, "orange"], ["Carte", MapPin, "green"], ["Corbeille", Trash2, "pink"],
  ["Confidentialité", EyeOff, "blue"], ["Plein écran", Fullscreen, "blue"],
] as const;

const tabs = [
  ["Tableau de bord", LayoutDashboard], ["Ventes", Tag], ["Achats", ShoppingBag],
  ["Factures", ReceiptText], ["Stock", Package], ["Trésorerie", WalletCards], ["Agenda", ReceiptText],
] as const;

export function Dashboard() {
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) void document.documentElement.requestFullscreen?.();
    else void document.exitFullscreen?.();
  };

  return (
    <main className="dashboard-shell">
      <Sidebar />
      <div className="workspace">
        <Header />
        <div className="overview-grid">
          <section className="shortcuts glass-panel">
            {shortcuts.map(([label, Icon, tone]) => (
              <IconButton key={label} label={label} className={`tone-${tone}`} icon={<Icon size={21} />} onClick={label === "Plein écran" ? toggleFullscreen : undefined} />
            ))}
            <span className="trash-counter">12</span>
          </section>
          <ChartCard />
        </div>
        <nav className="tabbar" aria-label="Sections du tableau de bord">
          {tabs.map(([label, Icon], index) => <IconButton key={label} label={label} active={index === 1} icon={<Icon size={17} />} />)}
        </nav>
        <EntryPanel type="sale" />
        <EntryPanel type="purchase" />
      </div>
    </main>
  );
}