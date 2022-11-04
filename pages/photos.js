import Layout from '../components/Layout';
import styles from '../styles/Photos.module.css';
import { useState } from 'react';

const images = [
  'https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2021-12/christopher-lloyd-kb-main-211214-572486.jpg',
  'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2015%2F10%2Fback-to-the-future_0.jpg&q=60',
  'https://nationaltoday.com/wp-content/uploads/2019/02/back-to-the-future-day.jpg',
];

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
