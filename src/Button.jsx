import { useState } from "react";
import { decrementNum, incrementNum, setText, incrementByFive, decrementByFive } from "./redux/reducer";
import { useDispatch } from "react-redux";

const Button = () => {
    const dispatch = useDispatch();
    const [inputText, setInputText] = useState(''); // локальное состояние для текста

    return (
        <div>
            <button onClick={()=>{
                dispatch(incrementNum())
            }}>+1</button>
            <button onClick={()=>{
                dispatch(decrementNum())
            }}>-1</button>
            <button onClick={()=>{
                dispatch(incrementByFive())
            }}>+5</button>
            <button onClick={()=>{
                dispatch(decrementByFive())
            }}>-5</button>
            
           
            <input 
                type="text" 
                value={inputText} 
                onChange={(e) => setInputText(e.target.value)} 
                placeholder="Введите текст"
            />
            
            <button onClick={()=>{
                dispatch(setText(inputText)) 
            }}>change</button>  
        </div>
    );
}

export default Button;
