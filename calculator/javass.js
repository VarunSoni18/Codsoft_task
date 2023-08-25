// const  input=document.getElementsByID('inputbox');
// const buttons= document.querySelectorAll('button');

// let string="";
// let arr =Array.from(buttons);

//  arr.forEach(button  =>{
//     button.addEventListener('click',(e)=>{
//         if(e.target.innerHTML=='='){
//             string=eval(string);
//             input.value=string;       }
//             else if( e.target.innerHTML=='AC'){
//                 string="";
//                 input.value=string;
//             }
//             else{
//                 string+=e.target.innerHTML;
//                 input.value=string;
//             }
//     }
//     )

//  })



let string="";
let buttons= document.querySelectorAll('button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click' ,(e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='AC'){
            string="";
            document.querySelector('input').value='';
        }
       else if(e.target.innerHTML=='C'){
            string="";
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='del'){
            string=string.substring(0,string.length-1);
            document.querySelector('input').value=string;
        }
      else   if(e.target.innerHTML=='%'){
            string=string/100;
            document.querySelector('input').value=string;
        }
       else{ console.log(e.target);
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string;}
       })
})



