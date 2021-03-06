import React, { useState } from 'react';

import styles from './styles.module.scss';
import RateStars from '../RateStars';
import Image from '../Image';
import Loading from '../Loading';
import Dropdown from '../Dropdown';
import Checkbox from '../Checkbox';

export default function MovieCarrouselItem({ movie }) {
  const [hoverIndexPreview, setHoverIndexPreview] = useState(0);

  const handleHoverPreviewEnter = i => setHoverIndexPreview(i);
  const handleHoverPreviewLeave = () => setHoverIndexPreview(0);

  return (
    <div className={styles.movie}>
      {movie ? (
        <>
          <div className={styles.imageContainer}>
            {movie.images.map((imageURL, i) => (
              <Image
                key={i}
                className={`${styles.image} ${
                  hoverIndexPreview === i ? styles.currentImage : ''
                }`}
                src={imageURL}
                alt={movie.title}
                position=""
              />
            ))}
          </div>

          <div className={styles.movieInfoContainer}>
            <h1 className={styles.title} title={movie.title}>
              {movie.title}
            </h1>

            <div className={styles.movieInfo}>
              <div className={styles.previewContainer}>
                {movie.images.map((imageURL, i) => (
                  <Image
                    onMouseEnter={() => handleHoverPreviewEnter(i)}
                    onMouseLeave={handleHoverPreviewLeave}
                    key={i}
                    className={styles.imagePreview}
                    src={imageURL}
                    alt={movie.title}
                  />
                ))}
              </div>

              <p className={styles.overview}>{movie.overview}</p>

              <div className={styles.starsContainer}>
                <RateStars rating={movie.vote_average} />
              </div>
            </div>
          </div>

          <div className={styles.dropdown}>
            <Dropdown>
              <Checkbox label="Watch Later" checked />
              <Checkbox label="Watched" checked />
            </Dropdown>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}
