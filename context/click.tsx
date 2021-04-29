
import { createContext, ReactNode, useState } from 'react';

const ClickContext = createContext<[number, () => void]>([0, () => {}]);

export const ClickProvider = ({ children }: {children: ReactNode}) => {

  const [clickAmount, setClickAmount] = useState(0);
  const increment = () => setClickAmount((amount) => amount + 1);

  return (
    <ClickContext.Provider value={[clickAmount, increment]}>
      {children}
    </ClickContext.Provider>
  );
};
export default ClickContext;