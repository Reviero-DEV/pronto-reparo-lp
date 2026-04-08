import InfoCard from "../components/InfoCard";

const listServices = [
  {
    id: 1,
    title: "Encanamento",
    description:
      "Conserto de vazamentos, manutenção de tubulações e desentupimento especializado de pias e ralos sem quebrar estruturas.",
    image: "/public/images/services/serviço-encanamento.jpg",
  },
  {
    id: 2,
    title: "Instalações Elétricas",
    description:
      "Manutenção de quadros de energia, troca de fiação, instalação de tomadas, chuveiros e projetos de iluminação com total segurança.",
    image: "/public/images/services/instalacoes-eletricas-img.jpg",
  },
  {
    id: 3,
    title: "Ar-Condicionado",
    description:
      "Instalação técnica de sistemas Split e de janela, higienização profunda, recarga de gás e manutenção preventiva para ar puro.",
    image: "/public/images/services/ar-condicionado.jpg",
  },
  {
    id: 4,
    title: "Reparos e Manutenção",
    description:
      "Montagem de móveis, instalação de suportes, pequenos reparos em alvenaria, pintura e serviços gerais de 'marido de aluguel'.",
    image: "/public/images/services/construction-worker.jpg",
  },
];
export default function Services() {
  return (
    <section className="services-container">
      <h2 className="title-section">NOSSOS SERVIÇOS</h2>
      <div className="services-grid">
        {listServices.map((service) => (
          <InfoCard
            key={service.id}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}
