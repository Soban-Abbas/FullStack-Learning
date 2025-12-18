let maindiv=document.getElementById("main")


async function githubUsers() {
   const users= await fetch('https://api.github.com/users');
   const usersJson= await users.json();
for(let user of usersJson){
let div=document.createElement("div");

div.classList.add('small')

maindiv.append(div)

let img=document.createElement('img');
img.src=user.avatar_url;
img.classList.add('img');
  let Username=document.createElement('h3');
  Username.textContent=user.login;

  let link=document.createElement('a');
  link.href=user.html_url;
  link.textContent='Visit Profile'

  div.append(img,Username,link);


}

}




githubUsers();