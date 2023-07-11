import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { useNavigate } from 'react-router-dom';
import './breakCrum.scss';
const BasicBreadcrumbs = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div role="presentation" className="breakCrum-container">
      <Breadcrumbs aria-label="breadcrumb">
        {data &&
          data.map((item) => {
            if (!item.url) {
              return (
                <Typography
                  key={item.title}
                  underline="hover"
                  color="inherit"
                  style={{ fontSize: '13px' }}
                >
                  {item.title}
                </Typography>
              );
            }
            return (
              <Typography
                key={item.title}
                style={{ cursor: 'pointer', fontSize: '13px' }}
                color="text.primary"
                onClick={() => {
                  navigate(item.url);
                }}
              >
                {item.title}
              </Typography>
            );
          })}
      </Breadcrumbs>
    </div>
  );
};

export default BasicBreadcrumbs;
