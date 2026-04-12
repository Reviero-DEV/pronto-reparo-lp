const testimonialsData = [
  {
    id: 1,
    name: "Carlos Henrique",
    role: "Cliente residencial",
    rating: 5,
    review:
      "Atendimento excelente, rápido e muito profissional. Resolveram meu problema no mesmo dia e com muita organização.",
  },
  {
    id: 2,
    name: "Mariana Souza",
    role: "Cliente residencial",
    rating: 5,
    review:
      "Gostei muito da atenção no atendimento e da qualidade do serviço. Tudo foi feito com cuidado e dentro do esperado.",
  },
  {
    id: 3,
    name: "Juliana Alves",
    role: "Cliente residencial",
    rating: 5,
    review:
      "Profissionalismo, pontualidade e clareza em todo o processo. Com certeza contrataria novamente quando precisar.",
  },
];

import InfoCard from "../components/InfoCard";

export default function TestimonialsSection() {
  console.log("lista de avaliacoes:", testimonialsData);
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2>Aprovado por quem entende de cuidado.</h2>
          <p>Veja por que somos a escolha número 1 para cuidar de casas e empresas.</p>
        </div>

        <div className="testimonials-grid">
          {testimonialsData.map((testimonial, index) => (
            <InfoCard
              key={testimonial.id}
              name={testimonial.name}
              rating={"⭐".repeat(testimonial.rating)}
              role={testimonial.role}
              review={testimonial.review}
              delay={index * 0.25}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
