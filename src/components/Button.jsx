/* eslint-disable react/prop-types */
export default function Button({ type, children, onclick }) {
  const buttonType = type === 'secondary' ? 'btn--secondary' : ' '
  return (
    <button className={`btn ${buttonType}`} onClick={onclick}>
      {children}
    </button>
  )
}
