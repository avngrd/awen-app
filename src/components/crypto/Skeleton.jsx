import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={100}
    viewBox="0 0 400 100"
    backgroundColor="#000000"
    foregroundColor="#0c0047"
    {...props}>
    <circle cx="-9" cy="-45" r="8" />
    <rect x="10" y="9" rx="8" ry="8" width="284" height="20" />
    <rect x="75" y="76" rx="0" ry="0" width="0" height="1" />
    <rect x="131" y="294" rx="0" ry="0" width="3" height="2" />
    <rect x="11" y="37" rx="8" ry="8" width="187" height="20" />
    <rect x="10" y="65" rx="8" ry="8" width="284" height="20" />
  </ContentLoader>
);

export default Skeleton;
