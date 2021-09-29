window.onload=()=>{
    $(`.lang`).hide()
    $(`.eng`).show()

        $("#lang")[0].onchange= (event)=>{
            $(`.lang`).hide()
            $(`.${event.target.value}`).show()
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