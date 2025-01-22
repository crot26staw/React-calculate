import "./index.css";

export default function Result() {
  return (
    <div className="result">
      <div className="result__item">
        <div className="result__item-wrapper">
          <div className="result__item-left">
            <div className="result__icon result__icon_blue">
              <img src="icons/vtb.svg" alt="" />
            </div>
            <div className="result__name-wrapper">
              <p className="result__title">ВТБ</p>
              <p className="result__name result_str_b">
                Семейная ипотека до 12 млн ₽
              </p>
            </div>
          </div>
          <div className="result__item-right">
            <div className="result__texts">
              <p className="result_str_m">Ставка</p>
              <p className="result_str_b">23%</p>
            </div>
            <div className="result__texts">
              <p className="result_str_m">Платеж</p>
              <p className="result_str_b">7 406 300 ₽/мес</p>
            </div>
          </div>
        </div>
        <div className="result__change-head">
          <div className="result__head">
            <button className="result__head-btn">Заказать консультацию</button>
            <div className="result__head-block">
              <p className="result__head-str">Скрыть детали программы</p>
              <div className="result__head-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
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
      </div>
    </div>
  );
}
