import * as React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import ScoresReducer from '../Slices/ScoresReducer';

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
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  border-radius: 8px;
  margin: 5px 0;
  background: linear-gradient(to bottom, #E8E8E8, #FFFFFF);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  font-size: 1.2rem;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  font-size: 1.5rem;
`;

const Score = styled.div`
  font-weight: bold;
  color: #444;
  margin-right: 10px;
`;

const UserName = styled.div`
  flex-grow: 1;
  text-align: center;
`;

const Scores = styled.div`
  flex-grow: 1;
  text-align: center;
`;

interface User {
  place: number;
  name: string;
  score: number;
  icon: string;
}

interface UserScoreBoardProps {
  users: User[];
}


 
  const renderUserCards = (users: User[]) => {
    const [score, setScore] = useState(0);
    useEffect(() => {
      setScore(users[0].score)
  },[users])
    const updateScore = (score: number) => {
      return {
          type: 'UPDATE_SCORE',
          payload: score
      };
  };
  const dispatch = useDispatch();
  const handleScoreUpdate = () => {
    dispatch(updateScore(score));
};
console.log('score', score);
  return users.map((user, index) => (
    <UserCard key={index}>
      <Score>#{user.place}</Score>
      <UserName>{user.name}</UserName>
      <Scores>{user.score}</Scores>
      <IconWrapper>{user.icon}</IconWrapper> {/* If using actual icons, replace this line */}
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