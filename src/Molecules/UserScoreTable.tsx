import React from 'react';
import styled from 'styled-components';

const UserScoreBoardWrapper = styled.div`
  padding: 0 0 0 20px;
`;

const UserScoreBoard = styled.div`
  background: #F0F0F0;
  border-radius: 10px;
  overflow: auto;
`;

const UserCard = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  align-items: baseline;
  padding: 0 20px;
  margin: 9px;
  border-bottom: 1px solid #ccc;
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
      <div>#{user.place}</div>
      <div>{user.name}</div>
      <div><img src={user.icon} /*alt={`${user.name}'s icon`}*/ /></div>
    </UserCard>
  ));
}

const UserScoreBoardComponent: React.FC<UserScoreBoardProps> = ({ users }) => {
  return (
        <UserScoreBoardWrapper>
            <UserScoreBoard>
                {renderUserCards(users)}
            </UserScoreBoard>
        </UserScoreBoardWrapper>
    );
}

export default UserScoreBoardComponent;