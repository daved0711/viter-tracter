import React from 'react'
import FormBalance from './FormBalance'
import FormExpense from './FormExpense'
import ListExpenses from './ListExpenses'

const App = () => {
  const [showFormBalance, setshowFormBalance] = React.useState(false);
  const [showFormExpense, setShowFormExpense] = React.useState(false);
  const [listExpenses, setListExpenses] = React.useState([]);
  const [initBalance, setInitBalance] = React.useState(0);
  const getTotalExpenses = listExpenses.reduce(
    (acc, item) => (acc = acc + Number(item.amount)), 0
  );


  return (
    <>
      <section className="min-h-screen bg-gray-950 flex justify-center items-center text-white">
        <div className="max-w-[500px] w-full bg-gray-800 rounded-md p-4">
          <h5 className="text-center mb-5">Expense Tracker</h5>

          <div className="flex justify-center divide-x divide-gray-100">
            
            <div className="text-center basis-1/2">
              <small>Initial Balance</small>
              <h3>{initBalance}</h3>
            </div>

            <div className="text-center basis-1/2">
              <small>Total Expense</small>
              <h3>{getTotalExpenses}</h3>
            </div>

          </div>

          <div className="text-center mt-8">
            <small>Remaining Balance</small>
            <h1 className="text-5xl">{initBalance - getTotalExpenses}</h1>
          </div>

          <div className="flex justify-between mb-10 px-5">
            <button 
            onClick={() => setshowFormBalance(true)}
            disabled = {initBalance > 0 ? true : false}>
              Add Balance
            </button>
            <button 
            onClick={() => setShowFormExpense(true)}
            disabled = {getTotalExpenses >= initBalance ? true : false}>
              Add Expense
            </button>
          </div>

          {showFormBalance && 
          <FormBalance 
          setshowFormBalance={setshowFormBalance}
          setInitBalance={setInitBalance}/>}
          {showFormExpense && 
          <FormExpense
          setShowFormExpense={setShowFormExpense}
          setListExpenses={setListExpenses}
          listExpenses={listExpenses}/>}
          <ListExpenses listExpenses={listExpenses}/>

        </div>
      </section>
    </>
  )
}

export default App