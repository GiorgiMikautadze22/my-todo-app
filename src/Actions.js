import { useState } from "react";

const Actions = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos([...todos, input]);

    setInput("");
    console.log(todos);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return {
    handleChange,
    handleSubmit,
    input,
    todos,
  };
};

export default Actions;
