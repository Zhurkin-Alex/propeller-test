const initalState = {
    user:[]
   }
   
   const testReducer = (state = initalState, action) => {
       switch (action.type) {
        case "ADDMALE":
          return {
            ...state,
            user: state.user.map((el)=>{
            return el._id === action.payload.Clients._id
              ? {...el, male: action.payload.Clients.male}
              : el
            })
          
          };
        case "ADDCITY":
        return {
          ...state,
          user: state.user.map((el)=>{
          return el._id === action.payload.Clients._id
            ? {...el, city: action.payload.Clients.city}
            : el
          })
        
        };
        case "ADDFORM":
        return {
          ...state,
          user: state.user.map((el)=>{
          return el._id === action.payload.Clients._id
            ? {...el, mail: action.payload.Clients.mail,text: action.payload.Clients.text}
            : el
          })
        
        };
          
         case "ADDONE":
          localStorage.setItem('id', action.payload._id)
           return { 
             ...state,
             user: [...state.user, action.payload],
           };
   
         default:
           return state;
       }
     };
   
     export default testReducer;