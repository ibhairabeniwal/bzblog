import React from "react";

function TodaySelectedYou() {
  return (
    <div className="flex items-center justify-between -mb-3">
      <div className="flex flex-col text-color-primary">
        <h1 className="text-xl lg:text-2xl font-roboto font-semibold">
          Today Selected for you
        </h1>
        <p className="text">Today, October 16</p>
      </div>
      <button className="btn-secondary">View</button>
    </div>
  );
}

export default TodaySelectedYou;
