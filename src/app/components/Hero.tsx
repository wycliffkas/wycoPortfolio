import { Container, Typography, Box, Button } from '@mui/material';
import { motion } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export function Hero() {
  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #0a0e27 0%, #1a1e3f 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Animated background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          background: 'radial-gradient(circle at 20% 50%, #00bcd4 0%, transparent 50%), radial-gradient(circle at 80% 80%, #7c4dff 0%, transparent 50%)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h6"
            sx={{
              color: '#00bcd4',
              mb: 2,
              fontFamily: 'monospace'
            }}
          >
            Hi, my name is
          </Typography>

          <Typography
            variant="h1"
            sx={{
              color: '#fff',
              mb: 2,
              fontWeight: 'bold'
            }}
          >
            Abid Akram
          </Typography>

          <Typography
            variant="h2"
            sx={{
              color: 'rgba(255, 255, 255, 0.6)',
              mb: 4
            }}
          >
            Full Stack Developer & Designer
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
              mb: 4,
              maxWidth: '600px'
            }}
          >
            I build exceptional digital experiences that live on the web.
            Specialized in creating beautiful, functional, and user-centered products.
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
            <Button
              variant="outlined"
              sx={{
                color: '#00bcd4',
                borderColor: '#00bcd4',
                textTransform: 'none',
                px: 4,
                py: 1.5,
                '&:hover': {
                  backgroundColor: 'rgba(0, 188, 212, 0.1)',
                  borderColor: '#00bcd4'
                }
              }}
              onClick={() => {
                const element = document.getElementById('projects');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View My Work
            </Button>

            <Button
              variant="contained"
              sx={{
                background: 'linear-gradient(45deg, #00bcd4, #7c4dff)',
                textTransform: 'none',
                px: 4,
                py: 1.5,
                '&:hover': {
                  background: 'linear-gradient(45deg, #00acc1, #6a3de8)'
                }
              }}
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get In Touch
            </Button>
          </Box>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              sx={{
                color: '#fff',
                '&:hover': { color: '#00bcd4' }
              }}
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </Button>
            <Button
              sx={{
                color: '#fff',
                '&:hover': { color: '#00bcd4' }
              }}
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
