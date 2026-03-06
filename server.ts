import express from "express";
import { createServer as createViteServer } from "vite";
import Database from "better-sqlite3";
import path from "path";

const db = new Database("aurelius.db");

// Initialize database
db.exec(`
  CREATE TABLE IF NOT EXISTS reservations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    phone TEXT,
    date TEXT,
    time TEXT,
    guests TEXT,
    specialRequest TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS contact_messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    subject TEXT,
    message TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/reservations", (req, res) => {
    const { name, email, phone, date, time, guests, specialRequest } = req.body;
    try {
      const stmt = db.prepare(`
        INSERT INTO reservations (name, email, phone, date, time, guests, specialRequest)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `);
      stmt.run(name, email, phone, date, time, guests, specialRequest);
      res.json({ success: true, message: "Reservation saved successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Failed to save reservation" });
    }
  });

  app.post("/api/contact", (req, res) => {
    const { name, email, subject, message } = req.body;
    try {
      const stmt = db.prepare(`
        INSERT INTO contact_messages (name, email, subject, message)
        VALUES (?, ?, ?, ?)
      `);
      stmt.run(name, email, subject, message);
      res.json({ success: true, message: "Message sent successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Failed to send message" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
