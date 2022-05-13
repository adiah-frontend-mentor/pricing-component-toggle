import './toggle.scss';

const Toggle = () => {
  return (
    <label class="pricing-toggle__switch">
      <input type="checkbox" id="sub-period" />
      <span class="slider"></span>
    </label>
  )
}

export default Toggle