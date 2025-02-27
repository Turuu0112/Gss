import { Container } from "@/components/main-components/Container";
import { MainHeroComponent } from "@/components/main-components/Main-carausel";
import { MainEventGrid } from "@/components/main-components/Main-content";
import { Logo } from "@/components/main-components/Main-logo";

export default function Home() {
  return (
    <Container>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="w-full min-h-[100vh] relative z-10">
        <Logo />
        <MainHeroComponent />
        <MainEventGrid />
      </div>
    </Container>
  );
}
