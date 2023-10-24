import "./App.css";
import InputForm from "./components/InputForm";
import Actions from "./Actions";
import NewItem from "./components/NewItem";
import Categories from "./components/Categories";
import image from "./images/Vector (1).svg";

function App() {
  const {
    handleSubmit,
    handleChange,
    input,
    todos,
    handleCompletedToggle,
    handleDelete,
    handleClick,
  } = Actions();

  const categoryArray = ["All", "Groceries", "Collage", "Payment"];

  return (
    <div className="App">
      <div className="categories">
        {categoryArray.map((el) => {
          return (
            <Categories key={el} category={el} handleClick={handleClick} />
          );
        })}
      </div>
      <div className="todoList">
        <h1>All Tasks</h1>
        <InputForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          input={input}
        />
        <ul>
          {todos.map((todo) => (
            <NewItem
              key={todo.id}
              todo={todo}
              handleCompletedToggle={handleCompletedToggle}
              handleDelete={handleDelete}
              image={image}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
