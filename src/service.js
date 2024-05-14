require("dotenv").config();
const app = require('./server');
const PORT = process.env.PORT || 3000;
const URL = process.env.URL || `http://localhost:${PORT}`;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
