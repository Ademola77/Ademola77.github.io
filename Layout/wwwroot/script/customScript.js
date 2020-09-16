


function sidePanel_Minimizer()
{
    let parent_Obj=document.getElementById('hamburger_ParentID');
    let wrapper_Obj=document.getElementById('wrapperID');    
    let sidePanel_Obj=document.getElementById('sidePanelID');

    if ( (!wrapper_Obj.classList.contains('ON')) && (!wrapper_Obj.classList.contains('OFF')))
    {
        wrapper_Obj.classList.add('ON');       
    }

   else if (wrapper_Obj.classList.contains('ON'))
    {
        wrapper_Obj.classList.replace('ON','OFF');       
    }

   else if (wrapper_Obj.classList.contains('OFF'))
    {
        wrapper_Obj.classList.replace('OFF','ON');        
    }  
    
   else 
    {
        wrapper_Obj.classList.add('ON');        
    }      

    
}


function getSection()
{
    var mq_obj= document.getElementById('mqID');  
    var m_obj= document.getElementById('middleID'); 
    var m_obj2= document.getElementsByClassName('footer_MainPanel')[0];      
        mq_obj.innerText="how u dey";
        m_obj.style.backgroundColor="red";
        m_obj2.style.backgroundColor="blue";

//m_obj.addEventListener('click',(d)=>{mq_obj.innerText="how u dey22";});

    

}

//function mapper(sectn ,subSectn)
function mapper(selectedSectn)
{
 let y=document.getElementsByClassName('card-header');
    // y[1].style.backgroundColor="yellow";
 var mq_obj= document.getElementById('mqID'); 
//y.forEach(e => mapperx(e) );

               // array1.forEach(element => console.log(element));

 //mq_obj.innerText=y.length;
 for (let i = 0; i < y.length; i++) {
   y[i].style.backgroundColor="blue";
  // y[i].textContent.color="yellow";
 y[i].innerHTML.fontcolor('yellow');
   //mq_obj.innerText +=y[i].textContent;   
   
  }
}

function mapperxx(e)
{ 
    
    let y=document.getElementsByClassName('card-header');
    var mq_obj= document.getElementById('mqID');

    for (let i = 0; i < y.length; i++) 
    {

        y[i].style.backgroundColor="green";
        y[i].getElementsByTagName("button")[0].style.color="yellow";  
     
    }

        document.getElementById(e).style.backgroundColor='rgba(165,42,42,0.8)';  
        document.getElementById(e).getElementsByTagName("button")[0].style.color='white';          
      

        //fa-chevron-circle-down
     
}


function mapperx(e)
{
    var mq_obj= document.getElementsByTagName('button');
    var writer= document.getElementById('mqID');

    for (let i = 0; i < mq_obj.length; i++) {

        if (!mq_obj[i].classList.contains('collapsed')) 
        {
            
            writer.innerText= mq_obj[i].innerText;
            break;
        }
        ;
        
    }
  

}