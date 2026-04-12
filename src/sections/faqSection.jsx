import InfoCard from "../components/InfoCard";

const faqData = [
  {
    id: 1,
    question: "Vocês atendem no mesmo dia?",
    answer:
      "Sim, dependendo da disponibilidade e da região, buscamos realizar atendimentos com rapidez e agilidade.",
  },
  {
    id: 2,
    question: "O orçamento é gratuito?",
    answer:
      "Sim, você pode solicitar uma avaliação inicial para entender melhor a necessidade do serviço.",
  },
  {
    id: 3,
    question: "Quais tipos de serviço vocês realizam?",
    answer:
      "Atendemos diferentes demandas de manutenção residencial, com foco em praticidade, segurança e qualidade.",
  },
  {
    id: 4,
    question: "Como faço para agendar um atendimento?",
    answer:
      "Você pode entrar em contato diretamente pelos botões de ação da página e solicitar seu atendimento.",
  },
];

export default function FaqSection() {
    return (
        <section id="faq" className="faq-section">
            <div className="faq-container">
                <h2 className="tittle-section">Perguntas Frequentes</h2>
                <div className="grid-faq">
                    {faqData.map((faq, index) => (
                    <InfoCard
                    key={faq.id}
                    question={faq.question}
                    answer={faq.answer}
                    delay={index * 0.25}
                    />
                    ))}
                </div>
            </div>
        </section>
    )
}