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
    color: '#ff6b9d',
    skills: ['Vue', 'React', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3']
  },
  {
    title: 'Backend Development',
    icon: faServer,
    color: '#2cb67d',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MySQL', 'MongoDB', 'REST APIs']
  },
  {
    title: 'UI/UX Design',
    icon: faPaintBrush,
    color: '#7f5af0',
    skills: ['Figma', 'Responsive Design', 'Wireframing', 'Prototyping']
  },
  {
    title: 'Cloud & DevOps',
    icon: faCloud,
    color: '#ffa94d',
    skills: ['AWS', 'Docker', 'Azure', 'Git', 'CI/CD', 'Linux']
  },
  {
    title: 'Tools & Technologies',
    icon: faTools,
    color: '#4ecdc4',
    skills: ['VS Code', 'Jest', 'Webpack', 'Firebase', 'Vercel', 'Vite']
  },
  {
    title: 'Creative Skills',
    icon: faLightbulb,
    color: '#ff6b9d',
    skills: ['UI Animation', 'SVG Animation', '3D Modeling', 'Motion Graphics']
  }
];

export function Skills() {
  return (
    <Box
      id="skills"
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
              background: 'linear-gradient(90deg, #ff6b9d, #7f5af0, #4ecdc4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
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
                  backgroundColor: 'rgba(26, 11, 46, 0.4)',
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${category.color}40`,
                  borderRadius: 3,
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    borderColor: category.color,
                    boxShadow: `0 15px 40px ${category.color}50`,
                    backgroundColor: `${category.color}10`
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
                          backgroundColor: `${category.color}15`,
                          color: 'rgba(255, 255, 255, 0.9)',
                          border: `1px solid ${category.color}40`,
                          backdropFilter: 'blur(10px)',
                          '&:hover': {
                            backgroundColor: `${category.color}25`,
                            borderColor: category.color,
                            transform: 'scale(1.05)'
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
