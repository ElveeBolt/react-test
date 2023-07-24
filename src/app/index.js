import { Routing } from "pages";
import { withProviders } from "./providers";
import "./assets/css/index.css";


function App() {
  return (
    <Routing />
  );
}

export default withProviders(App);