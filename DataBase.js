const MongoClient = require("mongodb").MongoClient;
const assert = require('assert');
const uri = "mongodb+srv://Khafil_Matti123:Arsenal2002@cluster0.wcdk3.mongodb.net/DataBase?retryWrites=true&w=majority"
const client = MongoClient.connect(uri, {useUnifiedTopology: true})
// // .then((client)=>{const dbName = client.db("DataBase").collection("Customers");



const express = require('express');
const app = express(); 
app.use(express.json());
const port = 3000;



app.get('/.v1/getDataBase',(req,res)=>{
  console.log('DataBase');
})

app.post('/v1/postDataBase',(req,res) =>{
  console.log('postDataBase');

  const data = req.body;
  console.log(data);
})





app.post ('/createDataBase', (req,res) => {
  const data = req.body;
  console.log(data);
  client.connect(function(err){
    if (err) throw err;
    console.log("Connected");
    const db = client.db(dbName);
    const dbName =  db.collection("DataBase");
    insertusers(db,"Test", data)
  })
  // res.send(data);
  res.send("Person added");
})


app.post ('/createOrders', (req,res) => {
  const data = req.body;
  console.log(data);
  client.connect(function(err){
    if (err) throw err;
    console.log("Connected");
    const db = client.db(dbName);
    const dbusers =  db.collection("DataBase");
    insertOrdes(db, data)
  })
  // res.send(data);
  res.send("orders added");
})


app.post ('/createphones', (req,res) => {
  const data = req.body;
  console.log(data);
  client.connect(function(err){
    if (err) throw err;
    console.log("Connected");
    const db = client.db(dbName);
    // const dbusers =  db.collection("users");
    insertphones(db, data)
  })
  // res.send(data);
  res.send("phones added");
})




app.delete ('/deleteUser', (req,res) => {
  const data = req.body;
  console.log(data);
  client.connect(function(err){
    if (err) throw err;
    console.log("Connected");
    const db = client.db(dbName);
    const dbusers =  db.collection("users");
    removeusers(db, data)
  })
  // res.send(data);
  res.send("Person Deleted");

})


app.patch ('/updateUser', (req,res) => {
  const data = req.body;
  console.log(data);
  client.connect(function(err){
    if (err) throw err;
    console.log("Connected");
    const db = client.db(dbName);
    const dbusers =  db.collection("DataBase");
    updateusers(db, data)
  })
  // res.send(data);
  res.send("Person updated");
})

app.get ('/users', (req,res) => {
    res.send("hello");

    client.connect(function(err) {
  // using the assert module for testing
  assert.equal(null, err);
  console.log("Connected successfully to server");

  // use this database
  const db = client.db(dbName);
  const dbusers =  db.collection("users");
  insertusers(db,"Test")
    })

})

app.get ('/use', (req,res) => {
    res.send("hello");

    client.connect(function(err) {
  // using the assert module for testing
  assert.equal(null, err);
  console.log("Connected successfully to server");

  // use this database
  const db = client.db(dbName);
  const dbusers =  db.collection("DataBase");
  insertphones(db)
    })

})




app.get ('/user', (req,res) => {
    res.send("hello");

    client.connect(function(err) {
  // using the assert module for testing
  assert.equal(null, err);
  console.log("Connected successfully to server");

  // use this database
  const db = client.db(dbName);
  const dbusers =  db.collection("DataBase");
  insertOrdes(db)
    })

})



app.get ('/user1', (req,res) => {
    res.send("hello");

    collection.find({}).toArray(function(err, docs) {
        // using the assert module for testing
        assert.equal(err, null);
        // all good if we get to here
        console.log("Found the following records");
        console.log(docs)
      });
  // use this database
  const db = client.db(dbName);
  const dbusers =  db.collection("DataBase");
  findusers(db)
    })




app.get ('/users2', (req,res) => {
    res.send("hello");

    client.connect(function(err) {
  // using the assert module for testing
  collection.find({'Surname': 'Matti'}).toArray(function(err, docs) {
    // using the assert module for testing
    assert.equal(err, null);
    console.log("Found the following records");
    // all good if we get to here
    console.log(docs);
  });
  // use this database
  const db = client.db(dbName);
  const dbusers =  db.collection("DataBase");
  findusersFiltered(db)
    })

})



app.get ('/users3', (req,res) => {
    res.send("hello");

    client.connect(function(err) {
  // using the assert module for testing
  collection.updateOne({'EmailAddress' : "khafilmatti@gmail.com" }
      , { $set: { EmailAddress :  "khafilfmatti333@gmail.com" } }, function(err, result) {
      // using the assert module for testing
      assert.equal(err, null);
      // assert.equal(1, result.modifiedCount);
      // all good if we get to here
      console.log("Updated the document: reset EmailAdress field set to kahilfmatti333@gmail.com");
    });  
  // use this database
  const db = client.db(dbName);
  const dbusers =  db.collection("DataBase");
  
  updateusers(db)
    })

// })


app.get ('/users4', (req,res) => {
    res.send("hello");
    const db = client.db(dbName);
    const dbusers =  db.collection("users");
    client.connect(function(err) {
  // using the assert module for testing
  console.log("The document is removed")
  const collection = db.collection('users');
  // Delete document where email is "alondra.dunne@redmail.ie"
  collection.deleteOne({ 'Mobile': "1234567890" }, function(err, result) {
    // using the assert module for testing
    assert.equal(err, null);
    // assert.equal(1, result.deletedCount);
    // all good if we get to here      
    console.log("Removed the document with Mobile : '1234567890'");
  });    
  // use this database
  
  removeusers(db)
    })

})




// // const MongoClient = require("mongodb").MongoClient;
// // const assert = require('assert');
// // const uri = "mongodb+srv://Khafil_Matti123:Arsenal2002@cluster0.wcdk3.mongodb.net/DataBase?retryWrites=true&w=majority"
// // const client = MongoClient.connect(uri, {useUnifiedTopology: true})


// // InsertCustomer(dbName);
InsertCustomer(dbName, function() {
// //   FindCustomer(dbName, function() {
// //     UpdateCustomer(dbName, function() {
// //       removeCustomer(dbName, function(){
        InsertPhones(dbName,function() {
          FindPhones(dbName, function() {
            UpdatePhones(dbName, function() {
              removePhone(dbName, function(){
                UpdateOrders(dbName, function(){

          
      // client.close();
// //                 });
// // //             });
// // //           });
          });
        });
    });
    });
  });
})
});



// const InsertCustomer = function(collection, callback)
// {
// // Using the "documents" collection
// // const collection = dbName.collection('Customers');
// // console.log("This is running");
// // // // Insert some documents
// collection.insertMany([
//   {"Title":"Mr","FirstName":"Khafil","LastName":"Matti","Mobile":"1234567890","EmailAddress":"khafil@gmail.com","AddressLine1":"34 Avenue Street","AddressLine2":"Springfield","Town":"Maynooth","City":"Kildare","Eircode":"MU2022"},
//   {"Title":"Mr","FirstName":"Sean","LastName":"Mclean","Mobile":"0987654321","EmailAddress":"SeanMC@gmail.com","AddressLine1":"57 Avenue Lane","AddressLine2":"SpringLawn","Town":"Maynooth","City":"Kildare","Eircode":"MU2022"},
//   {"Title":"Mr","FirstName":"Aaron","LastName":"Keogh","Mobile":"0987654321","EmailAddress":"SeanMC@gmail.com","AddressLine1":"57 Avenue Lane","AddressLine2":"SpringLawn","Town":"Maynooth","City":"Kildare","Eircode":"MU2022"},
// ], function(err, result) {
//   if (err) throw err;
// // //   // using the assert module for testing
//   assert.equal(err, null);
// // //   // assert.equal(3, result.result.n);
// // //   // assert.equal(3, result.ops.length);
// // //   // all good if we get to here
//   console.log("Inserted 3 documents into the collection");
//   callback(result);
// });
//     }


// //     const FindCustomer = function(collection, callback) {
// //         // Get the documents collection
// //        // const collection = dbName.collection('Customers');
// //         // Find some documents
// //         collection.find({}).toArray(function(err, result) {
// //           // using the assert module for testing
// //           //assert.equal(err, null);
// //           // all good if we get to here
// //           console.log("Found the following records");
// //           console.log(result);
// //           callback(result);
// //         });
// //     }

//     const UpdateCustomer = function(collection, callback){
// // //         // Get the documents collection
// // //         //const collection = dbName.collection('Customers');
//         // Update document where email is "alondra.dunne@purplemail.ie", set to "alondra.dunne@redmail.ie"
//         collection.updateOne({EmailAddress : "khafil@gmail.com" }
//           , { $set: { email :  "khafilmatti@gmail.ie" } }, function(err, result) {
// // //           // using the assert module for testing
//           assert.equal(err, null);
// // //           // assert.equal(1, result.result.n);
// // //           // all good if we get to here
//           console.log("Updated the document: reset email field set to khafilmatti@gmail.ie");
//           callback(result);
//         });  
//       }
      // const removeCustomer = function(collection, callback){
      //   // Get the documents collection
      //   //const collection = dbName.collection('Customers');
      //   // Delete document where email is "alondra.dunne@redmail.ie"
      //   collection.deleteOne({ email : "khafil@gmail.com" }, function(err, result) {
      //     // using the assert module for testing
      //     // assert.equal(err, null);
      //     // assert.equal(1, result.result.n);
      //     // all good if we get to here      
      //     console.log("Removed the document with email : khafil@gmail.com");
      //     callback(result);
      //   });    
      // }

      const InsertPhones = function(collection, callback, data)
{
// // Using the "documents" collection
// // const collection = dbName.collection('Customers');
// // Insert some documents
collection.insertMany(data,
        {"manufacturer": "Apple", "model": "IPhone 13", "Price": "930" },
        {"manufacturer": "Apple", "model": "IPhone 12", "Price": "830" },
        {"manufacturer": "Apple", "model": "IPhone 11", "Price": "609" },
        {"manufacturer": "Apple", "model": "IPhone SE","Price": "530" },
        {"manufacturer": "Samsung", "model": "Samsung Galaxy S22", "Price": "880" },
        {"manufacturer": "Samsung", "model": "Samsung Galaxy A90", "Price": "600" },
        {"manufacturer": "Google", "model": "Google Pixel 6", "Price": "670" },
        {"manufacturer": "Google", "model": "Google Pixel 6 Pro", "Price": "850" },
        function(err, result) {
//   // using the assert module for testing
  assert.equal(err, null);
//   // assert.equal(3, result.result.n);
//   // assert.equal(3, result.ops.length);
//   // all good if we get to here
  console.log("Phones added to the collection");
  callback(result);
});
    }
    const FindPhones = function(dbName) {
      // Get the documents collection
     const collection = dbName.collection('Customers');
      // Find some documents
      collection.find({}).toArray(function(err, result) {
        // using the assert module for testing
        assert.equal(err, null);
        // all good if we get to here
        console.log("Found the following records");
        console.log(result);
        callback(result);
      });
  }
  const UpdatePhones = function(collection, callback, data){
    // Get the documents collection
    // const collection = dbName.collection('Customers');
    // Update document where email is "alondra.dunne@purplemail.ie", set to "alondra.dunne@redmail.ie"
    collection.updateOne({manufacturer : "Apple", model: "Iphone13", price: "930" }
      , { $set: { manufacturer :  "Apple", model: "IPhone 14", price: "930" } }, function(err, result) {
      // using the assert module for testing
      assert.equal(err, null);
      // assert.equal(1, result.result.n);
      // all good if we get to here
      console.log("Updated the document: reset phone field set to IPhone 14");
      callback(result);
    });  
  }
  const removePhone = function(collection, callback, data){
    // Get the documents collection
    // const collection = dbName.collection('Customers');
    // Delete document where email is "alondra.dunne@redmail.ie"
    collection.deleteOne({ manufacturer : "Apple", model: "Iphone12", price: "830"}, function(err, result) {
      // using the assert module for testing
      assert.equal(err, null);
      // assert.equal(1, result.result.n);
      // all good if we get to here      
      console.log("Removed the document with Phone : Iphone 12");
      callback(result);
    });    
  }

  const UpdateOrders = function(collection, callback)
  {
  // Using the "documents" collection
  //const collection = dbN.collection('Customers');
  // Insert some documents
  collection.insertMany([
    {"OrderNo":"12345","FirstName":"Khafil","LastName":"Matti" ,"Item": "Iphone 13"},
    {"OrderNo":"54321","FirstName":"Sean","LastName":"Mclean","Item": "Iphone 12"},
    {"OrderNo":"24680","FirstName":"Aaron","LastName":"Keogh","Item": "Iphone 11"}
  ], function(err, result) {
    // using the assert module for testing
    // assert.equal(err, null);
    // assert.equal(3, result.result.n);
    // assert.equal(3, result.ops.length);
    // all good if we get to here
    console.log("Updated 3 orders");
    callback(result);
  });
}
