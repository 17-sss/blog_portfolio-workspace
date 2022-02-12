import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { getMediaQueries, MediaTypes } from '@utils/style';

const useCheckMediaQuery = function (type: MediaTypes) {
  const [isOK, setIsOK] = useState<boolean>(false);
  const isMediaOK = useMediaQuery({ query: getMediaQueries({ type, isAtMedia: false  }) });
  useEffect(() => setIsOK(() => isMediaOK), [isMediaOK]);
  return isOK;
};

export default useCheckMediaQuery;
