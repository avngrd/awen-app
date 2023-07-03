'use client';
import Link from 'next/link';
import Ticker from '@/components/ticker/Ticker';

const About = async () => {
  return (
    <div className="px-20 mt-14 flex flex-row justify-between">
      <div className=" max-w-xl">
        <h1 className=" text-3xl font-bold max-w-xl  ">
          Отслеживание курсов криптовалют является важным для всех, кто инвестирует, торгует или
          использует криптовалютой.
        </h1>
        <ul className="">
          <li className="my-4">
            <p>
              Принятие обоснованных инвестиционных решений: Цены на криптовалюты могут сильно
              колебаться. Отслеживание этих изменений позволяет инвесторам принимать обоснованные
              решения относительно риска своих инвестиций. Понимание тенденций цен также помогает
              инвесторам решить, покупать ли, продавать или удерживать свои активы.
            </p>
          </li>
          <li className="my-4">
            <p>
              Максимизация прибыли: Для трейдеров криптовалют, особенно для дневных трейдеров, важно
              мониторить котировки в реальном времени. Они используют эти данные, чтобы определить
              оптимальное время для входа или выхода из позиции с целью максимизации прибыли.
            </p>
          </li>
          <li className="my-4">
            <p>
              Управление рисками: Отслеживание курсов криптовалют также может помочь в управлении
              рисками. Это может включать установку стоп-лоссов на основе исторических данных о
              ценах или разработку стратегий хеджирования.
            </p>
          </li>
          <li className="my-4">
            <p>
              Планирование бюджета: Если вы используете криптовалюту для личных или
              бизнес-транзакций, отслеживание курсов может помочь вам планировать расходы и
              управлять бюджетом. Понимание колебаний цен поможет вам выбрать наилучшее время для
              совершения транзакций или переводов.
            </p>
          </li>
        </ul>
        <h1 className="text-3xl font-bold max-w-xl mt-20">
          Популярные платформы для отслеживания курса криптовалют:
        </h1>
        <ul className="mt-10">
          <li className="text-xl font-bold mb-5">
            1. TradingView -{' '}
            <Link
              className="text-blue-700 text-base font-normal"
              href="https://ru.tradingview.com/"
              target="_blank">
              Просмотреть
            </Link>
          </li>
          <li className="text-xl font-bold mb-5">
            2. CoinMarketCap -{' '}
            <Link
              className="text-blue-700 text-base font-normal"
              href="https://coinmarketcap.com/"
              target="_blank">
              Просмотреть
            </Link>
          </li>
          <li className="text-xl font-bold mb-5">
            3. ByBit -{' '}
            <Link
              className="text-blue-700 text-base font-normal"
              href="https://www.bybit.com/"
              target="_blank">
              Просмотреть
            </Link>
          </li>
          <li className="text-xl font-bold mb-5">
            4. Binance -{' '}
            <Link
              className="text-blue-700 text-base font-normal"
              href="https://www.binance.com/"
              target="_blank">
              Просмотреть
            </Link>
          </li>
        </ul>
      </div>
      <Ticker></Ticker>
    </div>
  );
};

export default About;
