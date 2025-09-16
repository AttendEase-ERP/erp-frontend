import { SignedIn, SignedOut } from "@clerk/react-router";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import { Navigate, Route, Routes } from "react-router";
import ProtectedRoute from "./components/auth/ProtectedRoute";

export default function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/dashboard"
          element={<ProtectedRoute>welcome to attendease!</ProtectedRoute>}
        />
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
        <Route path="*" element={<Navigate to="/sign-in" replace />} />
      </Routes>
    </div>
  );
}
