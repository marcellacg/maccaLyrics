function qntAnos() {
  let dateDropdown = document.getElementById("date-dropdown"); 
       
  let currentYear = new Date().getFullYear();    
  let earliestYear = 1957;     
  
  while (currentYear >= earliestYear) {      
    let dateOption = document.createElement("option");          
    dateOption.text = currentYear;      
    dateOption.value = currentYear;        
    dateDropdown.appendChild(dateOption);   
    
    currentYear -= 1;
  }
}
