window.onload=()=>{

            const newsBtn=document.getElementById("news-btn");

        newsBtn.onclick=async()=>{
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