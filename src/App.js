import Header from "./components/header/header";
import "./components/header/header.scss";
import "./components/App.scss"
import Todos from "./components/todos/todos";
import "./components/todos/todos.scss"
function App() {
  return (
   <>
    <Header/>
    <Todos/>
   </>
  );
}

export default App;
