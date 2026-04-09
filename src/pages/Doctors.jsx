import { Link } from "react-router-dom";

export default function Doctors() {
  const doctors = [
    { id: 1, name: "Dr. John", specialization: "Cardiologist" },
    { id: 2, name: "Dr. Smith", specialization: "Dermatologist" }
  ];

  return (
    <div>
      <h2>Doctors List</h2>

      {doctors.map(doc => (
        <div key={doc.id}>
          <h3>{doc.name}</h3>
          <p>{doc.specialization}</p>
          <Link to={`/book/${doc.id}`}>Book Appointment</Link>
        </div>
      ))}
    </div>
  );
}