const accountBalanceHistory = [
  {
    monthNumber: 0, // current month
    account: {
      balance: { amount: 0 },
    },
  },
  {
    monthNumber: 1, // last month
    account: {
      balance: { amount: 100 },
    },
  },
  {
    monthNumber: 2, // two months ago
    account: {
      balance: { amount: 200 },
    },
  },
];

const accountTypeChecker = (accountBalanceHistory) => {
  let result = false;

  let variance = 0;

  for (let index = 0; index < accountBalanceHistory.length - 1; index++) {
    const record = accountBalanceHistory[index];

    if (!record) {
      throw new Error("Something went wrong!");
    }

    const nextRecord = accountBalanceHistory[index + 1];

    if (!nextRecord) {
      throw new Error("Something went wrong!");
    }

    const amount = record?.account?.balance?.amount;

    if (typeof amount !== "number") {
      throw new Error("Something went wrong!");
    }

    const nextAmount = nextRecord?.account?.balance?.amount;

    if (typeof nextAmount !== "number") {
      throw new Error("Something went wrong!");
    }

    const delta = nextAmount - amount;

    if (variance === 0) {
      variance = delta;
    }

    if (variance !== delta) {
      result = true;
      break;
    }
  }

  return result ? "A" : "B";
};

const accountType = accountTypeChecker(accountBalanceHistory);
console.log(accountType);
