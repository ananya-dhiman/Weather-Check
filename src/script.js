

document.addEventListener('DOMContentLoaded', () => {  
const input=document.getElementById("city");
const btn=document.getElementById("sub");
//Fetch the api using link first make it through location

btn.addEventListener("click",function(){
    var place="Kolkata";
    place= input.value;
    var date1= new Date();
    let da = date1.getDate();
    let month = date1.getMonth() + 1;
    let year = date1.getFullYear();
    if(month<10){
        date1=year+"-"+"0"+month+"-"+da;

    }
    else{
        date1=year+"-"+month+"-"+da;
    }
    
 
   
    var date2=new Date(date1);      
    date2.setDate(date2.getDate() + 6);
    da = date2.getDate();
    month = date2.getMonth() + 1;
    year = date2.getFullYear();
    date2=year+"-"+month+"-"+da;

    console.log(date1);
    console.log(date2);
   
    const link="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + place +"/" +date1+ "/" +date2+"?key=T8U2BM63CVFKZ3MJST4877MEX";
    console.log(link);
    
           
    var un="°F";
    const toggle=document.getElementById("toggle");
    toggle.addEventListener("click", function(){
        if(un=="°F"){
            un="°C";
            toggle.innerText="°F";  
            const link="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + place +"/" +date1+ "/" +date2+"?unitGroup=metric&key=T8U2BM63CVFKZ3MJST4877MEX";
            console.log(link);
            data(link,un);
            
        }
        else if(un=="°C"){
            un="°F";
            toggle.innerText="°C";  
            const link="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + place +"/" +date1+ "/" +date2+"?unitGroup=us&key=T8U2BM63CVFKZ3MJST4877MEX";
            console.log(link);
            data(link,un);
            
             
        }

    }); 
    
    async function data(link,un){      //Basically what happens here is that async is like resolving a promise but in form of function 
        
        const response=await fetch(link);  //Await processes the 
        const d=await response.json();
        console.log(d);
        const box=document.getElementById("weather-info");
        const des=document.createElement("div");
        des.textContent=d.description;
        box.appendChild(des);
    
        


 
        
     

        
        d.days.forEach((day)=>{
            
       
            
            if(date1==day.datetime){   //check this 
                console.log("Work");
            document.getElementById("tempMain").innerText=day.temp+un;
            }
        const date = new Date(day.datetime);
        console.log(date);
        let today = date.getDay();
        console.log(day.tempmax);
        switch(today){
            case 0:
                document.getElementById('sunday-max').innerText = day.tempmax+un|| 'N/A';
                document.getElementById('sunday-min').innerText = day.tempmin+un|| 'N/A';
            case 1:
                document.getElementById('monday-max').innerText =  day.tempmax+un|| 'N/A';
                document.getElementById('monday-min').innerText =  day.tempmin+un|| 'N/A'; 
            case 2:
                document.getElementById('tuesday-max').innerText =  day.tempmax+un|| 'N/A';
                document.getElementById('tuesday-min').innerText =  day.tempmin+un|| 'N/A'; 
            case 3:
                document.getElementById('wednesday-max').innerText =  day.tempmax+un|| 'N/A';
                document.getElementById('wednesday-min').innerText =  day.tempmin+un|| 'N/A'; 
            case 4:
                document.getElementById('thursday-max').innerText =  day.tempmax+un|| 'N/A';
                document.getElementById('thursday-min').innerText =  day.tempmin+un|| 'N/A'; 
            case 5:
                document.getElementById('friday-max').innerText =  day.tempmax+un|| 'N/A';
                document.getElementById('friday-min').innerText =  day.tempmin+un|| 'N/A'; 
            case 6:
                document.getElementById('saturday-max').innerText =  day.tempmax+un|| 'N/A';
                document.getElementById('saturday-min').innerText =  day.tempmin+un|| 'N/A';  

        }
    });
    }
    

        

    

    

    
    data(link,un); 
        
});
});

    


   
    
 




