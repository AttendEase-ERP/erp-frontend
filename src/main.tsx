import React from "react";
import ReactDOM from "react-dom/client";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-react";
import { BrowserRouter, Routes, Route } from "react-router";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Add your Clerk Publishable Key to the .env file");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<p>This page is publicly accessible.</p>} />
          <Route
            path="/public"
            element={
              <SignedOut>
                <p>You are signed out.</p>
              </SignedOut>
            }
          />
          <Route
            path="/private"
            element={
              <SignedIn>
                <p>You are signed in.</p>
              </SignedIn>
            }
          />
        </Routes>
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>,
);
