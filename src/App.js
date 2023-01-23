import Header from "./components/header/header";
import "./components/header/header.scss";
import "./components/App.scss"
import Todo from "./components/todos/todos";
import "./components/todos/todos.scss"
function App() {
  return (
   <>
    <Header/>
    <Todo/>
   </>
  );
}

export default App;
