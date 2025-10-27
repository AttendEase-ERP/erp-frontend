import { Navigate, Route, Routes } from "react-router";
import { SignedIn, SignedOut } from "@clerk/react-router";

import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Dashboard from "./components/Dashboard/teacher/Dashboard";
import NotFound from "./pages/NotFound/NotFound";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

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
    </div>
  );
}
