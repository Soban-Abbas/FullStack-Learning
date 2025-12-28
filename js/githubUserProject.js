let parentdiv = document.getElementById("parent");
async function githubUsers() {
  const user = await fetch("https://api.github.com/users");
  const UserJson = await user.json();

  for (let user of UserJson) {
    let childdiv = document.createElement("div");
    childdiv.classList.add("child");
    let img = document.createElement("img");
    img.classList.add("img");
    img.src = user.avatar_url;
    childdiv.append(img);
    let username = document.createElement("span");
    username.textContent = ` User Name : ${user.login}`;
    let profile = document.createElement("a");
    profile.href = user.html_url;
    profile.textContent = `Visit github`;
    let morebtn = document.createElement("button");
    morebtn.textContent = `More`;
    childdiv.append(username, profile, morebtn);
    parentdiv.appendChild(childdiv);
    
    let isexpended=false
  let btnsdivs
    morebtn.addEventListener('click',()=>{

        if(!isexpended){
            childdiv.classList.add('big');
            morebtn.textContent=`Less`
            isexpended=true;
            btnsdivs=document.createElement('div');
            let following = document.createElement('button');
            following.textContent=`Following `;
            let followers=document.createElement('button');
            followers.textContent=`Followers`;
            btnsdivs.append(followers,following);
            childdiv.append(btnsdivs);
            followers.addEventListener('click', async ()=>{
                let followersData=await fetch(user.followers_url).then((data)=>data.json())
                

              
            })
        }
        else{
            childdiv.classList.remove('big');
             morebtn.textContent=`More`
             btnsdivs.remove();
            isexpended=false
        }



    })




}
}
githubUsers();


function viewFollower(data){
let div=document.createElement('div');
for(let items of data){
let img= document.createElement
}
}