function InputForm({ handleSubmit, handleChange, addTodo, input }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your todo"
        value={input}
        onChange={handleChange}
      />
      <button type="submit" onClick={addTodo}>
        Add
      </button>
    </form>
  );
}

export default InputForm;
