import { Link, useNavigate } from 'react-router-dom';
import cls from './auth_test.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authStudent } from '../../store/action/auth';

const Auth = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (name.trim() === '' || surname.trim() === '') {
      alert('Пожалуйста, заполните все поля!');
      return;
    }

    const student = { 
      id: Date.now(), // Generate a unique ID
      name, 
      surname 
    };
    dispatch(authStudent(student));
    navigate('/test');
  };

  return (
    <div className={cls.auth}>
      <header className={cls.header}>
        <Link to={'/admin'}>
          <i style={{ fontSize: 30, color: 'white' }} className="fa-solid fa-user-tie"></i>
        </Link>
      </header>
      <div className={cls.authMenu}>
        <h1 className={cls.AuthText}>Добро Пожаловать</h1>
        <input
          type="text"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          placeholder="Фамилия"
        />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Имя"
        />
        <button onClick={handleSubmit}>Пройти тест</button>
      </div>
    </div>
  );
}

export default Auth;