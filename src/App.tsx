import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import VentasPage from "./pages/VentasPage";
import SorteosPage from "./pages/SorteosPage";
import VerificacionPage from "./pages/VerificacionPage";
import ResultadosPage from "./pages/ResultadosPage";
import FinanzasPage from "./pages/FinanzasPage";
import AjustesNegocioPage from "./pages/AjustesNegocioPage";
import ConfiguracionAppPage from "./pages/ConfiguracionAppPage";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* Ruta pública */}
      <Route path="/login" element={<LoginPage />} />

      {/* Rutas protegidas */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/ventas"
        element={
          <ProtectedRoute>
            <VentasPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/sorteos"
        element={
          <ProtectedRoute>
            <SorteosPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/verificacion"
        element={
          <ProtectedRoute>
            <VerificacionPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/resultados"
        element={
          <ProtectedRoute>
            <ResultadosPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/finanzas"
        element={
          <ProtectedRoute>
            <FinanzasPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/ajustes-negocio"
        element={
          <ProtectedRoute>
            <AjustesNegocioPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/configuracion-app"
        element={
          <ProtectedRoute>
            <ConfiguracionAppPage />
          </ProtectedRoute>
        }
      />

      {/* fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;