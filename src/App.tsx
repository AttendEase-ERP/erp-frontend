import { SignedIn, SignedOut } from "@clerk/react-router";
import SignIn from "./pages/auth/SignIn";

const App = () => {
  return (
    <div>
      <SignedIn>
        <p>You're signed in</p>
      </SignedIn>
      <SignedOut>
        <SignIn />
      </SignedOut>
    </div>
  );
};

export default App;
