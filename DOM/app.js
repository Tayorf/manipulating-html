document.addEventListener('DOMContentLoaded', function () {
//objective 1
let button=document.createElement('BUTTON')
button.textContent="1.Wanna Talk to Spongebob?";
document.body.appendChild(button);

button.addEventListener("click",function(){
    alert("Can I be excused for the rest of my Life?");
});

//objective 2
let anotherButton=this.getElementById("btnClick");
    anotherButton.addEventListener('click',function(){
        alert("I can't see my forehead!!!")
    });
//task 3
let threeDiv = document.getElementById("threeDiv");
threeDiv.setAttribute("style", "background-color:lightyellow");

threeDiv.onmouseover = function () {
    threeDiv.setAttribute("style", "background-color: pink");
};
threeDiv.onmouseout = function () {
    threeDiv.setAttribute("style", "background-color: lightyellow");
};

//task 4
let para=document.createElement('p');
para.textContent='4. F is for friends who do stuff together U is for you and me N is for anywhere and anytime at all Down here in the deep blue sea F is for fire that burns down the whole town U is for uranium, bombs N is for no survivors when you Plankton those thing arent what fun is all about Now do it like this F is for friends who do stuff to Never, thats completely idiotic Here, let me help you F is for friends who do stuff together U is for you and me Try it N is for anywhere and anytime at all Down here in the deep blue sea Wait, I dont understand this I feel all tingly inside, should we stop? No, thats how youre suppose to feel Well, I like it, lets do it again Okay F is for frolick through all the flowers U is for ukulele N is for nose picking, sharing gum and sand licking Here with my best buddy'
document.body.appendChild(para);
function changeColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};
para.addEventListener("click",function(){
    para.style.color=changeColor();
});

let btnFive=document.createElement('Button');
btnFive.textContent='5.Im ready!';
document.body.appendChild(btnFive);

let divTwo=document.createElement('div');
btnFive.appendChild(divTwo);

btnFive.addEventListener("click",function(){
    let span=document.createElement("span");
    span.textContent="Spongebob Squarepants";
    btnFive.appendChild(span);
});

let friendBtn=document.getElementById('friends');
friendBtn.textContent='You got friends?';
let list=document.getElementById('names');
let counter=0;

friendBtn.addEventListener('click', function(){
    const friend=["spongebob", "patrick","plankton","mr krabs","sandy","squidward","gary","mrs puff","mermaid man","barnacle boy"];
    if(counter==10){
        return;
    } else{
        let friends=friend[counter];
        let listItem=document.createElement('li');
        listItem.textContent=friend;
        list.appendChild(listItem);
        counter++;
    };
});


});