const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000

const start = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server working on http://localhost:${PORT}`);
    })
  } catch (err) {

  }
}

start()