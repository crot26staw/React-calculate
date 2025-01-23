import "./index.css";
import { useEffect, useState } from "react";
import { useRef } from "react";
import useStore from "../../store";

export default function ResultItem(data) {
  const content = data.data;

  const { defaultData } = useStore();

  const iconColor =
    content.bank == "ВТБ"
      ? "result__icon result__icon_blue"
      : "result__icon result__icon_green";

  const [botOpen, setBotOpen] = useState(false);
  const rotate = botOpen ? "result__head-arrow" : "result__head-arrow rotate";

  const [headStyle, setHeadStyle] = useState({
    marginTop: "0",
    maxHeight: "0px",
    overflow: "hidden",
  });
  const [botStyle, setBotStyle] = useState({
    marginTop: "0",
    height: "0px",
    overflow: "hidden",
  });

  const headRef = useRef(null);
  const botRef = useRef(null);

  function showHead() {
    setHeadStyle({
      marginTop: "16px",
      maxHeight: headRef.current.clientHeight + "px",
      overflow: "visible",
    });
  }

  function hideHead() {
    setHeadStyle({
      marginTop: "0",
      maxHeight: "0px",
      overflow: "hidden",
    });
    hideBot();
  }

  function changeBot() {
    botOpen ? hideBot() : showBot();
  }

  function showBot() {
    setBotOpen(true);
    setBotStyle({
      marginTop: "32px",
      height: botRef.current.clientHeight + "px",
      overflow: "visible",
    });
  }

  function hideBot() {
    setBotOpen(false);
    setBotStyle({
      marginTop: "0",
      height: "0px",
      overflow: "hidden",
    });
  }

  // расчёт ежемесячного платежка
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  useEffect(() => {
    const principal = defaultData.credit; // Сумма кредита
    const annualInterestRate = content.stavka; // Годовая процентная ставка
    const months = defaultData.term * 12; // Срок кредита в месяцах

    // Месячная процентная ставка
    const monthlyInterestRate = annualInterestRate / 100 / 12;

    // Формула расчёта ежемесячного платежа
    const payment =
      (principal *
        (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, months))) /
      (Math.pow(1 + monthlyInterestRate, months) - 1);

    const value = Number(payment.toFixed(0)).toLocaleString('ru-RU');

    setMonthlyPayment(value);
  }, [defaultData]);

  return (
    <div
      className="result__item"
      onMouseEnter={() => showHead()}
      onMouseLeave={() => hideHead()}
    >
      <div className="result__item-wrapper">
        <div className="result__item-left">
          <div className={iconColor}>
            <img src={content.icon} alt="" />
          </div>
          <div className="result__name-wrapper">
            <p className="result__title">{content.bank}</p>
            <p className="result__name result_str_b">{content.name}</p>
          </div>
        </div>
        <div className="result__item-right">
          <div className="result__texts">
            <p className="result_str_m">Ставка</p>
            <p className="result_str_b">{content.stavka}%</p>
          </div>
          <span className="result__item-line"></span>
          <div className="result__texts">
            <p className="result_str_m">Платеж</p>
            <p className="result_str_b">{monthlyPayment} ₽/мес</p>
          </div>
        </div>
      </div>
      <div className="result__accardion">
        <div className="result__change-head" style={headStyle}>
          <div className="result__head" ref={headRef}>
            <button className="result__head-btn">Заказать консультацию</button>
            <div className="result__head-block">
              {botOpen && (
                <p className="result__head-str">Скрыть детали программы</p>
              )}
              <div className={rotate} onClick={() => changeBot()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M6 15.1151L12 9.11511L18 15.1151"
                    stroke="#282727"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="result__change-bot" style={botStyle}>
          <div className="result__content" ref={botRef}>
            <div className="result__content-top">
              <p className="result__content-title">Условия кредитования</p>
              <ul className="result__content-lists">
                <li className="result__content-li">
                  <p className="result__content-li-name">Ставка</p>
                  <p className="result__content-li-value">
                    {content.condition.stavka}% на весь срок
                  </p>
                </li>
                <li className="result__content-li">
                  <p className="result__content-li-name">Срок кредита</p>
                  <p className="result__content-li-value">
                    до {content.condition.term} лет
                  </p>
                </li>
                <li className="result__content-li">
                  <p className="result__content-li-name">Сумма кредита</p>
                  <p className="result__content-li-value">
                    до {content.condition.summ} ₽
                  </p>
                </li>
                <li className="result__content-li">
                  <p className="result__content-li-name">Первый взнос</p>
                  <p className="result__content-li-value">
                    {content.condition.firstPay}% на весь срок
                  </p>
                </li>
              </ul>
            </div>
            <div className="result__content-bot">
              <p className="result__content-title">Описание программы</p>
              <div className="result__content-descr">{content.description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
