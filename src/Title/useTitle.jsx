import React, { useEffect } from 'react';

const useTitle = (title) => {
   useEffect(() => {
    document.title = `${title} || Gadget Heaven`;
   },[title])
};

export default useTitle;