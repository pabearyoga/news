import React from 'react';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import BackBtn from '../../components/BackBnt/BackBnt';
import { NavLink } from 'react-router-dom';
import {
  Typography,
  Grid,
  Card,
  CardMedia,
} from '@mui/material';

const NewsDetailsItem = () => {
  const location = useLocation();
  const news = location.state?.news;

  // Check if news is available
  if (!news) {
    return <div>Information not available</div>;
  }

  // Extract news details
  const { title, author, description, publishedAt, urlToImage, source, content } = news;

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} style={{display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '50px'}}>
          <NavLink to="/">
            <BackBtn />
          </NavLink>
          <Typography variant="h4" >
            {title}
          </Typography>
        </Grid>

        <Grid item xs={12} style={{display:'flex', justifyContent: 'space-between', marginBottom: '20px'}}>
          <Typography variant="body1" style={{color: 'var(--blue)', fontSize: '16px', fontStyle: 'normal', fontWeight: '600'}}>
            Source: {source.name || 'N/A'}
          </Typography>
          <Typography variant="body1" style={{color: 'var(--blue)', fontSize: '16px', fontStyle: 'normal', fontWeight: '600'}}>
            Publication date: {format(new Date(publishedAt), 'yyyy-MM-dd') || 'N/A'}
          </Typography>
        </Grid>

        <Grid item xs={12}>
                  <Typography variant="h5" style={{ color: 'var(--text)', fontSize: '24px', fontStyle: 'normal', fontWeight: '600', marginBottom:'20px'}}>
            Description
          </Typography>
          <Typography variant="body1" style={{ color: 'var(--text)', fontSize: '18px', fontStyle: 'normal', fontWeight: '400', marginBottom:'20px'}}>
            {description}
          </Typography>
        </Grid>
      </Grid>

      <Card style={{marginBottom: '20px'}}>
        <CardMedia component="img" alt="news img" height="auto" image={urlToImage}  />
      </Card>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5" style={{ color: 'var(--text)', fontSize: '24px', fontStyle: 'normal', fontWeight: '600', marginBottom:'20px'}}>
            Content
          </Typography>
          <Typography variant="body1" style={{ color: 'var(--text)', fontSize: '18px', fontStyle: 'normal', fontWeight: '400', marginBottom:'20px'}}>
            {content}
          </Typography>
        </Grid>
        <Grid item xs={12} style={{borderTop: '1px solid var(--accent)', paddingTop: '10px', paddingBottom: '50px'}}>
          <Typography variant="body1" style={{color: 'var(--blue)', fontSize: '16px', fontStyle: 'normal', fontWeight: '600'}}>
            Authors: {author || 'N/A'}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default NewsDetailsItem;
