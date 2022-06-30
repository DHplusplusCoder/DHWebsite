import ReactDOM from 'react-dom/client';
function Home() {
  return (
<div className="wrapper">
<h1>Home Page</h1>
</div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />);

export default Home

