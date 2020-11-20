import { useRef } from 'react';

export default function Uncontrolled() {
  const inputRef = useRef();

  return (
    <div>
      Value: <input ref={inputRef} />
      <button
        onClick={() => {
          console.log(inputRef.current.value);
        }}
      >
        xxx
      </button>
    </div>
  );
}
