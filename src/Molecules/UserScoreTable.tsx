import React from 'react';
import styled from 'styled-components';

const UserScoreBoardWrapper = styled.div`
  display: grid;
//   height: 10px;
//   width: 10px;
  grid-template-rows: 1fr auto 1fr;
  align-items: center;
  flex: 2
  flex-basis: 100%
`;

const UserScoreBoard = styled.div`
  grid-row: 2 / 3;
  display: flex;
  flex-direction: column;
  max-width: 60%;
  max-height: 20%
  margin: auto;
  background: #F0F0F0;
  border-radius: 10px;
  overflow: auto;
`;

const UserCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  
  &:last-child {
    border-bottom: none;
  }
  
  div:first-child {
    text-align: left;
  }

  div:last-child {
    text-align: right;
  }
`;

interface User {
  place: number;
  name: string;
  icon: string;
}

interface UserScoreBoardProps {
  users: User[];
}

const renderUserCards = (users: User[]) => {
  return users.map((user, index) => (
    <UserCard key={index}>
      <div>{user.place}</div>
      <div>{user.name}</div>
      <div><img src={user.icon} alt={`${user.name}'s icon`} /></div>
    </UserCard>
  ));
}

const UserScoreBoardComponent: React.FC<UserScoreBoardProps> = ({ users }) => {
  return (
        <UserScoreBoardWrapper>
            <UserScoreBoard>
                {/* {renderUserCards(users)} */}
            </UserScoreBoard>
        </UserScoreBoardWrapper>
    );
}


// const UserScoreBoard = styled.div`
//   width: 65%;
//   margin: auto;
//   background: #eee;
//   border: 1px solid #ccc;
//   border-radius: 10px;
//   overflow-y: auto;
//   flex: 1;
// `;

// const PlayerCard = styled.div`
//   display: flex;
//   justify-content: space-between;
//   padding: 10px;
//   border-bottom: 1px solid #ccc;

//   &:last-child {
//     border-bottom: none;
//   }
// `;

// const Avatar = styled.div`
//   /* Add your avatar styles */
// `;

// const UserInfo = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;

//   .player-name {
//     font-weight: bold;
//   }

//   .player-rank,
//   .player-score {
//     font-size: 0.8em;
//   }
// `;

// const Icons = styled.div`
//   /* Add styles for icons, if any */
// `;

// interface Users {
//     id?: string | null;
//     name?: string | null;
//     rank?: number | null;
//     score?: number | null;
//     isMe?: boolean | null; 
// }

// interface PlayerCardProps {
//     user: Users
//   }

// const PlayerCardComponent: React.FC<PlayerCardProps> = ({ user }) => {
//   return (
//     <PlayerCard>
//       <Avatar>
//         Avatar component
//       </Avatar>
//       <UserInfo>
//         <div className="player-name">{user.name} {user.isMe && '(You)'}</div>
//         <div className="player-rank">#{user.rank}</div>
//         <div className="player-score">{user.score} points</div>
//       </UserInfo>
//       <Icons>
//         Icons go here
//       </Icons>
//     </PlayerCard>
//   );
// };

// interface UserScoreBoardProps {
//     users: Users[];
//   }

// const UserScoreBoardComponent: React.FC<UserScoreBoardProps> = ({ users }) => {
//   return (
//     <UserScoreBoard>
//       {users.map(user => <PlayerCardComponent key={user.id} user={user} />)}
//     </UserScoreBoard>
//   );
// };
export default UserScoreBoardComponent;