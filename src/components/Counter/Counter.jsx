import { useEffect, useState } from 'react';
import s from './Counter.module.css';

// 1. Xуки можуть бути використані ТІЛЬКИ всередині компонента ✅
// 2. НЕ МОЖНА використовувати хуки всередні функцій в компоненті ❌
// 3. НЕ МОЖНА об'явити хук всереді цикла, іf ❌
export const Counter = () => {
  // const [counter, setCounter] = useState(() => {
  //   const savedData = JSON.parse(window.localStorage.getItem('counter'));
  //   if (savedData !== null) {
  //     return savedData;
  //   }
  //   return 0;
  // });
  const [counter, setCounter] = useState(() => JSON.parse(window.localStorage.getItem('counter')) ?? 0);
  const [step, setStep] = useState(1);

  // Якщо ми пишемо пустий массив залежностей - еффект виконається лише ОДИН раз!
  useEffect(() => {
    console.log('Counter is mounted');
  }, []);

  // Якщо є залежність виконається ПЕРШИЙ РАЗ і всі наступні коли ЗМІНИТЬСЯ змінна з залежностей
  useEffect(() => {
    console.log('Counter was changed to:', counter);
  }, [counter]);

  useEffect(() => {
    console.log(`Step was changed to: ${step}`);
  }, [step]);

  useEffect(() => {
    window.localStorage.setItem('counter', counter);
  }, [counter]);
  const handleIncreaseCounter = () => {
    setCounter(prev => prev + step);
  };

  const handleDecreaseCounter = () => {
    if (counter > 0) {
      setCounter(prev => prev - step);
    }
  };
  const handleReset = () => {
    setCounter(0);
    setStep(1);
  };
  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{counter}</h1>
        <input type='number' value={step} onChange={e => setStep(+e.target.value)} />
        <div className={s.flex}>
          <button onClick={handleDecreaseCounter} className='btn'>
            minus
          </button>
          <button onClick={handleReset} className='btn'>
            reset
          </button>
          <button onClick={handleIncreaseCounter} className='btn'>
            plus
          </button>
        </div>
      </div>
    </div>
  );
};
