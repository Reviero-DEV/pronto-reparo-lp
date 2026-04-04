import InfoCard from "../components/InfoCard";
import imgAr from "../assets/images/ar-condicionado.jpg";
import imgReparos from "../assets/images/construction-worker.jpg";
import imgEletrica from "../assets/images/instalacoes-eletricas-img.jpg";
import imgEncanamento from "../assets/images/serviço-encanamento.jpg";

const listServices = [
  {
    id: 1,
    title: "Hidráulica e Desentupimento",
    description:
      "Conserto de vazamentos, manutenção de tubulações e desentupimento especializado de pias e ralos sem quebrar estruturas.",
    image: imgEncanamento,
  },
  {
    id: 2,
    title: "Instalações Elétricas",
    description:
      "Manutenção de quadros de energia, troca de fiação, instalação de tomadas, chuveiros e projetos de iluminação com total segurança.",
    image: imgEletrica,
  },
  {
    id: 3,
    title: "Ar-Condicionado",
    description:
      "Instalação técnica de sistemas Split e de janela, higienização profunda, recarga de gás e manutenção preventiva para ar puro.",
    image: imgAr,
  },
  {
    id: 4,
    title: "Reparos e Manutenção",
    description:
      "Montagem de móveis, instalação de suportes, pequenos reparos em alvenaria, pintura e serviços gerais de 'marido de aluguel'.",
    image: imgReparos,
  },
];
export default function Services() {
  return (
    <section className="services-container">
      <h2>NOSSOS SERVIÇOS</h2>
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
