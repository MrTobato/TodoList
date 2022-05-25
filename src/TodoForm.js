import { useState } from "react";
// Рисует форму с полем ввода и кнопкой добавления задач
function TodoForm({ addTask }) {
  const [state, setState] = useState("");
  //Обрабочтик изменнеия данных в поле вода, для отображения введёного значения
  const handleChange = (e) => {
    setState(e.currentTarget.value);
  };
  //Обработчик отправки формы. Создаёт блок с задачей
  const handleSubmit = (e) => {
    e.preventDefault(); //Отменяет действие браузера по умолчанию
    addTask(state); //вызов метода, переданного в props для создания задачи с введёнными пользователем данными
    setState(""); //Очищает поле воода после "отправки" данных(добавления задачи)
  };
  // Обработчик нажатия кнопки. Включает enter на клавиатуре для взаимодействия с кнопкой создания задачи "Добавить"
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={state}
          onChange={handleChange}
          placeholder="Что сделаешь?.."
          onKeyDown={handleKeyPress}
        ></input>
      </div>
      <div>
        <button className="add-btn">Добавить</button>
      </div>
    </form>
  );
}

export default TodoForm;
