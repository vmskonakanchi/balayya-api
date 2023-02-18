import express, { Request, Response } from "express";

const app = express();
const port = 80;

app.use(express.json());
const slogans: Set<string> = new Set();

app.get("/", (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      message: "Jai Balayya....! , Welcome to the Balayya Babu API...",
      endPoints: {
        add: "/slogans/add",
        slogans: "/slogans",
      },
    });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
});

app.get("/slogans", (req: Request, res: Response) => {
  try {
    return res.status(200).json(Array.from(slogans));
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
});

app.get("/slogans/add", (req: Request, res: Response) => {
  try {
    if (req.query.slogan) {
      // checking if the slogan is present in the query or not
      const slogan: string = req.query.slogan as string; // type casting the query to string
      if (slogan)
        if (slogans.has(slogan)) {
          return res
            .status(400)
            .json({ error: "Slogan already exists , please add new slogan" });
        } else {
          slogans.add(slogan);
          return res
            .status(200)
            .json({ message: "Slogan added successfully , Jai balayya" });
        }
    } else {
      // if the query is not present then return the error
      return res.status(400).json({ error: "Slogan is required" });
    }
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
