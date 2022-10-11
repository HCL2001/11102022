function ChangeMoney(){
   var tien = document.getElementById("Amount").value;
   var doiFrom = document.getElementById("From").value;
   var doiTo = document.getElementById("To").value;
   var reSult = document.getElementById("Result").value;
   if(doiFrom == "USD" && doiTo == "VND"){
        reSult = tien * 23000
        document.write(reSult + "VND");
   }else if(doiFrom == "VND" && doiTo == "USD")
   {
       reSult = tien / 23000
       document.write("$" + reSult);
   }else{
       alert("Chua doi menh gia tien")
   }

}