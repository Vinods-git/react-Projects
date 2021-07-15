import { useEffect } from 'react';
const useCustomeHook1 = count => {
  useEffect(() => {
    document.title = 'Count: ' + count;
  }, [count]);
};
export default useCustomeHook1;

// DocTitleOne and DocTitleTwo