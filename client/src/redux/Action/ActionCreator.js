import {ADDMALE,ADDONE,ADDCITY,ADDFORM} from './ActionType'

export const addMaleAC = (payload)=>{
 return {
    type: ADDMALE,
    payload
  }
}
export const addOneAC = (payload)=>{
  return {
     type: ADDONE,
     payload
   }
 }
export const addCityAC = (payload)=>{
  return {
    type: ADDCITY,
    payload
  }
}
export const addFormAC = (payload)=>{
  return {
    type: ADDFORM,
    payload
  }
}

 