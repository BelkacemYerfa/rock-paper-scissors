//Js code

const Item1 = document.getElementById('menu1');
const Item2 = document.getElementById('menu2');
const Item3 = document.getElementById('menu3');
const Card = document.getElementById('card');
const SvgImage = document.querySelector('svg');
const main = document.querySelector("main")
const PickForm = document.querySelector(".pickedForm");
const UserItem = document.querySelector(".UserItem");
const PcItem = document.querySelector(".PcItem");
const Span = document.getElementById("Score");
const Span2 = document.getElementById("Score2");
const P1 = document.getElementById("win1"); 
const P2 = document.getElementById("win2");
const Say = document.getElementById("SayWinner")
const BtnReplay = document.getElementById("RePlay")

const BtnRules = document.getElementById("RulesBtn")
const BtnRules2 = document.getElementById("RulesBtn2")
const Rules = document.getElementById("Rules");

var MobileScreen = window.matchMedia("(max-width: 600px)")

BtnRules.onclick = () => {
  if(Rules.style.display != "block"){
    Rules.style.display = "block";
    Item1.style.display = "none";
    Item2.style.display = "none";
    Item3.style.display = "none";
    Card.style.display = "none";
    SvgImage.style.display = "none";
  }else{
    Rules.style.display = "none"
    Item1.style.display = "block";
    Item2.style.display = "block";
    Item3.style.display = "block";
    Card.style.display = "flex";
    SvgImage.style.display = "block";
    SvgImage.style.marginLeft = "25s%";
    if(MobileScreen.matches){
      SvgImage.style.marginLeft = "20%";
      SvgImage.style.marginTop = "0px";
    }
    SvgImage.style.marginTop = "80px";
    /*
    const toggle = document.getElementById("toggle"); 
     toggle.onclick = () => {
      if (Rules.style.display != "none"){
        Rules.style.display = "none";
      }
      else{
        Rules.style.display = "block";
      }
    }
    //check later 
    */
  }
}



const ArrayImage = [
 {
  "id" : '../images/icon-paper.svg',
  "backColor" : '#ec9e0e' 
 } , 
 {
  "id" : '../images/icon-scissors.svg',
  "backColor" :  '#4865f4'  ,
 },
 {
  "id" : '../images/icon-rock.svg',
  "backColor" : '#dc2e4e '
 }
] 

var count = 0;
let Counter = 0 ;
Item1.onclick = () => {
  BtnReplay.onclick = () =>{
    main.style.display = 'block';
    PickForm.style.display = 'none'
    ChosenItem.remove();
    ItemImage.remove();
    ItemImagePC.remove();
    PcChosenItem.remove();
    
  }; 
  main.style.display = 'none';
  PickForm.style.display = 'block';
  const ChosenItem = document.createElement('div');
  const ItemImage = document.createElement('img');
  ItemImage.src = ArrayImage[0].id;
  ChosenItem.setAttribute('style', 'width:170px ; height:170px ; border-radius:50%')
  ChosenItem.style.backgroundColor = '#eca922';
  ChosenItem.appendChild(ItemImage);
  UserItem.appendChild(ChosenItem);
  const PcChosenItem = document.createElement('div');
  const ItemImagePC = document.createElement('img');
  let index = Math.floor(Math.random()*3) ; 
  ItemImagePC.src = ArrayImage[index].id;
  PcChosenItem.setAttribute('style', ' width:170px ; height:170px ; border-radius:50% ')
  PcChosenItem.style.backgroundColor = ArrayImage[index].backColor;
  //or you can use the .style method
  PcChosenItem.appendChild(ItemImagePC);
  PcItem.appendChild(PcChosenItem);
  if(index == 2 ){
    P1.style.display = 'block';
    P2.style.display = 'none';
    Say.innerText = 'YOU WIN';
    Counter = ++count
    Span.innerText = Counter
    Span2.innerText = Counter  
  }
  else if(index == 1 ) {
    P2.style.display = 'block';
    P1.style.display = 'none';
    Say.innerText = 'YOU LOSE';
    Counter = --count
    Span.innerText = Counter
    Span2.innerText = Counter 
  }
  else{
    Say.innerText = 'EQUAL';
    P2.style.display = 'none';
    P1.style.display = 'none';
  }
}

Item2.onclick = () => {
  BtnReplay.onclick = () =>{
    main.style.display = 'block';
    PickForm.style.display = 'none'
    ChosenItem.remove();
    ItemImage.remove();
    ItemImagePC.remove();
    PcChosenItem.remove();
  };
  main.style.display = 'none';
  PickForm.style.display = 'block';
  const ChosenItem = document.createElement('div');
  const ItemImage = document.createElement('img');
  ItemImage.src = ArrayImage[1].id;
  ChosenItem.setAttribute('style', 'width:170px ; height:170px ; border-radius:50%')
  ChosenItem.style.backgroundColor = '#5671f5';
  ChosenItem.appendChild(ItemImage);
  UserItem.appendChild(ChosenItem);
  const PcChosenItem = document.createElement('div');
  const ItemImagePC = document.createElement('img');
  let index = Math.floor(Math.random()*3) ; 
  ItemImagePC.src = ArrayImage[index].id;
  PcChosenItem.setAttribute('style', ' width:170px ; height:170px ; border-radius:50% ')
  PcChosenItem.style.backgroundColor = ArrayImage[index].backColor;
  //or you can use the .style method
  PcChosenItem.appendChild(ItemImagePC);
  PcItem.appendChild(PcChosenItem);
  if(index == 0 ){
    P1.style.display = 'block';
    P2.style.display = 'none';
    Say.innerText = 'YOU WIN';
    Counter = ++count
    Span.innerText = Counter
    Span2.innerText = Counter  
  }
  else if(index == 2 ) {
    P2.style.display = 'block';
    P1.style.display = 'none';
    Say.innerText = 'YOU LOSE';
    Counter = --count
    Span.innerText = Counter
    Span2.innerText = Counter  
  }
  else{
    Say.innerText = 'EQUAL';
    P2.style.display = 'none';
    P1.style.display = 'none';
  }
}

Item3.onclick = () => {
  BtnReplay.onclick = () =>{
    main.style.display = 'block';
    PickForm.style.display = 'none'
    ChosenItem.remove();
    ItemImage.remove();
    ItemImagePC.remove();
    PcChosenItem.remove();
  };
  main.style.display = 'none';
  PickForm.style.display = 'block';
  const ChosenItem = document.createElement('div');
  const ItemImage = document.createElement('img');
  ItemImage.src = ArrayImage[2].id;
  ChosenItem.setAttribute('style', 'width:170px ; height:170px ; border-radius:50%')
  ChosenItem.style.backgroundColor = '#dc2e4e';
  ChosenItem.appendChild(ItemImage);
  UserItem.appendChild(ChosenItem);
  const PcChosenItem = document.createElement('div');
  const ItemImagePC = document.createElement('img');
  let index = Math.floor(Math.random()*3) ; 
  ItemImagePC.src = ArrayImage[index].id;
  PcChosenItem.setAttribute('style', ' width:170px ; height:170px ; border-radius:50% ')
  PcChosenItem.style.backgroundColor = ArrayImage[index].backColor;
  //or you can use the .style method
  PcChosenItem.appendChild(ItemImagePC);
  PcItem.appendChild(PcChosenItem);
  if(index == 1 ){
    P1.style.display = 'block';
    P2.style.display = 'none';
    Say.innerText = 'YOU WIN';
    Counter = ++count
    Span.innerText = Counter
    Span2.innerText = Counter  
  }
  else if(index == 0 ) {
    P2.style.display = 'block';
    P1.style.display = 'none';
    Say.innerText = 'YOU LOSE';
    Counter = --count
    Span.innerText = Counter
    Span2.innerText = Counter  
  }
  else{
    Say.innerText = 'EQUAL';
    P2.style.display = 'none';
    P1.style.display = 'none';
  }
}