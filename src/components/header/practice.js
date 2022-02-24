const Child = ({ ChangeName }) => {
  ChangeName('hcsuifheisw');
};

const Parent = () => {
  const [name, setName] = useState('');
  return <Child ChangeName={(val) => setName(val)} />;
};

const [name, setName] = useState('Snajy');

console.log(val); //
if (name == val) setName(val);
console.log(); //

{
  setName('Vrunda');
}
