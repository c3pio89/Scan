import React from 'react';
import Slider from "react-slick";

const HomePage = () => {
  const isAuthenticated = true; // Здесь должна быть логика проверки авторизации
  const currentTariff = "Beginner"; // Здесь должна быть логика для определения текущего тарифа

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <header>
        <div>Логотип</div>
        <nav>Меню</nav>
        {isAuthenticated ? (
          <div>
            <div>Аватар</div>
            <button>Выйти</button>
          </div>
        ) : (
          <div>
            <a href="#">Зарегистрироваться</a>
            <button>Войти</button>
          </div>
        )}
      </header>

      <main>
        <section>
          <h1>Описание сервиса</h1>
          {isAuthenticated && <button>Запросить данные</button>}
        </section>

        <section>
          <h2>Почему именно мы</h2>
          <Slider {...settings}>
            <div>Карточка 1</div>
            <div>Карточка 2</div>
            <div>Карточка 3</div>
          </Slider>
        </section>

        <section>
          <h2>Наши тарифы</h2>
          <div className={currentTariff === "Beginner" ? "current-tariff" : ""}>
            Beginner
          </div>
          <div className={currentTariff === "Pro" ? "current-tariff" : ""}>
            Pro
          </div>
          <div className={currentTariff === "Business" ? "current-tariff" : ""}>
            Business
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
