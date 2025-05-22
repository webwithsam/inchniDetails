console.log("done");
console.log("JS is working!");
alert("Hello from script.js!");
let matokeo = document.querySelector(".resultFromsearch")
let frominput = document.querySelector("#dataz");
let onyesha = document.querySelector('.display');
 let zote ="";
let sasa="";
let i;
let data = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
    "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas",
    "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin",
    "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei",
    "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon",
    "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia",
    "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba",
    "Cyprus", "Czech Republic", "Democratic Republic of the Congo", "Denmark",
    "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador",
    "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji",
    "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece",
    "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti",
    "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
    "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan",
    "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia",
    "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
    "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
    "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova",
    "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
    "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger",
    "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan",
    "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru",
    "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda",
    "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
    "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal",
    "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia",
    "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan",
    "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
    "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga",
    "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
    "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
    "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen",
    "Zambia", "Zimbabwe"
  ];
  let fromsearch = []


function test(s){   
 let ee = s.key.match(/[a-zA-Z]/);
 if(ee != null){
    let dd = ee.input;

    if(dd==ee[0]){
        sasa = sasa+s.key;
        zote="";
        fromsearch = []
  data.forEach((element)=>{
        let find = new RegExp(`^${sasa}`,"i");
         let sa =  element.match(find);
         if (sa != null){
                fromsearch.push(sa.input)
            }
        
  }); 
   
     for(i = 0 ;i<5;i++){      
        if(fromsearch[i]!=undefined){
            zote =zote +`<li onclick="chukuaHii(this)">    
            ${fromsearch[i]}
         </li>`;
        }
    }    
     }

     if(dd == "Backspace"){
        sasa = sasa.slice(0,-1);
        zote="";
        fromsearch = []
     data.forEach((element)=>{
            let find = new RegExp(`^${sasa}`,"i");
             let sa =  element.match(find);
             if (sa != null){
                    fromsearch.push(sa.input)
                }        
      });   
     
     for(i = 0 ;i<5;i++){ 
        if(fromsearch[i]!=undefined){
            zote =zote +`<li onclick="chukuaHii(this)>    
            ${fromsearch[i]}
         </li>`;
        }

    }
    if(sasa ==""){
        zote="";
        fromsearch = []  

    }
    
     }

     onyesha.innerHTML = zote;
 }
   }
 

function chukuaHii(values){
    let toBeSearched = values.textContent.trim();
    console.log(toBeSearched)
    frominput.value ="";
    frominput.value = toBeSearched;
    onyesha.innerHTML = "";
       goOnline(toBeSearched); 
    // letts do some api hahahahahaha ahahahhaaha ahahahah

    
}
 // the only function hahahahah ahahahhaha ahahha ahahahaha ahahaha ahahaha 
 async function goOnline(a) {  
    matokeo.innerHTML = "inatafuta........."
      let ss =  await fetch(`https://restcountries.com/v3.1/name/${a}`)
      console.log(ss)
      let ss1 = await ss.json() 
      let saa = ss1[0]
      if(ss1 == null){
        matokeo.innerHTML = "kunakitu hakipo sawa"
      }
      console.log(ss1)
      matokeo.innerHTML = ""
      matokeo.innerHTML = ` <p>Mjiji mkuu wa ${a} ni = ${saa.capital}</p>`+ `<p>Idadi ya watu katika nchi ya  ${a} ni = ${saa.population}</p>`
      
  }
