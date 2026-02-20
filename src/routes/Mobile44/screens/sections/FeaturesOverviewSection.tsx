import { FeatureCard } from "../../../../components/ui/feature-card";
import { useScrollAnimation } from "../../../../lib/useScrollAnimation";

const featureCards = [
  {
    category: "Operational foundation",
    title: "Integrated. Automated. Always on.",
    description:
      "DepositCloud integrates into your operating stack, standardizing deposits across the portfolio without manual work.",
    features: [
      "Integrates with major PMS platforms",
      "Prepaid, installment, and deposit alternatives",
      "Lower upfront cost without changing workflows",
      "Transparent reporting across deposit types",
    ],
    footer: "No confusion. No guessing. No surprises.",
  },
  {
    category: "Past, present, and future — handled",
    title: "One system across the lifecycle.",
    description:
      "DepositCloud removes fragmentation by taking responsibility for deposits at every stage — not just going forward.",
    features: [
      "Unified deposit management for all residents",
      "Standardized workflows portfolio-wide",
      "Reduced risk as regulations change",
      "Cleaner accounting and reconciliation",
    ],
    footer: "Built for real portfolios - not clean slates.",
  },
];

export const FeaturesOverviewSection = (): JSX.Element => {
  const card1Ref = useScrollAnimation();
  const card2Ref = useScrollAnimation();
  const cardRefs = [card1Ref, card2Ref];

  return (
    <section className="w-full grid grid-cols-1 gap-[21px]">
      {featureCards.map((card, index) => (
        <FeatureCard
          key={index}
          ref={cardRefs[index]}
          category={card.category}
          title={card.title}
          description={card.description}
          features={card.features}
          footer={card.footer}
          animationDelay={index * 150}
        />
      ))}
    </section>
  );
};
