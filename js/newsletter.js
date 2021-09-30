window.onload=()=>{
    $(`.lang`).hide()
    $(`.eng`).show()

        $("#lang")[0].onchange= (event)=>{
            $(`.lang`).hide()
            $(`.${event.target.value}`).show()
        }
        let s=$("#Grid > div.col-md-4.col-sm-6")
        for(let i=0;i<18;i++){
            s[i].onclick=()=>{
                window.location.href = `Modules/module${i+1}.html`

            }
        }
        $("#close-search-button")[0].onclick= ()=>$("#search-results").hide()
        $("#search-button")[0].onclick= ()=> {
           $("#search-results").show()
            // window.location = $(`#people option[value='${$("#search-input").val()}']`).find("a").attr("href")
            let querry= searchPeople.value
            // if(querry.length<3)return
            fetch('https://it-connects-us.herokuapp.com/search',
                {
                    method:'post',
                    mode:'cors',
                    body : JSON.stringify({'querry':querry,'limit':10}),
                    headers: {"Content-type": "application/json; charset=UTF-8"},
                }
                ).then((resp)=>resp.json())
                .then((resp)=>{
                    let dl=$("#search-results .row")[0]
                    dl.innerHTML=""
                    if(resp.ok){
                        
                        for( k of resp.data){
                            dl.innerHTML+=
                            `<div class="col-md-3 col-sm-6" style="margin:20px">
                            <div class="team-member">
                              <div class="member-thumb">
                                <img src="images/bg.jpeg" alt="" />
                              </div>
                              <div class="member-infos">
                                <h4 class="member-name">${k.name}</h4>
                                <p class="member-desc">
                                  ${k.bio}
                                </p>
                                <a target="_blank" href="https://it-connects-us.herokuapp.com/profile/${k.id}">
                                <input id="news-btn" class="mainBtn" type="submit" name="" value="View More">
                                </a>
                               <!-- <ul class="member-social">
                                  <li><a href="#" class="fa fa-phone"></a></li>
                                  <li><a href="#" class="fa fa-envelope-open"></a></li>
                                  <li><a href="#" class="fa fa-user-circle"></a></li>
                                  <li><a href="#" class="fa fa-map-marker"></a></li>
                                </ul> -->
                              </div>
                            </div>
                          </div>`
                        }
                      
                        // msg.style.color="green"
                        // msg.innerHTML= `successfully subscribed`;
                    }else{
                        dl.innerHTML=`<option  value="No results found">`
                        // msg.style.color="orange"
                        // msg.innerHTML= "you have already subscribed!";
                    }
                })
          }
        const searchPeople=$("#search-input")[0]
        searchPeople.onkeyup =()=>{
            let querry= searchPeople.value
            // if(querry.length<3)return
            fetch('https://it-connects-us.herokuapp.com/search',
                {
                    method:'post',
                    mode:'cors',
                    body : JSON.stringify({'querry':querry,'limit':5}),
                    headers: {"Content-type": "application/json; charset=UTF-8"},
                }
                ).then((resp)=>resp.json())
                .then((resp)=>{
                    let dl=$("#people")[0]
                    dl.innerHTML=""
                    if(resp.ok){
                        
                        for( k of resp.data){
                            dl.innerHTML+=`<option value="${k.name}">`
                        }
                      
                        // msg.style.color="green"
                        // msg.innerHTML= `successfully subscribed`;
                    }else{
                        dl.innerHTML=`<option  value="No results found">`
                        // msg.style.color="orange"
                        // msg.innerHTML= "you have already subscribed!";
                    }
                })
        }

        $("#news-btn").onclick=async()=>{
            const msg=document.getElementById("news-msg");
            const email=document.getElementById("news-email");
            const name=document.getElementById("news-name");
                msg.style.color="blue"
                msg.innerHTML= "loading...";
                fetch('https://it-connects-us.herokuapp.com/newsletter',
                {
                    method:'post',
                    mode:'cors',
                    body : JSON.stringify({'email':email.value,'name':name.value}),
                    headers: {"Content-type": "application/json; charset=UTF-8"},
                }
                ).then((resp)=>resp.json())
                .then((resp)=>{
                    if(resp.status){
                        msg.style.color="green"
                        msg.innerHTML= `successfully subscribed`;
                    }else{
                        msg.style.color="orange"
                        msg.innerHTML= "you have already subscribed!";
                    }
                })
            .catch(()=>{msg.style.color="yellow"
            msg.innerHTML= "connection error";})
        }

    


}