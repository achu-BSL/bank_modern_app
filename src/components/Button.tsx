import { FC } from 'react';

export const Button: FC<{styles: string}> = ({styles}) => (
<button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}>
  Get Started
</button>
  );