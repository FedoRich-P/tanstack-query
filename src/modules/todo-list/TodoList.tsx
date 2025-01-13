import {useQuery} from "react-query";
import styles from './TodoList.module.css'
import {todoListApi} from "../model/api";
import {useState} from "react";

type Props = {};
export const TodoList = (props: Props) => {
    const [page, setPage] = useState(1)

    const {data, error, isLoading} = useQuery({
        queryKey: ["tasks, list"],
        queryFn: todoListApi.getLogoList
    })

    return (
        <div className={styles.todoList}>
            <h1>Todo List</h1>
            {data?.map((todo) => (
                <div key={todo.id}
                     className={styles.todoItem}>
                    <input type="checkbox"
                           checked={todo.done}
                           className={styles.checkbox}
                           readOnly
                    />
                    <span className={todo.done ? styles.completed : ''}>{
                        todo.title}
                    </span>
                    <button onClick={() => console.log(todo.id)}
                            className={styles.deleteButton}>
                        Удалить
                    </button>
                </div>
            ))}
            <div className={styles.buttonsGroup}>
                <button onClick={() => setPage(p => Math.max(p - 1, 1))}
                        className={styles.pagButton}>Prev
                </button>
                <button onClick={() =>  setPage(p => (page >= p) ? p + 1 : p)}
                        className={styles.pagButton}>Next
                </button>
            </div>
        </div>
    )
};