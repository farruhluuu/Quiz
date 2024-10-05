import { useState } from 'react'
import cls from './admin.module.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getResertAdmin } from '../../store/action/auth'
import AllUsers from './allUsers'
import AdminAddNewQ from './adminAddNewQ'
import ListQuestion from './listQuestion'

const Adminboard = () => {
 
  const [isPage, setIsPage] = useState('addNewQt')

  const dispatch = useDispatch();
  const { question } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const getPrevPage = () => {
    dispatch(getResertAdmin())
    navigate('/');
  };

    return (
      <div>
        <header className={cls.header}>
          <i onClick={getPrevPage} className="fa-solid fa-left-long"></i>
          <i
            onClick={() => setIsPage('list')}
            style={isPage === 'list' ? { color: '#4cd137' } : null}
            className="fa-solid fa-users"
          ></i>
          <i
            onClick={() => setIsPage('addNewQt')}
            style={isPage === 'addNewQt' ? { color: '#4cd137' } : null}
            className="fa-solid fa-list"
          ></i>
        </header>
        {isPage === 'list' ? <AllUsers /> : 
            <div className={cls.block}>
              <ListQuestion question={question} dispatch={dispatch}/>
              <AdminAddNewQ />
            </div>
          }
      </div>
    );
  };

export default Adminboard;
