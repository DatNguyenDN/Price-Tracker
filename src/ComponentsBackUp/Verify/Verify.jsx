import React from 'react';
import { SignUpContext, useSignUpContext,SignUpProvider } from '../Context/SignUpContext';
import VerifyForm from './VerifyForm';

const Verify = () => {
    

  return (
    <SignUpProvider>
     <VerifyForm/>
    </SignUpProvider>
  );
};

export default Verify;
