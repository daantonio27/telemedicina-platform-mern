import React from 'react'
import Layout from '../components/Layout';
import { Typography, Divider, Space } from 'antd';


const About = () => {
    const { Title, Paragraph } = Typography;
  return (
    <Layout>
      <h1 className="text-center">Sobre a clínica</h1>
      
      <Space direction="vertical" size="large" style={{ marginLeft: 20, marginRight: 20, display: 'flex' }}>

        <Paragraph>
          <Title level={3}>Sobre Nós</Title>
          <span style={{fontSize: '18px'}}>
            Nossa clínica está comprometida em fornecer o melhor atendimento médico possível para nossos pacientes. Fomos fundados em 2020 com a missão de melhorar a qualidade de vida de nossos pacientes e ajudá-los a viver de forma mais saudável.
          </span>
        </Paragraph>

        <Paragraph>
          <Title level={3}>Nossa Equipe</Title>
          <span style={{fontSize: '18px'}}>
            Nossa equipe é formada por médicos renomados e enfermeiros experientes e capacitados. Temos especialistas em diversas áreas da medicina para cuidar de você e sua família.
          </span>
        </Paragraph>
      
      </Space>

      <Divider />

      <Title level={3} style={{ marginLeft: 20, marginRight: 20, display: 'flex' }}>Entre em contato</Title>

      <Paragraph style={{ marginLeft: 20, marginRight: 20, display: 'flex' }}>
        Telefone: (99) 99999-9999 <br/>
        E-mail: contato@clinica.com
      </Paragraph>
    </Layout>
  )
}

export default About
