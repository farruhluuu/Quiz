import { useNavigate } from 'react-router-dom';
import cls from './admin.module.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAdmin } from '../../store/action/auth';

const Admin = () => {
  const navigate = useNavigate();
  
  const { authAdmin } = useSelector(state => state.auth);
  
  useEffect(() => {
    if(authAdmin.isAdmin) {
      navigate('adminBoard/')
    }
  }, [authAdmin.isAdmin])


  const dispatch = useDispatch()

  const [inputValue, setInputValue] = useState({
    name: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const SignIn = () => {
    if(inputValue.name === authAdmin.name && inputValue.password === authAdmin.password) {
      dispatch(getAdmin(inputValue.name, inputValue.password))
    } else {
      alert('error')
      setInputValue({name: '', password: ''})
    }
  };
  
  return (
    <div className={cls.auth}>
      <div className={cls.authMenu}>
        <h1 className={cls.AuthText}>Добро Пожаловать, Админ</h1>
        <input
          name="name"
          onChange={handleInputChange}
          value={inputValue.name}
          type="text"
          placeholder='Ваше Имя'
        />
        <input
          name="password"
          onChange={handleInputChange}
          value={inputValue.password}
          type="password"
          placeholder='Пароль'
        />
        <button onClick={SignIn}>Войти</button>
        <button onClick={() => navigate('/')}>Пройти Тест</button>
      </div>
    </div>
  );
};

export default Admin;
