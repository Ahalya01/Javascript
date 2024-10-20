var arr = [
    {
        "id": 1,
        "title": "Rose Gold Charm Bracelet",
        "price": 59.99,
        "description": "A beautiful rose gold bracelet adorned with sparkling charms for a delicate and elegant look.",
        "category": "jewelery",
        "image": "https://m.media-amazon.com/images/I/71NbkTQGTML._SY625_.jpg",
        "rating": {
            "rate": 4.7,
            "count": 150
        }
    },
    {
        "id": 2,
        "title": "Silver Infinity Bracelet",
        "price": 34.99,
        "description": "A timeless silver bracelet featuring the infinity symbol, symbolizing eternal love and friendship.",
        "category": "jewelery",
        "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR1Z1yVHNOABPwzs08RBKZVwPpLQVk0KVgDKTuNTt-zAOWG1mMw9MB2HeRwuyKkGW8EgJGYMzean4RVE7lgMsgNtcwncT6vXblRVtZwu1yc",
        "rating": {
            "rate": 4.5,
            "count": 240
        }
    },
    {
        "id": 3,
        "title": "Beaded Boho Bracelet",
        "price": 12.50,
        "description": "A vibrant boho-style bracelet made of colorful beads and tassels, perfect for casual outfits.",
        "category": "jewelery",
        "image": "https://m.media-amazon.com/images/I/51ad6wri88L._SY695_.jpg",
        "rating": {
            "rate": 4.3,
            "count": 320
        }
    },
    {
        "id": 4,
        "title": "Gold Plated Bangle Set",
        "price": 29.99,
        "description": "An exquisite set of gold-plated bangles designed to enhance any traditional outfit.",
        "category": "jewelery",
        "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTYzNJAx7_4UCMfKhb5N06_kQwFj4XQ6AeUjAeKxOYXINsNCKj3WrQzEa4DiFmcmWAzh80Wc80AQaHUH4aUDyZ-dnZ1rHYALDfu3hW1UKlo5SvPbKkQp8v0&usqp=CAE",
        "rating": {
            "rate": 4.0,
            "count": 400
        }
    }
];

document.getElementById('id1').innerHTML = `
  <style>
      #id1 {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-top: 20px;
      }
      .card {
          width: 18rem;
          border: 1px solid #ddd;
          border-radius: 5px;
          overflow: hidden;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          margin-bottom: 20px;
      }
      .card img {
          width: 100%;
          height: auto;
      }
      .card-body {
          padding: 15px;
      }
  </style>
`;

var card = document.getElementById("id1");
var colors = ["lightpink", "lavender", "peachpuff", "lightsalmon", "lightcoral"];

function fun1() {
    for (i = 0; i < arr.length; i++) {
        card.innerHTML += `
        <section class="popular-places" id="popular" style="text-align: center;">
            <small style="color: blue; font-size: 0.8rem; font-family: Verdana, Geneva, Tahoma, sans-serif;">Popular Places</small>
            <p style="font-weight: 650;">To Travel is to Live...</p>
            <div class="container text-center" style="background-color: ${colors[i % colors.length]};">
                <div class="row">  
                    <div class="col">
                        <div class="card" style="width: 18rem;">
                            <img src="${arr[i].image}" class="card-img-top" alt="Bracelet Image" style="width: 285px; height: 350px;">
                            <div class="card-body">
                                <h5 class="card-title">${arr[i].title}</h5>
                                <a href="#" class="btn btn-primary">See More...</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `;
    }
}
