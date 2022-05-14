import './toggle.scss';

const Toggle = ({handleClick}) => {
  return (
    <label class="pricing-toggle__switch">
      <input 
        type="checkbox" 
        id="sub-period" 
        onChange={handleClick}
      />
      <span class="slider"></span>
    </label>
  )
}

export default Toggle