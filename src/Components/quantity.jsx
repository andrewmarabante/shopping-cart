import './quantity.css'
import { Button } from '@mui/material';
import {TextField} from '@mui/material';

export default function NumberInput({ count, changeNumberFunction }) {
    
    function handleNumberEntry(value) {
      const valueAsNumber = parseInt(value);
  
      if (isNaN(valueAsNumber) || valueAsNumber < 0) {
        return;
      }
  
      changeNumberFunction(valueAsNumber);
    }
  
    return (
      <div className="counter">
        <Button
          className="counter-button"
          onClick={() => changeNumberFunction(count - 1)}
        >
          -
        </Button>
        <div className="after-container">
          <TextField
            type="number"
            className="counter-number"
            value={count}
            onInput={(e) => handleNumberEntry(e.target.value)}
          />
        </div>
        <Button
          className="counter-button"
          onClick={() => changeNumberFunction(count + 1)}
        >
          +
        </Button>
      </div>
    );
  }