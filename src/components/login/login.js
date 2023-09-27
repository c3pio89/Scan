import React, { useState, useEffect } from 'react';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [accessToken, setAccessToken] = useState(null);
  const [expireDate, setExpireDate] = useState(null);

  // Функция для обработки изменений в полях формы
  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  // Проверка на заполненность полей
  useEffect(() => {
    if (userName && password) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [userName, password]);

  // Функция для отправки данных на сервер
  const handleLogin = async () => {
    // Здесь будет код для отправки POST-запроса на account/login
    // Для демонстрации используется заглушка
    const response = await fetch('account/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userName, password }),
    });

    const data = await response.json();

    if (data.accessToken && data.expire) {
      setAccessToken(data.accessToken);
      setExpireDate(data.expire);
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('expireDate', data.expire);
    } else {
      // Обработка ошибки авторизации
      console.log('Ошибка авторизации');
    }
  };

  return (
    <div>
      <h1>Авторизация</h1>
      <form>
        <div>
          <label>
            Логин:
            <input
              type="text"
              value={userName}
              onChange={(e) => handleInputChange(e, setUserName)}
            />
          </label>
        </div>
        <div>
          <label>
            Пароль:
            <input
              type="password"
              value={password}
              onChange={(e) => handleInputChange(e, setPassword)}
            />
          </label>
        </div>
        <button type="button" disabled={isButtonDisabled} onClick={handleLogin}>
          Войти
        </button>
      </form>
      <div>
        <a href="#">Восстановить пароль</a>
        <p>Войти через:</p>
        <button>Google</button>
        <button>Facebook</button>
        <button>Яндекс</button>
      </div>
    </div>
  );
};

export default Login;
