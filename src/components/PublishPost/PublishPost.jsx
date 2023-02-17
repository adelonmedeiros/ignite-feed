import { Comment } from "../Comment/Comment";
import styles from "../PublishPost/PublishPost.module.css";

export function PublishPost() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/adelonmedeiros.png"
          />
          <div className={styles.authorInfo}>
            <strong>Adelon Medeiros</strong>
            <span>QA Engineer</span>
          </div>
        </div>

        <time title="16 de fevereiro às 15:41h" dateTime="2023-02-16 15:41:30">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galera 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          👉 <a href="">jane.design/doctorcare</a>
        </p>

        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw</a>
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
