export function FilterCheckbox() {
  return (
    <div className="filterCheckbox">
      <input className="filterCheckbox__switch" type="checkbox" id="switch" />
      <label className="filterCheckbox__label" htmlFor="switch">Короткометражки</label>
    </div>
  );
}