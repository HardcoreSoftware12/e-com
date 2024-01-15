import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  
  increment,
  incrementAsync,
  selectCount,
} from './auth';

export default function Signup() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <div>

    </div>
  )
}
