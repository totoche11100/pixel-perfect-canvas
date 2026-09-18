import {
  Box,
  CalendarDays,
  ChartNoAxesColumnIncreasing,
  EyeOff,
  FileText,
  Fullscreen,
  LogOut,
  MapPin,
  Menu,
  PackageOpen,
  ReceiptText,
  Settings,
  ShoppingCart,
  Trash2,
  WalletCards,
  Wrench,
  X,
} from "lucide-react";
import { useState } from "react";

const primaryItems = [
  ["Tableau de bord", ChartNoAxesColumnIncreasing],
  ["Ventes", ShoppingCart],
  ["Achats", ShoppingCart],
  ["Factures", FileText],
  ["Stock", Box],
  ["Trésorerie", WalletCards],
  ["Agenda", CalendarDays],
] as const;

const secondaryItems = [
  ["Paramètres", Settings],
  ["Comptabilité", ReceiptText],
  ["Outils", Wrench],
  ["Carte", MapPin],
  ["Corbeille", Trash2],
  ["Confidentialité", EyeOff],
  ["Plein écran", Fullscreen],
] as const;

export function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="mobile-menu" type="button" aria-label="Ouvrir le menu" onClick={() => setOpen(true)}>
        <Menu size={20} />
      </button>
      {open && <button className="sidebar-scrim" type="button" aria-label="Fermer le menu" onClick={() => setOpen(false)} />}
      <aside className={`sidebar ${open ? "is-open" : ""}`}>
        <button className="sidebar-close" type="button" aria-label="Fermer le menu" onClick={() => setOpen(false)}>
          <X size={18} />
        </button>
        <div className="brand">
          <div className="brand-cart"><ShoppingCart /></div>
          <div><strong>Achat Revente</strong><small>Simplifier. Suivre. Performer.</small></div>
        </div>
        <nav className="main-nav" aria-label="Navigation principale">
          {primaryItems.map(([label, Icon], index) => (
            <button className={`nav-item ${index === 0 ? "active" : ""}`} type="button" key={label}>
              <Icon size={19} strokeWidth={2.2} /><span>{label}</span>
            </button>
          ))}
        </nav>
        <div className="nav-separator" />
        <nav className="secondary-nav" aria-label="Navigation secondaire">
          {secondaryItems.map(([label, Icon]) => (
            <button className="nav-item compact" type="button" key={label}>
              <Icon size={18} strokeWidth={2.1} /><span>{label}</span>
              {label === "Corbeille" && <b className="count-badge">13</b>}
            </button>
          ))}
        </nav>
        <div className="sidebar-user">
          <div className="account-row">
            <span className="avatar small">JD</span>
            <span><strong>Mon compte</strong><small>Utilisateur</small></span>
          </div>
          <button className="logout" type="button"><LogOut size={18} /> Déconnexion</button>
        </div>
      </aside>
    </>
  );
}