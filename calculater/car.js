let errname = document.getElementById("err1")
let errpn = document.getElementById("err2")
let errem = document.getElementById("err3")
let errwheel = document.getElementById("err4")
let errvhl = document.getElementById("err5")
let errta = document.getElementById("err6")
let errsn = document.getElementById("err7")

const tbody = document.getElementById("tbody")

let button = document.getElementById("but")

button.addEventListener("click",press)

    var date = new Date()

let yen = []
function press(){
    console.log("clicked: ", yen)
    let obj = {
        name:document.getElementById("inp1").value,
        PhoneNo:document.getElementById("inp2").value,
        EmailId:document.getElementById("inp3").value,
        vehicleType:document.getElementById("vehicletype").value,
        VehicleNo:document.getElementById("inp7").value,
        TimeArrived:document.getElementById("inp8").value = date,
    }
    if(!obj.name){
        errname.innerText="Please enter your Name"
    }
    else if(!obj.PhoneNo){
        errpn.innerHTML="Please enter your Phone Number"
    }
    
    else if(!obj.EmailId){
        errem.innerHTML="Please enter your E-mail Id"
    }
    else if(!obj.vehicleType){
        errwheel.innerHTML="Please select your Vehicle"
    }
    else if(!obj.VehicleNo){
        errvhl.innerHTML="Please enter your Vehicle Number"
    }
    else if(!obj.TimeArrived){    
        errta.innerHTML="Time not capture"
    }
    else{
        yen.push(obj)
        console.log(yen)
        tbody.appendChild(tdata(yen))
    }

    
}

var arr = [1,2,3,4]

let tr = document.createElement('tr')
    let td = document.createElement('td')
    let td1 = document.createElement('td')

    td.innerText = arr.map((id)=>id)
    td1.innerText = yen.map((item, id)=>id+1)

    tr.appendChild(td)
    tr.appendChild(td1)

    tbody.appendChild(tr)

const tdata = (arr)=>{
    let tr = document.createElement('tr')
    let td = document.createElement('td')

    td.innerText = arr.map((id)=>id)

    tr.appendChild(td)

}