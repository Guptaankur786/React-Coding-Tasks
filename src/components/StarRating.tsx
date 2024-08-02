import { useCallback, useState } from 'react';

const StarRating = ({ maxRating = 5 }) => {
  const [rating, setRating] = useState(0);

  const clickHandler = useCallback((index: number) => {
    setRating(index);
  }, []);
  return (
    <>
      <div style={{ background: 'grey' }}>
        {Array.from({ length: maxRating }, (_, index) => {
          return (
              <span key={index} onClick={() => clickHandler(index + 1)}>
                <img
                  className="star-container"
                  src={
                    index < rating ? './star-filled.png' : './star-unfilled.png'
                  }
                  alt="star--v1"
                />
              </span>
          );
        })}
      </div>
      <span>Rating: {rating}</span>
    </>
  );
};

export default StarRating;
