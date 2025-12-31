import axios from "axios";
import { useState } from "react";
interface AdviceResponse {
  slip: {
    id: number;
    advice: string;
  };
}

const App = () => {
  const [advice, setAdvice] = useState("");

  const fetchAdvice = async (): Promise<void> => {
    try {
      const response = await axios.get<AdviceResponse>(
        "https://api.adviceslip.com/advice"
      );
      const data = response.data;
      setAdvice(data.slip.advice);
      console.log(data.slip.advice);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="heading">{advice}</h1>
        <button onClick={() => fetchAdvice()}>Get Advice</button>
      </div>
    </div>
  );
};

export default App;
