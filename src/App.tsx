import { Navigate, Route, Routes } from "react-router";
import { SignedIn, SignedOut } from "@clerk/react-router";

import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import DashboardPage from "./pages/Dashboard";
import NotFound from "./pages/NotFound/NotFound";
import ProtectedRoute from "./components/common/ProtectedRoute";
import SettingsPage from "./pages/Settings";
import { DashboardLayout } from "./pages/Dashboard/DashboardLayout";
import AttendanceSheet from "./pages/teacher/AttendanceSheet";

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
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route
          index
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path=":section"
          element={
            <ProtectedRoute>
              <AttendanceSheet />
            </ProtectedRoute>
          }
        />
      </Route>

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
