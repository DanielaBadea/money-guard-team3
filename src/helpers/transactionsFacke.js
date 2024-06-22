const transactions = [
    {
      id: "1",
      transactionDate: "2024-01-01T10:00:00Z",
      type: "INCOME",
      categoryId: "cat1",
      userId: "user1",
      comment: "Salary",
      amount: 5000,
      balanceAfter: 5000
    },
    {
      id: "2",
      transactionDate: "2024-01-02T14:30:00Z",
      type: "EXPENSE",
      categoryId: "cat2",
      userId: "user1",
      comment: "Groceries",
      amount: -150,
      balanceAfter: 4850
    },
    {
      id: "3",
      transactionDate: "2024-01-03T09:00:00Z",
      type: "EXPENSE",
      categoryId: "cat3",
      userId: "user1",
      comment: "Utilities",
      amount: -100,
      balanceAfter: 4750
    },
    {
      id: "4",
      transactionDate: "2024-01-04T16:00:00Z",
      type: "INCOME",
      categoryId: "cat4",
      userId: "user1",
      comment: "Freelance Work",
      amount: 600,
      balanceAfter: 5350
    },
    {
      id: "5",
      transactionDate: "2024-01-05T11:45:00Z",
      type: "EXPENSE",
      categoryId: "cat5",
      userId: "user1",
      comment: "Lunch",
      amount: -50,
      balanceAfter: 5300
    }
  ];
  export default transactions;
  