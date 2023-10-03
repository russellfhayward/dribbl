import * as React from 'react'
import styled from 'styled-components'

interface TableProps {
  children: React.ReactNode
}

const StyledTable = styled.table`

`;

const THead = styled.thead`

`;

const TFoot = styled.tfoot`

`;

const TBody = styled.tbody`

`;

const TR = styled.tr`

`;

const TD = styled.td`

`;

const TH = styled.tr`

`;

const Table: React.FC & {
  Head: React.FC<TableProps>;
  Body: React.FC<TableProps>;
  Foot: React.FC<TableProps>;
  TH: React.FC<TableProps>;
  TR: React.FC<TableProps>;
  TD: React.FC<TableProps>;
} = ({ children, ...rest }) => {
  return <StyledTable {...rest}>{children}</StyledTable>;
};

Table.Head = ({ children, ...rest }) => {
  return <THead {...rest}>This is a table</THead>;
};

Table.Body = ({ children, ...rest }) => {
  return <TBody {...rest}>{children}</TBody>;
};

Table.Foot = ({ children, ...rest }) => {
  return <TFoot {...rest}>{children}</TFoot>;
};

Table.TH = ({ children, ...rest }) => {
  return <TH {...rest}>{children}</TH>;
};

Table.TR = ({ children, ...rest }) => {
  return <TR {...rest}>{children}</TR>;
};

Table.TD = ({ children, ...rest }) => {
  return <TD {...rest}>{children}</TD>;
};

export default Table;

