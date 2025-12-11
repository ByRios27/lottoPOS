// EJEMPLO de estructura que quiero, puedes ajustarla pero mantén la idea
import { ReactNode } from "react";
import TopBar from "./TopBar";

interface PageShellProps {
  title: string;          // título principal de la página (ej: "Ventas")
  subtitle?: string;      // subtítulo opcional (ej: "Registra las ventas del día")
  children: ReactNode;    // contenido de la página
}

export default function PageShell({ title, subtitle, children }: PageShellProps) {
  return (
    <div className="app-page-root">
      <TopBar />

      <main className="app-page-main">
        <section className="app-page-card">
          <header className="app-page-header">
            <h1 className="app-page-title">{title}</h1>
            {subtitle && <p className="app-page-subtitle">{subtitle}</p>}
          </header>

          <div className="app-page-content">
            {children}
          </div>
        </section>
      </main>
    </div>
  );
}