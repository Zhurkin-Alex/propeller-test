import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux' 
import {ThunkAdd} from '../../redux/Thunk/Thunk'

function Data() {
    const store = useSelector(store=>store)
    const user = store.testReducer.user[0]
    const dispatch = useDispatch()

    const localid = localStorage.getItem('id')

    const carfBtnHandler =()=>{
        localStorage.removeItem('id')
        window.location = "http://localhost:3000/"

    }

    useEffect(()=>{
        dispatch(ThunkAdd(localid))
      },[dispatch])

    return (
        <div className="cart">
            <div className="cart__box">
                {user?.male?.length>0 && <div className="cart__iteam cart__male">Пол: { user.male}</div>}
               {user?.city?.length>0 &&  <div className="cart__iteam cart__city">Город: {user.city}</div>}
                {user?.mail?.length>0 && <div className="cart__iteam cart__email">Email: {user.mail}</div>}
               {user?.text?.length>0 && <div className="cart__iteam cart__text">Комментарий: {user.text}</div>} 
            </div>
            <div className="cart__btn">
                <button onClick={carfBtnHandler}>Пройти опрос еще раз.</button> 
            </div>
        </div>
    );
}

export default Data;