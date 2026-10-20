import { useState } from "react";
import CDO from "./components/CDO";
import DC from "./components/DC";
import FirstPage from "./pages/FirstPage";

type SelectedCity = "davao" | "cdo" | null;

const App = () => {
  const [selectedCity, setSelectedCity] = useState<SelectedCity>(null);

  if (selectedCity === "davao") {
    return <DC onBack={() => setSelectedCity(null)} />;
  }
  if (selectedCity === "cdo") {
    return <CDO onBack={() => setSelectedCity(null)} />;
  }

  return (
    <FirstPage
      onDavaoClick={() => setSelectedCity("davao")}
      onCDOClick={() => setSelectedCity("cdo")}
    />
  );
};

export default App;
