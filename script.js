const calculate=()=>{
    const salary=parseFloat(document.getElementById('sal').value);
    const rate=parseFloat(document.getElementById('rate').value);
    if(!salary|| !rate){
        alert('plz fill all the required fields')
        return
    }
    const epf=(salary*(rate/100)).toFixed(2);
    const result=document.getElementById('result');
    result.style.display='block';
    document.getElementById('epf_deduct').innerHTML=`EPF DEDUCTION : ${epf}`

}
const reset=()=>{
    document.getElementById('sal').value=" ";
    document.getElementById('rate').value=" ";
}