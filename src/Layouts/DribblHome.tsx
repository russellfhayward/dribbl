import * as React from 'react'
import styled from 'styled-components'
import DrawingBoardComponent from '../Molecules/DrawingBoard';
import UserScoreBoardComponent from '../Molecules/UserScoreTable';

const DrawingBoardOuter = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  margin: 0;
  max-width: 80%;
  flex-direction: column;
  padding: 50px 0 0px 150px;
  min-height: calc(100vh - 20px);
`;

const TableEntryOuter = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  // flex: 3
`
const EntryArea = styled.div`
  // flex-basis: 100%;
  flex: .5  
  text-align: center;
  background: lightpink;
`
interface DribbleHomeProps {
  className?: string;
  children?: React.ReactNode;
}

const DribbleHome: React.FC<DribbleHomeProps> = ({className, children}) => {

  const users = [
    {place: 1, name: 'jimbo', icon: 'icon1.png'},
    { place: 2, name: 'Bob', icon: 'icon2.png' },
    { place: 3, name: 'Lisa', icon: 'icon3.png' },
    { place: 4, name: 'Sue', icon: 'icon4.png' },
    { place: 5, name: 'Charlie', icon: 'icon5.png' },
    { place: 6, name: 'Molly', icon: 'icon6.png' },
    { place: 7, name: 'Tom', icon: 'icon7.png' },
    { place: 8, name: 'Dianne', icon: 'icon8.png' },
    { place: 9, name: 'Steve', icon: 'icon9.png' },
    { place: 10, name: 'Rachael', icon: 'icon10.png' },
    { place: 11, name: 'Jacob', icon: 'icon11.png' },
    { place: 12, name: 'Marie', icon: 'icon12.png' },
    { place: 13, name: 'Lucas', icon: 'icon13.png' },
    { place: 14, name: 'Emma', icon: 'icon14.png' },
    { place: 15, name: 'David', icon: 'icon15.png' },
    { place: 16, name: 'Sophia', icon: 'icon16.png' },
    { place: 17, name: 'Michael', icon: 'icon17.png' },
    { place: 18, name: 'Olivia', icon: 'icon18.png' },
    { place: 19, name: 'Daniel', icon: 'icon19.png' },
    { place: 20, name: 'Emily', icon: 'icon20.png' }
  ]

  
  return (
    <DrawingBoardOuter>
      <DrawingBoardComponent/>
      <TableEntryOuter>
        <UserScoreBoardComponent users={users}/>
        <EntryArea>Entry{children}</EntryArea>
      </TableEntryOuter>
    </DrawingBoardOuter>
  )
}

export default DribbleHome;



// const users = [
  //   { id: 'abc123', name: 'Alice', rank: 1, score: 120, isMe: false },
  //   { id: 'def456', name: 'Bob', rank: 2, score: 110, isMe: false },
  //   { id: 'ghi789', name: 'Charlie', rank: 3, score: 100, isMe: false },
  //   { id: 'jkl012', name: 'Dave', rank: 4, score: 90, isMe: false },
  //   { id: 'mno345', name: 'Eve', rank: 5, score: 80, isMe: false },
  //   { id: 'pqr678', name: 'Frank', rank: 6, score: 70, isMe: false },
  //   { id: 'stu901', name: 'Grace', rank: 7, score: 60, isMe: false },
  //   { id: 'vwx234', name: 'Hank', rank: 8, score: 50, isMe: false },
  //   { id: 'yz1234', name: 'Ivy', rank: 9, score: 40, isMe: false },
  //   { id: '567abc', name: 'Jack', rank: 10, score: 30, isMe: false },
  //   { id: '890def', name: 'Kate', rank: 11, score: 20, isMe: false },
  //   { id: '123ghi', name: 'Luke', rank: 12, score: 10, isMe: false },
  //   { id: '456jkl', name: 'Mary', rank: 13, score: 9, isMe: false },
  //   { id: '789mno', name: 'Nina', rank: 14, score: 8, isMe: false },
  //   { id: '012pqr', name: 'Oscar', rank: 15, score: 7, isMe: false },
  //   { id: '345stu', name: 'Paula', rank: 16, score: 6, isMe: false },
  //   { id: '678vwx', name: 'Quinn', rank: 17, score: 5, isMe: false },
  //   { id: '890123', name: 'Tom', rank: 20, score: 2, isMe: false },
  // ];