import { useState } from "react";

const Actions = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [groceries, setGroceries] = useState([]);
  const [collage, setCollage] = useState([]);
  const [payments, setPayments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos([
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        title: input,
        completed: false,
        category: activeCategory,
      },
    ]);

    setInput("");
    console.log(todos);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleCompletedToggle = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const handleDelete = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const handleClick = (category) => {
    // console.log(category);
    setActiveCategory(category);
    todos.map((todo) => {});
  };

  return {
    handleChange,
    handleSubmit,
    input,
    todos,
    handleCompletedToggle,
    handleDelete,
    handleClick,
  };
};

export default Actions;

// click -ის დროს შეიცვლება activeCategory category-ის value-თი. activeCategory იქნება todo-ში category-ს key-ს value. და შემდეგ click-ის დროს გავფილტრავთ საჭირო კატეგორიების მიხედვით
