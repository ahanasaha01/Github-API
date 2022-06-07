var form=document.getElementById("myForm")


form.addEventListener('submit',function(e){
    e.preventDefault()
    var search=document.getElementById("search").value
    var originalName=search.split(' ').join('')
    document.getElementById("result").innerHTML=""
    fetch("https://api.github.com/users/"+originalName)
    .then((result) => result.json())
    .then((data) => {
        if (data.message){
            console.log("User Profile Not Found")
        }
        else{
            console.log(data)
            document.getElementById("result").innerHTML = `
                <a target="_blank" href="https://www.github.com/${originalName}"> <img class="img-thumbnail ml-4" align="right" alt="Paris" src="${data.avatar_url}" style="display:block;margin:0 auto;width:30%;">
                <p style="color:black;font-size:24px;font-weight:bold;">Username</p>
                <p style="color:blue;font-size:20px;">${data.login}</p>
                <p style="color:black;font-size:24px;font-weight:bold;">Name</p>
                <p style="color:blue;font-size:20px;">${data.name}</p>
                <p style="color:black;font-size:24px;font-weight:bold;">URL to the github handle</p>
                <p style="color:blue;font-size:20px;">${data.url}</p>
                <p style="color:black;font-size:24px;font-weight:bold;">Email</p>
                <p style="color:blue;font-size:20px;">${data.email}</p>
                <p style="color:black;font-size:24px;font-weight:bold;">Biodata</p>
                <p style="color:blue;font-size:20px;">${data.bio}</p>
                <p style="color:black;font-size:24px;font-weight:bold;">Followers following</p>
                <p style="color:blue;font-size:20px;">${data.followers}</p>
                <p style="color:black;font-size:24px;font-weight:bold;">Users following</p>
                <p style="color:blue;font-size:20px;">${data.following}</p>
                </a>
            `

        }
        

        
    })
})