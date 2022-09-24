
const calculate=()=>{
   const tempnumber=document.getElementById('tempvalue').value;
  const answer=document.getElementById('answer');
  const tempselected=document.getElementById('tempdiff');
  const valuetemp=tempdiff.options[tempselected.selectedIndex].value;
  const celtoFah=(cel)=>{
    let f=Math.round(cel*9/5)+32;
    return f;
  }
  const Fahtocel=(fah)=>{
    let c=Math.round((fah-32)*5/9);
    return c;
  }
  let result;
  if(valuetemp=='cel')
  {
    result=celtoFah(tempnumber);
   answer.innerHTML= `${result} Fahrenheit`;
  }
  else
  {
    result=Fahtocel(tempnumber);
   answer.innerHTML= `${result} Celcius`;
  }
}