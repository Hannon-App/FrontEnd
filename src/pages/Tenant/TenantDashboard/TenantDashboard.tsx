import React, { useState } from "react";

import Button from "../../../components/Button";
import Card from "../../../components/Card";

type Props = {};

const TenantDashboard = (props: Props) => {
  const [openTime, setOpenTime] = useState(""); // State for Open Time input
  const [closeTime, setCloseTime] = useState(""); // State for Close Time input

  const handleOpenTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOpenTime(e.target.value);
  };

  const handleCloseTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCloseTime(e.target.value);
  };

  const handleOpenTimeClick = () => {
    // Handle the logic for Open Time here
    console.log("Open Time: ", openTime);
  };

  const handleCloseTimeClick = () => {
    // Handle the logic for Close Time here
    console.log("Close Time: ", closeTime);
  };

  return (
    <div className="p-10 h-full">
      <div className="py-2 px-12 w-full bg-white rounded">
        <div className="py-10 flex justify-around">
          <div>
            <div className="py-1 pb-6">
              <input
                type="time"
                placeholder="Open Time"
                value={openTime}
                onChange={handleOpenTimeChange}
                className="border border-gray-300 rounded px-3 py-2 w-40 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <Button
                textBtn="Open Time"
                color="bg-bgBtn"
                onClick={handleOpenTimeClick}
              />
            </div>
          </div>
          <div>
            <div className="py-1 pb-6">
              <input
                type="time"
                placeholder="Close Time"
                value={closeTime}
                onChange={handleCloseTimeChange}
                className="border border-gray-300 rounded px-3 py-2 w-40 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <Button
                textBtn="Close Time"
                color="bg-bgRed"
                onClick={handleCloseTimeClick}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="my-6 py-12 px-12 w-full bg-white rounded flex flex-wrap gap-5">
        <Card title="My Item" text="10" color="bg-bgBtn" />
        <Card title="Rented" text="5" color="bg-bgBtn" />
        <Card title="Archive" text="5" color="bg-bgBtn" />
        <Card title="Pending" text="3" color="bg-bgBtn" />
        <Card title="Complete" text="2" color="bg-bgBtn" />
      </div>
    </div>
  );
};

export default TenantDashboard;
