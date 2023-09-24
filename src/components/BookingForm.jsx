import React, { useState } from "react";
import { occasions } from "../constants";
import Header from "./Header";

const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guest, setGuest] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(e);
  };
  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };
  return (
    <>
      <Header />
      <section className="formSection md:mt-8 mt-2 md:h-screen h-[70vh]">
        <form action="POST" className="form" onSubmit={handleSubmit}>
          <fieldset className="fieldset">
            <div className="div">
              <label htmlFor="res-date" className="label">
                choose Date
              </label>
              <input
                type="date"
                id="res-date"
                value={date}
                onChange={(e) => handleChange(e.target.value)}
                required
                className="input"
              />
            </div>

            {/* Time selection*/}

            <div className="div">
              <label htmlFor="res-time" className="label">
                Choose Time:
              </label>
              <select
                name="res-time"
                className="Select"
                id="res-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              >
                <option value="">Select a Time</option>
                {props.availableTime &&
                  props.availableTime.availableTime &&
                  props.availableTime.availableTime.map((availableTime) => {
                    return <option key={availableTime}>{availableTime}</option>;
                  })}
              </select>
            </div>

            {/* Guest selection */}
            <div className="div">
              <label htmlFor="guests" className="label">
                Number of guests:
              </label>
              <input
                type="number"
                placeholder="1"
                min={1}
                max={10}
                className="input"
                id="guests"
                value={guest}
                onChange={(e) => setGuest(e.target.value)}
              />
            </div>

            {/* Occasion selection */}

            <div className="div">
              <label htmlFor="occasion" className="label">
                Occasion:
              </label>
              <select
                name="occasion"
                id="occasion"
                className="Select"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
              >
                <option value="">Select occasion</option>
                {occasions.map((data) => {
                  return <option key={data.title}>{data.name}</option>;
                })}
              </select>
            </div>

            <div className="div">
              <input
                aria-label="on Click"
                type="submit"
                className="submit"
                value={"Make Your Reservation"}
              />
            </div>
          </fieldset>
        </form>
      </section>
    </>
  );
};

export default BookingForm;
