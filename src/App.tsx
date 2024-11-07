import "./App.css";
import { ProjectTwenty } from "./ProjectTwenty/ProjectTwenty";
import { Provider } from "react-redux";
import { store } from "./store";
import { ProjectTwentyOne } from "./ProjectTwentyOne/ProjectTwentyOne";

function App() {
  return (
    <>
      {/* <Provider store={store}>
        <ProjectTwenty />
      </Provider> */}
      <ProjectTwentyOne />
    </>
  );
}

export default App;
