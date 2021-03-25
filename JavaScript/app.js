var userName = prompt("What is your name?")
alert(userName +', Welcome to Luxury Flight airline services')
var client = prompt("Have you tried our services?", "Yes, No")
if (client == "Yes"){
    prompt("What was your favorite trip?")
}
else if (client == "No"){
    var trip = prompt("Where do you prefere visiting?", "Maldives, Istanbul, Greece ")
}
else {alert("Hurry Up! Buy your tickets")}

if (trip == "Maldives"){
    alert("Hurry Up! Buy your tickets")
    document.write('<img src="https://www.hospitalitynet.org/picture/xxl_153121652.jpg?t=20201207121203"\>')

}
else if (trip == "Istanbul"){
    alert("Hurry Up! Buy your tickets")
document.write('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnJ-ZdFV7q_zJxoKO95YJ-bJuyA-isrMeoPw&usqp=CAU"\>')

}
else if (trip == "Greece"){
    alert("Hurry Up! Buy your tickets")
document.write('<img src="https://runningwithmiles.boardingarea.com/wp-content/uploads/2020/05/AdobeStock_68295918-scaled.jpeg"\>')

}
else (alert("Enjoy reviewing our website"))

confirm ("Sorry that took you so long ! xP ")
