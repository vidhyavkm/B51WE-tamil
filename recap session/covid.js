var division = document.createElement('div')
division.innerHTML=`<input type ="text" id="txt">
<button type="button" onClick="covid19()">Search</button>`
document.body.append(division);

async function covid19(){
    let covid19 = document.getElementById('txt').value;
    console.log(covid19);

     let result = await fetch("https://data.covid19india.org/v4/min/timeseries.min.json")

     let res = await result.json();
     
     console.log(res);

     document.getElementById("covid").innerText="Covid19 overall cases: res"

}