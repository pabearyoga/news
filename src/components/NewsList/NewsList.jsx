import React, { useState } from 'react';
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
import TablePagination from '@mui/material/TablePagination';

const NewsList = ({ newsData, newsTotal }) => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    console.log(event.target.value)
    setRowsPerPage(event.target.value);
    // setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // console.log(page)
  // console.log(rowsPerPage)

  const paginatedNews = newsData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  // console.log(paginatedNews)

  const handleMoreInfoClick = (news) => {
    navigate(`/news/${news.publishedAt}`, { state: { news } });
  };

  return (
    <div>
      <TableContainer component={Paper}>
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
              <TableRow key={index}>
                <TableCell>
                  <img
                    src={
                      news.urlToImage ||
                      'https://img.icons8.com/external-others-inmotus-design/67/ED4749/external-N-qwerty-keypad-others-inmotus-design.png'
                    }
                    alt="news img"
                    width={500}
                  />
                </TableCell>
                <TableCell style={{ border: '1px solid var(--accent)' }}>
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
                </TableCell>
                <TableCell style={{ border: '1px solid var(--accent)' }}>{news.author || 'N/A'}</TableCell>
                <TableCell style={{ border: '1px solid var(--accent)' }} width={300}>{news.description || 'N/A'}</TableCell>
                <TableCell style={{ border: '1px solid var(--accent)', textAlign: 'center' }} width={200}>
                  {format(new Date(news.publishedAt), 'yyyy-MM-dd')}
                </TableCell>
                <TableCell style={{ border: '1px solid var(--accent)', textAlign: 'center' }} width={150}>
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
              count={newsTotal}
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
