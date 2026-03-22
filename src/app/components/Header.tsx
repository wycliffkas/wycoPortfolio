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
        backgroundColor: 'rgba(10, 14, 39, 0.95)',
        backdropFilter: 'blur(10px)',
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0, 255, 255, 0.1)'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'center', py: 1 }}>
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              border: '1px solid #00bcd4',
              borderRadius: '50px',
              padding: '8px 16px',
              backgroundColor: 'rgba(0, 188, 212, 0.05)'
            }}
          >
            <Button
              onClick={() => scrollToSection('home')}
              sx={{
                color: '#fff',
                textTransform: 'none',
                '&:hover': { color: '#00bcd4' }
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
                '&:hover': { color: '#00bcd4' }
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
                '&:hover': { color: '#00bcd4' }
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
                '&:hover': { color: '#00bcd4' }
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
                '&:hover': { color: '#00bcd4' }
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
