import { useState } from 'react';
import { Container, Typography, Box, Card, CardContent, CardMedia, Chip, Button, IconButton } from '@mui/material';
import { motion } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import projectImage1 from 'figma:asset/16f1fe20533fc4376dba28338ab44c86b0c5377b.png';
import projectImage2 from 'figma:asset/3f81a5e84be53f15c63eedc5ee6528deb1d8e093.png';
import projectImage3 from 'figma:asset/84237a39a1aa848f77dea598933f28831c116b86.png';

const projects = [
  {
    title: 'FlixMovies',
    description: 'A movie discovery platform built with Angular. It includes UX design and frontend implementation.',
    image: projectImage1,
    tags: ['Angular 18', 'TypeScript', 'Tailwind CSS', 'IMDB - Rest API', 'Figma', 'UX Design'],
    category: 'frontend',
    featured: true
  },
  {
    title: 'Text to Image Generator AI',
    description: 'An AI image generator built with Angular. Enter text prompts and generate stunning images using cutting-edge AI models.',
    image: projectImage2,
    tags: ['Angular 18', 'TypeScript', 'SCSS', 'Hugging Face - Models & API'],
    category: 'frontend',
    featured: false
  },
  {
    title: '100 Daily UI Challenges',
    description: 'A collection of 100 daily UI challenges, showcasing various design concepts and implementations.',
    image: projectImage3,
    tags: ['Figma', 'UX Design'],
    category: 'ux',
    featured: false
  }
];

export function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <Box
      id="projects"
      sx={{
        py: 12,
        backgroundColor: '#0a0e27',
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
            align="center"
            sx={{
              color: '#00bcd4',
              mb: 2,
              fontWeight: 'bold'
            }}
          >
            Projects
          </Typography>

          <Typography
            variant="h6"
            align="center"
            sx={{
              color: 'rgba(255, 255, 255, 0.6)',
              mb: 4
            }}
          >
            Explore my creative journey through code and design
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 6 }}>
            <Button
              onClick={() => setFilter('all')}
              sx={{
                backgroundColor: filter === 'all' ? '#00bcd4' : 'transparent',
                color: filter === 'all' ? '#0a0e27' : '#00bcd4',
                border: '1px solid #00bcd4',
                borderRadius: '20px',
                px: 3,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: filter === 'all' ? '#00acc1' : 'rgba(0, 188, 212, 0.1)'
                }
              }}
            >
              All
            </Button>
            <Button
              onClick={() => setFilter('frontend')}
              sx={{
                backgroundColor: filter === 'frontend' ? '#00bcd4' : 'transparent',
                color: filter === 'frontend' ? '#0a0e27' : '#00bcd4',
                border: '1px solid #00bcd4',
                borderRadius: '20px',
                px: 3,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: filter === 'frontend' ? '#00acc1' : 'rgba(0, 188, 212, 0.1)'
                }
              }}
            >
              Frontend
            </Button>
            <Button
              onClick={() => setFilter('ux')}
              sx={{
                backgroundColor: filter === 'ux' ? '#00bcd4' : 'transparent',
                color: filter === 'ux' ? '#0a0e27' : '#00bcd4',
                border: '1px solid #00bcd4',
                borderRadius: '20px',
                px: 3,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: filter === 'ux' ? '#00acc1' : 'rgba(0, 188, 212, 0.1)'
                }
              }}
            >
              UX
            </Button>
          </Box>
        </motion.div>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 4
          }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  backgroundColor: 'rgba(20, 25, 50, 0.6)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(0, 188, 212, 0.2)',
                  borderRadius: 2,
                  height: '100%',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    borderColor: '#00bcd4',
                    boxShadow: '0 10px 30px rgba(0, 188, 212, 0.3)'
                  }
                }}
              >
                {project.featured && (
                  <Chip
                    label="Featured Project"
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      backgroundColor: '#00bcd4',
                      color: '#0a0e27',
                      fontWeight: 'bold',
                      zIndex: 1
                    }}
                  />
                )}

                <CardMedia
                  component="img"
                  height="240"
                  image={project.image}
                  alt={project.title}
                  sx={{ objectFit: 'cover' }}
                />

                <CardContent>
                  <Typography variant="h5" sx={{ color: '#00bcd4', mb: 2 }}>
                    {project.title}
                  </Typography>

                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 2, lineHeight: 1.7 }}>
                    {project.description}
                  </Typography>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    {project.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(0, 188, 212, 0.1)',
                          color: 'rgba(255, 255, 255, 0.8)',
                          border: '1px solid rgba(0, 188, 212, 0.3)'
                        }}
                      />
                    ))}
                  </Box>

                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <IconButton
                      sx={{
                        color: '#fff',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        '&:hover': {
                          color: '#00bcd4',
                          borderColor: '#00bcd4'
                        }
                      }}
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </IconButton>
                    <IconButton
                      sx={{
                        color: '#fff',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        '&:hover': {
                          color: '#00bcd4',
                          borderColor: '#00bcd4'
                        }
                      }}
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
