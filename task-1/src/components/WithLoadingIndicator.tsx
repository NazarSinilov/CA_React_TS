import React, {FC, ComponentType, useEffect, useState} from 'react'
import { FadeLoader } from 'react-spinners';


export const WithLoadingIndicator = (WrapperComponent: ComponentType,  dataFunction: () => Promise<void>) => {
  return function WithLoadingIndicator() {
    const [load, setLoad] = useState(true);

    useEffect(() => {
      setLoad(true);
      dataFunction().then(() => setLoad(false))
    }, []);

    return (
      load ? <FadeLoader color="#36d7b7" /> : <WrapperComponent />
    )
  }
}
