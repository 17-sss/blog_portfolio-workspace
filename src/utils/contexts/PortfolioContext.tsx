import { createContext, Dispatch, useReducer, useContext, FunctionComponent } from 'react';
import { PortfolioImageType, PortfolioMarkdownNodeEdges } from '@hooks/queries';

type WaveImageProps = {
  waveImg: PortfolioImageType | null;
  waveBackImg: PortfolioImageType | null;
};
// ---

type PortfolioState = {
  waveImages: {
    waveImg: PortfolioImageType | null;
    waveBackImg: PortfolioImageType | null;
  };
  markdownData: PortfolioMarkdownNodeEdges[];
};

const initState: PortfolioState = {
  waveImages: {
    waveImg: null,
    waveBackImg: null,
  },
  markdownData: [],
};
const PortfolioStateContext = createContext<PortfolioState | undefined>(undefined);

type PortfolioAction =
  | {
      type: 'SET_WAVE_IMG_URL';
      payload: WaveImageProps;
    }
  | {
      type: 'SET_MARKDOWN_DATA';
      payload: PortfolioMarkdownNodeEdges[];
    };
type PortfolioDispatch = Dispatch<PortfolioAction>;
const PortfolioDispatchContext = createContext<PortfolioDispatch | undefined>(undefined);

const portfolioReducer = (state: PortfolioState, action: PortfolioAction): PortfolioState => {
  switch (action.type) {
    case 'SET_WAVE_IMG_URL':
      return { ...state, waveImages: action.payload };
    case 'SET_MARKDOWN_DATA':
      return { ...state, markdownData: action.payload };
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
