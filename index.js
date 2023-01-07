document.getElementById("bai1").onclick = function(){
    document.getElementById("b1").style.display = "block";
    document.getElementById("b2").style.display = "none"
    document.getElementById("b3").style.display = "none"
    document.getElementById("b4").style.display = "none"
    document.getElementById("calc1").onclick = function(){
        let num_1 = +document.getElementById("num-1").value
        let num_2 = +document.getElementById("num-2").value
        let num_3 = +document.getElementById("num-3").value
        let area = +document.getElementById("area").value 
        let object = +document.getElementById("object").value
        let standard = +document.getElementById("standard").value
        let score = num_1+num_2+num_3+area+object
        if((num_1 <= 0)||(num_2 <= 0)||(num_3 <= 0)){
            document.getElementById("resutl1").innerHTML = " Bạn đã rớt do có môn bé hơn hoặc bằng 0"
        }
        if(score>=standard){
            document.getElementById("result1").innerHTML = "Bạn đã đậu . Tổng điểm là : " + score
        }else{
            document.getElementById("result1").innerHTML = "Bạn đã rớt. Tổng điểm là : " + score
        }
        
    }
}
document.getElementById("bai2").onclick = function(){
    document.getElementById("b1").style.display = "none"
    document.getElementById("b2").style.display = "block"
    document.getElementById("b3").style.display = "none"
    document.getElementById("b4").style.display = "none" 
    document.getElementById("calc2").onclick = function(){
        let elec = +document.getElementById("elec").value
        let name = document.getElementById("name").value
        if(elec <= 50 && elec >=0){
            elec = elec * 500
        }else if( elec > 50 && elec <= 100){
            elec = 50*500 + (elec-50)*650 
        }else if( elec > 100 && elec <= 200){
            elec = 50*500 + 50 * 650 + (elec-100)*850
        }else if( elec > 200 && elec <= 350){
            elec = 50 * 500 + 50 * 650 + 100 * 850 + (elec-200)*1100 
        }else if(elec > 350){
            elec = 50*500 + 50 * 650 + 100 * 850 + 200*1100 + (elec-350)*1300
        }
        elec = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(elec);
        document.getElementById("result2").innerHTML = "Họ Tên : " + name +"; Tiền điện : " + elec  
    }
}
document.getElementById("bai3").onclick = function(){
    document.getElementById("b1").style.display = "none"
    document.getElementById("b2").style.display = "none"
    document.getElementById("b3").style.display = "block"
    document.getElementById("b4").style.display = "none"  
    document.getElementById("calc3").onclick = function(){
        let name1 = document.getElementById("name1").value
        let salary = +document.getElementById("salary").value
        let depend = +document.getElementById("depend").value
        if((salary - (4000000 - depend*1600000)) < 0){
            alert("Thu nhập hàng năm ko đủ tiêu chuẩn !")
        }
            let VAT = salary - 4000000 - depend*1600000
            if(VAT <= 60000000){
                VAT = VAT * (5/100)
            }else if(VAT > 60000000 && VAT <= 120000000){
                VAT = VAT * (10/100)
            }else if(VAT > 120000000 && VAT <= 210000000){
                VAT = VAT*(15/100)
            }else if(VAT >210000000 && VAT<=384000000){
                VAT = VAT*(20/100)
            }else if(VAT > 384000000 && VAT <= 624000000){
                VAT = VAT*(25/100)
            }else if(VAT > 624000000 && VAT <=960000000){
                VAT = VAT*(30/100)
            }else{
                VAT = VAT*(35/100)
            }
        console.log(VAT)
        VAT = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(VAT)
        document.getElementById("result3").innerHTML = "Họ tên : "+ name1 + ", Tiền thuế thu nhập cá nhân: "+ VAT  
    } 
}   

function bai4(){
        let c1 = document.getElementById("c1").value
        let c2 = +document.getElementById("c2").value
        c2 = c2*7.5 + 25
        c2 = new Intl.NumberFormat('en-IN',{style: 'currency', currency:'USD'}).format(c2)
        document.getElementById("result4").innerHTML = "Mã khách hàng : "+ c1 + ", Tiền cáp : "+ c2
    }  
function bai4_1(){
        let c1 = document.getElementById("c1").value
        let c2 = +document.getElementById("c2").value
        let connect = +document.getElementById("connect").value
        if(connect <= 10){
            connect = 75
        }else{
            connect = 75 + (connect-10)*5
        }
        c2 = c2*50 + connect + 15
        c2 = new Intl.NumberFormat('en-IN',{style: 'currency', currency:'USD'}).format(c2)
        document.getElementById("result4").innerHTML = "Mã khách hàng : "+ c1 + ", Tiền cáp : "+ c2

}
document.getElementById("bai4").onclick = function(){
    document.getElementById("b1").style.display = "none"
    document.getElementById("b2").style.display = "none"
    document.getElementById("b3").style.display = "none"
    document.getElementById("b4").style.display = "block" 
    document.getElementById("object1").onchange = function(){
        if(document.getElementById("object1").value === "ND"){
            document.getElementById("connect").style.display = "none"
            document.getElementById("calc4").onclick = function(){
                bai4()
            }
        }else if(document.getElementById("object1").value ==="DN"){
            document.getElementById("connect").style.display = "block"
            document.getElementById("calc4").onclick = function(){
                bai4_1()
            }
        }
    }
}
