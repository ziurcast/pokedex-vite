import React, { useState, Fragment } from 'react';

const LazyImage = (props: any) => {
  const [loaded, setLoaded] = useState(false);
  const { placeholder, ...restProps } = props;

  return (
    <Fragment>
      {!loaded && <img {...restProps} src={placeholder} alt="placeholer" />}
      <img
        {...restProps}
        onLoad={() => setLoaded(true)}
        style={!loaded ? { display: 'none' } : null}
      />
    </Fragment>
  );
};

export default LazyImage;
