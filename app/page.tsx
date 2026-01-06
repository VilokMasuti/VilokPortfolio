import Container from "@/components/common/Container";
import Expi from "@/components/landing/Expi";
import Hero from "@/components/landing/Hero";

export default function Home() {
  return (
    <Container className="min-h-screen py-16">
      <Hero />
      <Expi />
    </Container>
  );
}
