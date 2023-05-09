import './index.css'

const DenominationItem = props => {
  // props changed
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails
  // const add
  const onClickDenomination = () => {
    updateBalance(value)
  }

  return (
    <li className="denomination-item">
      <button
        type="button"
        className="denomination-button"
        onClick={onClickDenomination}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
