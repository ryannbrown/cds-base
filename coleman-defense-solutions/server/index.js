const express = require('express');
const app = express();
const morgan = require('morgan');

// aws bucket
const AWS = require('aws-sdk');
const fs = require('fs');
const fileType = require('file-type');
const bluebird = require('bluebird');
const multiparty = require('multiparty');
require('dotenv').config();
const Busboy = require('busboy');


app.use(morgan('dev'));

// configure the keys for accessing AWS
// AWS.config.update({
//   // accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   // secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
//   region: 'us-east-2'
// });

// configure AWS to work with promises
// AWS.config.setPromisesDependency(bluebird);


// // create S3 instance
// const s3 = new AWS.S3();






const pino = require('express-pino-logger')();

// DB
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'Pass1234',
  port: 5432,
})
//



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

    //   const name = req.query.name || 'World';
    //   response.setHeader('Content-Type', 'application/json');
    //   response.send(JSON.stringify({ results }));
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

let posts = []
app.post('/api/post', function (req, res) {
  const newPost = {
    image: req.body.image,
    product_name: req.body.product_name,
    product_description: req.body.product_description,
    msrp_price: req.body.msrp_price,
    sale_price: req.body.sale_price
  };

  posts.push(newPost)
  // console.log("posts", posts)
  // console.log("body", req.body)
  pool.query(
    `INSERT INTO cds_inventory( uuid, image, product_name,Product_description, msrp_price, sale_price)
    VALUES(uuid_generate_v4(),'${newPost.image}', '${newPost.product_name}', '${newPost.product_description}', '${newPost.msrp_price}', '${newPost.sale_price}');`, (error, results) => {
      // console.log(error, results);
      if (error) {
        throw error
      }
  
      // var data = results.rows
      res.send('POST request to the homepage')
    }
  );
})


app.get('/api/posts', function (req, response) {
  
  pool.query(
    "SELECT * from cds_inventory", (error, results) => {
      // console.log(error, results);
      if (error) {
        throw error
      }
  
      // var data = results.rows
      var data = results.rows
      response.send(JSON.stringify({ data }));
    }
  );
})
app.delete('/api/remove_post', function (req, response) {
  let id = req.body.id
  console.log(id);
  pool.query(
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



function uploadToS3(file) {
  let s3bucket = new AWS.S3({
    accessKeyId: IAM_USER_KEY,
    secretAccessKey: IAM_USER_SECRET,
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
  // This grabs the additional parameters so in this case passing in
  // "element1" with a value.
  console.log(req.body)
  const element1 = req.body.element1;
console.log(element1)
  var busboy = new Busboy({ headers: req.headers });

  // The file upload has completed
  busboy.on('finish', function() {
    console.log('Upload finished');
    
    // Your files are stored in req.files. In this case,
    // you only have one and it's req.files.element2:
    // This returns:
    // {
    //    element2: {
    //      data: ...contents of the file...,
    //      name: 'Example.jpg',
    //      encoding: '7bit',
    //      mimetype: 'image/png',
    //      truncated: false,
    //      size: 959480
    //    }
    // }
    
    // Grabs your file object from the request.
    // const file = req.files.element2;
    // console.log(file);
    console.log(req.files)
    
    // Begins the upload to the AWS S3
    // uploadToS3(file);
  });

  req.pipe(busboy);
});

// abstracts function to upload a file returning a promise
// const uploadFile = (buffer, name, type) => {
//   console.log("something good happened")
//   // console.log("name", name)
//   // console.log("data", data)
//   const params = {
//     ACL: 'public-read',
//     Body: buffer,
//     Bucket: 'cdsinventoryimages',
//     ContentType: type.mime,
//     Key: `${name}.${type.ext}`,
//   };
//   return s3.upload(params).promise();
// };

// Define POST route
// app.post('/api/test-upload', (request, response) => {
//   console.log("this happened")
//   // console.log("body", response.body)
//   // console.log("request", request)
//   // console.log("response", response)
//   const form = new multiparty.Form();
//     form.parse(request, async (error, fields, files) => {
//     // console.log("files", files)
//     console.log("fields", fields)
//       // if (error) throw new Error(error);
//       try {
//         const path = fields.file[0].path;
//         const buffer = fs.readFileSync(path);
//         const type = fileType(buffer);
//         const timestamp = Date.now().toString();
//         const fileName = `bucketFolder/${timestamp}-lg`;
//         const data = await uploadFile(buffer, fileName, type);
//         return response.status(200).send(data);
//       } catch (error) {
//         return response.status(400).send(error);
//       }
//     });
// });
// //
// app.post('/api/test-upload', (request, response) => {
//   console.log(response)
//   const form = new multiparty.Form();
//     form.parse(request, async (error, fields, files) => {
//       if (error) throw new Error(error);
//       try {
//         const path = files.file[0].path;
//         const buffer = fs.readFileSync(path);
//         const type = fileType(buffer);
//         const timestamp = Date.now().toString();
//         const fileName = `bucketFolder/${timestamp}-lg`;
//         const data = await uploadFile(buffer, fileName, type);
//         return response.status(200).send(data);
//       } catch (error) {
//         return response.status(400).send(error);
//       }
//     });
// });

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);

 