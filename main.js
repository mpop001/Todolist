    
const localList= localStorage.getItem('Td');
const localuser = localStorage.getItem('username');
const localphoto = localStorage.getItem('photo')
var mydate = document.querySelector('header .Date'),
    myside = document.querySelector('header i'),
    cleanAll = document.getElementById('clean'),
    mainContent = document.querySelector('main'),
    myinput = document.querySelector('footer input'),
    myplus = document.querySelector('.plus'),
    myclose= document.querySelector('.menu i'),
    allitem = document.querySelector('.menu-content .right'),
    comItem = document.querySelector('.menu-content .left'),
    username = document.getElementById("username"),
    male = document.querySelector('.your-info .male'),
    female = document.querySelector('.your-info .female'),
    login = document.querySelector('.your-info .log');
    var screenheight = screen.availHeight - 250,
    string =  screenheight.toString();
    if(screen.width >=1024 ){
        mainContent.style = "";
    }else{mainContent.style = "height:" + string + "px";
    document.querySelector('.menu').style = "height:" + (screenheight+250) + "px";  
    document.querySelector('.into-page').style = "height:" + (screenheight+250) + "px";
}
    
    
    
    if (localuser == null){
        document.querySelector('.into-page').style.display = "flex";
       
    }else{
       
        document.querySelector('.into-page').style.display = "none"
        document.querySelector('.name-profile').textContent = localuser;
        document.getElementById('photo').src=localphoto;
    }
    
  
    female.onclick = function(){
        male.classList.remove('done')
        female.classList.toggle('done')
        document.getElementById('photo').src="img/profile.png"
        localStorage.setItem('photo',"img/profile.png")
      
        
    }
    male.onclick = function(){
        female.classList.remove('done')
        male.classList.toggle('done')
        document.getElementById('photo').src="img/profile (1).png"
        localStorage.setItem('photo',"img/profile (1).png")

    }
    
    login.onclick = function(){
        if(female.classList.contains("done") || male.classList.contains('done')){
            document.querySelector('.name-profile').textContent = username.value;
            document.querySelector('.into-page').style.display = "none";
            localStorage.setItem('username',username.value)
            
        }else{
            alert('You must to Enter all')
        }

    }


    myside.onclick = function(){
       
        if(screen.width< 375){
            document.querySelector('div.menu').style.transform ="translate(50px)";
        }
        if (screen.width >=375 && screen.width<425){
            document.querySelector('div.menu').style.transform ="translate(77px)";
        }
        if (screen.width >=425 && screen.width<=768){
            document.querySelector('div.menu').style.transform ="translate(364px)";
        }
        
        
       
    }
    myclose.onclick = function(){
        if(screen.width< 375){
            document.querySelector('div.menu').style.transform ="translate(-275px)";
        }
        if (screen.width >=375 && screen.width<425){
            document.querySelector('div.menu').style.transform ="translate(-260px)";
        }
        if (screen.width >=425 && screen.width<=768){
            document.querySelector('div.menu').style.transform ="translate(-260px)";
        }
      
      
        
    }




    mydate.textContent= time();

   if (localList == null){
     
   }else{
    mainContent.innerHTML = localList;
    calcitem()
   }
  
 
    window.onload = function(){
        myinput.focus();

    };
    cleanAll.onclick = function(){
        localStorage.clear();
        mainContent.innerHTML=''
        createNoItem();
        location.reload();
        
    }
 
myplus.onclick = function(){

    if( myinput.value === ""){
        alert("Please Enter Sameting")
    }
    else{
       
        var noItem = document.querySelector(".no-item");
        if(document.body.contains(document.querySelector(".no-item"))){
            noItem.remove();
        }
        var mydiv = document.createElement("div");
        mydiv.setAttribute('class',"item");
        var myspan = document.createElement('span');
        myspan.textContent = myinput.value;
        myspan.setAttribute('class',"test");
        var myremove = document.createElement("i");
        myremove.setAttribute('class',"far fa-trash-alt")
        mydiv.appendChild(myspan);
        mydiv.appendChild(myremove);
        mainContent.appendChild(mydiv)
        myinput.value = "";
        addtolocal(mainContent);
       calcitem();
    }
}

document.addEventListener("click",function(e){
    if(e.target.className == "far fa-trash-alt"){
        e.target.parentNode.remove();
        document.getElementById('remove').play();
        addtolocal(mainContent);
      calcitem();
        if(document.querySelector('main').childElementCount == 0){
            createNoItem();
        }
    }
    if(e.target.classList.contains('test')){
        e.target.classList.toggle("checked");
        document.getElementById('click').play();
        addtolocal(mainContent)
      calcitem();
    }
})





function time(){
    var option = {weekdat:"long",month:"long",day:"numeric"}
    let thetime = new Date();
    var mytime = thetime.toLocaleDateString("en-us",option);
    return mytime
}
function createNoItem(){
    mynoitem = document.createElement('div');
    mynoitem.classList.add("no-item");
    mynoitem.textContent = "No items";
    mainContent.appendChild(mynoitem);
}
function addtolocal(el){
    var x = el.innerHTML;
    localStorage.setItem('Td',x);
}

function calcitem(){
    allitem.textContent = document.querySelectorAll('main .item').length;
    comItem.textContent = document.querySelectorAll('main .checked').length;

}
