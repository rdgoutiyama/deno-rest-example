import { opine } from "./deps.ts";
import { database } from "./db.ts";

const app = opine();
const v1Module = opine();

v1Module.get("/cats", (req, res) => {
  res.setStatus(200).json({
    success: "true",
    data: database,
  });
});

app.use('/v1/api/', v1Module);


const PORT = 3200;

// Start our server on the desired port.
app.listen(PORT);

console.log(`API server running on port ${PORT}`);