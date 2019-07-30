import React, { useState, useEffect } from 'react';
import Square from '../Square/Square';
import './Board.css';

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  async function fetchUrl() {
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
    setLoading(false);
  }
  useEffect(() => {
    fetchUrl();
  }, []);
  return [data, loading];
}
export { useFetch };

const Board = (props) => {

    const [data, loading] = useFetch(
        '/api/board'
    );
    console.log(data)

    return (
        <div className='board'>
            {!loading && data.board.squares.map((sq) => 
            <div className='wrapper'>
                <Square square={sq} />
            </div>
            )}
        </div>
    )
}

export default Board;