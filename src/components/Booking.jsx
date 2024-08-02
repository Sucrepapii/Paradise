import React from "react";

const Booking = () => {
  return (
    <div id="deals" className="max-w-[1140px] m-auto w-full p-4">
      <form className="lg:flex lg:justify-between w-full items-center">
        <div className="flex flex-col my-2 py-2">
          <label>Destination</label>
          <select class>
            <option>Grand Antigua</option>
            <option>Maldives</option>
            <option>Bali</option>
            <option>Bahamas</option>
            <option>Seychelles</option>
            <option>Maui</option>
          </select>
        </div>
        <div>
          <div>
            <label>Check-In</label>
            <input type="date" />
          </div>
          <div>
            <label>Check-Out</label>
            <input type="date" />
          </div>
        </div>
        <div>
          <div>
            <label>Search</label>
            <button>Rates & Availabilities</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Booking;
