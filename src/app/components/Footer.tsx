import { Container, Typography, Box, IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faBehance } from '@fortawesome/free-brands-svg-icons';

export function Footer() {
  return (
    <Box
      sx={{
        py: 4,
        backgroundColor: 'rgba(15, 5, 35, 0.8)',
        backdropFilter: 'blur(20px)',
        borderTop: '2px solid',
        borderImage: 'linear-gradient(90deg, #ff6b9d, #7f5af0, #4ecdc4) 1'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
          <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            Handcrafted with <FontAwesomeIcon icon={faHeart} color="#ff6b9d" beat /> by Abid Akram.
          </Typography>

          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton
              sx={{
                color: 'rgba(255, 255, 255, 0.6)',
                border: '1px solid rgba(127, 90, 240, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: '#7f5af0',
                  borderColor: '#7f5af0',
                  backgroundColor: 'rgba(127, 90, 240, 0.1)',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 5px 15px rgba(127, 90, 240, 0.3)'
                }
              }}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </IconButton>
            <IconButton
              sx={{
                color: 'rgba(255, 255, 255, 0.6)',
                border: '1px solid rgba(255, 107, 157, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: '#ff6b9d',
                  borderColor: '#ff6b9d',
                  backgroundColor: 'rgba(255, 107, 157, 0.1)',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 5px 15px rgba(255, 107, 157, 0.3)'
                }
              }}
            >
              <FontAwesomeIcon icon={faGithub} />
            </IconButton>
            <IconButton
              sx={{
                color: 'rgba(255, 255, 255, 0.6)',
                border: '1px solid rgba(78, 205, 196, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: '#4ecdc4',
                  borderColor: '#4ecdc4',
                  backgroundColor: 'rgba(78, 205, 196, 0.1)',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 5px 15px rgba(78, 205, 196, 0.3)'
                }
              }}
            >
              <FontAwesomeIcon icon={faBehance} />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
