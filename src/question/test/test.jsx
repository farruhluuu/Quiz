import * as React from 'react';
import cls from './auth_test.module.css';
import { useSelector } from 'react-redux';
import TestComponent from './result';
import { useNavigate } from 'react-router-dom';

// const Test = () => {
//   const { question } = useSelector(state => state.auth);
//   const [handleWindow, setHandleWindow] = React.useState(false);
//   const [selectedAnswers, setSelectedAnswers] = React.useState(Array(question.length).fill(null)); // Array to store selected answers
//   const [score, setScore] = React.useState(0);

//   const handleRadioChange = (index, name) => {
//     const updatedAnswers = [...selectedAnswers];
//     updatedAnswers[index] = name; // Store the answer for the current question
//     setSelectedAnswers(updatedAnswers);
//   };

//   const SendTest = () => {
//     if (selectedAnswers.includes(null)) {
//       alert("Пожалуйста, ответьте на все вопросы.");
//       return;
//     }
//     // Here you can calculate the score based on selectedAnswers
//     let score = 0;
//     question.forEach((item, index) => {
//       const correctAnswer = Object.keys(item.variants).find(key => item.variants[key].isCorrect);
//       if (selectedAnswers[index] === correctAnswer) {
//         score++;
//       }
//     });
//     setHandleWindow(false);
//   };

//   return (
//     <div className={cls.TestPage}>
//       {
//         handleWindow ?
//           <>
//             <div className={cls.TestQuestion}>
//               {
//                 question.map((item, index) => (
//                   <div key={index} className={cls.TestBox}>
//                     <h1 className={cls.H1}>{index + 1}.</h1>
//                     <h1>{item.title}</h1>
//                     {Object.keys(item.variants).map((key) => (
//                       <div key={key}>
//                         <input
//                           type="radio"
//                           name={`question${index}`} // Use dynamic names for questions
//                           onChange={() => handleRadioChange(index, key)}
//                           checked={selectedAnswers[index] === key} // Check if this answer is selected
//                         />
//                         <p>{item.variants[key].discription}</p>
//                       </div>
//                     ))}
//                   </div>
//                 ))
//               }
//             </div>
//             <button className={cls.Send} onClick={SendTest}>Отправить</button>
//           </>
//           :
//           <TestComponent score={score} />
//       }
//     </div>
//   )

// };

// export default Test;


const Test = () => {
  const { question } = useSelector(state => state.auth);
  const [handleWindow, setHandleWindow] = React.useState(true);
  const [radio, setRadio] = React.useState({}); // Change this to an object to track selected answers
  const [score, setScore] = React.useState(0); // Track the score

  const navigate = useNavigate();

  const handleRadioChange = (index, name) => {
    setRadio({ ...radio, [index]: name }); // Store selected answer for each question
  };

  const SendTest = () => {
    let correctCount = 0; // Track correct answers

    question.forEach((item, index) => {
      if (item.variants[radio[index]] && item.variants[radio[index]].isCorrect) {
        correctCount++; 
      }
    });

    setScore(correctCount);
    setHandleWindow(false);
    navigate('')
  };

  if (handleWindow) {
    return (
      <div className={cls.TestPage}>
        <div className={cls.TestQuestion}>
          {question.map((item, index) => (
            <div key={index} className={cls.TestBox}>
              <h1 className={cls.H1}>{index + 1}.</h1>
              <h1>{item.title}</h1>
              <div>
                <input
                  type="radio"
                  name={`question${index}`}
                  onChange={() => handleRadioChange(index, 'variant_1')}
                  checked={radio[index] === 'variant_1'}
                />
                <p>{item.variants.variant_1.discription}</p>
              </div>
              <div>
                <input
                  type="radio"
                  name={`question${index}`}
                  onChange={() => handleRadioChange(index, 'variant_2')}
                  checked={radio[index] === 'variant_2'}
                />
                <p>{item.variants.variant_2.discription}</p>
              </div>
              <div>
                <input
                  type="radio"
                  name={`question${index}`}
                  onChange={() => handleRadioChange(index, 'variant_3')}
                  checked={radio[index] === 'variant_3'}
                />
                <p>{item.variants.variant_3.discription}</p>
              </div>
            </div>
          ))}
        </div>
        <button className={cls.Send} onClick={SendTest}>Отправить</button>
      </div>
    );
  } else {
    return <TestComponent score={score} navigatePrev={navigate}/>; // Pass the score if needed
  }
};

export default Test;
