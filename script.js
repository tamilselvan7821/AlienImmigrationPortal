 let booPlanet=false,booAlienName=false,booId=false,booAntena=false,booPharse=false,booPhoto=false;
  function checkPlanet(){
    let planetName=document.getElementById("pName");
    let errorPlanetName=document.getElementById("errorPlanet");
    if(planetName.value===null||planetName.value===""){
      booPlanet=false;
      errorPlanetName.style.color="transparent";
      planetName.style.borderBottom="3px solid rgb(238, 129, 33)";
    }
    else if(planetName.value.match(/^(?=.*[AEIOUaeiou])(?=.*\d).+$/)){
      errorPlanetName.style.color="transparent";
      booPlanet=true;
      planetName.style.border="none";
    }
    else {
      booPlanet=false;
      errorPlanetName.style.color="red";
      planetName.style.borderBottom="3px solid rgb(238, 129, 33)";
    }
  }
  function checkName(){
    let name=document.getElementById("aName");
    let errorName=document.getElementById("errorName");
    if(name.value===null||name.value===""){
      errorName.style.color="transparent";
      booAlienName=false;
      name.style.borderBottom="3px solid rgb(238, 129, 33)";
    }
    else if(name.value.match(/^[A-Za-z][A-Za-z'. -]{1,50}$/)){
      errorName.style.color="transparent";
      booAlienName=true;
      name.style.border="none";
    }
    else{
      errorName.style.color="red";
      booAlienName=false;
      name.style.borderBottom="3px solid rgb(238, 129, 33)";
    }
  }
  function checkId(){
    let id=document.getElementById("aId");
    let error=document.getElementById("errorId");
    if(id.value===null||id.value===""){
      error.style.color="transparent";
      booId=false;
      id.style.borderBottom="3px solid rgb(238, 129, 33)";
    }
    else if(id.value.match(/^[A-Z]{3}-[A-Z]{2}_[0-9]{4}@[A-Z]{3}$/)){
      error.style.color="transparent";
      booId=true;
      id.style.border="none";
    }
    else{
      error.style.color="red";
      booId=false;
      id.style.borderBottom="3px solid rgb(238, 129, 33)";
    }
  }
  function checkAntena(){
    let inputValue=document.getElementById("aCount");
    let error=document.getElementById("errorAntena");
    if(inputValue.value===null||inputValue.value===""){
      error.style.color="transparent";
      booAntena=false;
      inputValue.style.borderBottom="3px solid rgb(238, 129, 33)";
    }
    else if(inputValue.value!=0&&inputValue.value.match(/^[0-9]+$/)&&inputValue.value%2===0){
      error.style.color="transparent";
      booAntena=true;
      inputValue.style.border="none";
    }
    else{
      error.style.color="red";
      booAntena=false;
      inputValue.style.borderBottom="3px solid rgb(238, 129, 33)";
    }
  }
  function checkPharse(){
    let inputValue=document.getElementById("humanPharse");
    let error=document.getElementById("errorPharse");
    if(inputValue.value===null||inputValue.value===""){
      error.style.color="transparent";
      booPharse=false;
      inputValue.style.borderBottom="3px solid rgb(238, 129, 33)";
    }
    else if(inputValue.value.match(/^(?=.*(?:\p{P}|\p{Extended_Pictographic})).+$/u)){
      error.style.color="transparent";
      booPharse=true;
      document.getElementById("humanPharse").style.border="none";
    }
    else{
      error.style.color="red";
      booPharse=false;
      inputValue.style.borderBottom="3px solid rgb(238, 129, 33)";
    }
  }

    document.addEventListener("DOMContentLoaded",()=>{
    const input=document.getElementById("landDate");
    if(!input)return;
    const today=new Date();
    const year=today.getFullYear();
    const mo=String(today.getMonth()+1).padStart(2,'0');
    const da=String(today.getDate()).padStart(2,'0');
    const temp=`${year}-${mo}-${da}`;
    input.setAttribute("min",temp);
    });

    const picture=document.getElementById("photo");
    const errorPhoto=document.getElementById("errorPhoto");
    picture.addEventListener("change",()=>{
      const fi=picture.files[0];
      if(!fi){
        booPhoto=false;
        return ;
      }
      const allowed=["image/png","image/jpg","image/jpeg"];
      if(!allowed.includes(fi.type)){
        errorPhoto.style.color="red";
        picture.value="";
        booPhoto=false;
      }
      else{
        errorPhoto.style.color="transparent";
        booPhoto=true;
      }
    });
    
    const form=document.getElementById("formId");
    form.addEventListener("submit",(e)=>{
      e.preventDefault();
      if(booPlanet&&booAlienName&&booId&&booAntena&&booPharse&&booPhoto){
        let pop=document.getElementById("showOut");
        pop.classList.add("active");
        setTimeout(()=>{
          pop.classList.remove("active");
          window.location.reload();
        },3000);
        return false;
      }
      else if(!booPlanet){
        document.getElementById("pName").focus();return;
      }
      else if(!booAlienName){
        document.getElementById("aName").focus();return;
      }
      else if(!booId){
        document.getElementById("aId").focus();return;
      }
      else if(!booAntena){
        document.getElementById("aCount").focus();return ;
      }
      else if(!booPharse){
        document.getElementById("humanPharse").focus();return;
      }
      else if(!booPhoto){
        document.getElementById("photo").focus();return ;
      }
    });