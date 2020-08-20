import React from 'react';
import ServiceCard from './ServiceCard';

const data = [
{
  imgUrl: 'https://portaldarmc.com.br/guia-estudante-unicamp/icones/ICONES-site-propaganda-divulgacao-marketing-web-editoracao-eletronica-diagramacao-site-brasilia-df.png',
  imgText: 'Desenvolvimento de sites'
},
{
  imgUrl: 'https://image.flaticon.com/icons/png/512/49/49967.png',
  imgText: 'Desenho de plantas elétricas'
},
{
  imgUrl: 'https://image.flaticon.com/icons/png/512/38/38636.png',
  imgText: 'Projetos fotovoltaicos residenciais'
},
{
  imgUrl: 'https://image.flaticon.com/icons/png/512/120/120555.png',
  imgText: 'Prototipagem em eletrônica'
},
]

function Service() {
  return (
    <section id="service">
      <h1>Service</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, facilis corporis quibusdam nihil sint placeat.</p>

      <div className="display-of-services">
        <h2>Our services</h2>
        <div className="services-container">
          <ServiceCard src={data[0].imgUrl} text={data[0].imgText}/>
          <ServiceCard src={data[1].imgUrl} text={data[1].imgText}/>
          <ServiceCard src={data[2].imgUrl} text={data[2].imgText}/>
          <ServiceCard src={data[3].imgUrl} text={data[3].imgText}/>
        </div>
      </div>

    </section>
  );
}

export default Service;