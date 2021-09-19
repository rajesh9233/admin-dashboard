import React from "react";
import Card from "./Card";
import {
  FaCalendar,
  FaDollarSign,
  FaClipboardList,
  FaComments,
} from "react-icons/fa";

export default function CardLayout() {
  const style = { size: "36px", color: "c3c3c3" };
  const cardData = [
    {
      styleColor: "primary",
      cardText: "Earnings (Monthly)",
      cardAmount: "$40,000",
      icon: <FaCalendar size={style.size} color={style.color} />,
    },
    {
      styleColor: "success",
      cardText: "Earnings (Annual)",
      cardAmount: "$215,000",
      icon: <FaDollarSign size={style.size} color={style.color} />,
    },
    {
      styleColor: "info",
      cardText: "Tasks",
      cardAmount: "50%",
      icon: <FaClipboardList size={style.size} color={style.color} />,
    },
    {
      styleColor: "warning",
      cardText: "Pending Requests",
      cardAmount: "18",
      icon: <FaComments size={style.size} color={style.color} />,
    },
  ];

  return (
    <div className="row">
      {cardData.map((item, index) => {
        return (
          <div className="col-xl-3 col-md-6 mb-4" key={index}>
            <Card item={item} />
          </div>
        );
      })}
    </div>
  );
}
