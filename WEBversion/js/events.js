function poll_event_classical(eventKey){

    if (eventKey in keys_classical){
        cannons_positions = [0, 0, 0, 0, 0, 0, 0, 0]
        cannons_positions[keys_classical[eventKey]] = 1
    }
}

function poll_event_quantum(eventKey){
    if (eventKey in keys_quantum){
        
        fetch("http://127.0.0.1:8000/quantum", 
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body:JSON.stringify(eventKey)}).then(res=>{
                if(res.ok){
                    return res.json()
                }else{
                    alert("something is wrong")
                }
            }).then(Response=> foreach_position(Response)
            ).catch((err) => console.error(err));            
    }
}