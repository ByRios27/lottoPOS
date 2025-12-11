import { ReactNode, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";
import { auth } from "../firebase";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [user, setUser] = useState<User | null | undefined>(undefined);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser ?? null);
    });

    return () => unsubscribe();
  }, []);

  if (user === undefined) {
    return (
      <div className="loading-screen">
        Cargando...
      </div>
    );
  }

  if (user === null) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
