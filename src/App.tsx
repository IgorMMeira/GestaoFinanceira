import { useState, useEffect } from 'react';

import { Item } from './types/Item';
import { categories } from './data/categories';
import { items } from './data/items';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import { InputArea } from './components/InputArea';

import * as C from './App.styles';

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [inEdition, setInEdition] = useState<any>({});

  const handleRemoveItem = (index: number) => {
    let newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  }
  const handleUpdateItem = (index: number, values: Item) => {
    console.log(values)
    setInEdition({ index, values })
  }

  useEffect(() => {
    setFilteredList(list);
  }, [list]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);


  const handleAddItem = (item: Item, isEdit?: boolean, index?: number) => {
    if (isEdit && index != undefined) {
      console.log("inEdition", isEdit, index)
      let newList = [...list];
      newList[index] = { ...item };
      setList(newList);
    } else {
      let newList = [...list];
      newList.push(item);
      setList(newList);
    }
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>

        <InfoArea
          income={income}
          expense={expense}
        />
        <InputArea onAdd={handleAddItem} inEdition={inEdition} />
        <TableArea list={filteredList} onRemove={handleRemoveItem} onUpdate={handleUpdateItem} />
      </C.Body>
    </C.Container>
  );
}

export default App;