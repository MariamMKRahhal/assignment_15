
/*1- create button that has text: Add, this will add to cookies:
        * key: "key_1", value: "value_1" for 7 days
        * key: "key_2", value: "value_2" for 7 days
    2- create button that has text: Get key_1, this will log the value of "key_1"
    3- create button that has text: Get key_2, this will log the value of "key_2"
    4- create button that has text: Delete key_1, this will delete "key_1" from cookies
    5- create button that has text: Delete key_2, this will delete "key_2" from cookies
    */
  const btn_add = document.getElementById("btn_add");
const btn_get_key_1 = document.getElementById("btn_get_key_1");
const btn_get_key_2 = document.getElementById("btn_get_key_2");
const btn_delete_key_1 = document.getElementById("btn_delete_key_1");
const btn_delete_key_2 = document.getElementById("btn_delete_key_2");

const time_to_live = 60 * 60 * 24 * 7;

const showFromStorage = (key) => {
  const cookies = decodeURIComponent(document.cookie);
  const array = cookies.split("; ");
  const index = array.findIndex((element) => element.split("=")[0] === key);
  let value;
  if (!((array.length == 1 && array[0] == "") || index == -1))
    value = array[index].split("=")[1];
  else value = "";
  return value;
};

btn_add.addEventListener("click", () => {
  document.cookie = `key_1=value_1; max-age=${time_to_live}; Secure; SameSite=strict;`;
  document.cookie = `key_2=value_2; max-age=${time_to_live}; Samesite=strict; Secure;`;
});

btn_get_key_1.addEventListener("click", () => {
  console.log(showFromStorage("key_1"));
});

btn_get_key_2.addEventListener("click", () => {
  console.log(showFromStorage("key_2"));
});

btn_delete_key_1.addEventListener("click", () => {
  document.cookie = `key_1=null; max-age=${0}`;
});

btn_delete_key_2.addEventListener("click", () => {
  document.cookie = `key_2=null; max-age=${0}`;
});

