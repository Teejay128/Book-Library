const dbConnect = require("./dbconnection/dbconnect");
const dotenv = require("dotenv");
dotenv.config();
const app = require("./app");
dbConnect();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
