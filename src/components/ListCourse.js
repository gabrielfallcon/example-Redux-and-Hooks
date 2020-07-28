import React, {useState} from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addCourseList } from '../store/actions/course';

const ListCourse = () => {
  const dispatch = useDispatch();
  const courses = useSelector(state => state.data);

  const [input, setInput] = useState('');

  const onChangeInput = e => {
    setInput(e.target.value);
  } 
  
  const addCourse = () => {
    if (input !== '') {
      dispatch(addCourseList(input));
      setInput('');
    } else {
      return alert('preecha os campos');
    }
  }

  return(
    <>
      <ul>
        { courses.map(course => (
          <li key={course}> {course} </li>
        )) }
      </ul>
      <input 
        type="text"
        value={input}
        onChange={onChangeInput}
      />
      <button type='button' onClick={addCourse}>Add</button>
    </>
  )
}

export default ListCourse;