// Assuming you're using a framework like React Router for routing

// import { useHistory } from 'react-router-dom';

const useGoBack = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return goBack;
  
}

export default useGoBack;
