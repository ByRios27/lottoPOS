import { Link } from "react-router-dom";

// --- Iconos SVG como componentes de React ---
const VentasIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3v18h18M18.36 9.64l-4.24 4.24-3.54-3.54-4.24 4.24" /></svg>
);
const SorteosIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5H9a2 2 0 00-2 2v10a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l2.5 2.5 5-5" /></svg>
);
const VerificacionIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);
const ResultadosIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 012-2h2a2 2 0 012 2v6m-6-13h.01M18 6h.01M6 6h.01M12 6h.01M12 19h.01" /></svg>
);
const FinanzasIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>
);
const AjustesIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);

const menuItems = [
  { label: "Ventas", icon: <VentasIcon />, path: "/ventas" },
  { label: "Sorteos", icon: <SorteosIcon />, path: "/sorteos" },
  { label: "Verificación", icon: <VerificacionIcon />, path: "/verificacion" },
  { label: "Resultados", icon: <ResultadosIcon />, path: "/resultados" },
  { label: "Finanzas", icon: <FinanzasIcon />, path: "/finanzas" },
  { label: "Ajustes", icon: <AjustesIcon />, path: "/ajustes" },
];

export default function IconMenuGrid() {
  return (
    <div className="icon-menu-grid">
      {menuItems.map((item) => (
        <Link to={item.path} key={item.label} className="menu-item-card">
          {item.icon}
          <span>{item.label}</span>
        </Link>
      ))}
    </div>
  );
}
