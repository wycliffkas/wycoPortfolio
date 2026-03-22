import { Container, Typography, Box, Card, CardContent } from '@mui/material';
import { motion } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopCode, faLayerGroup } from '@fortawesome/free-solid-svg-icons';

const experiences = [
  {
    icon: faCode,
    title: 'Frontend Developer & UX Designer',
    company: 'Cisco',
    period: '2022 - Present',
    description: 'Led UX design and contributed to developing an AI-based application, enhancing user experience, optimizing performance, and improving overall functionality.',
    color: '#00bcd4'
  },
  {
    icon: faLaptopCode,
    title: 'Software Engineer UI',
    company: 'OpenMoney',
    period: '2019 - 2022',
    description: 'Contributed to developing SaaS application and improving UI functionality for a seamless user experience.',
    color: '#7c4dff'
  },
  {
    icon: faLayerGroup,
    title: 'UI Developer',
    company: 'IBM',
    period: '2018 - 2019',
    description: 'Assisted in building and optimizing user interfaces with a focus on responsive and interactive designs.',
    color: '#ff4081'
  }
];

export function Experience() {
  return (
    <Box
      id="experience"
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
            align="center"
            sx={{
              color: '#00bcd4',
              mb: 2,
              fontWeight: 'bold'
            }}
          >
            Professional Journey
          </Typography>

          <Typography
            variant="h6"
            align="center"
            sx={{
              color: 'rgba(255, 255, 255, 0.6)',
              mb: 6
            }}
          >
            "Transforming ideas into digital reality, one project at a time"
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
            gap: 3
          }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
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
                  position: 'relative',
                  overflow: 'visible',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    borderColor: exp.color,
                    boxShadow: `0 10px 30px ${exp.color}33`
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '4px',
                    height: '100%',
                    background: `linear-gradient(180deg, ${exp.color}, transparent)`,
                    borderRadius: '2px 0 0 2px'
                  }
                }}
              >
                <CardContent sx={{ pt: 4 }}>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: 1,
                      background: `linear-gradient(135deg, ${exp.color}, ${exp.color}88)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2
                    }}
                  >
                    <FontAwesomeIcon icon={exp.icon} size="2x" color="#fff" />
                  </Box>

                  <Typography variant="h5" sx={{ color: '#fff', mb: 1 }}>
                    {exp.title}
                  </Typography>

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Typography sx={{ color: '#00bcd4' }}>
                      {exp.company}
                    </Typography>
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                      {exp.period}
                    </Typography>
                  </Box>

                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.7 }}>
                    {exp.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
