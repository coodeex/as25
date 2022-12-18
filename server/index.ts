import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import express from "express";
import { sendMessage } from "./services/telegram";
import { blueLog, redLog } from "./services/util/colorLog";
import { sleep } from "./services/util/sleep";

const app = express();
app.use(express.json());  


app.get("/", (req, res) => {
  res.send("Hello ts!");
});
app.get("/r", async (req, res) => {
  await sleep(2000);
  res.send("Hello r!");
});

app.post("/tg", async (req, res) => {
  const body = req.body;
  const msg = body?.message;
  try{
    await sendMessage(msg);
  }catch{
    blueLog("catched");
    res.status(400);
  }
  res.json("sent");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is up and running at http://localhost:${PORT}`));