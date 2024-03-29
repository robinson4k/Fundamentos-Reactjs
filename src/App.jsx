import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import "./assets/global.css";
import styles from "./App.module.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Robinson Silva"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, assumenda voluptate eligendi delectus laboriosam quisquam ducimus enim obcaecati. Fuga veritatis ullam porro optio sequi nihil voluptas tempore alias ut recusandae"
          />
        </main>
      </div>
    </div>
  );
}
