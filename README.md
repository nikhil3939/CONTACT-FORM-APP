# 📬 Contact Form App (Full-Stack Project)

This is a **professional full-stack contact form application** developed using:

- ⚡ **Frontend**: Next.js (App Router)
- 🔧 **Backend**: Node.js + Express
- ☁️ **Deployment**: Vercel (Frontend) & Render (Backend)
- 🔁 **Includes retry logic** to handle sleeping backend on free Render tier

---

## 🚀 Live Demo

- 🔗 **Frontend (Vercel)**: [https://contact-form-app-8kwx.vercel.app/contact](https://contact-form-app-8kwx.vercel.app/contact)
- 🔗 **Backend (Render)**: [https://contact-form-backend-na8e.onrender.com](https://contact-form-backend-na8e.onrender.com)

✅ You can submit a message and receive a real-time success response.

---

## 📁 Project Structure

```
CONTACT-FORM-APP/
├── contact-form-frontend/       # Frontend (Next.js App Router)
│   └── app/contact/page.tsx     # Contact form UI & submission logic
├── contact-form-backend/        # Backend (Node.js + Express)
│   └── index.js                 # Handles API POST requests
└── README.md                    # Project documentation (this file)
```

---

## ✨ Key Features

- Responsive contact form UI
- Live backend form submission
- Built-in retry logic for server wake-up (Render)
- Deployed using free-tier services (Vercel + Render)
- Clean code structure for both frontend & backend
- Git-based deployment integration

---

## 🔧 Technologies Used

| Layer      | Tech Stack                  |
|------------|-----------------------------|
| Frontend   | Next.js (App Router), React, TypeScript |
| Backend    | Node.js, Express, CORS, Body-parser     |
| Deployment | Vercel (frontend), Render (backend)     |
| Versioning | Git, GitHub                  |

---

## 📦 How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/nikhil3939/CONTACT-FORM-APP.git
cd CONTACT-FORM-APP
```

---

### 2. Start the Backend Server

```bash
cd contact-form-backend
npm install
node index.js
```

> ✅ Backend runs on `http://localhost:5000`

---

### 3. Start the Frontend

Open a new terminal:

```bash
cd contact-form-frontend
npm install
npm run dev
```

> ✅ Frontend runs on `http://localhost:3000/contact`

---

## 🔁 API Endpoint

### POST `/contact`

- **Request**:
```json
{
  "name": "Your Name",
  "email": "youremail@example.com",
  "message": "Hello there!"
}
```

- **Response**:
```json
{
  "message": "Form received successfully"
}
```

---

## 💡 Retry Logic (Render Sleep Handling)

The frontend includes a retry mechanism:
- If the backend is sleeping (free Render tier), the first call may fail.
- It waits 3 seconds and tries again automatically.
- Ensures reliable form delivery for users/TL/HR.

---

## ✅ Status

| Component      | Status      |
|----------------|-------------|
| Frontend (Vercel) | ✅ Online |
| Backend (Render)  | ✅ Online |
| Form Submission   | ✅ Working |
| Retry Logic       | ✅ Verified |

---

## 🙋‍♂️ Author

**Nikhil B.**  
📎 [LinkedIn](https://www.linkedin.com/in/nikhil-b-23b89327a)  
📎 [GitHub](https://github.com/nikhil3939)

