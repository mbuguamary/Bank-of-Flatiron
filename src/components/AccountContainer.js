import React,{useEffect, useState} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const[transactions,setTransactions]= useState([])
  const[search,setSearch] = useState("");
  useEffect(()=>{
    fetch("http://localhost:8001/transactions")
    .then(res=>res.json())
    .then(data=>{setTransactions(data);
      
    });
  },[]);
  
  console.log(transactions)
  return (
    <div>
      <Search setSearch={setSearch} /> 
      <AddTransactionForm 
      transactions={transactions}
      setTransactions={setTransactions}
      />
      <TransactionsList
       transactions={transactions}
      //  {transactions.filter(transactions=>{
      //   if (Search===''){
      //     return true
      //   }
      // })
    //}
        
    

       />
    </div>
  );
}

export default AccountContainer;
