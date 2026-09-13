// server/index.ts
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);

const app = express();

const staticPath = path.resolve(__dirname, "..", "dist", "public");

app.use(express.static(staticPath));

// ✅ Express 5
app.get("/*splat", (_req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

// No Vercel não roda listen — só exporta
if (process.env.VERCEL !== "1") {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

export default app;
