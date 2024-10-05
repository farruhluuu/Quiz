import { useSelector, useDispatch } from 'react-redux';
import cls from './admin.module.css';
import { deleteUser } from '../../store/action/auth';

const AllUsers = () => {
  const resultsUsers = useSelector(state => state.auth.resultsUsers);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };
  console.log(resultsUsers)

  return (
    <div>
        {
            resultsUsers.map((item) => 
                <div className={cls.users} key={item.id}> {/* Add a key for unique identification */}
                    <h1>{item.name}, {item.surname}</h1>
                    <p>{item.score}/{item.totalQuestions}</p> {/* Assuming these are the properties you want */}
                    <p>{item.percentage} correct</p>
                    <i onClick={() => handleDelete(item.id)} className="fa-solid fa-trash-can"></i>
                </div>
            )
        }
    </div>
);
};

export default AllUsers;