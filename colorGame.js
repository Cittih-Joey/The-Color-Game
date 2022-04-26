var squares_Bx = document.querySelectorAll(".squares");
var Dsp_Ges = document.querySelector("#Guess");
var Msg_Dsp = document.querySelector("#message");
var h1 = document.querySelector("#Container h1");
var New_Gm = document.querySelector(".Restart");
var Gm_Btns = document.querySelectorAll(".highlight");
var Hrd_Btn = document.querySelector("#level");
var Esy_Btn = document.querySelector(".level");
var Lvls = 6;
var Gm_Gnrt = randomColors();


function  x(){

}
for(let x = 0; x < Lvls; x++){
    squares_Bx[x].style.background = randomColors();
    squares_Bx[x].addEventListener("click", function () {
        var Clk_Clr = this.style.background;
        if(Clk_Clr === Dsp_Ges.textContent){
            Msg_Dsp.textContent =  "Correct!!";
            Msg_Dsp.style.color = "rgb(105, 207, 105)"
            Cng_Clr(Clk_Clr);
            New_Gm.textContent = "PLAY AGAIN?"
            h1.style.background = Clk_Clr;
            this.classList.remove("fadeOut")
        }else {
            Msg_Dsp.textContent = "Try Again!"
            Msg_Dsp.style.color = "red"
            this.classList.add("fadeOut")
            this.classList.remove("fadeIn")
        }
    })
}
function randomColors(){
    var r = Math.floor(Math.random() * 256)
        g = Math.floor(Math.random() * 256)
        b = Math.floor(Math.random() * 256)
    return "rgb(" + r+ ", " + g + ", " + b +")";
}
//This function here randomly picks a box from the squareBox.
//The box picked is then given as a guess.
function Clr_Pck(){
    var ranDOM = Math.floor(Math.random() * Lvls);
    return squares_Bx[ranDOM].style.background;
}
Dsp_Ges.textContent = Clr_Pck();
//I'm trying to clean up my code here with this function
function Gm_Func(){
    h1.style.background = "rgb(5, 245, 125)";
    Msg_Dsp.textContent = "";
    Clr_Pck();
    Dsp_Ges.textContent = Clr_Pck();
    New_Gm.textContent = "NEW COLORS"
}
// This function here changes the color(Cng_Clr) when you win Game
function Cng_Clr(color){
    for(let x = 0; x < Lvls; x++){
        squares_Bx[x].classList.add("fadeIn");
        squares_Bx[x].style.background = color;
    }
}
// This button is to starts a New Game(New_Gm)....
New_Gm.addEventListener("click", function(){
    for(let x = 0; x < Lvls; x++){
        squares_Bx[x].classList.remove("fadeOut")
        squares_Bx[x].style.background = randomColors();
    } 
    this.textContent = "NEW COLORS";
    Gm_Func();
})

Hrd_Btn.addEventListener("click", function(){
    Hrd_Btn.classList.add("highlight");
    Esy_Btn.classList.remove("highlight");
    Lvls = 6;
    for(let x = 0; x < Lvls; x++){
        squares_Bx[x].classList.remove("fadeOut")
        squares_Bx[x].style.background = randomColors();
        squares_Bx[x].style.display = "block";
    }
    Gm_Func();
})

Esy_Btn.addEventListener("click", function(){
    Esy_Btn.classList.add("highlight");
    Hrd_Btn.classList.remove("highlight");
    Lvls = 3;
    for(let x = 0; x < squares_Bx.length; x++){
        squares_Bx[x].classList.remove("fadeOut")
        squares_Bx[x].style.background = randomColors();
        Gm_Func();
        if(Lvls[x]){
            squares_Bx[x].style.background = Lvls[x].randomColors();
        }else{
            for(let x = Lvls; x < squares_Bx.length; x++){
                squares_Bx[x].style.display = "none";
            }
        }
    }
})




































// function Gm_Lvls(num){
//     for(let x = 0; x < num; x++){
//         if(Lvls){
//             squares_Bx[x].style.background = randomColors();
//             }else{
//             squares_Bx[Lvls].style.display = "none";
//             }
//     }
// }
























// function Clr_Pck(raam){
//     raam = Math.floor(Math.random() * squares_Bx.length);
//     raam = squares_Bx[raam].style.background;
//     var radDAN = raam.replace(/"([^']+(?='))"/g, '$1');
//     return radDAN;
// }

// shw_Ges.textContent = `Guess this Color ${Clr_Pck()}`;
// function Gm_Gnrt(){
//     for(let x = 0; x < squares_Bx.length; x++){
//         squares_Bx[x].style.background = randomColors();
//         squares_Bx[x].addEventListener("click", function () {
//             var Clk_Clr = this.style.background;
//             if(Clk_Clr === shw_Ges.textContent){
//                 Msg_Dsp.textContent = "Correct!!";
//                 Cng_Clr(Clk_Clr);
//                 h1.style.background = Clk_Clr;
//             }else{
//                 Msg_Dsp.textContent = "Try Again!"
//                 this.style.background = "rgb(48, 46, 46)";
//                 this.style.border = "3px solid rgb(48, 46, 46)";
//             }
//         })
//     }
// }