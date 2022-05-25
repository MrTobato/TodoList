import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function App() {
  const [todos, setTodos] = useState([]); //Массив
  //Метод добавления состояний при введении пользователем данных
  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9), //id в будущем используется везде. Случайное число до 36 символов
        task: userInput,
        complete: false, //Выполнение задачи, для изменения стиля. (зачёркивание)
      };
      setTodos([...todos, newItem]);
    }
  };
  //Метод удаления задачи.
  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]); //Осуществляет поиск массиву состояния, конкретного эл-та переданного пропсом, todo.id и возвращает пустой массив.
  };
  //Изменяет состояние выполнения complete.
  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      ),
    ]);
  };

  return (
    <div className="App">
      <div>
        <h1>Количество задач: {todos.length}</h1>
      </div>
      <TodoForm addTask={addTask} />
      {todos.map((todo) => {
        //Создаёт новый массив(задачу) с помощью перебора имеющихся объектов с состояниями в массиве состояний.
        return (
          <Todo
            key={todo.id}
            todo={todo}
            toggleTask={handleToggle}
            removeTask={removeTask}
          />
        );
      })}
    </div>
  );
}

export default App;
