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
            align="center"
            sx={{
              background: 'linear-gradient(90deg, #7f5af0, #ff6b9d, #ffa94d)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
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
                background: filter === 'all' ? 'linear-gradient(90deg, #ff6b9d, #7f5af0)' : 'transparent',
                color: '#fff',
                border: filter === 'all' ? 'none' : '1px solid #7f5af0',
                borderRadius: '25px',
                px: 4,
                textTransform: 'none',
                boxShadow: filter === 'all' ? '0 5px 20px rgba(127, 90, 240, 0.4)' : 'none',
                '&:hover': {
                  background: filter === 'all' ? 'linear-gradient(90deg, #ff5086, #6a3fd9)' : 'rgba(127, 90, 240, 0.1)',
                  borderColor: '#7f5af0'
                }
              }}
            >
              All
            </Button>
            <Button
              onClick={() => setFilter('frontend')}
              sx={{
                background: filter === 'frontend' ? 'linear-gradient(90deg, #ff6b9d, #7f5af0)' : 'transparent',
                color: '#fff',
                border: filter === 'frontend' ? 'none' : '1px solid #ff6b9d',
                borderRadius: '25px',
                px: 4,
                textTransform: 'none',
                boxShadow: filter === 'frontend' ? '0 5px 20px rgba(255, 107, 157, 0.4)' : 'none',
                '&:hover': {
                  background: filter === 'frontend' ? 'linear-gradient(90deg, #ff5086, #6a3fd9)' : 'rgba(255, 107, 157, 0.1)',
                  borderColor: '#ff6b9d'
                }
              }}
            >
              Frontend
            </Button>
            <Button
              onClick={() => setFilter('ux')}
              sx={{
                background: filter === 'ux' ? 'linear-gradient(90deg, #ff6b9d, #7f5af0)' : 'transparent',
                color: '#fff',
                border: filter === 'ux' ? 'none' : '1px solid #4ecdc4',
                borderRadius: '25px',
                px: 4,
                textTransform: 'none',
                boxShadow: filter === 'ux' ? '0 5px 20px rgba(78, 205, 196, 0.4)' : 'none',
                '&:hover': {
                  background: filter === 'ux' ? 'linear-gradient(90deg, #ff5086, #6a3fd9)' : 'rgba(78, 205, 196, 0.1)',
                  borderColor: '#4ecdc4'
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
                  backgroundColor: 'rgba(26, 11, 46, 0.4)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(127, 90, 240, 0.3)',
                  borderRadius: 3,
                  height: '100%',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    borderColor: '#ff6b9d',
                    boxShadow: '0 15px 50px rgba(255, 107, 157, 0.4), 0 0 30px rgba(127, 90, 240, 0.3)',
                    '& .project-image': {
                      transform: 'scale(1.05)'
                    }
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
                      background: 'linear-gradient(90deg, #ff6b9d, #7f5af0)',
                      color: '#fff',
                      fontWeight: 'bold',
                      zIndex: 1,
                      boxShadow: '0 4px 15px rgba(255, 107, 157, 0.4)'
                    }}
                  />
                )}

                <CardMedia
                  component="img"
                  height="240"
                  image={project.image}
                  alt={project.title}
                  className="project-image"
                  sx={{
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                />

                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{
                      background: 'linear-gradient(90deg, #ff6b9d, #7f5af0)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      mb: 2,
                      fontWeight: 'bold'
                    }}
                  >
                    {project.title}
                  </Typography>

                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 2, lineHeight: 1.7 }}>
                    {project.description}
                  </Typography>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    {project.tags.map((tag, tagIndex) => {
                      const tagColors = ['#ff6b9d', '#7f5af0', '#2cb67d', '#4ecdc4', '#ffa94d'];
                      const tagColor = tagColors[tagIndex % tagColors.length];
                      return (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{
                            backgroundColor: `${tagColor}15`,
                            color: 'rgba(255, 255, 255, 0.9)',
                            border: `1px solid ${tagColor}40`,
                            backdropFilter: 'blur(10px)',
                            '&:hover': {
                              backgroundColor: `${tagColor}25`,
                              borderColor: tagColor,
                              transform: 'scale(1.05)'
                            }
                          }}
                        />
                      );
                    })}
                  </Box>

                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <IconButton
                      sx={{
                        color: '#fff',
                        border: '1px solid #7f5af0',
                        backgroundColor: 'rgba(127, 90, 240, 0.1)',
                        backdropFilter: 'blur(10px)',
                        '&:hover': {
                          color: '#7f5af0',
                          borderColor: '#7f5af0',
                          backgroundColor: 'rgba(127, 90, 240, 0.2)',
                          boxShadow: '0 0 20px rgba(127, 90, 240, 0.4)'
                        }
                      }}
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </IconButton>
                    <IconButton
                      sx={{
                        color: '#fff',
                        border: '1px solid #ff6b9d',
                        backgroundColor: 'rgba(255, 107, 157, 0.1)',
                        backdropFilter: 'blur(10px)',
                        '&:hover': {
                          color: '#ff6b9d',
                          borderColor: '#ff6b9d',
                          backgroundColor: 'rgba(255, 107, 157, 0.2)',
                          boxShadow: '0 0 20px rgba(255, 107, 157, 0.4)'
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
