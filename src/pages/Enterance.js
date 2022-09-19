import React from 'react';
import {useForm} from 'react-hook-form'

export default function Enterance () {
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
    alert(JSON.stringify(data))
    reset()
}

return (
<div className='App'>
<h1>React Hook Forms</h1>
<form onSubmit={handleSubmit(onSubmit)}>
<label>
<input
    {...register('firstName', {
        required: "Поле обязательно для заполнения",
        minLength: {
            value: 5,
            message: 'Минимум 5 символов',
        }
    })}
/>
</label>
<div>
    {errors?.firstName && <p>{errors?.firstName?.message || 'Error'}</p>}
</div>

<label>
<input
    {...register('lastName', {
        required: "Поле обязательно для заполнения",
        minLength: {
            value: 5,
            message: 'Минимум 5 символов',
        }
    })}
/>
</label>
<div>
    {errors?.firstName && <p>{errors?.lastName?.message || 'Error'}</p>}
</div>
    <input type="submit" disabled={!isValid}/>
</form>
</div>

)
}































// const {

// } = useForm();
// const Enterance = () => {
//     return (
//         <div className="page-content-enterance">
//         <div className="form-enterance">
//             <div className="form-enterance__header">Вход</div>
            
//             <div className="form-enterance__email-wrap">
//                 <div className="form-enterance__email-label">Email</div>
//                 <div className="form-enterance__email-input">
                
//                     <input type="text" className="form-enterance__email_input" placeholder="johndoe@email.com"></input>
//             </div>
//                 <div className="form-enterance__email-error"></div></div>
//             <div className="form-enterance__password-wrap">
//                 <div className="form-enterance__password-label">Пароль</div>
//                 <div className="form-enterance__password-input">
//                     <input type="password" className="form-enterance__password_input" placeholder="********"></input>
//                 </div>
//                 <div className="form-enterance__password-error"></div></div>
//             <div className="form-enterance__agreement">
//                 <input className="form-enterance__agreement-checkbox" type="checkbox"></input>
//                 <div className="form-enterance__agreement-label">Я согласен с Правилами пользования приложением</div>
//             </div>
//            <div className="form-enterance__button-wrap">
//             <div className="form-enterance__agreement-error"></div>
//             <button className="form-enterance__button" >Вход</button>
            
//         </div>
    
//             <div className="form-enterance__enterance-wrap">
//                 <div className="form-enterance__registration-link">Еще не зарегистрированы?</div>
//             </div></div></div>
//     );
// };

// window.onload=function() {

// let collectionBtns = document.querySelector('.form-enterance__button');

// collectionBtns.addEventListener('click', (e) => {
    
//     let email = document.querySelector('.form-enterance__email_input').value;
//     let email__form = document.querySelector('.form-enterance__email_input');
//     let emailError = document.querySelector('.form-enterance__email-error');
//     let pass = document.querySelector('.form-enterance__password_input').value;
//     let pass__form = document.querySelector('.form-enterance__password_input');
//     let passError = document.querySelector('.form-enterance__password-error');
//     let agreement = document.querySelector('.form-enterance__agreement-checkbox').checked;
//     let agreement__label = document.querySelector('.form-enterance__agreement-label')
//     let agreementError = document.querySelector('.form-enterance__agreement-error');
//     // let users = {}; 

//     if (email === '') {
//         emailError.style.color = 'red';
//         emailError = 'Поле обязательно для заполнения';
//         document.querySelector('.form-enterance__email-error').textContent = emailError;
//         email__form.style.borderColor='red';
        

//     } else {
//         console.log(email)
//         // document.querySelector('.form__email-error').textContent = ''  
//         email__form.style.borderColor = 'black';
        
//         if (email.includes('@') === false)  {
//             emailError.style.color = 'red';
//             emailError = 'Invalid e-mail';
//             document.querySelector('.form-enterance__email-error').textContent = emailError;
//             email__form.style.borderColor='red';
//         } else {
            
//             document.querySelector('.form-enterance__email-error').textContent = 'Поле обязательно для заполнения'  
//             emailError.style.color = 'white'
//             email__form.style.borderColor = 'black';
//     }
//     }

   

//     if (pass === '') {
//         pass__form.style.borderColor='red';
//         passError.style.color = 'red';
//         passError = 'Поле обязательно для заполнения';
//         document.querySelector('.form-enterance__password-error').textContent = passError; 
//     } else {
//         document.querySelector('.form-enterance__password-error').textContent = ''
//         pass__form.style.borderColor = 'black';
    
//         if (pass.length < 8) {
//             pass__form.style.borderColor='red';
//             passError.style.color = 'red';
//             passError = 'Пароль должен быть не менее 8 символов';
//             document.querySelector('.form-enterance__password-error').textContent = passError; 
//         } else {
//             console.log(pass)
//             // document.querySelector('.form__password-error').textContent = ''
//             pass__form.style.borderColor = 'black';
//             passError.style.color = 'black';
//             }
//         }
//     if (agreement === false) {
//         agreementError.style.color = 'red';
//         agreementError = 'Поле обязательно для заполнения';
//         agreement__label.style.color = 'red';     
//         document.querySelector('.form-enterance__agreement-error').textContent = agreementError;
//     } else {
//         document.querySelector('.form-enterance__agreement-error').textContent = ''
//         agreementError.style.color = 'black';
//         agreement__label.style.color = 'black'; 
//     }
    
    
//       if(localStorage.getItem(email,pass)){
//         if (agreement === true) {
//         // window.location.replace('success.html') 
//     }
//       } else {
//         alert('Неудачный вход')
//       }
    
// })
// }

// export default Enterance;