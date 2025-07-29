'use client';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [response, setResponse] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendRequest = async () => {
    const res = await fetch('https://contact-form-backend-na8e.onrender.com/contact', {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    return data;
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
      const data = await sendRequest(); // First try
      setResponse(data.message);
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      // Retry once after 3 seconds
      setResponse('Waking up the server... trying again in 3 seconds...');
      setTimeout(async () => {
        try {
          const data = await sendRequest(); // Second try
          setResponse(data.message);
          setForm({ name: '', email: '', message: '' });
        } catch (err2) {
          setResponse('Server not responding. Please try again in a moment.');
        }
      }, 3000);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        /><br />
        <input
          name="email"
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        /><br />
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
        /><br />
        <button type="submit">Submit</button>
      </form>
      <p>{response}</p>
    </div>
  );
}
