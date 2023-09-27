import React from "react";
import { Link } from "react-router-dom";
import styles from "./loginError.module.css";  // Убедитесь, что у вас есть соответствующий CSS-файл

function LoginError() {
  return (
    <main className={styles.errorContainer}>
      <h1 className={styles.errorMessage}>
        Указанный логин или пароль неверен. Вернитесь на страницу авторизации и повторите ввод.
      </h1>
      <Link to={"/login"} className={styles.returnButton}>
        Вернуться
      </Link>
    </main>
  );
}

export default LoginError;
