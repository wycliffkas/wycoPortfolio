import { Container, Typography, Box, Chip, Card, CardContent } from '@mui/material';
import { motion } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faServer,
  faPaintBrush,
  faCloud,
  faTools,
  faLightbulb
} from '@fortawesome/free-solid-svg-icons';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: faCode,
    color: '#e91e63',
    skills: ['Angular', 'React', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3']
  },
  {
    title: 'Backend Development',
    icon: faServer,
    color: '#4caf50',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MySQL', 'MongoDB', 'REST APIs']
  },
  {
    title: 'UI/UX Design',
    icon: faPaintBrush,
    color: '#9c27b0',
    skills: ['Figma', 'Responsive Design', 'Wireframing', 'Prototyping']
  },
  {
    title: 'Cloud & DevOps',
    icon: faCloud,
    color: '#ff9800',
    skills: ['AWS', 'Docker', 'Azure', 'Git', 'CI/CD', 'Linux']
  },
  {
    title: 'Tools & Technologies',
    icon: faTools,
    color: '#f44336',
    skills: ['VS Code', 'Jest', 'Webpack', 'Firebase', 'Vercel', 'Vite']
  },
  {
    title: 'Creative Skills',
    icon: faLightbulb,
    color: '#ffc107',
    skills: ['UI Animation', 'SVG Animation', '3D Modeling', 'Motion Graphics']
  }
];

export function Skills() {
  return (
    <Box
      id="skills"
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
            Skills & Expertise
          </Typography>

          <Typography
            variant="h6"
            align="center"
            sx={{
              color: 'rgba(255, 255, 255, 0.6)',
              mb: 6
            }}
          >
            Technologies I work with
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
            gap: 3
          }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
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
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    borderColor: category.color,
                    boxShadow: `0 10px 30px ${category.color}33`
                  }
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: 1,
                        backgroundColor: `${category.color}22`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 2
                      }}
                    >
                      <FontAwesomeIcon icon={category.icon} size="lg" color={category.color} />
                    </Box>
                    <Typography variant="h6" sx={{ color: '#fff' }}>
                      {category.title}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {category.skills.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(0, 188, 212, 0.1)',
                          color: 'rgba(255, 255, 255, 0.8)',
                          border: '1px solid rgba(0, 188, 212, 0.3)',
                          '&:hover': {
                            backgroundColor: 'rgba(0, 188, 212, 0.2)'
                          }
                        }}
                      />
                    ))}
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
