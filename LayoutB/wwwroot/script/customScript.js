






sidePanelID

function  ToggleSidebar()
{
    let hamParent_Obj=document.querySelector('hamburger_Parent');
    //let sidePanel_obj=document.querySelector('sidePanel');

    let sidePanel_obj=document.getElementById('sidePanelID');


  let IsOff = sidePanel_obj.classList.contains('OFF');
  let IsOn = sidePanel_obj.classList.contains('ON');

 if(!IsOff && !IsOn)
 {
    sidePanel_obj.classList.add('ON');
    
 }

 else if(IsOff)
 {
    sidePanel_obj.classList.replace('OFF','ON');
 }

 else
 {
    sidePanel_obj.classList.replace('ON','OFF');
 }
}