import Intro from "./components/Intro";
import About from "./components/About";
import ProjectList from "./components/ProjectList";
import ContactForm from "./components/ContactForm";
import { useEffect, useState } from "react";

const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};
function App() {
  const [theme, setTheme] = useState(getStorageTheme());
  const changeTheme = (id) => {
    setTheme(`${id}-theme`);
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <>
      <Intro changeTheme = {changeTheme} />
      <About />
      <ProjectList />
      <ContactForm />
    </>
  );
}

export default App;
