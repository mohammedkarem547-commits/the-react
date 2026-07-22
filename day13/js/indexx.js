const name = document.querySelector("#name");
const age = document.querySelector("#age");
const jop = document.querySelector("#jop");
const submit = document.querySelector("#submit");
 submit.addEventListener("click" , function(){
    const nameValue = name.value;
    const ageValue = age.value;
    const jopValue = jop.value;
    if (nameValue === "" || ageValue === "" || jopValue === "" ){
        alert(`fill all fields`);
    } 
    else {
        if (ageValue < 18){
            alert(`you are under the age `)
        }
        else {
            alert(`done`)
        }
    }
    console.log(`name:` + nameValue);
    console.log(`age:` + ageValue);
    console.log(`jop:` + jopValue);
    

});