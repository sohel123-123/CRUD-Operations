let id = "no";
SelectData()
function ManageData() {
   
    let name = document.querySelector("#name").value
    document.querySelector(".msg").innerHTML = ""
    
        
        if (name == "") {
            document.querySelector(".msg").innerHTML = "Enter The Name"
        } else {
            if (id=="no") {
                
                let arr = Getcruddata();
                if (arr == null) {
                    let data = [name]
                    Setcruddata(data)
                   
                } else {
                    arr.push(name)
                    Setcruddata(arr)
                    
                }
                document.querySelector("#name").value = ""
                document.querySelector(".msg").innerHTML = "data added"
                
            } else{
                
                    let arr = Getcruddata();
                    arr[id]=name;
                    Setcruddata(arr)
                    
                    
                }
                SelectData()
                document.querySelector(".msg").innerHTML = "updated added"
                document.querySelector("#name").value = ""
        }
     

    SelectData()
}
function SelectData() {
    let sno = 1;
    let html = "";
    let arr = Getcruddata()
    for (const k in arr) {
        html = html + `<tr><td>${sno}</td><td>${arr[k]}</td><td><a href="javascript:void(0)" onclick="EditData(${k})">Edit</a>&nbsp<a href="javascript:void(0)" onclick="DeleteData(${k})">Delete</a></td></tr>`
        sno++;
    }
    document.querySelector(".tbody").innerHTML = html
}
function EditData(rid) {
    id = rid
    let arr = Getcruddata();
    document.querySelector("#name").value = arr[rid];
   
}
function DeleteData(rid) {
    let arr = Getcruddata();
    arr.splice(rid, 1)
    Setcruddata(arr)
    SelectData()
}

function Getcruddata() {
    let arr = JSON.parse(localStorage.getItem("crud"));
    return arr;
}
function Setcruddata(arr) {
    localStorage.setItem("crud", JSON.stringify(arr))
}