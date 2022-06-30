import ReactDOM from 'react-dom/client';
import {Link} from 'react-router-dom';
import "./Products.css"
function Products() {
  return (
<div className="wrapper">
<h1>Pre-Order Now For A Special Discount!</h1>
<Link to="/user">Become a Pizzeriaist.</Link>
</div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Products />);

export default Products

