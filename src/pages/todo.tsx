import { useState } from "react";
import Layout from "@/components/shared/Layout";
import TodoItem from "@/components/shared/TodoItem";
import Button from "@/components/ui/Button";
import Link from "next/link";
import styles from "@/styles/Todo.module.css";

interface Todo {
  id: number;
  task: string;
}

const TodoPage: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  // Add a new task
  const addTodo = () => {
    if (task.trim()) {
      const newTodo: Todo = { id: Date.now(), task };
      setTodos([newTodo, ...todos]);
      setTask("");
    }
  };

  // Submit a task by pressing the Enter key
  const submitTask = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  // Delete a task
  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Update a task
  const updateTodo = (id: number, updatedTask: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: updatedTask } : todo
      )
    );
  };

  return (
    <Layout>
      <div className={styles.container}>
        {/* Arrow to return to the home page */}
        <Link href="/" className={styles.backLink}>
          &#8592;
        </Link>
        <h4 className={styles.title}>{title}</h4>

        {/* Add a task */}
        <div className={styles.form}>
          <input
            type="text"
            value={task}
            className={styles.input}
            onChange={(e) => setTask(e.target.value)}
            onKeyPress={submitTask}
            placeholder={input}
          />
          <Button onClick={addTodo} className={styles.addButton}>
            {addButton}
          </Button>
        </div>

        {/* List of todos */}
        <ul className={styles.todoList}>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              task={todo.task}
              onDelete={removeTodo}
              onUpdate={updateTodo}
            />
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default TodoPage;

// @const starts
const title = "Todo Lista";
const input = "Ange en uppgift";
const addButton = "Lägga till";
// @const ends
