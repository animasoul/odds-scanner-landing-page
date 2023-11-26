import { ComparisonCard } from '@/comparison/ComparisonCard';
import { Section } from '@/layout/Section';

const ComparisonCards = () => (
  <Section>
    <div className="flex flex-col items-center gap-6 self-stretch">
      <ComparisonCard
        offerNumber={1}
        melhorOferta
        nomeAgencia="Decolar.com"
        rating="5.0"
        imageAgencia="/assets/images/image-2-3.png"
        notaAgencia="Possibilidade de"
        notaAgenciaBold=" pagamento em até 12 vezes"
      />
      <ComparisonCard
        offerNumber={2}
        nomeAgencia="Submarino Viagens"
        rating="5.0"
        imageAgencia="/assets/images/image-3.png"
        notaAgencia="Agência com"
        notaAgenciaBold=" Serviços Completos"
      />
      <ComparisonCard
        offerNumber={3}
        nomeAgencia="Booking.com"
        rating="4.7"
        imageAgencia="/assets/images/image-3-1.png"
        notaAgencia="Ideal para Quem Gosta de"
        notaAgenciaBold=" Acumular Pontos"
      />
    </div>
  </Section>
);

export default ComparisonCards;
