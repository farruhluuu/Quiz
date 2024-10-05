import { useDispatch, useSelector } from 'react-redux';
import { saveTestResults } from '../../store/action/auth';

import cls from './auth_test.module.css'
import { useNavigate } from 'react-router-dom';

const TestComponent = ({ score }) => {
  const dispatch = useDispatch();
  const student = useSelector(state => state.auth.student);
  const questions = useSelector(state => state.auth.question);

  const navigate = useNavigate()

  const HandlerSubmit = () => {
    if (!student) {
      alert("Студент не найден. Пожалуйста, вернитесь на страницу авторизации.");
      return;
    }

    const totalQuestions = questions.length;
    const correctAnswers = score;
    const percentage = ((correctAnswers / totalQuestions) * 100).toFixed(2);

    const result = {
      name: student.name,
      surname: student.surname,
      score: correctAnswers,
      totalQuestions: totalQuestions,
      percentage: `${percentage}%`
    };

    dispatch(saveTestResults(result));
    navigate('/')
    console.log()
  }


  return (
    <div className={cls.ResultTest}>
      <p>{student.name} {student.surname}</p>
      <p>ваш результат: {score}/{questions.length}</p>
      <button onClick={HandlerSubmit}>Закрыть</button>
    </div>
  );
};

export default TestComponent;
