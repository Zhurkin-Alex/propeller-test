import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux' 

import Header from '../Header/Header'
import Question from '../Question/Question';
import Form from '../Form/Form';
import {ThunkAdd} from '../../redux/Thunk/Thunk'

function Survey() {
  const dispatch = useDispatch()

  const store = useSelector(store=>store)
  const male = store.testReducer?.user?.[0]?.male
  const localid = localStorage.getItem('id')

  useEffect(()=>{
    dispatch(ThunkAdd(localid))
  },[dispatch])

    return (
        <div className="container__box">
          <Header/>
          <Question/>
          {male && <Form />}
        </div>
    );
}

export default Survey;