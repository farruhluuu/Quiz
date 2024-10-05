import { DeleteQuestion } from '../../store/action/auth';
import cls from './admin.module.css'

const ListQuestion = ({question, dispatch}) => {
  
  const deleteQuestion = (id) => {
    dispatch(DeleteQuestion({id}))
  }

  return (
    <div className={cls.left}>
        {question.map((item) => (
            <div className={cls.BoxList_question} key={item.id}>
              <div className={cls.question_head}>
                <h1>{item.title}</h1>
                <i onClick={() => deleteQuestion(item.id)} className="fa-solid fa-trash-can"></i>
              </div>
              <div className={cls.question_list}>
                <p style={item.variants.variant_1.isCorrect ? {borderColor: 'green'} : null}>{item.variants.variant_1.discription}</p>
                <p style={item.variants.variant_2.isCorrect ? {borderColor: 'green'} : null}>{item.variants.variant_2.discription}</p>
                <p style={item.variants.variant_3.isCorrect ? {borderColor: 'green'} : null}>{item.variants.variant_3.discription}</p>
              </div>
            </div>
          ))}
    </div> 
  );
}

export default ListQuestion;
