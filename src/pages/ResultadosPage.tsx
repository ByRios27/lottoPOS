import TopBar from "../components/TopBar";

export default function ResultadosPage() {
  return (
    <div className="page-bg">
      <TopBar title="Resultados" />
      <main className="page-main">
        <h2>Página de Resultados</h2>
        <p>Aquí se mostrarán los resultados de los sorteos.</p>
      </main>
    </div>
  );
}