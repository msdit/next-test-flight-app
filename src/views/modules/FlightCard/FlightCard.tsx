import type { FC } from "react";
import Styles from "./FlightCard.module.css";

const data = {
  origin: "THR",
  destination: "مشهد",
  airline: {
    farsi: "آسمان",
    iata: "EP",
    icao: "IRC",
  },
  terminal: "Terminal 4",
  isInternational: false,
  departure: {
    scheduled: "2022-06-10T06:05:00",
  },
  arrival: {
    scheduled: "2022-06-02T00:00:11.322",
  },
  airplaneType: "737-700",
  flightNumber: "602",
  status: {
    status: "DELAYED",
    color: "#f39b36",
    farsi: "تاخیر - 20:00",
    english: "Delayed - 20:00",
  },
  secondStatus: {
    status: "UNKNOWN",
    farsi: "",
  },
  farsiDayOfWeek: "جمعه",
  counter: "26, 27",
  gate: "",
};

const FlightCard: FC = () => {
  return (
    <div className={Styles.flightCardRoot}>
      <div className={Styles.flightCardIndicator}>
        <img
          src={`https://cdn.alibaba.ir/static/img/airlines/Domestic/${data.airline.iata}.png`}
          alt={data.airline.farsi}
          width={64}
          height={64}
        />
        <p>{data.airline.farsi}</p>
      </div>
      <div className={Styles.flightCardDetailsWrapper}>
        <div className={Styles.flightCardDetails}>
          <p>مقصد: {data.destination}</p>
          <p>شماره پرواز: {data.flightNumber}</p>
          <p>کانتر: {data.counter}</p>
          <p>گیت: {data.gate}</p>
        </div>
        <div className={Styles.flightCardStatus}>
          {data.status.farsi && (
            <p style={{ backgroundColor: data.status.color }}>
              {data.status.farsi}
            </p>
          )}
          {data.secondStatus.farsi && <p>{data.secondStatus.farsi}</p>}
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
