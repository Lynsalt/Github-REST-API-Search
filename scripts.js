function getProfile(){
  		//e.preventDefault();
  	  var username = document.getElementById("username").value;	
      if(!username || username==""){
      	  username="Lynsalt";
      }
  	  var xhttp = new XMLHttpRequest();
  	  xhttp.open("GET", `https://api.github.com/users/${username}`);
  	  xhttp.onreadystatechange = function(){
         if(this.readyState == this.DONE && this.status ==200){
         	if(this.responseText){
         		var user = JSON.parse(this.responseText);
         		document.getElementById("profile").innerHTML = `<div class="card">
            <div class="card-header">
                <h3>Name: ${user.name}</h3>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-3">
                  <img src="${user.avatar_url}" class="card-img-top" alt="..." style="display:block; width:100%">
                </div>
                <div class="col-md-9">
                  <div class="card">
                    <ul class="list-group list-group-flush">
                     <li class="list-group-item"><b>Bio:</b> ${user.bio}</li>
                     <li class="list-group-item"><b>Location:</b> ${user.location}</li>
                     <li class="list-group-item"><span class="badge badge-warning">Repositories ${user.public_repos}</span></li>
                     <li class="list-group-item"><a href="${user.html_url}" class="card-link" target="_blank">Github Profile</a>
                  <a href="${user.blog}" class="card-link" target="_blank">Personal Website</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        </div>`

         		//"<img src="+user.avatar_url+"/>"+'<br>'+"<b>Name:</b> "+ user.name +'<br/>'+"<b>Bio:</b> "+ user.bio;
         	}
         }
  	  }
  	  xhttp.send();
  	}
  	document.getElementById('submitForm').addEventListener('click', getProfile,false);