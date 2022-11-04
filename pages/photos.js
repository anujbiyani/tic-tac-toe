import Layout from '../components/Layout';
import styles from '../styles/Photos.module.css';
import { useState } from 'react';
import { images } from '../lib/images';

export default function Photos() {
  const [selectedImage, setSelectedImage] = useState(0);

  const canNavigateBackwards = selectedImage > 0;
  const canNavigateForwards = selectedImage < (images.length - 1);

  return (
    <Layout>
      <h1>Photos</h1>

      <div className={styles.gallery}>
        {canNavigateBackwards &&
          <button onClick={() => setSelectedImage(selectedImage - 1)}>
            <img src="assets/caret-left.svg" />
          </button>
        }

        <div className={styles.imageContainer}>
          <img src={images[selectedImage]} />
        </div>

        {canNavigateForwards &&
          <button onClick={() => setSelectedImage(selectedImage + 1)}>
            <img src="assets/caret-right.svg" />
          </button>
        }
      </div>
    </Layout>
  );
}
