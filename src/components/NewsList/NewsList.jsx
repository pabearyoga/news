import React from 'react';
import { styled } from '@mui/system';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import { IoLinkOutline } from 'react-icons/io5';
import { format } from 'date-fns';
import css from './NewsList.module.css'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${theme.palette.mode === 'light' ? 'MuiTableCell-head' : 'MuiTableCell-body'}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // '&:nth-of-type(odd)': {
  //   backgroundColor: theme.palette.action.hover,
  // },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const NewsList = ({ newsData }) => {
  const navigate = useNavigate();

  const handleMoreInfoClick = (news) => {
    navigate(`/news/${news.publishedAt}`, { state: { news } });
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow style={{ backgroundColor: 'var(--accent)',  border: '1px solid var(--accent)' }}>
            <StyledTableCell>Image</StyledTableCell>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell>Author</StyledTableCell>
            <StyledTableCell>Description</StyledTableCell>
            <StyledTableCell>Publication date</StyledTableCell>
            <StyledTableCell>Original URL</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {newsData.map((news, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell style={{ border: '1px solid var(--accent)' }}>
                <img
                  src={
                    news.urlToImage ||
                    'https://img.icons8.com/external-others-inmotus-design/67/ED4749/external-N-qwerty-keypad-others-inmotus-design.png'
                  }
                  alt="news img"
                  width={500}
                />
              </StyledTableCell>
              <StyledTableCell style={{ border: '1px solid var(--accent)' }}>
                <button
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    outline: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    textDecoration: 'none'
                  }}
                  onClick={() => handleMoreInfoClick(news)}
                  onMouseOver={(e) => (e.target.style.textDecoration = 'underline')}
                  onMouseOut={(e) => (e.target.style.textDecoration = 'none')} 
                >
                  {news.title}
                </button>
              </StyledTableCell>
              <StyledTableCell style={{ border: '1px solid var(--accent)' }}>{news.author || 'N/A'}</StyledTableCell>
              <StyledTableCell style={{ border: '1px solid var(--accent)' }} width={300}>{news.description || 'N/A'}</StyledTableCell>
              <StyledTableCell style={{ border: '1px solid var(--accent)', textAlign: 'center' }} width={200}>{format(new Date(news.publishedAt), 'yyyy-MM-dd')}</StyledTableCell>
              <StyledTableCell style={{ border: '1px solid var(--accent)', textAlign: 'center' }} width={150}>
                <a href={news.url} target="_blank" rel="noreferrer">
                  <IoLinkOutline size={24} color={'var(--text)'} />
                </a>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default NewsList;
