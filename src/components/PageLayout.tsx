import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

interface PageLayoutProps {
  variant: "home" | "legal";
  children: React.ReactNode;
}

export const PageLayout = ({ variant, children }: PageLayoutProps): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen w-full items-stretch relative bg-white overflow-x-hidden">
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      <Navigation variant={variant} />
      {children}
      <div className="w-full bg-brand-dark mt-auto">
        <Footer />
      </div>
    </div>
  );
};
