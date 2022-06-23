//import bar from './bar.png';
import Score from './component/Score';
import Header from './component/Header';
import './App.css';

function App() {
  <Score />
  
  const socres = [
    {
      id: 1,
      name: '홍길1',
      electedPer : 50
    },
    {
      id: 2,
      name: '홍길2',
      electedPer : 30
    },
    {
      id: 3,
      name: '홍길3',
      electedPer : 20
    }
  ];

  return (
    <div className="App">
    
    <Header />
    
    {socres.map(user => (
        <Score user={user} key={user.id} />
      ))}
  </div>
  );
}


export default App;

