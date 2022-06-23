import React from 'react';

function Header() {
	return(
    <div>
      <h1>후보별 득표율</h1>
      <table cellspacing="1" width="400" border="1">
        <tr>
          <td height="50" width="100" align="center"><a href="A_01_H.jsp">후보등록</a></td>
          <td height="50" width="100" align="center"><a href="B_01_H.jsp">투표</a></td>
          <td height="50" width="100" bgcolor="#00FFFF" align="center"><a href="App.js">개표결과</a></td>
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
    </div>
  );
}

export default Header;