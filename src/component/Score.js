import bar from '../bar.png';
import React from 'react';

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
  
export default Score;