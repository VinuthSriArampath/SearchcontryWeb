fetch("https://restcountries.com/v3.1/all")
.then(res=>res.json())
.then(data=>{
    let tblCountries=document.getElementById("tbl");

    let tblBody=`<tr>
                    <th class="text-start">Name</th>
                    <th>Flag</th>
                </tr>`;

    data.forEach(element => {
        tblBody+=`<tr>
                    <td class="text-start">${element.name.common}</td>
                    <td >${element.flag}</td>
                </tr>`
    });

    tblCountries.innerHTML=tblBody

});

function search(){
    let searchValue=document.getElementById("searchby").value;
    let common=document.getElementById("Common");
    let official=document.getElementById("Official");

    console.log(searchValue);
    fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
    .then(res=>res.json())
    .then(data=>{
        
        
        data.forEach(obj=>{
            common.innerText = obj.name.common;
            official.innerText = obj.name.official;
            img.innerHTML=`<img src="${obj.flags.png}" alt="">`
        })

        console.log(data);
    })
}