import React from 'react';
import './Registration.scss'

import {useForm, useWatch} from 'react-hook-form'
import Checkbox from '@material-ui/core/Checkbox';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';


export default function Registration () {
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
      
    localStorage.setItem(JSON.stringify(data.login), JSON.stringify(data.password));
      
}

return (
<div className='form-registration'>
    
<h1 className='form-registration__label'>Регистрация</h1>
<form onSubmit={handleSubmit(onSubmit)}>


<div className='form-registration__input-wrap'>
<label>
<input className='form-registration__login' placeholder='Логин'
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
<p className="form-registration__login-error">{errors?.login?.message || ''}</p>
</div>

<label>
<input className='form-registration__password' type="password" placeholder='Пароль'
    {...register('password', {
        required: "Поле обязательно для заполнения",
        formState: { errors },
        minLength: {
            value: 8,
            message: 'Минимум 8 символов',
        }
    })}
/>
<p className="form-registration__password-error">{errors?.password?.message || ''}</p>
</label>
<div></div>
</div>
<div className='form-registration__checkbox-wrap'>
<Checkbox
  icon={<CircleUnchecked />}
  checkedIcon={<CircleCheckedFilled />

  }
/>
<div>Я согласен получать обновления на почту</div>
</div>
    <div className='form-registration__input-wrap'>
    <button className='form-registration__input-button' onClick={handleSubmit}>Зарегистрироваться</button>
    </div>
</form>
</div>

)
}

