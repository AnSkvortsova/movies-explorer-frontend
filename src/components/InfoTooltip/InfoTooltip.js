export function InfoTooltip(props) {
  return(
    <div className={`popup ${props.isOpen ? 'popup_opend' : ''}`}>
      <div className="popup__container">
        <button className="popup__close" type="button" aria-label="закрыть" onClick={props.onClose}></button>
        <div className={`popup__infoTooltip ${props.isInfoTooltip ? 'popup__infoTooltip_done' : 'popup__infoTooltip_error'}`}></div>
        <h2 className="popup__title">
          {props.isInfoTooltip ? 'Ваши изменения сохранены!' : 'Что-то пошло не так! Попробуйте ещё раз.'}
        </h2>
      </div>
    </div>
  )
}