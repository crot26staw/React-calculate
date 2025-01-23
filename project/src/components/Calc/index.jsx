import { useState } from "react";
import "./index.css";
import { Slider, ConfigProvider } from "antd";
import useStore from "../../store";
import { useEffect } from "react";

export default function Cacl() {
  const { defaultData, setPrice, setTerm, setFirstPay, setCredit, setVisible, matCapital, setMatCapital } = useStore();

  const [inputPrice, setInputPrice] = useState(0);
  const [inputTerm, setInputTerm] = useState(0);
  const [inputFirstPay, setInputFirstPay] = useState(0);
  const [inputCredit, setInputCredit] = useState(0);
  const [inputFirstPayNum, setInputFirstPayNum] = useState(0);
  const [ckeckVtb, setCkeckVtb] = useState(true);
  const [ckeckSber, setCkeckSber] = useState(true);
  const [capital, setCapital] = useState(false);

  useEffect(() => {
    setInputPrice(defaultData.price);
    setInputTerm(defaultData.term);
    setInputFirstPay(defaultData.firstPay);
    setInputFirstPayNum((defaultData.price / 100) * defaultData.firstPay);
    setInputCredit(
      defaultData.price - (defaultData.price / 100) * defaultData.firstPay
    );
  }, [defaultData]);

  function changePrice(newPrice) {
    setPrice(newPrice);
    setCredit(newPrice - (newPrice / 100) * defaultData.firstPay);
  }

  function changeFirstPay(newFirstPay) {
    setFirstPay(newFirstPay);
    setCredit(defaultData.price - (defaultData.price / 100) * newFirstPay);
  }

  function checkVtbChange() {
    setCkeckVtb(!ckeckVtb);
    setVisible(1);
  }

  function checkSberChange() {
    setCkeckSber(!ckeckSber);
    setVisible(2);
  }

  function changeCapital() {
    setCapital(!capital);
    setMatCapital();
  }

  return (
    <ConfigProvider
      theme={{
        components: {
          Slider: {
            trackBg: "#C0A58C",
            trackHoverBg: "#C0A58C",
            handleActiveColor: "#C0A58C",
            handleActiveOutlineColor: "#C0A58C",
            handleColor: "#C0A58C",
          },
        },
      }}
    >
      <div className="cacl">
        <div className="cacl__item">
          <div className="cacl__item-wrapper">
            <div className="cacl__label">
              <p className="cacl__label-name">Стоимость квартиры, ₽</p>
              <p className="cacl__label-value">
                {inputPrice.toLocaleString("ru-RU")}
              </p>
              <Slider
                className="calc__price"
                min={10000000}
                max={40000000}
                step={100000}
                onChange={(newPrice) => changePrice(newPrice)}
                value={inputPrice}
                tooltip={{
                  open: false,
                }}
              />
            </div>
          </div>
          <div className="cacl__item-wrapper">
            <div className="cacl__label">
              <p className="cacl__label-name">Срок ипотеки</p>
              <p className="cacl__label-value">{inputTerm} лет</p>
              <Slider
                className="calc__price"
                min={5}
                max={30}
                step={1}
                onChange={(newTerm) => setTerm(newTerm)}
                value={inputTerm}
                tooltip={{
                  open: false,
                }}
              />
            </div>
            <ul className="cacl__label-lists">
              <li
                className="cacl__label-li"
                data-value={5}
                onClick={(e) =>
                  setTerm(e.currentTarget.getAttribute("data-value"))
                }
              >
                5 лет
              </li>
              <li
                className="cacl__label-li"
                data-value={10}
                onClick={(e) =>
                  setTerm(e.currentTarget.getAttribute("data-value"))
                }
              >
                10 лет
              </li>
              <li
                className="cacl__label-li"
                data-value={15}
                onClick={(e) =>
                  setTerm(e.currentTarget.getAttribute("data-value"))
                }
              >
                15 лет
              </li>
              <li
                className="cacl__label-li"
                data-value={20}
                onClick={(e) =>
                  setTerm(e.currentTarget.getAttribute("data-value"))
                }
              >
                20 лет
              </li>
              <li
                className="cacl__label-li"
                data-value={30}
                onClick={(e) =>
                  setTerm(e.currentTarget.getAttribute("data-value"))
                }
              >
                30 лет
              </li>
            </ul>
          </div>
          <div className="cacl__item-wrapper">
            <div className="cacl__label">
              <p className="cacl__label-percent">{inputFirstPay}%</p>
              <p className="cacl__label-name">Первый взнос, ₽</p>
              <p className="cacl__label-value">
                {inputFirstPayNum.toLocaleString("ru-RU")}
              </p>
              <Slider
                className="calc__price"
                min={20}
                max={50}
                step={1}
                onChange={(newFirstPay) => changeFirstPay(newFirstPay)}
                value={inputFirstPay}
                tooltip={{
                  open: false,
                }}
              />
            </div>
            <ul className="cacl__label-lists">
              <li
                className="cacl__label-li"
                data-value={20}
                onClick={(e) =>
                  changeFirstPay(e.currentTarget.getAttribute("data-value"))
                }
              >
                20%
              </li>
              <li
                className="cacl__label-li"
                data-value={30}
                onClick={(e) =>
                  changeFirstPay(e.currentTarget.getAttribute("data-value"))
                }
              >
                30%
              </li>
              <li
                className="cacl__label-li"
                data-value={40}
                onClick={(e) =>
                  changeFirstPay(e.currentTarget.getAttribute("data-value"))
                }
              >
                40%
              </li>
              <li
                className="cacl__label-li"
                data-value={50}
                onClick={(e) =>
                  changeFirstPay(e.currentTarget.getAttribute("data-value"))
                }
              >
                50%
              </li>
            </ul>
          </div>
          <div className="cacl__item-wrapper">
            <div className="cacl__label">
              <p className="cacl__label-name">Банки</p>
              <ul className="cacl__bank-lists">
                <li className="cacl__bank-li">
                  <label htmlFor="vtb">
                    <input
                      className="cacl__bank-check-input"
                      id="vtb"
                      type="checkbox"
                      checked={ckeckVtb}
                      onChange={checkVtbChange}
                    />
                    <span className="cacl__bank-check-input-label"></span>
                    <p className="cacl__label-value">ВТБ</p>
                  </label>
                </li>
                <li className="cacl__bank-li">
                  <label htmlFor="sber">
                    <input
                      className="cacl__bank-check-input"
                      id="sber"
                      type="checkbox"
                      checked={ckeckSber}
                      onChange={checkSberChange}
                    />
                    <span className="cacl__bank-check-input-label"></span>
                    <p className="cacl__label-value">Сбербанк</p>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="cacl__capital">
          <label htmlFor="capital">
            <input id="capital" className="cacl__capital-check" type="checkbox" onChange={changeCapital} checked={capital} />
            <div className="cacl__capital-custom">
              <span></span>
            </div>
            <p className="cacl__capital-title">Есть материнский капитал</p>
          </label>
        </div>
        <div className="cacl__credit-wrapper">
          <p className="calc__credit-title">Сумма кредита</p>
          <p className="calc__credit-value">
            {inputCredit.toLocaleString("ru-RU")} ₽
          </p>
        </div>
        <button className="calc__btn">Заказать консультацию</button>
      </div>
    </ConfigProvider>
  );
}
