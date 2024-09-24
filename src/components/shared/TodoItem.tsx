import { useState } from "react";
import styles from "@/styles/TodoItem.module.css";

interface TodoItemProps {
  id: number;
  task: string;
  onDelete: (id: number) => void;
  onUpdate: (id: number, updatedTask: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  task,
  onDelete,
  onUpdate,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const editTask = () => {
    setIsEditing(!isEditing);
  };

  const saveTask = () => {
    onUpdate(id, editedTask);
    setIsEditing(false);
  };

  return (
    <li className={styles.todoItem}>
      {isEditing ? (
        <input
          type="text"
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
          className={styles.editInput}
        />
      ) : (
        <span>{task}</span>
      )}

      <div className={styles.buttons}>
        <button
          onClick={isEditing ? saveTask : editTask}
          className={styles.editButton}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
        <button onClick={() => onDelete(id)} className={styles.deleteButton}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
