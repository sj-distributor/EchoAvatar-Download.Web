import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { InitialAppSetting } from "./appsetting";
import { Router } from "./routes";

function App() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    InitialAppSetting().then(() => setIsLoaded(true));
  }, []);

  return isLoaded ? (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  ) : (
    <></>
  );
}

export default App;
