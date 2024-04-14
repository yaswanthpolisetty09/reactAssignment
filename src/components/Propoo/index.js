const Propoo = props => {
  const {deletee, historyy} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyy
  deletetitle = () => {
    deletee(id)
  }
  return (
    <li>
      <p>{timeAccessed}</p>
      <img src={logoUrl} alt={title} alt="app logo" />
      <p>{title}</p>
      <p>domainUrl</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        onClick={deletetitle}
        alt="delete"
      />
    </li>
  )
}
export default Propoo
