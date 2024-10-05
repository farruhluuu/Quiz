import { useEffect, useState } from "react"
import cls from './admin.module.css'
import { useDispatch, useSelector } from "react-redux"
import { AddNewQuestion } from './../../store/action/auth';

const AdminAddNewQ = () => {

  const [title, setTitle] = useState('')

  const [dictFirst, setDictFirst] = useState('')
  const [dictSecond, setDictSecond] = useState('')
  const [dictThred, setDictThred] = useState('')

  const [addQuestion, setAddQuestion] = useState({
    quest_1: { isCorrect: false, discription: '' },
    quest_2: { isCorrect: false, discription: '' },
    quest_3: { isCorrect: false, discription: '' },
  });

  const {question} = useSelector(state => state.auth)

  const check = (name) => {
    setAddQuestion(() => ({
      quest_1: { isCorrect: name === 'first' },
      quest_2: { isCorrect: name === 'second' },
      quest_3: { isCorrect: name === 'thred' },
    }));
  };

  useEffect(() => {
    localStorage.setItem('question', JSON.stringify(question))
  }, [question])

  const dispatch = useDispatch()

  const AddNewQuest = () => {
    if ((title && dictFirst && dictSecond && dictThred !== "") && (addQuestion.quest_1.isCorrect || addQuestion.quest_2.isCorrect || addQuestion.quest_3.isCorrect)) {

      dispatch(AddNewQuestion({title, dictFirst, dictSecond, dictThred, addQuestion}))
      setAddQuestion({
        quest_1: { isCorrect: false, discription: '' },
        quest_2: { isCorrect: false, discription: '' },
        quest_3: { isCorrect: false, discription: '' },
      })
      setTitle('')
      setDictFirst('')
      setDictSecond('')
      setDictThred('')
    } else {
      alert("Поля пусты")
    }
  }

  return (
    <div className={cls.right}>
        <input
          className={cls.TextQuestrion}
          placeholder="Вопрос"
          type="text"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        
        <div>
          <input
            className={cls.RadioINP}
            type="radio"
            name="question"
            checked={addQuestion.quest_1.isCorrect}
            onChange={() => check('first')}
          />
          <input
            className={cls.INPvariat}
            type="text"
            placeholder="Вариант 1"
            value={dictFirst}
            onChange={(event) => setDictFirst(event.target.value)}
          />
        </div>
        <div>
          <input
            className={cls.RadioINP}
            type="radio"
            name="question"
            checked={addQuestion.quest_2.isCorrect}
            onChange={() => check('second')}
          />
          <input
            className={cls.INPvariat}
            type="text"
            placeholder="Вариант 2"
            value={dictSecond}
            onChange={(event) => setDictSecond(event.target.value)}
          />
        </div>
        <div>
          <input
            className={cls.RadioINP}
            type="radio"
            name="question"
            checked={addQuestion.quest_3.isCorrect}
            onChange={() => check('thred')}
          />
          <input
            className={cls.INPvariat}
            type="text"
            placeholder="Вариант 3"
            value={dictThred}
            onChange={(event) => setDictThred(event.target.value)}
          />
        </div>
        <button onClick={AddNewQuest}>Добавить вопрос</button>
      </div>

  );
}

export default AdminAddNewQ;


