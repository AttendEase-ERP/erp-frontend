import { Navigate, Route, Routes } from "react-router";
import { SignedIn, SignedOut } from "@clerk/react-router";

import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound/NotFound";
import ProtectedRoute from "./components/common/ProtectedRoute";
import SettingsPage from "./pages/Settings";

export default function App() {
  return (
    <Routes>
      <Route
        path="/sign-in"
        element={
          <>
            <SignedOut>
              <SignIn />
            </SignedOut>
            <SignedIn>
              <Navigate to="/dashboard" replace />
            </SignedIn>
          </>
        }
      />

      <Route
        path="/sign-up"
        element={
          <>
            <SignedOut>
              <SignUp />
            </SignedOut>
            <SignedIn>
              <Navigate to="/dashboard" replace />
            </SignedIn>
          </>
        }
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <SettingsPage />
          </ProtectedRoute>
        }
      />

      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      <Route
        path="*"
        element={
          <>
            <SignedIn>
              <NotFound />
            </SignedIn>
            <SignedOut>
              <Navigate to="/sign-in" replace />
            </SignedOut>
          </>
        }
      />
    </Routes>
  );
}
