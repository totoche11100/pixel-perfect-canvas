import { CheckSquare, Link2, Mic, PackageOpen, Plus, Send, Tag } from "lucide-react";

type EntryPanelProps = { type: "sale" | "purchase" };

const saleColumns = ["N°", "Article", "Catégorie", "Lieu de vente", "Plateforme", "Étiquettes", "Prix d'achat", "Prix de vente", "Marge brute", "Cotisations sociales", "Résultat net", "%", "Règlement", "Date", "›"];
const purchaseColumns = ["N°", "Référence", "Détail du lot", "Qté", "Prix TTC", "Prix unit.", "Vente conseillée", "Fournisseur", "Règlement", "Date", "Mensualités", "1ère échéance"];

export function EntryPanel({ type }: EntryPanelProps) {
  const sale = type === "sale";
  const columns = sale ? saleColumns : purchaseColumns;
  return (
    <section className={`entry-panel ${sale ? "sale-panel" : "purchase-panel"}`}>
      <div className="panel-meta">
        {sale ? <span>Jeudi 17 septembre 2026</span> : <span />}
        {sale ? <span>Dernière sauvegarde de secours : 14/09/2026</span> : <label><span className="fake-check" /> Afficher la TVA (20%, indicatif — tu ne la payes pas actuellement).</label>}
      </div>
      <div className="panel-title">
        <h2>{sale ? <Tag size={16} /> : <CheckSquare size={16} />} ENREGISTRER {sale ? "UNE VENTE" : "UN ACHAT"}</h2>
        {sale && <span>☷ Densité</span>}
      </div>
      <div className="panel-tools">
        <div>
          <button type="button"><Plus size={14} /> Ligne</button>
          <button type="button"><span>−</span> Ligne</button>
          <button type="button">{sale ? <Link2 size={14} /> : <Plus size={14} />}{sale ? "Lignes liées" : "Ligne échéancier"}</button>
          <button type="button"><Mic size={14} /> Vocal</button>
        </div>
        {sale && <label>Cotisation sociale <button type="button">9,7 <span>⌄</span></button> %</label>}
      </div>
      <div className="table-scroll">
        <div className={`data-table ${sale ? "sale-table" : "purchase-table"}`}>
          {columns.map((column) => <div className="table-head" key={column}>{column}</div>)}
          <div className="empty-row">
            <PackageOpen size={24} />
            <span><strong>{sale ? "Aucune vente pour le moment" : "Aucun achat pour le moment"}</strong><small>{sale ? "Commencez par ajouter la première ligne et suis ton résultat net en temps réel." : "Commencez par ajouter une ligne pour suivre vos achats."}</small></span>
          </div>
        </div>
      </div>
      {sale && <div className="sale-summary"><span>• 0 ligne(s) — Résultat net total :</span><strong>0,00 €</strong><button type="button"><Send size={18} /> Télétransmettre la vente</button></div>}
    </section>
  );
}