import BackgroundWithCircle from '@common/BackgroundWithCircle';
import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import ButtonOptions from 'components/button-options';
import Header from 'components/header';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import LandingLabel from '../../assets/images/landing-label.png';

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
  text-align: center;
  z-index: 5;
`;

const ResultImage = styled.img`
  width: 80vw;
  max-width: 700px;
  margin: 30px;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 3.625rem;
`;

const Result = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 740px)');

  window.addEventListener('popstate', () => {
    navigate('/');
  });

  return (
    <BackgroundWithCircle sx={{ height: '100vh' }}>
      <Header isMain={false} />
      <Container>
        <img
          src={LandingLabel}
          alt='landing-label'
          width='312px'
          height='52px'
          style={{
            marginTop: isMobile ? '150px' : '250px',
            transform: 'translateX(-5px)',
            scale: isMobile ? '0.7' : '1',
          }}
        />

        <Box marginTop='50px' marginBottom='30px'>
          <ResultImage src={state} alt='stackticon result' />
        </Box>

        <Buttons
          style={{
            flexDirection: isMobile ? 'column' : 'row',
          }}
        >
          <ButtonOptions url={state} />
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Button
              variant='contained'
              endIcon='🏠'
              sx={{
                width: '236px',
                height: '56px',
                backgroundColor: '#454A52',
                borderRadius: '12px',
                fontSize: '20px',
                fontWeight: 'bold',

                '&:hover': {
                  backgroundColor: 'cg.1',
                },
              }}
            >
              Return to main
            </Button>
          </Link>
        </Buttons>
      </Container>
    </BackgroundWithCircle>
  );
};

export default Result;
