import React from "react";

const Booking = () => {
  return (
    <div id="deals" className="max-w-[1140px] m-auto w-full p-4">
      <form className="lg:flex lg:justify-between w-full items-center">
        <div className="flex flex-col my-2 py-2">
          <label>Destination</label>
          <select className="lg:w-[300px] md:w-full border rounded-md p-2">
            <option>Grand Antigua</option>
            <option>Maldives</option>
            <option>Bali</option>
            <option>Bahamas</option>
            <option>Seychelles</option>
            <option>Maui</option>
            <option>Blue Ridge Mountains</option>
            <option>Swiss Alps</option>
            <option>Santorini</option>
            <option>Amalfi Coast</option>
            <option>Zanzibar</option>
            <option>Pamalican Island</option>
            <option>Fernando de Noronha</option>
            <option>Cape Cod</option>
            <option>Turks and Caicos</option>
          </select>
        </div>
        <div className="flex w-full">
          <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
            <label>Check-In</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
            <label>Check-Out</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
        </div>
        <div className="flex flex-col my-2 p-2 w-full">
          <label>Search</label>
          <button className="w-full">Rates & Availabilities</button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
