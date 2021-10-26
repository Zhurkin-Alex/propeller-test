import{addMaleAC,addOneAC,addCityAC,addFormAC} from '../Action/ActionCreator'


export const ThunkAdd = (localid)=>{
    return(dispatch)=>{
        fetch(`http://localhost:4000/client/addAll`,{
            method: "POST",
            headers: {
              "Content-type": "Application/json",
            },
            body: JSON.stringify({
                localid
            }),
          })
            .then(res=>res.json())
            .then(data=>
                dispatch(addOneAC(data.Clients))
                )
    }
}


export const ThunkAddMale = (male,id)=>{
 return(dispatch)=>{
        fetch(`http://localhost:4000/client/addMale`,{
            method: "PUT",
            headers: {
              "Content-type": "Application/json",
            },
            body: JSON.stringify({
              male,
              id
            }),
          })
            .then(res=>res.json())
            .then(data=>dispatch(addMaleAC(data)))
    }
}
export const ThunkAddCity = (city,id)=>{
 return(dispatch)=>{
        fetch(`http://localhost:4000/client/addCity`,{
            method: "PUT",
            headers: {
              "Content-type": "Application/json",
            },
            body: JSON.stringify({
                city,
                id
            }),
          })
            .then(res=>res.json())
            .then(data=>dispatch(addCityAC(data))
            )
    }
}
export const ThunkAddForme = (email,text,id)=>{
 return(dispatch)=>{
        fetch(`http://localhost:4000/client/addForm`,{
            method: "PUT",
            headers: {
              "Content-type": "Application/json",
            },
            body: JSON.stringify({
                email,text,id
            }),
          })
            .then(res=>res.json())
            .then(data=>dispatch(addFormAC(data))
            )
    }
}
