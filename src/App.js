import Calculator from './Components/Calculator';
import Screen from './Components/Screen';
import ButtonBox from './Components/ButtonBox';
import Button from './Components/Button';

const btnValues = [
  ['C', 'DEL', '÷', 'X'],
  [7, 8, 9, '-'],
  [4, 5, 6, '+'],
  [1, 2, 3, '='],
  [0, '.'],
];

console.log(btnValues[0]);

// const value = JSON.stringify(btn(i));

const App = () => {
  return (
    <Calculator>
      <Screen value='0' />
      <ButtonBox>
        {btnValues.flat().map((btn, i) => {
          return (
            <Button
              key={i}
              className={
                btn === '=' ? 'equals' : '' || btn == '0' ? 'zero' : ''
              }
              value={btn}
              onClick={() => {
                console.log(`${btn} clicked!`);
              }}
            />
          );
        })}
      </ButtonBox>
    </Calculator>
  );
};

export default App;
