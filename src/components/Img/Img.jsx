import React from 'react';
import noImage from '../../produto-noimage.png';

const Img = ({src, alt, ...rest}) => (
  <img src={src ? src : noImage} alt={alt} {...rest} />
)

export default Img;