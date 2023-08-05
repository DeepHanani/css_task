const data = [
  {
      id: 1,
      name: "Fire Boltt Ninja 2",
      img: "https://m.media-amazon.com/images/I/617eiZeFtNL._SL1500_.jpg",
      amt: 1599,
      seller: "Boltt Store",
      catagory: "Watch",
  },

  {
      id: 2,
      name: "Noise Pulse Go",
      img: "https://m.media-amazon.com/images/I/61akt30bJsL._SL1500_.jpg",
      amt: 1300,
      seller: "Noise Store",
      catagory: "Watch",
  },

  {
      id: 3,
      name: "boAt Xtend Pro",
      img: "https://m.media-amazon.com/images/I/61ZuL8CUigL._SL1500_.jpg",
      amt: 2799,
      seller: "Rajesh Watchs",
      catagory: "Watch",
  },
  {
      id: 4,
      name: "Lenovo Tab M8",
      img: "https://m.media-amazon.com/images/I/71SvqTFPXJL._SL1500_.jpg",
      amt: 9270,
      seller: "Stonehenge Retail",
      catagory: "Tablets",
  },
  {
      id: 5,
      name: "Honor PAD X8",
      img: "https://m.media-amazon.com/images/I/710G-VKcgtL._SL1500_.jpg",
      amt: 12999,
      seller: "Honor india",
      catagory: "Tablets",
  },

  {
      id: 6,
      name: "IKALL N9 ",
      img: "https://m.media-amazon.com/images/I/7185GL6hPlL._SL1500_.jpg",
      amt: 3999,
      seller: "IKALL Store",
      catagory: "Tablets",
  },

  {
      id: 7,
      name: "Oppo Pad Air",
      img: "https://m.media-amazon.com/images/I/513FD4w8hGL._SL1500_.jpg",
      amt: 15999,
      seller: "Oppo Store",
      catagory: "Tablets",
  },
  {
      id: 8,
      name: "Acer EK220Q",
      img: "https://m.media-amazon.com/images/I/8150iUXkc5L._SL1500_.jpg",
      amt: 6249,
      seller: "Accer Store",
      catagory: "Monitors",
  },
  {
      id: 9,
      name: "Samsung 24",
      img: "https://m.media-amazon.com/images/I/81TjRLHaz1L._SL1500_.jpg",
      amt: 9799,
      seller: "Samsung Store",
      catagory: "Monitors",
  },

  {
      id: 10,
      name: "ZEBRONICS AC32FHD ",
      img: "https://m.media-amazon.com/images/I/813Y1TIZwfL._SL1500_.jpg",
      amt: 12799,
      seller: "ZEBRONICS Store",
      catagory: "Monitors",
  },
];
 
 
 
 fetch("https://pear-shy-caterpillar.cyclic.app/api/products")
.then(y=>y.json())
.then(y=>{

    console.log(y);

    display(y);

    data=y;
    
})



    // console.log(items, "Items..........")
  
    let html = data.map(function(value,index){
      return (`<div class="post-1">
              <img src="${value.img}" alt="">
        <div class="part-1">
             <div class="desc">
             <p class="name">${value.name}</p>
             </div>
              <div class="ratings">
              <p class="rating">${value.seller}*</p>
              </div>
        </div>
        <div class="part-2">
              <div class="categorys">
              <p class="category">${value.catagory}</p>
              </div>
              <div class="pricies">
              <p class="price">${value.amt}$</p>
              </div>
         </div>
            <hr>     
             
               </div>`)
    })
   
  
    document.getElementById("pro").innerHTML = html.join("");
 




  function searchInfo(){
    
    let a = document.getElementById("searchThem").value;
  
  
    let d = data.filter(function (value,index){

      console.log(value , "nnnnn");
  
      return value.name.toLocaleLowerCase().includes(a.toLocaleLowerCase());
    });
   
  
    console.log(d);
  }



 
  
  
  