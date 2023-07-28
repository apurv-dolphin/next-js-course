import * as fs from "fs";
export default async function handler(req, res) {
  if (req.method === "POST") {
    // Create new data
    // let data = await fs.promises.readdir("contactdata");
    fs.promises.writeFile(
      `contactdata/user${req.body.id}.json`,
      JSON.stringify(req.body)
    );
    res.status(200).json({ message: "Data created successfully" });
  } else if (req.method === "DELETE") {
    // Delete data
    const { id } = req.query;
    const filePath = `contactdata/user${id}.json`;

    try {
      // Check if the file exists
      await fs.promises.access(filePath);
      // Delete the file
      await fs.promises.unlink(filePath);
      res.status(200).json({ message: "Data deleted successfully" });
    } catch (error) {
      res.status(404).json({ message: "Data not found" });
    }
  } else if (req.method === "GET") {
    // Read all data files and send as response
    try {
      const dataFiles = await fs.promises.readdir("contactdata");
      const data = [];

      for (const file of dataFiles) {
        const filePath = `contactdata/${file}`;
        const fileContent = await fs.promises.readFile(filePath, "utf-8");
        const parsedData = JSON.parse(fileContent);
        data.push(parsedData);
      }

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "Error fetching data" });
    }
  } else {
    // Invalid method
    res.status(405).end();
  }
}
