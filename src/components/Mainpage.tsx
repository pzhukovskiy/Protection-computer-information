import styles from "../styles/Mainpage.module.scss";
import { Outlet, Link } from "react-router-dom";

function Mainpage() {
    const list_lab = [
        {id: 1, text: "Лабораторная работа №1"},
        {id: 2, text: "Лабораторная работа №2"},
        {id: 3, text: "Лабораторная работа №3"},
        {id: 4, text: "Лабораторная работа №4"},
        {id: 5, text: "Лабораторная работа №5"},
        {id: 6, text: "Лабораторная работа №6"},
        {id: 7, text: "Лабораторная работа №7"},
        {id: 8, text: "Лабораторная работа №8"},
        {id: 9, text: "Лабораторная работа №9"},
        {id: 10, text: "Лабораторная работа №10"},
        {id: 11, text: "Лабораторная работа №11"},
    ]
    return (
        <div>
            <div className={styles.header}>
                <h1>Защита компьютерной информации</h1>
            </div>
            <div className={styles.choice}>
                {list_lab.map((nameLab) => {
                    return (
                        <div key={nameLab.id} className={styles.choice_lab}>
                            <h2>{nameLab.text}</h2>
                            <div className={styles.button_go_to_lab}>
                                <Link to={`/Lab_${nameLab.id}`}>Перейти</Link>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Outlet/>
        </div>
    )
}

export default Mainpage;