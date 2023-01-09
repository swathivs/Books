const books= async()=>{
    let content=document.getElementById("submit");
    content.addEventListener("click",ev =>{
        let num1=document.getElementById("num").value;
        fetch(`https://www.anapioficeandfire.com/api/books/${num1}`)
        .then((response)=> response.json())
        .then(data=>{
            console.log(data)
            let finalData="";
                finalData+=`
                <div class="border-1 shadow rounded-2 p-4 m-3 fw-700 new" style="width:300px;">
            <div>
            <b><label for="">Name:</label></b>
            <b><label for="">"${data.name}"</label></b>
            </div>

            <div>
            <b><label for="">Publisher:</label></b>
            <label for="">${data.publisher}</label>
            </div>

            <div>
            <b><label for="">Author:</label></b>
            <label for="">${data.authors}</label>
            </div>

            <div>
            <b><label for="">ISBN:</label></b>
            <label for="">${data.isbn}</label>
            </div>
            
            <div>
            <b><label for="">Country:</label></b>
            <label for="">${data.country}</label>
            </div>

            <div>
            <b><label for="">Number of pages:</label></b>
            <label for="">${data.numberOfPages}</label>
            </div>

            </div>`
            document.getElementById("main").innerHTML=finalData;
        })
        .catch((err)=>{
            console.log(err);
            alert("Invalid Number");
        })
    })
}
books();  
