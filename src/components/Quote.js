import './quote.css';
import { useEffect, useState } from 'react';

const ApiKey = '6ey4sjw8A4R8BYLLnWiPUQ==H7kGL6nxt49Ho8lY';
const API = 'https://api.api-ninjas.com/v1/quotes?category=computers';

function Quote() {
  const [quote, setQuote] = useState(null);
  const [state, setState] = useState({ status: 'loading', error: null });

  useEffect(() => {
    let ignore = false;
    async function fetchQuote() {
      try {
        const response = await fetch(API, {
          method: 'GET',
          headers: {
            'X-Api-Key': ApiKey,
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();
        setQuote(data[0]);
        setState({ ...state, status: 'loaded', error: null });
      } catch (err) {
        setState({ ...state, status: 'error', error: err });
      }
    }

    if (!ignore && state.status === 'loading') fetchQuote();

    return () => {
      ignore = true;
    };
  }, [state]);

  return (
    <blockquote>
      {state.status === 'loading' ? (
        <p>loading</p>
      ) : (
        <>
          <p>{quote?.quote}</p>
          <br />
          <b>{`-- ${quote?.author}`}</b>
        </>
      )}
    </blockquote>
  );
}

export default Quote;
