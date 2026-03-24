import { AppBar, Toolbar, Button, Box, Container } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCode, faBriefcase, faFolder, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: 'rgba(15, 5, 35, 0.85)',
        backdropFilter: 'blur(20px)',
        boxShadow: 'none',
        borderBottom: '1px solid rgba(255, 107, 157, 0.2)'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'center', py: 1 }}>
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              border: '1px solid',
              borderImage: 'linear-gradient(90deg, #ff6b9d, #7f5af0, #2cb67d) 1',
              borderRadius: '50px',
              padding: '8px 16px',
              backgroundColor: 'rgba(127, 90, 240, 0.08)',
              boxShadow: '0 4px 20px rgba(127, 90, 240, 0.15)'
            }}
          >
            <Button
              onClick={() => scrollToSection('home')}
              sx={{
                color: '#fff',
                textTransform: 'none',
                '&:hover': {
                  color: '#ff6b9d',
                  backgroundColor: 'rgba(255, 107, 157, 0.1)'
                }
              }}
            >
              <FontAwesomeIcon icon={faHome} style={{ marginRight: '8px' }} />
              Home
            </Button>
            <Button
              onClick={() => scrollToSection('skills')}
              sx={{
                color: '#fff',
                textTransform: 'none',
                '&:hover': {
                  color: '#7f5af0',
                  backgroundColor: 'rgba(127, 90, 240, 0.1)'
                }
              }}
            >
              <FontAwesomeIcon icon={faCode} style={{ marginRight: '8px' }} />
              Skills
            </Button>
            <Button
              onClick={() => scrollToSection('experience')}
              sx={{
                color: '#fff',
                textTransform: 'none',
                '&:hover': {
                  color: '#2cb67d',
                  backgroundColor: 'rgba(44, 182, 125, 0.1)'
                }
              }}
            >
              <FontAwesomeIcon icon={faBriefcase} style={{ marginRight: '8px' }} />
              Experience
            </Button>
            <Button
              onClick={() => scrollToSection('projects')}
              sx={{
                color: '#fff',
                textTransform: 'none',
                '&:hover': {
                  color: '#4ecdc4',
                  backgroundColor: 'rgba(78, 205, 196, 0.1)'
                }
              }}
            >
              <FontAwesomeIcon icon={faFolder} style={{ marginRight: '8px' }} />
              Projects
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              sx={{
                color: '#fff',
                textTransform: 'none',
                '&:hover': {
                  color: '#ffa94d',
                  backgroundColor: 'rgba(255, 169, 77, 0.1)'
                }
              }}
            >
              <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '8px' }} />
              Contact
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
