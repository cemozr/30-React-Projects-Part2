import "./App.css";
import { ProjectTwenty } from "./ProjectTwenty/ProjectTwenty";
import { Provider } from "react-redux";
import { store } from "./store";
import { ProjectTwentyOne } from "./ProjectTwentyOne/ProjectTwentyOne";
import { AuthContextProvider } from "./ProjectTwentyOne/AuthContext";
import ProjectTwentyTwo from "./ProjectTwentyTwo/ProjectTwentyTwo";
import { DragContextProvider } from "./ProjectTwentyTwo/dragContext";
import ProjectTwentyThree from "./ProjectTwentyThree/ProjectTwentyThree";
import ProjectTwentyFour from "./ProjectTwentyFour/ProjectTwentyFour";
import ProjectTwentyFive from "./ProjectTwentyFive/ProjectTwentyFive";
import ProjectTwentySix from "./ProjectTwentySix/ProjectTwentySix";

function App() {
  return (
    <>
      {/* <Provider store={store}>
        <ProjectTwenty />
      </Provider> */}
      {/* <AuthContextProvider>
        <ProjectTwentyOne />
      </AuthContextProvider> */}
      {/* <DragContextProvider>
        <ProjectTwentyTwo />
      </DragContextProvider> */}
      {/* <ProjectTwentyThree /> */}
      {/* <ProjectTwentyFour /> */}
      {/* <ProjectTwentyFive /> */}
      <Provider store={store}>
        <ProjectTwentySix />
      </Provider>
    </>
  );
}

export default App;
