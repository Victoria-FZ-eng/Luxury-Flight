var userName = prompt("What is your name?")
alert(userName +', Welcome to Luxury Flight airline services')
var client = prompt("Have you tried our services?", "Yes, No")
while (client !== "Yes" && client !== "No" ){ 
    client = prompt("Please answer" , "Yes, No")
}
if (client == "Yes"){
    prompt("What was your favorite trip?")
}
else {
    var trip = prompt("Where do you prefere visiting?", "Maldives, Istanbul, Greece ")
}
while (trip !== "Maldives" && trip !== "Istanbul" && trip !== "Greece" ){ 
    trip = prompt("Please answer" , "Maldives, Istanbul, Greece")
}
var img = ""; 

if (trip === "Maldives"){
    img = ('<img src="https://www.hospitalitynet.org/picture/xxl_153121652.jpg?t=20201207121203"\>')

}
else if (trip === "Istanbul"){
img = ('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnJ-ZdFV7q_zJxoKO95YJ-bJuyA-isrMeoPw&usqp=CAU"\>')

}
else  {
img = ('<img src="https://runningwithmiles.boardingarea.com/wp-content/uploads/2020/05/AdobeStock_68295918-scaled.jpeg"\>')

}

var shimg = ""
var noTickets = prompt("How many tickets?")
for (var i =1 ; i <= noTickets ; i++){
    shimg = shimg + img  
};

confirm ("Sorry that took you so long ! xP ")

document.write(shimg);


