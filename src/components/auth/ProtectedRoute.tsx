import { Button } from "@chakra-ui/react";
import { SignedIn, SignedOut, SignOutButton } from "@clerk/clerk-react";
import { Navigate } from "react-router";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SignedIn>
        <div>
          {children}
          <div style={{ marginTop: "1rem" }}>
            <SignOutButton redirectUrl="/sign-in">
              <Button>Sign out</Button>
            </SignOutButton>
          </div>
        </div>
      </SignedIn>

      <SignedOut>
        <Navigate to="/sign-in" replace />
      </SignedOut>
    </>
  );
}
