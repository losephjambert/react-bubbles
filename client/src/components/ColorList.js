import React, { useState, useEffect } from 'react';

import { updateColor } from '../api';
import { COLORS_UPDATE_START, COLORS_UPDATE_SUCCESS, COLORS_UPDATE_ERROR } from '../actions';

const initialColor = {
  color: '',
  code: { hex: '' },
};

const ColorList = ({ colors, dispatch, handleDeleteColor, updateSuccess }) => {
  console.log(colors);
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  useEffect(() => {
    if (updateSuccess) {
      setEditing(false);
    }
  }, [updateSuccess]);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    console.log(colorToEdit);
    const body = { ...colorToEdit };
    const params = { ...colorToEdit.id };

    updateColor(body, params, {
      start: payload => dispatch({ type: COLORS_UPDATE_START, payload }),
      success: payload => dispatch({ type: COLORS_UPDATE_SUCCESS, payload }),
      error: payload => dispatch({ type: COLORS_UPDATE_ERROR, payload }),
    });
  };

  return (
    <div className='colors-wrap'>
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className='delete' onClick={() => handleDeleteColor(color.id)}>
                x
              </span>{' '}
              {color.color}
            </span>
            <div className='color-box' style={{ backgroundColor: color.code.hex }} />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e => setColorToEdit({ ...colorToEdit, color: e.target.value })}
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value },
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className='button-row'>
            <button type='submit'>save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className='spacer' />
      {/* stretch - build another form here to add a color */}
    </div>
  );
};

export default ColorList;
