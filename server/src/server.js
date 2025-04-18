import { app } from "./app.js";
import { connectDB } from "./db/md.db.js";

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server listening at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log("Error starting server", error);
  }
};

startServer();
