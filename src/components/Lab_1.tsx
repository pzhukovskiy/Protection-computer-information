import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Lab_1.module.scss";

function Lab_1() {

    const [password, setPassword] = useState("");
    const randomPassword = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);

    const generatePassword = () => {
        setPassword(randomPassword);
    }

    return (
        <div>
            <div className={styles.page}>
                <div className={styles.box}>
                    <h2>Генератор паролей</h2>
                    <input 
                        value={password}
                        placeholder="Создайте пароль" 
                        id={styles.password} 
                        readOnly/>
                    <table>
                        <tbody>
                            <tr>
                                <th><div id={styles.button} className={styles.btn1} onClick={() => generatePassword()}>Генерировать</div></th>
                                <th>
                                    <div id={styles.button} className={styles.btn2}>
                                        <Link to={`/`}>Назад</Link>
                                    </div>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Lab_1;