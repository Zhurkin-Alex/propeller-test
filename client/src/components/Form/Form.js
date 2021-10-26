import React from 'react';
import {useDispatch,useSelector} from 'react-redux' 
import {ThunkAddForme} from '../../redux/Thunk/Thunk'

function Form() {
  const dispatch = useDispatch()
  const store = useSelector(store=>store)

  const id = store.testReducer?.user?.[0]?._id

    const submitHandler =(e)=>{
        e.preventDefault()
        const form = e.target
        const {email:{value:email}, text:{value:text}} = e.target        
        dispatch(ThunkAddForme(email,text,id))
        form.reset()
    }
    return (
        <form className="form" onSubmit={submitHandler}>
          <div className="form__box">
            <input className="form__email" type="email"  name="email" placeholder="Ваш email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>  
            <textarea className="form__textarea" rows="4"  name="text" placeholder="Напишите комментарий" minLength="3" required/>
            <div className="form__btn">
              <input type="submit" value="Комментировать"/>
            </div>
            </div>
        </form>
    );
}

export default Form;