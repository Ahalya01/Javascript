let CardContainer = document.createElement("div");
let image = document.createElement("img");
let Title=document.createElement("h4");
let descrption=document.createElement("p");
let price=document.createElement("h4")
let buybutton=document.createElement("button");
CardContainer.append(image,Title,descrption,price,buybutton);
document.body.appendChild(CardContainer);
//Image Attributes
image.setAttribute("src","https://cdn.eternz.com/thumbnails/products/ZLBR-1012-1_5e6ad03f-043e-4ed7-995f-8c21ec70f08c_26b65ee6_thumbnail_2048.jpg");
image.setAttribute("width","100%");
// Image styling
image.style.borderRadius = "10px";
image.style.marginBottom = "15px";
//Title
Title.textContent="Rose Gold Glittering Zirconia Infinity Bangle Adjustable"
// Title styling
Title.style.fontSize = "18px";
Title.style.color = "black";
Title.style.fontWeight = "bold";
Title.style.marginBottom = "10px";
//Descrption
descrption.textContent="A stunning rose gold bangle adorned with glittering zirconia stones, featuring an elegant infinity design."
descrption.style.fontStyle="italic"
//Description styling
descrption.style.fontSize = "14px";
descrption.style.color = "gray";
descrption.style.fontStyle = "italic";
descrption.style.marginBottom = "15px";
descrption.style.lineHeight = "1.5";
//price
price.textContent="2899/-"
// Price styling
price.style.fontSize = "20px";
price.style.color = "orange";
price.style.fontWeight = "bold";
price.style.marginBottom = "15px";

//Buy button
buybutton.innerHTML="Buy Now";
buybutton.style.backgroundColor="lightblue"
// Buy Button styling
buybutton.style.padding = "10px 20px";
buybutton.style.fontSize = "16px";
buybutton.style.backgroundColor = "lightgreen";
buybutton.style.color = "white";
buybutton.style.border = "none";
buybutton.style.borderRadius = "5px";
// CardContainer styling
CardContainer.style.border = "2px solid #333";
CardContainer.style.borderRadius = "15px";
CardContainer.style.display = "inline-block";
CardContainer.style.margin = "20px";
CardContainer.style.padding = "20px";
CardContainer.style.width = "300px";
CardContainer.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
CardContainer.style.textAlign = "center";
CardContainer.style.background = "linear-gradient(45deg, lightpink, lightblue)";

