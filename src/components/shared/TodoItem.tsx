import { useState } from "react";
import styles from "@/styles/TodoItem.module.css";
import Button from "../ui/Button";

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
        <Button
          onClick={isEditing ? saveTask : editTask}
          className={styles.editButton}
        >
          {isEditing ? saveButton : editButton}
        </Button>
        <Button onClick={() => onDelete(id)} className={styles.deleteButton}>
          {deleteButton}
        </Button>
      </div>
    </li>
  );
};

export default TodoItem;

// @const starts
const editButton = "Redigera";
const saveButton = "Spara";
const deleteButton = "Radera";
// @const ends
