'use client';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [response, setResponse] = useState('');

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setResponse('Please fill in all fields.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setResponse('Invalid email format.');
      return;
    }

    try {
      const res = await fetch('https://contact-form-backend-na8e.onrender.com/contact'
, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setResponse(data.message);
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setResponse('Error submitting the form.');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <br />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <br />
        <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} required />
        <br />
        <button type="submit">Submit</button>
      </form>
      <p>{response}</p>
    </div>
  );
}
