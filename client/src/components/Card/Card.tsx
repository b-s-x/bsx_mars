import React, { useRef, useState } from "react";
import styles from "./card.module.scss";

export const Card = () => {
  const cardRef = useRef<HTMLInputElement>(null);
  const [transform, setTransform] = useState('');
  const [transition, setTransition] = useState('');

  const startRotate = (event: React.MouseEvent): void => {
    let halfHeight: number | undefined;
    let halfWidth: number | undefined;

    if (null !== cardRef.current) {
      const card = cardRef.current;
      halfHeight = card.offsetHeight / 2;
      halfWidth = card.offsetWidth / 2;
      const x = (event.nativeEvent.offsetY - halfHeight) / 15;
      const y = (event.nativeEvent.offsetX - halfWidth) / 15;
      const transform: string = `rotateY(${y}deg) rotateX(${-x}deg)`;

      setTransform(transform);
      setTransition("transform 0.2s");
    }
  };

  const stopRotate = () => {
    setTransform('');
    setTransition("transform 1s");
  };

  return (
    <div
      className={styles.card__box}
      onMouseMove={startRotate}
      onMouseOut={stopRotate}
    >
      <div
        ref={cardRef}
        className={styles.card__item}
        style={{ transform, transition }}
      ></div>
    </div>
  );
};

