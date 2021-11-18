import "./App.css";
import { useMoralis } from "react-moralis";
import GasContainer from "./containers/GasContainer";
import Particle from "react-particles-js";
import particlesConfig from "./assets/particlesConfig.json";

function App() {
  const { authenticate, isAuthenticated, logout, isAuthenticating, user } =
    useMoralis();

  const onLogin = async () => {
    const user = await authenticate();
  };

  if (!isAuthenticated) {
    return (
      <div>
        <button onClick={onLogin}>Authenticate</button>
      </div>
    );
  }

  if (isAuthenticating) {
    return (
      <div>
        <h1>Authenticating..</h1>
      </div>
    );
  }

  if (isAuthenticated) {
    return (
      <div>
        <Particle height="100vh" params={particlesConfig} />
        <div className="app-container">
          <h1>Welcome {user.get("username")}</h1>
          <button onClick={() => logout()}>logout</button>
          <GasContainer />
        </div>
      </div>
    );
  }
}
export default App;
