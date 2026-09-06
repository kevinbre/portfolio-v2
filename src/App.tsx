import { Toaster } from "sonner";
import { Backdrop } from "./components/ui/Backdrop";
import { Navbar } from "./components/ui/Navbar";
import { Hero } from "./components/sections/Hero";
import { Companies } from "./components/sections/Companies";
import { About } from "./components/sections/About";
import { Stack } from "./components/sections/Stack";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";

export const App = () => (
  <>
    <Backdrop />
    <Navbar />
    <main>
      <Hero />
      <Companies />
      <About />
      <Stack />
      <Experience />
      <Projects />
      <Contact />
    </main>
    <Toaster
      theme="dark"
      position="bottom-right"
      toastOptions={{
        style: {
          background: "var(--color-surface)",
          border: "1px solid var(--color-line)",
          color: "var(--color-fg)",
        },
      }}
    />
  </>
);
