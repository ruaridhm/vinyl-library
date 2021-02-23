//Taken from https://www.youtube.com/watch?v=1WiS9PmZG9I

import React, { useState } from 'react';
import Stars from './Star';
import { RatingContainer, Label } from './Style';

interface StarRatingProps {
  rating?: number;
  onChange: (rating: number) => void;
  label: string;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, onChange, label }) => {
  const [override, setOverride] = useState<number | null>(null);
  return (
    <RatingContainer>
      <Label>{label}</Label>

      {[1, 2, 3, 4, 5].map((i) => (
        <Stars
          key={i}
          index={i}
          full={i <= (override || rating || 0)}
          setOverride={setOverride}
          setRating={onChange}
        />
      ))}
    </RatingContainer>
  );
};

export default StarRating;
