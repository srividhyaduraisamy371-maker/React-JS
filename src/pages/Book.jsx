import { useParams } from "react-router-dom";
import { useState } from "react";

export default function Book() {
  const { id } = useParams();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleBook = () => {
    alert(`Appointment booked with Doctor ${id} on ${date} at ${time}`);
  };

  return (
    <div>
      <h2>Book Appointment</h2>

      <p>Doctor ID: {id}</p>

      <input 
        type="date" 
        onChange={(e) => setDate(e.target.value)} 
      />

      <input 
        type="time" 
        onChange={(e) => setTime(e.target.value)} 
      />

      <button onClick={handleBook}>Confirm</button>
    </div>
  );
}