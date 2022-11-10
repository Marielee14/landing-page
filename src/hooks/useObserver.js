
import {useRef, useEffect} from 'react'

export default function useObserver(callbackFn) {
  const withObsesrverRef = useRef(null);
  const callbackFnRef = useRef(callbackFn)
  
useEffect(() => {
    const options = {threshold: 0.7, }

const callback =(entries)=> {
    // entries.forEach()
const entry = entries[0]; //배열로 감싸져서 온다
if (entry.isIntersecting) {
    callbackFnRef.current();

}

  };
  const observer = new IntersectionObserver(callback, options);
  const targetElement = withObsesrverRef.current;

  observer.observe(targetElement);
  return () => {
    observer.unobserve(targetElement)
  }
}, []);//함수가 처음 들어 갔을 때 한번만 observer를 달아주기를 원 함. 


    return withObsesrverRef // observer가 달려 있는 ref를 반환한다.
  
}
