import React from "react";
import BookingForm from "./BookingForm";

const BookingPage = (props) => {
  return (
    <BookingForm
      availableTime={{ availableTime: props.availableTime }}
      dispatch={props.dispatch}
      submitForm={props.submitForm}
    />
  );
};

export default BookingPage;
