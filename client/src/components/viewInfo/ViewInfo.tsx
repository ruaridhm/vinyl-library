import React from 'react';
import ImageSlider from '../imageSlider/ImageSlider';
import { RecordInterface } from '../records/RecordItem/RecordItem';

import {
  ViewInfoContainer,
  ImageContainer,
  DetailsContainer,
  Stat,
} from './Style';

const ViewInfo = ({
  title,
  artist,
  label,
  catalogNumber,
  releaseDate,
  recordCondition,
  sleeveCondition,
  country,
  locationPrimary,
  locationSecondary,
  barcode,
  coverFront,
  genre,
  style,
  comment,
  rating,
  cover,
  innerSleeve,
  outerSleeve,
  wishList,
}: RecordInterface) => {
  return (
    <ViewInfoContainer>
      <DetailsContainer>
        {title && (
          <Stat>
            <strong>Title: </strong>
            {title}
          </Stat>
        )}
        {artist && (
          <Stat>
            <strong>Artist: </strong>
            {artist}
          </Stat>
        )}
        {label && (
          <Stat>
            <strong>Label: </strong>
            {label}
          </Stat>
        )}
        {catalogNumber && (
          <Stat>
            <strong>Catalog Number: </strong>
            {catalogNumber}
          </Stat>
        )}
        {releaseDate && (
          <Stat>
            <strong>Release Date: </strong>
            {releaseDate}
          </Stat>
        )}
        {recordCondition && (
          <Stat>
            <strong>Record Condition: </strong>
            {recordCondition}
          </Stat>
        )}
        {sleeveCondition && (
          <Stat>
            <strong>Sleeve Condition: </strong>
            {sleeveCondition}
          </Stat>
        )}
        {country && (
          <Stat>
            <strong>Country: </strong>
            {country}
          </Stat>
        )}
        {locationPrimary && (
          <Stat>
            <strong>Location Primary: </strong>
            {locationPrimary}
          </Stat>
        )}
        {locationSecondary && (
          <Stat>
            <strong>Location Secondary: </strong>
            {locationSecondary}
          </Stat>
        )}
        {barcode && (
          <Stat>
            <strong>Barcode: </strong>
            {barcode}
          </Stat>
        )}
        {genre[0] !== '' && (
          <Stat>
            <strong>Genre: </strong>
            {genre}
          </Stat>
        )}
        {style[0] !== '' && (
          <Stat>
            <strong>Style: </strong>
            {style}
          </Stat>
        )}
        {comment && (
          <Stat>
            <strong>Comment: </strong>
            {comment}
          </Stat>
        )}
        {rating && (
          <Stat>
            <strong>Rating: </strong>
            {rating}
          </Stat>
        )}
        {cover && (
          <Stat>
            <strong>Cover: </strong>
            {cover}
          </Stat>
        )}
        {innerSleeve && (
          <Stat>
            <strong>Inner Sleeve: </strong>
            {innerSleeve}
          </Stat>
        )}
        {outerSleeve && (
          <Stat>
            <strong>Outer Sleeve: </strong>
            {outerSleeve}
          </Stat>
        )}
        {wishList && (
          <Stat>
            <strong>Wishlist: </strong>
            {wishList}
          </Stat>
        )}
      </DetailsContainer>
      <ImageContainer>
        <ImageSlider coverFront={coverFront} />
      </ImageContainer>
    </ViewInfoContainer>
  );
};

export default ViewInfo;
