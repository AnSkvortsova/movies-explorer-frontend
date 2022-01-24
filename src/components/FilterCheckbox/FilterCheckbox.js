export function FilterCheckbox(props) {
  function handleCheckbox(evt) {
    props.onCheckboxChange(evt.target.checked);
  };

  return (
    <div className="filterCheckbox">
      <input className="filterCheckbox__switch" checked={props.query.isShortMovie} type="checkbox" id="switch" onChange={handleCheckbox} />
      <label className="filterCheckbox__label" htmlFor="switch">Короткометражки</label>
    </div>
  );
}