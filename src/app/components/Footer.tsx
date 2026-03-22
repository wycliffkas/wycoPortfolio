import { Container, Typography, Box, IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faBehance } from '@fortawesome/free-brands-svg-icons';

export function Footer() {
  return (
    <Box
      sx={{
        py: 4,
        backgroundColor: '#0a0e27',
        borderTop: '1px solid rgba(0, 188, 212, 0.1)'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
          <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
            Handcrafted with <FontAwesomeIcon icon={faHeart} color="#ff4081" /> by Abid Akram.
          </Typography>

          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton
              sx={{
                color: 'rgba(255, 255, 255, 0.6)',
                '&:hover': { color: '#00bcd4' }
              }}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </IconButton>
            <IconButton
              sx={{
                color: 'rgba(255, 255, 255, 0.6)',
                '&:hover': { color: '#00bcd4' }
              }}
            >
              <FontAwesomeIcon icon={faGithub} />
            </IconButton>
            <IconButton
              sx={{
                color: 'rgba(255, 255, 255, 0.6)',
                '&:hover': { color: '#00bcd4' }
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
