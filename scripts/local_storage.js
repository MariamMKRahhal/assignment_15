const add_btn=document.getElementById("add_btn");
const get_btn=document.getElementById("get_btn");
const delete_key1=document.getElementById("delete_key1");
const delete_key2=document.getElementById("delete_key2");
const clear_btn=document.getElementById("clear_btn");
const addtoLocalStorage=()=>{
    console.log(localStorage.setItem("key_1","value_1"));
    console.log(localStorage.setItem("key_2","value_2"));

}
const getfromLocalStorage=()=>{
  console.log(localStorage.getItem("key_1"));
  console.log(localStorage.getItem("key_2"));
};
const delete_key1Storage=()=>{
    console.log(localStorage.removeItem("key_1"));
}
const delete_key2Storage=()=>{
    console.log(localStorage.removeItem("key_2"));
}
const clearData=()=>{
    console.log(localStorage.clear());
}
  
add_btn.addEventListener("click",addtoLocalStorage);
get_btn.addEventListener("click",getfromLocalStorage);
delete_key1.addEventListener("click",delete_key1Storage);
delete_key2.addEventListener("click",delete_key2Storage);
clear_btn.addEventListener("click",clearData);
