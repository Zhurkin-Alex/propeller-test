import React from 'react';
import {useDispatch,useSelector} from 'react-redux' 
import {ThunkAddMale, ThunkAddCity} from '../../redux/Thunk/Thunk'

function Question() {
    const dispatch = useDispatch()
    const store = useSelector(store=>store)
    

    const id = store.testReducer?.user?.[0]?._id
    const male = store.testReducer?.user?.[0]?.male
    const text = store.testReducer?.user?.[0]?.text
    
    const maleHandler=(e)=>{
        const male =e.target.dataset.value
        dispatch(ThunkAddMale(male,id))
    }

    const femaleHandler=(e)=>{
        const male =e.target.dataset.value
        dispatch(ThunkAddMale(male,id))
    }
    const cityHandler = (e)=>{
        const city = e.target.value
        dispatch(ThunkAddCity(city,id))
       
    }
   
    
    return (
        <div className="question">
            { !male?.length>0 && !text && <div  className="question__gender">
                <label>
                  1. Укажите пол
                    <div className="question__gender-box">
                        <p onClick={maleHandler} data-value={'Мужской'}>Мужской</p>
                        <p onClick={femaleHandler} data-value={'Женский'}>Женский</p>
                    </div>
               </label>
               
            </div> }
            {male?.length>0 && !text && <div  className="question__city">
                <label>
                    2. В каком городе Вы живете
                    <div className="question__city-box">
                        <select onChange={cityHandler}>
                            <option disabled >Выберите город</option>
                            <option value="Москва">Москва</option>
                            <option value="Санкт-Петербург">Санкт-Петербург</option>
                            <option value="Казань">Казань</option>
                            <option value="Нижний Новгород">Нижний Новгород</option>
                        </select>
                    </div>
               </label>
            </div>} 
            {text &&
                <div>"Благодарим за участие!
                Ваше мнение очень важно для нас."</div>
            }
        </div>
    );
}

export default Question;