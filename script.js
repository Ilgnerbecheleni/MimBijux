let text = "Mimbijoux"
let conta = 0;
setInterval(()=>{

if(conta<7){

conta++ ;
textcort = text.slice(conta);
document.title = textcort;
//console.log(textcort);
}else{
    conta++ ;
    textcort = text.slice(14-conta);
   // console.log(textcort);
    document.title = textcort;
if(conta>14){
    conta=0;
}

}



},80);
