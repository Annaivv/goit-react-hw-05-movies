import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviewsById } from 'services/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchMovieReviewsById(movieId)
      .then(({ data }) => {
        setReviews(data.results);
        console.log(data.results);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {reviews ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h5>Author: {review.author}</h5>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        'No reviews'
      )}
    </div>
  );
};

export default Reviews;
