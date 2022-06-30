import ReactDOM from 'react-dom/client';
import './UserAccount.css';
function UserAccount() {
  return (
<div className="wrapper">
<h1>Join The Pizza Party</h1>
    <form>
<fieldset>
      <label>Username:
        <input type="text" />
      </label>

	 <label>Password:
        <input type="text" />
      </label>

	<label>Re-Entered Password:
        <input type="text" />
      </label>

	<label>E-Mail Address or Phone Number:
        <input type="text" />
      </label>

<label>Full Address:
        <input type="text" />
      </label>
<label>PO Box:
        <input type="text" />
      </label>

<label>Zip Code:
        <input type="text" />
      </label>

<input type="radio" value="Green Peppers Account" name="accounttype"/> Green Peppers Account
<input type="radio" value="Garlic Sauce Account" name="accounttype"/> Garlic Sauce Account
<input type="radio" value="Marinara Sauce Account" name="accounttype"/> Marinara Sauce Account


</fieldset>
<button type="submit">Submit</button>
    </form>
</div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<UserAccount />);

export default UserAccount



















