import React from 'react';
import './Enterance.scss'

import {useForm, useWatch} from 'react-hook-form'
import Checkbox from '@material-ui/core/Checkbox';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
export default function Enterance () {
const navigate = useNavigate()
    const {
    register,
    formState: {
        errors, isValid 
    },
        handleSubmit,
        reset,
} = useForm({
    mode: "onBlur"
});

const onSubmit = (data) => {
      
   let login = JSON.stringify(data.login)
   let password =  JSON.stringify(data.password)
   let passwordStorage = localStorage.getItem(JSON.stringify(data.login))
   if (password === passwordStorage) {
    {navigate(-1)}

   } else {
    alert('Неправильный логин или пароль')
   }
}
return (
    
<div className='form-enterance__page-wrap'>

<div className='form-enterance__page'>
<Link to='/registration'><div className='form-enterance__registration-link'>Зарегистрироваться</div></Link>
<h1 className='form-enterance__label'>Вход</h1>
<form onSubmit={handleSubmit(onSubmit)}>


<div className='form-enterance__input-wrap'>
<label>
<input className='form-enterance__login' placeholder='Логин'
    {...register('login', {
        required: "Поле обязательно для заполнения",
        formState: { errors },
        minLength: {
            value: 5,
            message: 'Минимум 5 символов',
        }
    })}
/>
</label>
<div>
<p className="form-enterance__login-error">{errors?.login?.message || ''}</p>
</div>

<label>
<input className='form-enterance__password' type="password" placeholder='Пароль'
    {...register('password', {
        required: "Поле обязательно для заполнения",
        formState: { errors },
        minLength: {
            value: 8,
            message: 'Минимум 8 символов',
        }
    })}
/>
<p className="form-enterance__password-error">{errors?.password?.message || ''}</p>
</label>
<div></div>
</div>
<div className='form-enterance__checkbox-wrap'>
<Checkbox
  icon={<CircleUnchecked />}
  checkedIcon={<CircleCheckedFilled />

  }
/>
<div>Я согласен получать обновления на почту</div>
</div>
    <div className='form-enterance__input-wrap'>
    <button className='form-enterance__input-button' onClick={handleSubmit}>Войти</button>
    </div>
</form>
</div>
</div>
)
}

