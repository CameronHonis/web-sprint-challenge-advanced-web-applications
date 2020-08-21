import React, { useState, useEffect } from "react";
import useApi from '../hooks/useApi'
import { axiosWithAuth } from '../axiosBuilds'

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);
  const [colorToDelete, setColorToDelete] = useState()

  const [putApiData, putApiFire] = useApi('put', {colorToEdit: colorToEdit})
  const [deleteApiData, deleteApiFire] = useApi('delete', {color: colorToDelete})

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    putApiFire()
  };

  useEffect(() => {
    if (putApiData){
      updateColors([...colors].map(v => {
        if (v.id === putApiData.id){
          return putApiData
        } else {
          return v
        }
      }))
      setEditing(false)
      setColorToEdit(initialColor)
    }
  },[putApiData])

  const deleteColor = color => {
    setColorToDelete(color)
  };

  useEffect(() => {
    if (colorToDelete){
      deleteApiFire()
      setColorToDelete()
    }
  },[colorToDelete])

  useEffect(() => {
    if (deleteApiData){
      console.log(deleteApiData)
      updateColors([...colors].filter(v => {
        if (v.id === deleteApiData){
          return null
        } else {
          return v
        }
      }))
      if (colorToEdit.id === deleteApiData){
        setEditing(false)
        setColorToEdit(initialColor)
      }
    }
  },[deleteApiData])

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)
                  }
                }>
                  x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      {/* stretch - build another form here to add a color */}
    </div>
  );
};

export default ColorList;
