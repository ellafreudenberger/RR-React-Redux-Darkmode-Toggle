import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, clearData, incrementId, decrementId, inputId } from './dataSlice';

function MyComponent() {
  const dispatch = useDispatch();
  const { objectId, apiData } = useSelector((state) => state.data);

  const handleFetchData = () => {
    dispatch(fetchData(objectId));
  };

  return (
    <div>
      <button onClick={handleFetchData}>Fetch Data</button>
  
    </div>
  );
}

export default MyComponent
