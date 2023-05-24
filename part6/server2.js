var express = require("express"),
http = require("http"),
/*mongoose = require("mongoose"),*/
app = express(),
toDos =
[
  {
    "title": "Luxury Apartment for Rent",
    "category": "Real Estate",
    "price": "$2,500 per month",
    "location": "New York, NY",
    "description": "Spacious 2-bedroom apartment with stunning views of the city skyline. Located in the heart of downtown and just steps away from public transportation and major attractions. Amenities include a gym, pool, and 24-hour doorman.",
    "image": "forDiscord.jpg",
    "tags": ["realty", "luxury", "apartment", "rental"]
  },
  {
    "title": "Gently Used Bicycle for Sale",
    "category": "Sporting Goods",
    "price": "$200",
    "location": "San Francisco, CA",
    "description": "Blue Trek bicycle in excellent condition. Suitable for road or trail riding. Comes with a lock and helmet. Selling because I'm moving out of the country.",
    "image": "forDiscord.jpg",
    "tags": ["bicycle", "sporting goods", "used", "sale"]
  },
  {
    "title": "Vintage Vinyl Records for Sale",
    "category": "Music",
    "price": "$50 for the lot",
    "location": "Chicago, IL",
    "description": "Collection of 20 vintage vinyl records in various genres, including rock, jazz, and blues. All records are in good condition and come with their original sleeves. Selling as a lot only.",
    "image": "forDiscord.jpg",
    "tags": ["music", "vinyl", "records", "vintage", "sale"]
  },
  {
    "title": "Antique Writing Desk for Sale",
    "category": "Furniture",
    "price": "$800",
    "location": "Boston, MA",
    "description": "Beautiful mahogany writing desk with intricate carvings and brass hardware. Features a leather writing surface and multiple drawers for storage. In excellent condition, a true piece of craftsmanship.",
    "image": "forDiscord.jpg",
    "tags": ["furniture", "desk", "antique", "writing", "sale"]
  },
  {
    "title": "Professional DSLR Camera for Sale",
    "category": "Electronics",
    "price": "$1,500",
    "location": "Los Angeles, CA",
    "description": "Canon EOS 5D Mark IV professional DSLR camera with 24-105mm lens. Used only a handful of times, in like-new condition. Comes with original box, manuals, and accessories.",
    "image": "forDiscord.jpg",
    "tags": ["electronics", "camera", "dslr", "professional", "sale"]
  },
  {
    "title": "Brand New Designer Handbag for Sale",
    "category": "Fashion",
    "price": "$500",
    "location": "Miami, FL",
    "description": "Stylish and elegant designer handbag from a top luxury brand. Made of high-quality leather with gold-tone hardware. Brand new with tags, never been used.",
    "image": "forDiscord.jpg",
    "tags": ["fashion", "handbag", "designer", "luxury", "sale"]
  }
];


app.use(express.static(__dirname + "/client"));
http.createServer(app).listen(3000);

app.get("/ads.json", function (req, res) {
  /*Ad.find({}, function (req, res) {
    //console.log('Error');
    
  })*/
  res.json(toDos);
  
});

app.use(express.static(__dirname + "/client"));
app.use(express.urlencoded({ extended: true }));
/*mongoose.connect('mongodb://localhost/web_kai');*/
app.post("/ads", function (req, res) { // сейчас объект сохраняется в req.body
  var newToDo = req.body;
  console.log(newToDo);
  toDos.push(newToDo);

  res.json({"message":"Вы размещаетесь на сервере!"}); // отправляем простой объект
});


/*app.post("/ads", function (req, res) { // сейчас объект сохраняется в req.body
  var newToDo = new Ad({"description":req.body.description,
    "tags":req.body.tags});
  newToDo.sale(function (err,result) {
    if (err !== null) {
      console.log(err);
      res.send('ERROR');
    }
    else{
      Ad.find({}, function (err, result){
        if (err !== null) {
          res.send("ERROR");
        }
        res.json(result);
      })
    }
  })
  console.log(newToDo);
  toDos.push(newToDo);

  res.json({"message":"Вы размещаетесь на сервере!"}); // отправляем простой объект
});*/

/*var AdSchema = mongoose.Schema({
  description:String,
  tags:[String]
});

var Ad = mongoose.model('Ad', AdSchema);

*/
