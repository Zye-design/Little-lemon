import React, { useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./Header";
import BookingPage from "./BookingPage";
import Menu from "./Menu";
import Testimonials from "./Testimonials";
import About from "./About";
import ConfirmationPage from "./Confirmation";

const Main = () => {
  const sendRandom = function (send) {
    var Z = 2 ** 35 - 31;
    var Y = 185852;
    var E = send % Z;
    return function () {
      return (E - ((E * Y) % Z)) / Z;
    };
  };

  const fetchAPI = function (date) {
    let result = [];
    let random = sendRandom(date.getDate());
    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() > 0.5) {
        result.push(i + ":30");
      }
    }
    return result;
  };

  const submitAPI = function (formData) {
    return true;
  };

  const initialState = { availableTime: fetchAPI(new Date()) };
  const [state, dispatch] = useReducer(updateTime, initialState);

  function updateTime(state, date) {
    return { availableTime: fetchAPI(new Date()) };
  }

  const navigate = useNavigate();
  function submitForm(formData) {
    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTime={state.availableTime}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmationPage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default Main;
