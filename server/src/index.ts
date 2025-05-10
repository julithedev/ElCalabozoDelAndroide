import express from "express";
import "dotenv/config";
import ngrok from "ngrok";
import cors from "cors";

import productoRoutes from "./routes/product.routes";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

app.use("/producto", productoRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, async () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);

  try {
    const ngrokUrl = await ngrok.connect({
      addr: PORT,
      authtoken_from_env: true,
    });
    console.log(`🌍 Accede desde internet por: ${ngrokUrl}`);
  } catch (error) {
    console.error(`❌ No se pudo crear el túnel ngrok: ${error}`);
  }
});
