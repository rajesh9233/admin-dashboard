import React from "react";
import { Button } from "react-bootstrap";

export default function ButtonsList() {
  const variants = [
    "primary",
    "secondary",
    "info",
    "success",
    "danger",
    "warning",
    "light",
    "dark",
    "link",
  ];

  return (
    <div className="container-fluid">
      <h1 className="h3 mb-4 mt-4 text-gray-800">Buttons</h1>
      <div style={{ display: "flex" }}>
        {variants.map((item, i) => {
          return (
            <Button variant={item} key={i}>
              {item}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
