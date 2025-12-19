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
let details=document.createElement('a');
details.href=user.url;
img.append(details);
img.addEventListener('click',async ()=>{
    maindiv.remove();
    let detailUser= await fetch(user.url)
    let detailUserJson=await detailUser.json();
let detailsdiv=document.createElement('div');
detailsdiv.style.height='400px';
detailsdiv.style.width='500px';
detailsdiv.style.backgroundColor='white';
detailsdiv.style.color='black';
detailsdiv.textContent=`Name:${detailUserJson.name}
Location: ${detailUserJson.location}`;
document.body.append(detailsdiv);
})
  let Username=document.createElement('h3');
  Username.textContent=user.login;

  let link=document.createElement('a');
  link.href=user.html_url;
  link.textContent='Visit Profile'

  div.append(img,Username,link);


}

}




githubUsers();