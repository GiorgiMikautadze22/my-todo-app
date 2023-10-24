const NewItem = ({
  todo,
  handleCompletedToggle,
  handleDelete,
  image,
  category,
}) => {
  const trimmedTodo = todo.title.trim();

  if (trimmedTodo !== "") {
    return (
      <li>
        <div className="todo-text">
          <span
            onClick={() => handleCompletedToggle(todo.id)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            <input type="checkbox" />
            {trimmedTodo}
          </span>
          <div className="category">{category}</div>
        </div>
        <button onClick={() => handleDelete(todo.id)}>
          <img className="deleteImage" src={image} />
        </button>
      </li>
    );
  }
};

export default NewItem;
