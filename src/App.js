import bar from './bar.png';

import './App.css';

function App() {

  function Score({ user }) {
    return (
      <form>
      <table cellspacing="3" width="700" border="1">
        <tr>
          <td width="20%">
          {user.name}
          </td>
          <td width="80%" align="left">
          <img src={bar}
            height="20"
            width= {user.electedPer * 5}
            alt="bar"/>
          {user.electedPer}%
          </td>
        </tr>
      </table>
    </form>
    );
  }

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
    <h1>후보별 득표율</h1>
      <table cellspacing="1" width="400" border="1">
        <tr>
          <td height="50" width="100" align="center"><a href="A_01_H.jsp">후보등록</a></td>
          <td height="50" width="100" align="center"><a href="B_01_H.jsp">투표</a></td>
          <td height="50" width="100" bgcolor="#00FFFF" align="center"><a href="ResultView2">개표결과</a></td>
        </tr>
      </table>
      <table cellspacing="3" width="700" border="1">
        <tr>
          <td width="20%">
            <p align="center">
              이름
            </p>
          </td>
          <td width="80%">
            <p align="center">인기도</p>
          </td>
        </tr>
      </table>

    {/* <form>
      <table cellspacing="3" width="700" border="1">
        <tr>
          <td width="20%">
          홍길 1
          </td>
          <td width="80%" align="left">
          <img src={bar}
            height="20"
            width="50px"/>
          10%
          </td>
        </tr>
      </table>
    </form> */}
    {socres.map(user => (
        <Score user={user} key={user.id} />
      ))}
  </div>
  );
}


export default App;

