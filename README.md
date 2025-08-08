
# 📬 Contact Form App (Full-Stack)

This is a full-stack contact form application built using:

- ⚡ Frontend: Next.js (App Router)
- 🔧 Backend: Node.js + Express
- ☁️ Deployed on: Vercel (Frontend) & Render (Backend)
- 🔄 Supports Retry Logic to handle Render's backend sleep mode

---

## 📁 Project Structure

CONTACT-FORM-APP/
├── contact-form-frontend/ # Next.js frontend
│ └── app/contact/page.tsx # Main contact form page
├── contact-form-backend/ # Node.js + Express backend
│ └── index.js # Backend server


---

## 🚀 Live Demo

- 🖥️ Frontend: [https://contact-form-app-8kwx.vercel.app/contact](https://contact-form-app-8kwx.vercel.app/contact)
- 🌐 Backend: [https://contact-form-backend-na8e.onrender.com](https://contact-form-backend-na8e.onrender.com)

> ✅ You can submit the form and get a real-time response from the backend. Includes retry logic if the backend is asleep.

---

## ✨ Features

- Modern responsive contact form
- Form validation (required fields, valid email)
- Retry logic for server wake-up (Render)
- Deployed & production-ready
- GitHub-integrated CI (via Vercel auto-deploy)

---

## 🔧 Technologies Used

- **Frontend:** Next.js (App Router), React, TypeScript
- **Backend:** Node.js, Express, CORS, body-parser
- **Deployment:** Vercel (frontend), Render (backend)
- **Version Control:** Git + GitHub

---

## 📦 How to Run Locally

### 1. Clone the repo
```bash
git clone https://github.com/nikhil3939/CONTACT-FORM-APP.git
cd CONTACT-FORM-APP

2. Start the Backend

cd contact-form-backend
npm install
node index.js

✅ Server runs on http://localhost:5000

3. Start the Frontend (New Terminal)

cd contact-form-frontend
npm install
npm run dev

✅ App runs on http://localhost:3000/contact

🔁 API Endpoint
POST /contact
Accepts JSON body:
{
  "name": "Nikhil",
  "email": "nikhil@example.com",
  "message": "Hello!"
}
Returns:
{
  "message": "Form received successfully"
}

✅ Submission Tested & Verified
✅ Backend tested via curl and Render

✅ Frontend fetch integrated & error-handled

✅ Retry logic ensures reliable form submission even after backend idle sleep

🙌 Author
👨‍💻 Nikhil B.