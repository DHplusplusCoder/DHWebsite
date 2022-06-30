import ReactDOM from 'react-dom/client';
import "./Cart.css";
function Cart() {
  return (
<div className="wrapper">
<h1>Your Cart Is Currently Empty</h1>
</div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Cart />);

export default Cart

