//Taken from https://www.youtube.com/watch?v=1WiS9PmZG9I

import React, { useState } from 'react';
import Stars from './Star';
import styled from 'styled-components';

export type Props = {
  rating: number | null;
  onChange: (rating: number) => void;
  label: string;
};

const RatingContainer = styled.span`
  margin-top: 1em;
`;

const Label = styled.span`
  display: flex;
  align-self: center;
`;

const StarRating = ({ rating, onChange, label }: Props) => {
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
