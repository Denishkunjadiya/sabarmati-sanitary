const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");
const multer = require("multer");
const fs = require('fs');
const path = require('path');

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "tiles&sanitory"
});


app.use(cors());
app.use(express.json());
app.use(bodyParser.json())



app.listen(5000, () => {
  console.log("port 5000 is working ");
})


// ======================================= User Side ============================================

// -----------------------------------contact page---------------------------- 

// Route for creating the ragistration api
app.post("/api/contact", (req, res) => {

  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  console.log(name, email, message)

  db.query("INSERT INTO contact(name,email,message) VALUES (?,?,?)", [req.body.name, email, message], (err, result) => {
    if (err) {
      console.log(err)
      res.end(JSON.stringify(err))
      res.render('./contact');
    }
    console.log(result)
    res.end(JSON.stringify(result))
  }
  );
});


// ============================================================= Admin Side ====================================================================


//=============================================== slider ==========================================================

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads/');
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.use('/image', express.static('uploads/'));

app.post('/api/slider', upload.single('image'), (req, res) => {

  const url = req.protocol + '://' + req.get('host');
  const filePath = `${url}/image/${req.file.filename}`
  
  console.log(filePath)
  const content = req.body.content;
  const query = `INSERT INTO slider (img_path, content) VALUES (?, ?)`;
  const values = [filePath, content];

  db.query(query, values, (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error uploading image');
    }
    else {
      console.log(`Image uploaded with id ${results.insertId}`);
      res.send({ filePath: filePath });
    }
  });
});


// display data
app.get("/api/display_slider", (req, res) => {
  db.query("SELECT * FROM slider", (err, result) => {
    if (err) {
      console.log(err)
      res.send(json(err))
    }
    res.send(result)
  }
  );
});

// delete a slider
app.delete('/api/delete_slider/:id', (req, res) => {
  const { id } = req.params;
  console.log(id);

  db.query("DELETE FROM slider WHERE id=?", id, (err, result) => {
    if (err) {
      console.log(err)
    }
    console.log(result)
    res.end(JSON.stringify(result))
    res.send("Data Deleted Succesfully");
  })
})







//=============================================== marble ==========================================================


const storage2 = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads/');
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + path.extname(file.originalname));
  },
});

const marble = multer({ storage: storage2 });

app.post('/api/marble', marble.single('image'), (req, res) => {

  const url = req.protocol + '://' + req.get('host');
  const filePath = `${url}/image/${req.file.filename}`




  const query = `INSERT INTO marble (img_path) VALUES (?)`;
  const values = [filePath];

  db.query(query, values, (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error uploading image');
    } else {
      console.log(`Image uploaded with id ${results.insertId}`);
      res.send({ filePath: filePath });
    }
  });


});

// display marble
app.get("/api/display_marble", (req, res) => {
  db.query("SELECT * FROM marble", (err, result) => {
    if (err) {
      console.log(err)
      res.send(json(err))
    }
    res.send(result)
  }
  );
});

// delete a marble
app.delete('/api/delete_marble/:id', (req, res) => {
  const { id } = req.params;
  console.log(id);

  db.query("DELETE FROM marble WHERE id=?", id, (err, result) => {
    if (err) {
      console.log(err)
    }
    console.log(result)
    res.end(JSON.stringify(result))
    res.send("Data Deleted Succesfully");
  })
})




//=============================================== glass ==========================================================

const storage3 = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads/');
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + path.extname(file.originalname));
  },
});

const glass = multer({ storage: storage3 });

app.post('/api/glass', glass.single('image'), (req, res) => {

  const url = req.protocol + '://' + req.get('host');
  const filePath = `${url}/image/${req.file.filename}`




  const query = `INSERT INTO glass (img_path) VALUES (?)`;
  const values = [filePath];

  db.query(query, values, (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error uploading image');
    } else {
      console.log(`Image uploaded with id ${results.insertId}`);
      res.send({ filePath: filePath });
    }
  });


});


// display glass
app.get("/api/display_glass", (req, res) => {
  db.query("SELECT * FROM glass", (err, result) => {
    if (err) {
      console.log(err)
      res.send(json(err))
    }
    res.send(result)
  }
  );
});

// delete a glass
app.delete('/api/delete_glass/:id', (req, res) => {
  const { id } = req.params;
  console.log(id);

  db.query("DELETE FROM glass WHERE id=?", id, (err, result) => {
    if (err) {
      console.log(err)
    }
    console.log(result)
    res.end(JSON.stringify(result))
    res.send("Data Deleted Succesfully");
  })
})



//=============================================== balcony ==========================================================

const storage4 = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads/');
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + path.extname(file.originalname));
  },
});

const balcony = multer({ storage: storage4 });

app.post('/api/balcony', balcony.single('image'), (req, res) => {

  const url = req.protocol + '://' + req.get('host');
  const filePath = `${url}/image/${req.file.filename}`




  const query = `INSERT INTO balcony (img_path) VALUES (?)`;
  const values = [filePath];

  db.query(query, values, (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error uploading image');
    } else {
      console.log(`Image uploaded with id ${results.insertId}`);
      res.send({ filePath: filePath });
    }
  });


});


// display balcony
app.get("/api/display_balcony", (req, res) => {
  db.query("SELECT * FROM balcony", (err, result) => {
    if (err) {
      console.log(err)
      res.send(json(err))
    }
    res.send(result)
  }
  );
});

// delete a balcony
app.delete('/api/delete_balcony/:id', (req, res) => {
  const { id } = req.params;
  console.log(id);

  db.query("DELETE FROM balcony WHERE id=?", id, (err, result) => {
    if (err) {
      console.log(err)
    }
    console.log(result)
    res.end(JSON.stringify(result))
    res.send("Data Deleted Succesfully");
  })
})


//=============================================== ceramic ==========================================================

const storage5 = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads/');
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + path.extname(file.originalname));
  },
});

const ceramic = multer({ storage: storage5 });

app.post('/api/ceramic', ceramic.single('image'), (req, res) => {

  const url = req.protocol + '://' + req.get('host');
  const filePath = `${url}/image/${req.file.filename}`




  const query = `INSERT INTO ceramic (img_path) VALUES (?)`;
  const values = [filePath];

  db.query(query, values, (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error uploading image');
    } else {
      console.log(`Image uploaded with id ${results.insertId}`);
      res.send({ filePath: filePath });
    }
  });


});


// display ceramic
app.get("/api/display_ceramic", (req, res) => {
  db.query("SELECT * FROM ceramic", (err, result) => {
    if (err) {
      console.log(err)
      res.send(json(err))
    }
    res.send(result)
  }
  );
});

// delete a ceramic
app.delete('/api/delete_ceramic/:id', (req, res) => {
  const { id } = req.params;
  console.log(id);

  db.query("DELETE FROM ceramic WHERE id=?", id, (err, result) => {
    if (err) {
      console.log(err)
    }
    console.log(result)
    res.end(JSON.stringify(result))
    res.send("Data Deleted Succesfully");
  })
})


//=============================================== porcelain ==========================================================

const storage6 = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads/');
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + path.extname(file.originalname));
  },
});

const porcelain = multer({ storage: storage6 });

app.post('/api/porcelain', porcelain.single('image'), (req, res) => {

  const url = req.protocol + '://' + req.get('host');
  const filePath = `${url}/image/${req.file.filename}`




  const query = `INSERT INTO porcelain (img_path) VALUES (?)`;
  const values = [filePath];

  db.query(query, values, (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error uploading image');
    } else {
      console.log(`Image uploaded with id ${results.insertId}`);
      res.send({ filePath: filePath });
    }
  });


});


// display porcelain
app.get("/api/display_porcelain", (req, res) => {
  db.query("SELECT * FROM porcelain", (err, result) => {
    if (err) {
      console.log(err)
      res.send(json(err))
    }
    res.send(result)
  }
  );
});

// delete a porcelain
app.delete('/api/delete_porcelain/:id', (req, res) => {
  const { id } = req.params;
  console.log(id);

  db.query("DELETE FROM porcelain WHERE id=?", id, (err, result) => {
    if (err) {
      console.log(err)
    }
    console.log(result)
    res.end(JSON.stringify(result))
    res.send("Data Deleted Succesfully");
  })
})


//=============================================== sanitary ==========================================================

const storage7 = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads/');
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + path.extname(file.originalname));
  },
});

const sanitary = multer({ storage: storage7 });

app.post('/api/sanitary', sanitary.single('image'), (req, res) => {

  const url = req.protocol + '://' + req.get('host');
  const filePath = `${url}/image/${req.file.filename}`




  const query = `INSERT INTO sanitary (img_path) VALUES (?)`;
  const values = [filePath];

  db.query(query, values, (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error uploading image');
    } else {
      console.log(`Image uploaded with id ${results.insertId}`);
      res.send({ filePath: filePath });
    }
  });


});


// display sanitary

app.get("/api/display_sanitary", (req, res) => {
  db.query("SELECT * FROM sanitary", (err, result) => {
    if (err) {
      console.log(err)
      res.send(json(err))
    }
    res.send(result)
  }
  );
});

// delete a sanitary
app.delete('/api/delete_sanitary/:id', (req, res) => {
  const { id } = req.params;
  console.log(id);

  db.query("DELETE FROM sanitary WHERE id=?", id, (err, result) => {
    if (err) {
      console.log(err)
    }
    console.log(result)
    res.end(JSON.stringify(result))
    res.send("Data Deleted Succesfully");
  })
})



//=============================================== gallery ==========================================================

const storage8 = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads/');
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + path.extname(file.originalname));
  },
});

const gallery = multer({ storage: storage8 });

app.post('/api/gallery', gallery.single('image'), (req, res) => {

  const url = req.protocol + '://' + req.get('host');
  const filePath = `${url}/image/${req.file.filename}`

  const category = req.body.category;
  const product = req.body.product;
  //   const filePath = req.file.path;



  const query = `INSERT INTO gallery (img_path, category,product) VALUES (?, ?, ?)`;
  const values = [filePath, category, product];

  db.query(query, values, (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error uploading image');
    } else {
      console.log(`Image uploaded with id ${results.insertId}`);
      res.send({ filePath: filePath });
    }
  });


});

// display gallery

app.get("/api/display_gallery", (req, res) => {
  db.query("SELECT * FROM gallery", (err, result) => {
    if (err) {
      console.log(err)
      res.send(json(err))
    }
    res.send(result)
  }
  );
});

// delete a gallery
app.delete('/api/delete_gallery/:id', (req, res) => {
  const { id } = req.params;
  console.log(id);

  db.query("DELETE FROM gallery WHERE id=?", id, (err, result) => {
    if (err) {
      console.log(err)
    }
    console.log(result)
    res.end(JSON.stringify(result))
    res.send("Data Deleted Succesfully");
  })
})


//=============================================== contact ==========================================================


//display contact
app.get("/api/display_contact", (req, res) => {
  db.query("SELECT * FROM contact", (err, result) => {
    if (err) {
      console.log(err)
      res.send(json(err))
    }
    res.send(result)
  }
  );
});



// delete a contact
app.delete('/api/delete_contact/:id', (req, res) => {
  const { id } = req.params;
  console.log(id);

  db.query("DELETE FROM contact WHERE id=?", id, (err, result) => {
    if (err) {
      console.log(err)
    }
    console.log(result)
    res.end(JSON.stringify(result))
    res.send("Data Deleted Succesfully");
  })
})









