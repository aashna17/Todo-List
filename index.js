const express=require('express');
const cors=require('cors');
const mongoose = require("mongoose");


const app =express();
const port = 4000;
app.use(cors());


const uri= `mongodb://127.0.0.1:27017/admin`
const options = { useNewUrlParser: true,useUnifiedTopology: true }


mongoose.connect(uri, options)
  .then(() =>
    app.listen(port, () =>
      console.log(`Server running on http://localhost:${port}`)
    )
  )
  .catch(error => {
    throw error;
  })

