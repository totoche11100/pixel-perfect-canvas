import { Bell, CalendarDays, ChevronDown, Search } from "lucide-react";

export function Header() {
  return (
    <header className="topbar">
      <div className="searchbox">
        <Search size={19} />
        <span>Rechercher une page, un article, un fournisseur...</span>
        <kbd>⌘ K</kbd>
      </div>
      <div className="account-actions">
        <button className="notification" type="button" aria-label="Notifications"><Bell size={21} /><i /></button>
        <span className="avatar">JD</span>
        <button className="account-button" type="button">Mon compte <ChevronDown size={17} /></button>
      </div>
      <div className="status-strip">
        <span><CalendarDays size={14} /> Mardi 15 septembre 2026</span>
        <span className="saved-dot" />
        <span>Dernière sauvegarde : 14/09/2026 à 20:08</span>
      </div>
    </header>
  );
}