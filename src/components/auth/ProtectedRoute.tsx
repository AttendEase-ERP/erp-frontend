import { SignedIn, SignedOut } from "@clerk/react-router";
import { Navigate } from "react-router";

export default function ProtectedRoute({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <>
      <SignedIn>
        <div>{children}</div>
      </SignedIn>
      <SignedOut>
        <Navigate to="/sign-in" replace />
      </SignedOut>
    </>
  );
}
