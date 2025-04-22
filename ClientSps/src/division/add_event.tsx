import React, { useState } from "react";
import './add_event.css';
import BackButton from "../back";

interface EventDetails {
  milan: string;
  date: string;
  time: string;
  chiefGuestPhone: string;
  chiefGuestAddress: string;
  speakerPhone: string;
  utsavPramukhPhone: string;
}

export default function AddEvent() {
  const [event, setEvent] = useState<EventDetails>({
    milan:" ",
    date: "",
    time: "",
    chiefGuestPhone: "",
    chiefGuestAddress: "",
    speakerPhone: "",
    utsavPramukhPhone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEvent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Event Submitted:", event);
  };

  return (
    <div className="form-container">
      <BackButton />
      <h2 className="text-2xl font-bold text-center mb-6">ಕಾರ್ಯಕ್ರಮ ಸೇರ್ಸುವಿಕೆ / Add Event</h2>

      <div className="input-grid">
      <div>
          <label className="label">ಮಿಲನ / Milan:</label>
          <input
            name="milan"
            value={event.milan}
            onChange={handleChange}
            className="input-underline"
            placeholder="Enter Milan"
          />
        </div>
        <br></br>
  <div>
    <label className="label">ದಿನಾಂಕ / Date:</label>
    <input
      name="date"
      type="date"
      value={event.date}
      onChange={handleChange}
      className="input-underline custom-date"
      placeholder="dd-mm-yyyy"
    />
  </div>
  <div>
    <label className="label">ಸಮಯ / Time:</label>
    <input
      name="time"
      type="time"
      value={event.time}
      onChange={handleChange}
      className="input-underline custom-time"
      placeholder="--:--"
    />
  </div>
</div>


      <h2 className="section-title">ಮುಖ್ಯ ಅತಿಥಿ / Chief Guest</h2>
      <div className="input-grid">
        <div>
          <label className="label">ದೂರವಾಣಿ / Phone:</label>
          <input name="chiefGuestPhone" value={event.chiefGuestPhone} onChange={handleChange} className="input-underline" />
        </div>
        <div>
          <label className="label">ವಿಳಾಸ / Address:</label>
          <input name="chiefGuestAddress" value={event.chiefGuestAddress} onChange={handleChange} className="input-underline" />
        </div>
      </div>

      <h2 className="section-title">ಬೋಧಕ / Speaker</h2>
      <div className="input-grid">
        <div>
          <label className="label">ದೂರವಾಣಿ / Phone:</label>
          <input name="speakerPhone" value={event.speakerPhone} onChange={handleChange} className="input-underline" />
        </div>
      </div>

      <h2 className="section-title">ಉತ್ಸವ ಪ್ರಮುಖ / Utsav Pramukh</h2>
      <div className="input-grid">
        <div>
          <label className="label">ದೂರವಾಣಿ / Phone:</label>
          <input name="utsavPramukhPhone" value={event.utsavPramukhPhone} onChange={handleChange} className="input-underline" />
        </div>
      </div>

      <button onClick={handleSubmit} className="submit-button">
        Submit Event
      </button>
    </div>
  );
}
