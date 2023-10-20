import * as React from 'react'
import styled from 'styled-components'
import UserScoreBoardComponent from '../Molecules/UserScoreTable';
import ChatBoxComponent from '../Molecules/ChatBox';
import GuessingComponent from '../Molecules/GuessingComponent';

const TableEntryOuter = styled.div`
  display: flex;
  width: 80vw;
  height: 32vh;  // 100% of the viewport height.
  // border: 3px solid purple
`;

const Spanner = styled.span`
  flex-grow: 1
`
interface UserChatDisplayProps {
    className?: string;
    children?: React.ReactNode;
  }
const UserChatDisplayComponent: React.FC<UserChatDisplayProps> = ({ children }) => {

    const users = [
        {place: 1, name: 'jimbo', icon: '🙂'},
        { place: 2, name: 'Bob', icon: '😂' },
        { place: 3, name: 'Lisa', icon: '🚀' },
        { place: 4, name: 'Sue', icon: '🌟' },
        { place: 5, name: 'Charlie', icon: '🌈' },
        { place: 6, name: 'Molly', icon: '👾' },
        { place: 7, name: 'Tom', icon: '🍦' },
        { place: 8, name: 'Dianne', icon: '🍕' },
        { place: 9, name: 'Steve', icon: '🌍' },
        { place: 10, name: 'Rachael', icon: '🎧' },
        // { place: 11, name: 'Jacob', icon: 'icon11.png' },
        // { place: 12, name: 'Marie', icon: 'icon12.png' },
        // { place: 13, name: 'Lucas', icon: 'icon13.png' },
        // { place: 14, name: 'Emma', icon: 'icon14.png' },
        // { place: 15, name: 'David', icon: 'icon15.png' },
        // { place: 16, name: 'Sophia', icon: 'icon16.png' },
        // { place: 17, name: 'Michael', icon: 'icon17.png' },
        // { place: 18, name: 'Olivia', icon: 'icon18.png' },
        // { place: 19, name: 'Daniel', icon: 'icon19.png' },
        // { place: 20, name: 'Emily', icon: 'icon20.png' }
      ]

return (
        <TableEntryOuter>
            <UserScoreBoardComponent users={users} />
            <GuessingComponent word='example'/>
            {/* <Spanner/> */}
            <ChatBoxComponent>{children}</ChatBoxComponent>
        </TableEntryOuter>
    )
}

export default UserChatDisplayComponent