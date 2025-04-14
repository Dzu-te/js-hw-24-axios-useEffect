import React, { useEffect, useState } from "react";
import axios from "axios";

const UrlPlaceholder: React.FC = () => {
  interface Todo {
    id: number;
    title: string;
    completed: boolean;
  }
  
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
        setTodos(response.data);
      } catch (err) {
        setError("Failed to fetch todos");
        console.error(err);
      }
    };

    fetchTodos();
  }, []);

  return (
    <div>
      <h1>Todos</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} {todo.completed ? "(Completed)" : "(Pending)"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UrlPlaceholder;