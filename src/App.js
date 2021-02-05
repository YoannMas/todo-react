import "./App.scss";
import Todo from "./Todo";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash);

function App() {
  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;
