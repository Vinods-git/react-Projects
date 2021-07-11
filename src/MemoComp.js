import React from 'react';

function MemoComp({ name }) {
  console.log('Memo Component');

  return <>Memo Comp {name}</>;
}

export default React.memo(MemoComp);
