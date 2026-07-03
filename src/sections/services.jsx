import InfoCard from "../components/InfoCard";
import imgPlumbing from "/public/images/services/serviço-encanamento.jpg"
import imgElectrical from "/public/images/services/instalacoes-eletricas-img.jpg"
import imgAirConditioning from "/public/images/services/ar-condicionado.jpg"
import imgRepair from "/public/images/services/construction-worker.jpg"

const listServices = [
  {
    id: 1,
    title: "Encanamento",
    description:
      "Conserto de vazamentos, manutenção de tubulações e desentupimento especializado de pias e ralos sem quebrar estruturas.",
    image: imgPlumbing,
  },
  {
    id: 2,
    title: "Instalações Elétricas",
    description:
      "Manutenção de quadros de energia, troca de fiação, instalação de tomadas, chuveiros e projetos de iluminação com total segurança.",
    image: imgElectrical,
  },
  {
    id: 3,
    title: "Ar-Condicionado",
    description:
      "Instalação técnica de sistemas Split e de janela, higienização profunda, recarga de gás e manutenção preventiva para ar puro.",
    image: imgAirConditioning,
  },
  {
    id: 4,
    title: "Reparos e Manutenção",
    description:
      "Montagem de móveis, instalação de suportes, pequenos reparos em alvenaria, pintura e serviços gerais de 'marido de aluguel'.",
    image: imgRepair,
  },
];
export default function Services() {
  return (
    <section id="servicos" className="services-container">
      <h2 className="title-section">NOSSOS SERVIÇOS</h2>
      <div className="services-grid">
        {listServices.map((service, index) => (
          <InfoCard
            key={service.id}
            image={service.image}
            title={service.title}
            description={service.description}
            delay={index * 0.25}
          />
        ))}
      </div>
    </section>
  );
}
