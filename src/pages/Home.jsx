import Hero from "../components/home/Hero";
import BrandStory from "../components/home/BrandStory";
import HowItWorks from "../components/home/HowItWorks";
import EmotionalSection from "../components/home/EmotionalSection";
import ForWho from "../components/home/ForWho";
import NewsletterCTA from "../components/home/NewsletterCTA";

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <BrandStory />
        <HowItWorks />
        <ForWho />
        <EmotionalSection />
        <NewsletterCTA />
      </main>
    </>
  );
};

export default Home;
