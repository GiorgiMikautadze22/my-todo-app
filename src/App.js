import "./App.css";
import InputForm from "./components/InputForm";
import Actions from "./Actions";
import NewItem from "./components/NewItem";

function App() {
  const { handleSubmit, handleChange, input, todos } = Actions();
  return (
    <div className="App">
      <h1>All tasks</h1>
      <InputForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        input={input}
      />
      <ul>
        {todos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
