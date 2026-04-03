import InfoCard from "../components/InfoCard";
import { FaClock, FaHardHat, FaHandHoldingUsd } from "react-icons/fa";
import { IoSparklesSharp } from "react-icons/io5";

const listWhyChoose = [
  {
    id: 1,
    icon: <FaClock size={40} color="#ffb400" />,
    title: "ATENDIMENTO ÁGIL",
    description:
      "Estamos prontos para atender seu chamado a qualquer hora, todos os dias.",
  },
  {
    id: 2,
    icon: <FaHardHat size={40} color="#ffb400" />,
    title: "EQUIPE EXPERIENTE",
    description:
      "Profissionais qualificados com anos de experiência no setor, 7 dias por semana.",
  },
  {
    id: 3,
    icon: <FaHandHoldingUsd size={40} color="#ffb400" />,
    title: "PREÇO JUSTO",
    description:
      "Orçamentos transparentes, justos e sem surpresas no valor final.",
  },
  {
    id: 4,
    icon: <IoSparklesSharp size={40} color="#ffb400" />,
    title: "SERVIÇO LIMPO E ORGANIZADO",
    description: "Serviço rápido, deixando sua casa limpa e tudo no lugar.",
  },
];
const listServiceStep = [
  {
    id: 1,
    image: "/src/assets/images/passo1.jpg",
    title: "1. Você entra em contato",
    description:
      "Fale conosco pelo WhatsApp ou telefone descrevendo o que precisa ser consertado.",
  },
  {
    id: 2,
    image: "/src//assets/images/passo2.jpg",
    title: "2. Recebe atendimento rápido",
    description:
      "Nossa equipe de suporte analisa seu caso e tira todas as suas dúvidas iniciais na hora.",
  },
  {
    id: 3,
    image: "/src//assets/images/passo3.jpg",
    title: "3. Agendamos a visita",
    description:
      "Escolhemos o melhor horário para você receber nosso técnico no conforto do seu lar.",
  },
  {
    id: 4,
    image: "/src//assets/images/passo4.jpg",
    title: "4. Problema resolvido",
    description:
      "O serviço é executado com excelência e você volta a ter tranquilidade na sua casa.",
  },
];

export default function TrustSection() {
  return (
    <section className="trust-section">
      <div className="trust-container">
        <div className="whyChoose-section">
          <h2>POR QUE ESCOLHER A PRONTO REPARO?</h2>
          <div className="beneficies-grid">
            {listWhyChoose.map((choose) => (
              <InfoCard
                key={choose.id}
                icon={choose.icon}
                title={choose.title}
                description={choose.description}
              />
            ))}
          </div>
        </div>
        <div className="service-step">
          <h2>COMO FUNCIONA</h2>
          <div className="steps-grid">
            {listServiceStep.map((step) => (
              <InfoCard
                key={step.id}
                image={step.image}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
