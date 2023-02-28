// ІМПОРТУЄМО БІБЛІОТЕКИ БЕЗ ЯКИХ НЕ МОЖЕМО ПИСАТИ КОД
import React from "react";
import styled from "styled-components";

// ІМПОРТУЄМО ПОТРІБНІ КОМПОНЕНТИ
import Page from "./component/Page";
import Header from "./component/Header";
import Balance from "./component/Balance";
import Menu from "./component/Menu";
import Payment from "./component/Payment";

// КОНФІГУРАЦІЯ ========================================

const START_BALANCE = 0;
const LIMIT_BALANCE = 10000;
const GET_MONEY = 250;
const SALARY = 1000;
const BUY = 300;

export default function App() {
  // ФУНКЦІОНАЛ БАЛАНСУ ========================

  // Ось тут тримаємо актуальне значення балансу

  const [balance, setBalance] = React.useState(START_BALANCE);

  // Функція для прямого поповнення балансу
  const getMoney = () => {
    setBalance(balance + GET_MONEY);

    setpeyment([
      ...payment,
      {
        name: "Баланс поповнено",
        amount: 250,
        type: "+"
      }
    ]);
  };

  const conMoney = () => {
    setBalance(balance - GET_MONEY);

    setpeyment([
      ...payment,
      {
        name: "Баланс знято",
        amount: 250,
        type: "-"
      }
    ]);
  };

  const Salary = () => {
    setBalance(balance + SALARY);

    setpeyment([
      ...payment,
      {
        name: "Отримали зарплату",
        amount: 1000,
        type: ""
      }
    ]);
  };

  const Buy = () => {
    setBalance(balance - BUY);

    setpeyment([
      ...payment,
      {
        name: "Glovo",
        amount: 300,
        type: "-"
      }
    ]);
  };

  // Функція яка виконується кожен раз коли наш баланс змінився
  React.useEffect(() => {
    // Перевірка на ліміт балансу
    if (balance > LIMIT_BALANCE) {
      alert(`Ліміт: ${LIMIT_BALANCE} Ваш баланс: ${balance}`);
      setBalance(0);
    }

    // Перевірка на мінусовий баланс
    if (balance < -2000) {
      alert(`Ви використали усі свої гроші. Поповніть картку`);
      setBalance(0);
    }
    // Сюди записуються змінні при оновленні яких буде виконуватися функція
  }, [balance]);

  const [payment, setpeyment] = React.useState([]);
  // ВЕРСТКА ІНТЕРФЕЙСУ ==========================================

  const LOGIN = "Denis";
  const PASSWORD = "1234";

  const [isLogged, setLogged] = React.useState(false);

  const doLogin = () => {
    const login = prompt("Ваш логін");
    const password = prompt("Ваш пароль");

    if (login === LOGIN && password === PASSWORD) {
      alert("Ви увійшли");
      setLogged(true);
    } else {
      if (login !== LOGIN && password !== PASSWORD);
      return alert("Помилка в логіні та паролі ");

      if (login !== LOGIN) {
        return alert("Помилка в логіні");
      }

      if (password !== PASSWORD) {
        return alert("Помилка в паролі");
      }

      return alert("Помилка");
    }
  };

  return (
    <Page>
      {/* компонент шапки з нашою назвою
          також при кліку мишкою на шапку
          в нас визивається функція HelloWorld
      */}

      <Header name="DENIS BANK" onClick={doLogin} />

      {/* Компонент баланса в який передається
          Актуальне значення балансу  */}
      {isLogged && <Balance balance={balance} />}

      {/* Компонент меню з кнопками */}
      {isLogged && (
        <Menu
          // ось сюди ми передаємо конфігурацію кнопок
          config={[
            {
              name: "Поповнити баланс",
              onClick: getMoney,
              img: "/icon/get.svg"
            },
            {
              name: "Зняти баланс",
              onClick: conMoney,
              img: "/icon/payment.svg"
            },
            {
              name: "Отримати зарплату",
              onClick: Salary,
              img: "/icon/another.svg"
            },
            {
              name: "Купити їжу у Glovo",
              onClick: Buy,
              img: "/icon/send.svg"
            }
          ]}
        />
      )}
      {/* компонент списка наших транзакцій
          цей функціонал ми будемо робити на 3 уроці
      */}
      {isLogged && <Payment payment={payment} />}
      {isLogged === false && (
        <NotLogged>Вам потрібно увійти в аккаунт</NotLogged>
      )}
    </Page>
  );
}

const NotLogged = styled.div`
  padding: 70px 30px;
  background: #000;
  color: #fff;
  text-align: center;

  margin-top: 500px;

  border-border-top-left-radius: 30px;
  border-border-top-right-radius: 30px;
`;
