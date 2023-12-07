import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './spinner';

function WithSpinner({children, isLoading}:{children :any, isLoading: boolean}){
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <>
      {children}
      </>
    );
};

export default WithSpinner;