const express = require('express');
const app = express();
const morgan = require('morgan');

// aws bucket
const AWS = require('aws-sdk');
require('dotenv').config();
const Busboy = require('busboy');
const busboy = require('connect-busboy');
const busboyBodyParser = require('busboy-body-parser')

app.use(busboy())
app.use(busboyBodyParser())

app.use(morgan('dev'));


const pino = require('express-pino-logger')();

// DB
const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: 'localhost',
  database: 'postgres',
  password: process.env.DB_PASS,
  port: 5432,
})



// body parser to read requests
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(pino);
app.use(express.json());
//



app.get('/browse/:criteria', (req, response) => {
  var criteria = req.params.criteria;
  console.log(criteria);

  pool.query(`SELECT DISTINCT ${criteria} FROM davidsons_inventory WHERE ${criteria} IS NOT NULL`, (error, results) => {
    if (error) {
      throw error
    }

    var data = results.rows
    response.send(JSON.stringify({ data }));
  });


})

// TODO: Change inventory to davidsons_inventory

app.get('/inventory/:manufacturer', (req, response) => {
  var manufacturer = req.params.manufacturer;
  console.log(manufacturer);

  pool.query(`SELECT *
  FROM davidsons_inventory
  LEFT JOIN davidsons_attributes
  ON davidsons_attributes.itemno = davidsons_inventory.item_no
  LEFT JOIN davidsons_quantity
  ON davidsons_inventory.item_no = davidsons_quantity.item_number
  WHERE davidsons_inventory.manufacturer ILIKE '%${manufacturer}%'
  ORDER BY image1 ASC,
  total_quantity ASC`, (error, results) => {
    if (error) {
      throw error
    }

    var data = results.rows
    response.send(JSON.stringify({ data }));

  });


})
app.get('/api/model/:item_no', (req, response) => {
  var item_no = req.params.item_no;
  console.log(item_no);

  // pool.query(`SELECT * FROM davidsons_attributes WHERE itemno = '${itemno}'`, (error, results) => {
  pool.query(` SELECT * FROM davidsons_inventory
  LEFT JOIN davidsons_attributes
  ON davidsons_attributes.itemno = davidsons_inventory.item_no
  LEFT JOIN davidsons_quantity
  ON davidsons_inventory.item_no = davidsons_quantity.item_number
  WHERE davidsons_inventory.item_no = '${item_no}'`, (error, results) => {
    if (error) {
      throw error
    }

    var data = results.rows
    response.send(JSON.stringify({ data }));

  });


})

var pg = require('pg');

var conString = process.env.CONNSTRING //Can be found in the Details page
var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }






  let posts = []
  app.post('/api/post', function (req, res) {
  console.log("keys")
    const newPost = {
      image: req.body.image,
      product_name: req.body.product_name,
      product_description: req.body.product_description,
      msrp_price: req.body.msrp_price,
      sale_price: req.body.sale_price
    };
  
    posts.push(newPost)
    client.query(
      `INSERT INTO cds_inventory( uuid, image, product_name,Product_description, msrp_price, sale_price)
      VALUES(uuid_generate_v4(),'${newPost.image}', '${newPost.product_name}', '${newPost.product_description}', '${newPost.msrp_price}', '${newPost.sale_price}');`, (error, results) => {
        if (error) {
          throw error
        }
        res.send('POST request to the homepage')
      }
    );
  })
  
  
  app.get('/api/posts', function (req, response) {
    
   client.query(
      "SELECT * from cds_inventory", (error, results) => {
        if (error) {
          throw error
        }
        var data = results.rows
        response.send(JSON.stringify({ data }));
      }
    );
  })
  app.delete('/api/remove_post', function (req, response) {
    let id = req.body.id
    console.log(id);
    client.query(
      `DELETE FROM cds_inventory WHERE id = '${id}' `, (error, results) => {
        console.log(error, results);
        if (error) {
          throw error
        }
    
        // var data = results.rows
        var data = results.rows
        response.send(JSON.stringify({ data }));
      }
    );
  })
});






const BUCKET_NAME = process.env.NAME;
const ACCESS = process.env.ACCESS
const SECRET = process.env.SECRET

// TODO: be able to remove pictures from S3 programmatically? 
function uploadToS3(file) {
  let s3bucket = new AWS.S3({
    accessKeyId: ACCESS,
    secretAccessKey: SECRET,
    Bucket: BUCKET_NAME
  });
  s3bucket.createBucket(function () {
      var params = {
        Bucket: BUCKET_NAME,
        Key: file.name,
        Body: file.data
      };
      s3bucket.upload(params, function (err, data) {
        if (err) {
          console.log('error in callback');
          console.log(err);
        }
        console.log('success');
        console.log(data);
      });
  });
}

app.post('/api/upload', function (req, res, next) {

  console.log("body", req.body)
  // console.log("req", req)
  const element1 = req.body.element1;
console.log(element1)
  var busboy = new Busboy({ headers: req.headers });

  // The file upload has completed
  busboy.on('finish', function() {
    console.log('Upload finished');
    const file = req.files.element1;
    console.log(file);
 
    uploadToS3(file);
  });

  req.pipe(busboy);
});

app.listen(3001, () =>
  console.log(`Express server is running on localhost:3001`)
);

 