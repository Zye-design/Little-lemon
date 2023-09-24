import React from "react";

const Confirmation = () => {
  return (
    <div
      className="confirm min-h-screen flex items-center justify-center bg-gray-100"
      id="confirmed"
    >
      <div className="p-8 rounded-lg shadow-lg bg-Highlight1">
        <h2 className="text-2xl font-semibold text-center">
          Reservation has been{" "}
          <span className="text-green-500">Confirmed!</span>
        </h2>
      </div>
    </div>
  );
};

export default Confirmation;
