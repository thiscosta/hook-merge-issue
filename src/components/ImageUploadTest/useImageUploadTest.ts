/**********************************************************************
*
*   Component hook generated by Quest
*
*   Code Logic for the component goes in this hook
*   To setup bindings that use the data here or call the functions here, use the Quest editor   
*
*   For help and further details refer to: https://www.quest.ai/docs
*
*
**********************************************************************/

import React from 'react'

//These are the possible values for the current variant. Use this to change the currentVariant dynamically.
//Please don't modify
const variantOptions = { Property1Default: "Property1Default" , Property1Variant2: "Property1Variant2" , Property1Variant3: "Property1Variant3"  }

const useImageUploadTest = () => {
  const [currentVariant, setCurrentVariant] = React.useState<string>(variantOptions['Property1Default']);
      const [previousVariant, setPreviousVariant] = React.useState<string>('');
  let data: any = { currentVariant, previousVariant };
  const { fns } = useFnsHook();
  return {data, fns};
}

export default useImageUploadTest;
