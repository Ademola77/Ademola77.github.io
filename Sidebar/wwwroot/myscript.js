









  function sideBarPicker()
  {
      const itemList=document.querySelectorAll('.item');
      const y =document.querySelector('h2');
      var count=0;
                            
           itemList.forEach(element => {
                                         element.addEventListener('click',()=>{

                                                                                  if(!element.classList.contains('ON'))
                                                                                  {
                                                                                    Clear( itemList);
                                                                                    element.classList.add('ON');

                                                                                  }

                                                                                else if(element.classList.contains('ON'))
                                                                                  {
                                                                                    Clear( itemList);
                                                                                    element.classList.remove('ON');

                                                                                  }
                                                                            
                                                                                  y.textContent=element.id;
                                                                                }
                                                                   );
                                       }
                            ) ;                             

  } 

sideBarPicker();


function Clear( itemList)
{
  itemList.forEach(element => {
                                        
                                  if(element.classList.contains('ON'))
                                  {
                                    element.classList.remove('ON');
                                   // element.classList.remove('xx');
                                  
                                  }




                                  
                              }
                  ) ; 
}


function OpenClose()
{
  const itemList=document.querySelectorAll('.item');
  const smenuList=document.querySelectorAll('.smenu');  
  const y =document.querySelector('h2');
  var count=0;
      var ele =null;                  
       itemList.forEach(element => {
                                      if(element.classList.contains('ON'))
                                      {
                                        ele=element;
                                       var t= element.querySelectorAll('.smenu');
                                       
                                       t.forEach(elementx => {
                                        var g= elementx.getElementsByTagName('a');
                                       g[0].style.color='pink';
                                       });
                                      }
                                       
                                   }  
                       );                  
}