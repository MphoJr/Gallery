# 📸 My Gallery App

A responsive image gallery built with **React**, **Node.js/Express**, and **PostgreSQL**.  
Users can upload images with titles, and the gallery displays them neatly in a modern, responsive grid.

---

## 🚀 Features
- Upload images with a title using a clean form.
- Store image metadata in PostgreSQL via Sequelize ORM.
- Serve uploaded files from the backend (`/uploads`).
- Responsive gallery grid with creative CSS styling.
- Hover effects and consistent image sizing using `object-fit: cover`.

---

## 🛠 Tech Stack
- **Frontend**: React (functional components, hooks)
- **Backend**: Node.js, Express
- **Database**: PostgreSQL with Sequelize ORM
- **File Uploads**: Multer middleware
- **Styling**: Custom CSS grid layout

---

## ⚙️ Installation & Setup

### 1. Clone the repo
```bash
git clone https://github.com/yourusername/gallery-app.git
cd gallery-app
2 Backend set up
cd backend
npm install
update database credencials
const sequelize = new Sequelize('gallerydb', 'postgres', 'your_password', {
  host: 'localhost',
  dialect: 'postgres',
});

run backend
npx nodemon server.js

3. Frontend setup
cd frontend
npm install
npm start

---
📂 Project Structure
backend/
  config/database.js
  models/Image.js
  routes/images.js
  controllers/imageController.js
  uploads/   <-- uploaded files stored here

frontend/
  src/pages/Gallery.js
  src/components/UploadForm.js
  src/pages/Gallery.css

This is a **single, self‑contained README.md** — you can copy and paste it directly into your GitHub repo without needing to stitch multiple pieces together.  

Would you like me to also add **GitHub badges** (Node.js, React, PostgreSQL, License) at the top so your README looks more professional and eye‑catching?
