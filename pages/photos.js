import Layout from '../components/Layout';
import styles from '../styles/Photos.module.css';

export default function Photos() {
  return (
    <Layout>
      <h1>Photos</h1>

      <div className={styles.gallery}>
        <button>
          <img src="assets/caret-left.svg" />
        </button>

        <div className={styles.imageContainer}>
          <img src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2021-12/christopher-lloyd-kb-main-211214-572486.jpg" />
        </div>

        <button>
          <img src="assets/caret-right.svg" />
        </button>
      </div>
    </Layout>
  )
}
