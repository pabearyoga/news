import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { IoLinkOutline } from 'react-icons/io5';
import { format } from 'date-fns';
import TablePagination from '@mui/material/TablePagination';

const NewsList = ({ newsData }) => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    console.log(event.target.value)
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  const paginatedNews = newsData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const handleMoreInfoClick = (news) => {
    navigate(`/news/${news.publishedAt}`, { state: { news } });
  };

  return (
    <div>
      <TableContainer component={Paper} style={{marginBottom: '50px'}}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow style={{ backgroundColor: 'var(--accent)', border: '1px solid var(--accent)' }}>
              <TableCell>Image</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Publication date</TableCell>
              <TableCell>Original URL</TableCell>
            </TableRow>
          </TableHead>
          <TableBody> 
            {paginatedNews.map((news, index) => (
              <TableRow key={index} >
                <TableCell style={{padding:'10px'}}>
                  <img
                    src={
                      news.urlToImage ||
                      'https://img.icons8.com/external-others-inmotus-design/67/ED4749/external-N-qwerty-keypad-others-inmotus-design.png'
                    }
                    alt="news img"
                  />
                </TableCell>
                <TableCell style={{ border: '1px solid var(--accent)', width: 200 }}>
                  <button
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      outline: 'none',
                      cursor: 'pointer',
                      padding: 0, 
                    }}
                    onClick={() => handleMoreInfoClick(news)}
                    onMouseOver={(e) => (e.target.style.textDecoration = 'underline')}
                    onMouseOut={(e) => (e.target.style.textDecoration = 'none')}
                  >
                    <div
                      style={{
                        fontSize: '14px',
                        lineHeight: 1.5,
                        maxHeight: '40px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        whiteSpace: 'pre-wrap',
                        WebkitLineClamp: 2, 
                      }}
                    >
                      {news.title}
                    </div>
                  </button>
                </TableCell>
                <TableCell style={{ border: '1px solid var(--accent)' }}>
                  <Box
                    style={{
                      display: '-webkit-box',
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      WebkitLineClamp: 2, 
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {news.author || 'N/A'}
                  </Box>
                </TableCell>
                <TableCell style={{ border: '1px solid var(--accent)', width: 300, whiteSpace: 'pre-wrap' }}>
                  <Box
                    style={{
                      display: '-webkit-box',
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      WebkitLineClamp: 2,
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {news.description || 'N/A'}
                  </Box>
                </TableCell>
                <TableCell style={{ border: '1px solid var(--accent)', textAlign: 'center' }} width={150}>
                  {format(new Date(news.publishedAt), 'yyyy-MM-dd')}
                </TableCell>
                <TableCell style={{ border: '1px solid var(--accent)', textAlign: 'center' }} width={120}>
                  <a href={news.url} target="_blank" rel="noreferrer">
                    <IoLinkOutline size={24} color={'var(--text)'} />
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          style={{ border: '1px solid var(--accent)' }}
          rowsPerPageOptions={[5, 10, 25, 50, 100, { label: 'All', value: -1 }]}
          component="div"
          count={newsData.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
};

export default NewsList;
