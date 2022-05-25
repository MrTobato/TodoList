//Рендер элемента с задачей.
function Todo({ todo, toggleTask, removeTask }) {
  //Деструктурирующее присваивание, можно через props по классике
  return (
    <div key={todo.id} className="item-todo">
      <div
        className="strikeOut"
        onClick={() => {
          toggleTask(todo.id);
        }}
      >
        {todo.task}
      </div>
      {/* Кнопка в виде буквы Х. Быстро, красиво и практично. Good practice  */}
      <div className="btn-del" onClick={() => removeTask(todo.id)}>
        X
      </div>
    </div>
  );
}

export default Todo;
