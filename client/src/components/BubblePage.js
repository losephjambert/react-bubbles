import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getColors, deleteColor } from '../api';
import {
  COLORS_FETCH_START,
  COLORS_FETCH_SUCCESS,
  COLORS_FETCH_ERROR,
  COLORS_DELETE_START,
  COLORS_DELETE_SUCCESS,
  COLORS_DELETE_ERROR,
} from '../actions';

import Bubbles from './Bubbles';
import ColorList from './ColorList';

const BubblePage = () => {
  const dispatch = useDispatch();
  const colors = useSelector(state => state.colors);

  useEffect(() => {
    getColors({
      start: payload => dispatch({ type: COLORS_FETCH_START, payload }),
      success: payload => dispatch({ type: COLORS_FETCH_SUCCESS, payload }),
      error: payload => dispatch({ type: COLORS_FETCH_ERROR, payload }),
    });
  }, [dispatch]);

  const handleDeleteColor = id => {
    console.log(id);
    deleteColor(
      { id },
      {
        start: payload => dispatch({ type: COLORS_DELETE_START, payload }),
        success: payload => dispatch({ type: COLORS_DELETE_SUCCESS, payload }),
        error: payload => dispatch({ type: COLORS_DELETE_ERROR, payload }),
      }
    );
  };

  return (
    <>
      <ColorList colors={colors.colorsList} dispatch={dispatch} handleDeleteColor={handleDeleteColor} />
      <Bubbles colors={colors.colorsList} />
    </>
  );
};

export default BubblePage;
