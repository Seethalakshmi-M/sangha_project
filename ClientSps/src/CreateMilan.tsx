import { useParams } from "react-router-dom";
import { useState } from "react";
import BackButton from "./back.tsx";

export default function CreateMilan() {
  const { vibhag, khanda } = useParams<{ vibhag: string; khanda: string }>();

  const [formData, setFormData] = useState({
    milan: "",
    date: "",
    time: "",
    place: "",
    utsavPramukh: "",
    speakerContact: "",
    chiefGuestName: "",
    chiefGuestContact: "",
    chiefGuestAddress: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Milan Created Successfully ✨");
    // Later, you can send this data to a backend or database here
  };

  return (
    <div className="form-container">
      <h2>
        Create Milan for {vibhag} / {khanda}
      </h2>
      <BackButton />

      <form onSubmit={handleSubmit} className="milan-form">
        <label>
          Milan:
          <input type="text" name="milan" value={formData.milan} onChange={handleChange} required />
        </label>

        <label>
          Date:
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </label>

        <label>
          Time:
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />
        </label>

        <label>
          Place:
          <input type="text" name="place" value={formData.place} onChange={handleChange} required />
        </label>

        <label>
          Utsav Pramukh:
          <input type="text" name="utsavPramukh" value={formData.utsavPramukh} onChange={handleChange} required />
        </label>

        <label>
          Speaker Contact:
          <input type="text" name="speakerContact" value={formData.speakerContact} onChange={handleChange} required />
        </label>

        <label>
          Chief Guest Name:
          <input type="text" name="chiefGuestName" value={formData.chiefGuestName} onChange={handleChange} required />
        </label>

        <label>
          Chief Guest Contact:
          <input type="text" name="chiefGuestContact" value={formData.chiefGuestContact} onChange={handleChange} required />
        </label>

        <label>
          Chief Guest Address:
          <textarea name="chiefGuestAddress" value={formData.chiefGuestAddress} onChange={handleChange} required />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
