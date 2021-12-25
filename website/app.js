/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth()+1)+'.'+ d.getDate()+'.'+ d.getFullYear();

//personal Api Key &base URL 
const apiKey='5a55fb685a43695b99a53e9943c8124b';
const fullUrl='https://api.openweathermap.org/data/2.5/weather?zip=';


//add eventlistener to abutton generate
document.getElementById('generate').addEventListener('click',performAction);
 function performAction(e){
    const zipCode=document.getElementById('zip').value ;
    const feelings=document.getElementById('feelings').value ;

    getWeather(fullUrl,zipCode,apiKey)
    .then(function(data){
        console.log(data);

        postData('/addData',{date:d,
             temp:data.main.temp,
              feelings:feelings});
    }) 
    .then(()=>updateUI()) 
 }
 //to make Get request
 const getWeather=async(fullUrl, zipCode, apiKey)=>{

     const res = await fetch(fullUrl + zipCode+'&appid='+apiKey+'&units=metric');

   try{
       const data=await res.json();
       console.log(data)
       return data;
   }catch(error){
     console.log('error',error);
   }
 }


//function to post data

const postData= async (url='',data={})=>{
    console.log(data);

    const response= await fetch(url, {
       method:'POST',
       credentials:'same-origin',
       headers:{'content-Type':'application/json',},
       body: JSON.stringify(data),
    });

    try{
        const newData=await response.json();
         return newData
    }catch(error){
        console.log('error',error);
    }
}

//function to get project data
 /*update UI server*/

const updateUI= async()=>{
    const request= await fetch('/all');
    try{
        const allData = await request.json();
        document.getElementById('date').innerHTML=allData.date;
        document.getElementById('temp').innerHTML=allData.temp;
        document.getElementById('content').innerHTML=allData.feelings;

    }catch(error){
        console.log('error',error)
    }
}

