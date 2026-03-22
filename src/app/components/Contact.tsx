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
        backgroundColor: '#0f1229',
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
              color: '#00bcd4',
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
                    borderRadius: 1,
                    background: 'linear-gradient(135deg, #7c4dff, #00bcd4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2
                  }}
                >
                  <FontAwesomeIcon icon={faEnvelope} size="lg" color="#fff" />
                </Box>
                <Box>
                  <Typography sx={{ color: '#fff', fontWeight: 'bold' }}>
                    Email
                  </Typography>
                  <Typography sx={{ color: '#00bcd4' }}>
                    abid.akram01@gmail.com
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: 1,
                    background: 'linear-gradient(135deg, #ff4081, #7c4dff)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2
                  }}
                >
                  <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" color="#fff" />
                </Box>
                <Box>
                  <Typography sx={{ color: '#fff', fontWeight: 'bold' }}>
                    Location
                  </Typography>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    Bengaluru, Karnataka 560103
                  </Typography>
                </Box>
              </Box>

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
                backgroundColor: 'rgba(20, 25, 50, 0.6)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(0, 188, 212, 0.2)',
                borderRadius: 2
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
                          borderColor: 'rgba(0, 188, 212, 0.5)'
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#00bcd4'
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
                          borderColor: 'rgba(0, 188, 212, 0.5)'
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#00bcd4'
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
                          borderColor: 'rgba(0, 188, 212, 0.5)'
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#00bcd4'
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
                          borderColor: 'rgba(0, 188, 212, 0.5)'
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#00bcd4'
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
                      background: 'linear-gradient(45deg, #00bcd4, #7c4dff)',
                      textTransform: 'none',
                      py: 1.5,
                      fontSize: '1rem',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #00acc1, #6a3de8)'
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
