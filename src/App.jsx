import { Header } from "./components/Header/Header";
import { PublishPost } from "./components/PublishPost/PublishPost";
import { Sidebar } from "./components/Sidebar/Sidebar";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <PublishPost
            author="Adelon Medeiros"
            content="Lorem ipsum dolor sit amet consectetur adipisicing"
          />
          <PublishPost
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing"
          />
        </main>
      </div>
    </div>
  );
}
