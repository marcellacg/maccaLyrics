import React from "react";
import { Collapsible, CollapsibleItem, Icon } from 'react-materialize';
import Select from 'react-select';
import '../../index';

const options = [
  { value: '1957', label: '1957' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const Home = () => (

 <div>
    <div><p>LETRAS POR ANO:</p></div>
    <Collapsible accordion popout>
    <CollapsibleItem expanded={false} header=" Selecione ano entre 1957 e 2022" 
    icon={<Icon>expand_more</Icon>} node="div">
      <Select  placeholder="Selecione um ano" options={options} />
    </CollapsibleItem>
  </Collapsible>

</div>

);

export default Home;