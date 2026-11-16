const add_btn=document.getElementById("add_btn");
const get_btn=document.getElementById("get_btn");
const delete_key1=document.getElementById("delete_key1");
const delete_key2=document.getElementById("delete_key2");
const clear_btn=document.getElementById("clear_btn");
const addtoSessionStorage=()=>{
    console.log(sessionStorage.setItem("key_1","value_1"));
    console.log(sessionStorage.setItem("key_2","value_2"));

}
const getfromSessionStorage=()=>{
  console.log(sessionStorage.getItem("key_1"));
  console.log(sessionStorage.getItem("key_2"));
};
const delete_key1Storage=()=>{
    console.log(sessionStorage.removeItem("key_1"));
}
const delete_key2Storage=()=>{
    console.log(sessionStorage.removeItem("key_2"));
}
const clearData=()=>{
    console.log(sessionStorage.clear());
}
  
add_btn.addEventListener("click",addtoSessionStorage);
get_btn.addEventListener("click",getfromSessionStorage);
delete_key1.addEventListener("click",delete_key1Storage);
delete_key2.addEventListener("click",delete_key2Storage);
clear_btn.addEventListener("click",clearData);
