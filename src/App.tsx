import { SignedIn, SignedOut } from "@clerk/react-router";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import { Route, Routes } from "react-router";

const App = () => {
  return (
    <div>
      <SignedIn>
        <Routes>
          <Route
            path="/dashboard"
            element={<div>Welcome to AttendEase!</div>}
          />
        </Routes>
      </SignedIn>
      <SignedOut>
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </SignedOut>
    </div>
  );
};

export default App;
