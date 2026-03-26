import { Container, Typography, Box, TextField, Button, Card, CardContent } from '@mui/material';
import { motion } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        py: 12,
        backgroundColor: 'transparent',
        position: 'relative'
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            sx={{
              background: 'linear-gradient(90deg, #ff6b9d, #ffa94d, #2cb67d)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2,
              fontWeight: 'bold'
            }}
          >
            Get in Touch
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255, 255, 255, 0.6)',
              mb: 6
            }}
          >
            Have a question or want to work together? Drop us a message!
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1.5fr' },
            gap: 4
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: 2,
                    background: 'linear-gradient(135deg, #ff6b9d, #7f5af0)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2,
                    boxShadow: '0 8px 20px rgba(255, 107, 157, 0.3)'
                  }}
                >
                  <FontAwesomeIcon icon={faEnvelope} size="lg" color="#fff" />
                </Box>
                <Box>
                  <Typography sx={{ color: '#fff', fontWeight: 'bold' }}>
                    Email
                  </Typography>
                  <Typography sx={{ color: '#ff6b9d' }}>
                    w4wycliff@gmail.com
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: 2,
                    background: 'linear-gradient(135deg, #4ecdc4, #2cb67d)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2,
                    boxShadow: '0 8px 20px rgba(78, 205, 196, 0.3)'
                  }}
                >
                  <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" color="#fff" />
                </Box>
                <Box>
                  <Typography sx={{ color: '#fff', fontWeight: 'bold' }}>
                    Location
                  </Typography>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    Michigan, United States
                  </Typography>
                </Box>
              </Box>

              <Button
                variant="outlined"
                sx={{
                  background: 'linear-gradient(90deg, #7f5af0, #ff6b9d)',
                  color: '#fff',
                  border: 'none',
                  textTransform: 'none',
                  px: 4,
                  py: 1.5,
                  borderRadius: '25px',
                  boxShadow: '0 5px 20px rgba(127, 90, 240, 0.4)',
                  '&:hover': {
                    background: 'linear-gradient(90deg, #6a3fd9, #ff5086)',
                    boxShadow: '0 8px 25px rgba(127, 90, 240, 0.5)'
                  }
                }}
              >
                Get Resume
              </Button>
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card
              sx={{
                backgroundColor: 'rgba(26, 11, 46, 0.4)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(127, 90, 240, 0.3)',
                borderRadius: 3,
                boxShadow: '0 10px 40px rgba(127, 90, 240, 0.2)'
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <TextField
                    fullWidth
                    placeholder="Your Name"
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: '#fff',
                        backgroundColor: 'rgba(10, 14, 39, 0.5)',
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.1)'
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(127, 90, 240, 0.5)'
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#7f5af0'
                        }
                      },
                      '& .MuiInputBase-input::placeholder': {
                        color: 'rgba(255, 255, 255, 0.5)',
                        opacity: 1
                      }
                    }}
                  />

                  <TextField
                    fullWidth
                    placeholder="Your Email"
                    variant="outlined"
                    type="email"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: '#fff',
                        backgroundColor: 'rgba(10, 14, 39, 0.5)',
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.1)'
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(127, 90, 240, 0.5)'
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#7f5af0'
                        }
                      },
                      '& .MuiInputBase-input::placeholder': {
                        color: 'rgba(255, 255, 255, 0.5)',
                        opacity: 1
                      }
                    }}
                  />

                  <TextField
                    fullWidth
                    placeholder="Subject"
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: '#fff',
                        backgroundColor: 'rgba(10, 14, 39, 0.5)',
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.1)'
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(127, 90, 240, 0.5)'
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#7f5af0'
                        }
                      },
                      '& .MuiInputBase-input::placeholder': {
                        color: 'rgba(255, 255, 255, 0.5)',
                        opacity: 1
                      }
                    }}
                  />

                  <TextField
                    fullWidth
                    placeholder="Your Message"
                    variant="outlined"
                    multiline
                    rows={5}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: '#fff',
                        backgroundColor: 'rgba(10, 14, 39, 0.5)',
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.1)'
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(127, 90, 240, 0.5)'
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#7f5af0'
                        }
                      },
                      '& .MuiInputBase-input::placeholder': {
                        color: 'rgba(255, 255, 255, 0.5)',
                        opacity: 1
                      }
                    }}
                  />

                  <Button
                    variant="contained"
                    fullWidth
                    endIcon={<FontAwesomeIcon icon={faPaperPlane} />}
                    sx={{
                      background: 'linear-gradient(90deg, #ff6b9d, #7f5af0, #4ecdc4)',
                      textTransform: 'none',
                      py: 1.5,
                      fontSize: '1rem',
                      borderRadius: '10px',
                      boxShadow: '0 8px 25px rgba(255, 107, 157, 0.4)',
                      '&:hover': {
                        background: 'linear-gradient(90deg, #ff5086, #6a3fd9, #3fb8ae)',
                        boxShadow: '0 10px 30px rgba(255, 107, 157, 0.5)'
                      }
                    }}
                  >
                    Send Message
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
