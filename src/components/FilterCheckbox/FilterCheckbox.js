export function FilterCheckbox(props) {
  function handleCheckbox(evt) {
    props.handleCheckboxChange(evt.target.checked);
  };

  return (
    <div className="filterCheckbox">
      <input className="filterCheckbox__switch" type="checkbox" id="switch" onChange={handleCheckbox} />
      <label className="filterCheckbox__label" htmlFor="switch">Короткометражки</label>
    </div>
  );
}