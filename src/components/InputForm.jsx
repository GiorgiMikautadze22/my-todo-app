function InputForm({ handleSubmit, handleChange, input }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your todo"
        value={input}
        onChange={handleChange}
        className="todoInput"
      />
    </form>
  );
}

export default InputForm;
