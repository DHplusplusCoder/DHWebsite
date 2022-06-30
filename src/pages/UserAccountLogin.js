import ReactDOM from 'react-dom/client';
function UserAccountLogin() {
  return (
<div className="wrapper">
<h1>Rejoin The Pizza Party</h1>
    <form>
<fieldset>
      <label>Username:
        <input type="text" />
      </label>

	 <label>Password:
        <input type="text" />
      </label>
</fieldset>
<button type="submit">Submit</button>
    </form>
</div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<UserAccountLogin />);

export default UserAccountLogin

