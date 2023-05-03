import './quote.css';
import { useEffect, useRef, useState } from 'react';

const ApiKey = '6ey4sjw8A4R8BYLLnWiPUQ==H7kGL6nxt49Ho8lY';
const API = 'https://api.api-ninjas.com/v1/quotes?category=computers';

function Quote() {
  const fetchPermission = useRef(true);
  const [quote, setQuote] = useState(null);
  const [state, setState] = useState({ status: 'loading', error: null });
  const updateState = (obj) => setState({ ...state, ...obj });

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
      updateState({ status: 'loaded', error: null });
    } catch (err) {
      updateState({ status: 'error', error: err });
    }
  }

  useEffect(() => {
    if (fetchPermission.current) {
      fetchQuote();
      fetchPermission.current = false;
    }
  });

  if (state.error) return <p>Error! Something went wrong!</p>;

  return (
    <>
      {state.status === 'loading' ? (
        <p>loading</p>
      ) : (
        <blockquote>
          {quote?.quote}
          <br />
          <b>{`-- ${quote?.author}`}</b>
        </blockquote>
      )}
    </>
  );
}

export default Quote;
