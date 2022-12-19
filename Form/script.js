var btn=document.getElementById("go-button");

function buttonClick() {
  console.log("My name is Sulaiman");
    btn.removeEventListener("click",buttonClick);
    document.getElementById("text").innerHTML="don't do it";
}

var hobbies=["reading","boxing","WWE"];
console.log(hobbies);

hobbies.push("archery");
console.log(hobbies.shift());

hobbies.forEach(function(item,index)
{
console.log("I like",item);
})
btn.addEventListener("click", buttonClick);

