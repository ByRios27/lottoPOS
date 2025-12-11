import TopBar from "../components/TopBar";
import IconMenuGrid from "../components/IconMenuGrid";

const BUSINESS_NAME = "Hoy Gano Yo";
const DEFAULT_LOGO = "/logo-default.png";

export default function DashboardPage() {
  return (
    <div className="app-bg">
      <TopBar />
      <main className="dashboard-main">
        <div className="dashboard-center">
          <div className="dashboard-logo-circle">
            <img
              src={DEFAULT_LOGO}
              alt={BUSINESS_NAME}
              className="dashboard-logo"
            />
          </div>
          <h1 className="dashboard-title">{BUSINESS_NAME}</h1>
          <p className="dashboard-subtitle">
            Panel principal · ventas, sorteos y control
          </p>
        </div>

        <IconMenuGrid />
      </main>
    </div>
  );
}
