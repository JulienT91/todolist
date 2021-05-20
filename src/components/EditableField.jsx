import { useRef, useState } from "react";

function EditableField(props) {
  const inputRef = useRef();
  const value = props.value;
  const [editMode, setEditMode] = useState(props.editMode || false);

  function swapMode() {
    if (editMode === true) {
      props.onNewValue(inputRef.current.value);
    }
    setEditMode(!editMode);
  }
  function onKeyDown(event) {
    if (event.keyCode === 13) {
      // keycode touche enter
      props.onNewValue(inputRef.current.value);
      setEditMode(false);
    }
  }
  return (
    <>
      {editMode ? (
        <input
          type="text"
          defaultValue={value}
          ref={inputRef}
          onKeyDown={onKeyDown}
        />
      ) : (
        <>{value}</>
      )}
      <button onClick={swapMode}>✎</button>
    </>
  );
}

export default EditableField;
