import { createContext, Dispatch, useReducer, useContext, FunctionComponent } from 'react';

type PortfolioState = {
  waveImages: {
    waveImgUrl: string;
    waveBackImgUrl: string;
  };
};

const initState: PortfolioState = {
  waveImages: {
    waveImgUrl: '',
    waveBackImgUrl: '',
  },
};
const PortfolioStateContext = createContext<PortfolioState | undefined>(undefined);

type PortfolioAction = {
  type: 'SET_WAVE_IMG_URL';
  payload: {
    waveImgUrl: string;
    waveBackImgUrl: string;
  };
};
type PortfolioDispatch = Dispatch<PortfolioAction>;
const PortfolioDispatchContext = createContext<PortfolioDispatch | undefined>(undefined);

const portfolioReducer = (state: PortfolioState, action: PortfolioAction): PortfolioState => {
  switch (action.type) {
    case 'SET_WAVE_IMG_URL':
      return {
        ...state,
        waveImages: action.payload,
      };
    default:
      return state;
  }
};

export const PortfolioContextProvider: FunctionComponent = ({ children }) => {
  const [portfolioState, portfolioDispatch] = useReducer(portfolioReducer, initState);

  return (
    <PortfolioDispatchContext.Provider value={portfolioDispatch}>
      <PortfolioStateContext.Provider value={portfolioState}>{children}</PortfolioStateContext.Provider>
    </PortfolioDispatchContext.Provider>
  );
};

// ---

export const usePortfolioState = () => {
  const portfolioState = useContext(PortfolioStateContext);
  if (!portfolioState) throw new Error('PortfolioContextProvider(State) not found');
  return portfolioState;
};

export const usePortfolioDispatch = () => {
  const portfolioDispatch = useContext(PortfolioDispatchContext);
  if (!portfolioDispatch) throw new Error('PortfolioContextProvider(Dispatch) not found');
  return portfolioDispatch;
};
