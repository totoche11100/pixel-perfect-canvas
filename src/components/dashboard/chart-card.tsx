import { CalendarDays, ChevronDown } from "lucide-react";

const bars = [48, 38, 72, 66, 34, 47, 36];
const labels = ["V", "S", "D", "L", "M", "M", "J"];

export function ChartCard() {
  return (
    <section className="chart-card glass-panel">
      <div className="chart-heading">
        <h2>Ventes — 7 derniers jours</h2>
        <button type="button">3 semaines <ChevronDown size={14} /></button>
      </div>
      <div className="legend">
        <span><i className="c1" />Cette semaine</span><span><i className="c2" />Semaine -1</span>
        <span><i className="c3" />Semaine -2</span><span><i className="c4" />Semaine -3</span>
      </div>
      <div className="chart-area">
        <div className="axis-values"><span>160,00 €</span><span>80,00 €</span><span>0,00 €</span></div>
        <div className="grid-lines" />
        <div className="bars">
          {bars.map((height, index) => (
            <div className="bar-slot" key={`${labels[index]}-${index}`}>
              <div className="bar-stack" style={{ height: `${height}%` }}><i /><b /><em /></div>
              <span>{labels[index]}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="chart-total"><span>Total 71</span><strong>438,00 €</strong></div>
      <div className="chart-footer">
        <span><CalendarDays size={14} /> Samedi 12 septembre</span>
        <span><b>▼ −10,60 € (-20,0 %) sur la période</b><strong>80,00 €</strong></span>
      </div>
    </section>
  );
}