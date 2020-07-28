import React, {useState} from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addCourseList } from '../store/actions/course';

const ListCourse = () => {
  const dispatch = useDispatch();
  const courses = useSelector(state => state.data);

  const addCourse = () => {
    dispatch(addCourseList('Gabriel'))
  }

  return(
    <>
      <ul>
        { courses.map(course => (
          <li key={course}> {course} </li>
        )) }
      </ul>
      <button type='button' onClick={addCourse}>Add</button>
    </>
  )
}

export default ListCourse;