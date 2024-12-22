// const button = document.getElementById("send-card");
// let click = false;
// button.addEventListener("click", function () {
//   // if (!click) {
//   //   document.getElementById("bower-color").classList.remove("text-2xl");
//   //   click = true;
//   // } else {
//   //   document.getElementById("bower-color").classList.add("text-2xl");
//   //   click = false;
//   // }
//   document.getElementById("father-div").classList.add("flex");
//   document.getElementById("father-div").classList.add("justify-center");
//   document.getElementById("father-div").innerHTML =
//     "<p class=''>Fathers name:</p > <p>Chokina</p>";

//   window.alert("Hello!");
// });
// Function to show the modal
function showModal(e) {
  const modal = document.getElementById(e);
  if (modal) {
    modal.classList.remove("hidden"); // Show the modal
  }
}

// Function to close the modal
function closeModal(e) {
  const modal = document.getElementById(e);
  if (modal) {
    modal.classList.add("hidden"); // Hide the modal
  }
}

function getFieldValue(id) {
  const element = document.getElementById(id);
  return Number(element.value);
}

function resetField(id) {
  const element = document.getElementById(id);
  element.value = "";
}

function sumOfInputValues(ids) {
  let sum = 0;
  ids.map((item) => {
    const fieldName = document.getElementById(item);
    sum += Number(fieldName.value);

    // fieldName.value = "";
  });
  return sum;
}
function expenseItems(ids) {
  const keyMapping = {
    "food-field": "food",
    "rent-field": "rent",
    "cloth-field": "cloth",
  };

  let expenseObject = {};

  ids.map((item) => {
    const fieldName = document.getElementById(item);

    expenseObject[keyMapping[item]] = Number(fieldName.value);
  });

  return expenseObject;
}

function changeInnerText(id, text) {
  const element = document.getElementById(id);
  element.innerText = text;
}

const calculateBtn = document.getElementById("calculate-btn");
calculateBtn.addEventListener("click", () => {
  const incomeValue = getFieldValue("income-field");

  const totalExpense = sumOfInputValues([
    "food-field",
    "rent-field",
    "cloth-field",
  ]);
  if (totalExpense > incomeValue) {
    window.alert("You have illigal money!");
    return;
  }
  const remaining = incomeValue - totalExpense;
  //resetField("income-field");

  changeInnerText("total-expense", totalExpense);
  changeInnerText("balance", remaining);
});

const saveBtn = document.getElementById("save-btn");
saveBtn.addEventListener("click", () => {
  const saveValue = getFieldValue("save-field");
  const remaining = document.getElementById("balance").textContent;
  console.log(remaining);
  const savingAmount = (Number(remaining) * saveValue) / 100;
  changeInnerText("save-amount", savingAmount);

  changeInnerText("remaining-balance", remaining - savingAmount);
});
const invoice = document.getElementById("invoice-btn");

invoice.addEventListener("click", () => {
  async function delayedShowModal() {
    // Wrap setTimeout in a Promise to make it async
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // After 2 seconds, show the modal
    showModal("invoiceModal");
  }
  const totalExpense = document.getElementById("total-expense").textContent;
  const balance = document.getElementById("balance").textContent;
  const income = Number(totalExpense) + Number(balance);
  changeInnerText("income-invoice", income);
  changeInnerText("total-invoice", Number(totalExpense));
  changeInnerText("balance-invoice", Number(balance));
  const saveValue = getFieldValue("save-field");
  changeInnerText("save-invoice", Number(saveValue));
  const savingAmount = document.getElementById("save-amount").textContent;
  const remaining = document.getElementById("remaining-balance").textContent;
  changeInnerText("save-amount-invoice", Number(savingAmount));
  changeInnerText("remaining-balance-invoice", Number(remaining));
  const expense_Items = expenseItems([
    "food-field",
    "rent-field",
    "cloth-field",
  ]);
  changeInnerText("food-invoice", expense_Items.food);
  changeInnerText("rent-invoice", expense_Items.rent);
  changeInnerText("cloth-invoice", expense_Items.cloth);
  resetField("food-field");
  resetField("rent-field");
  resetField("cloth-field");
  resetField("income-field");
  resetField("save-field");
  if (income === 0) {
    setTimeout(() => {
      showModal("fieldModal");
    }, 500);

    const inn = document.getElementById("inn").classList.add("hidden");
    const img = document.getElementById("img").classList.remove("hidden");
  } else if (income !== 0) {
    const inn = document.getElementById("inn").classList.remove("hidden");
    const img = document.getElementById("img").classList.add("hidden");
    delayedShowModal();
    // setTimeout(() => {
    //   showModal();
    // }, 2000);
  }
  changeInnerText("total-expense", "00");
  changeInnerText("balance", "00");
  changeInnerText("save-amount", "00");
  changeInnerText("remaining-balance", "00");
  console.log(expense_Items);

  // // Check income before executing delayedShowModal
  // if (income === 0) {
  //   window.alert("Income must be added!");
  // } else {
  //   // Call the async function to show modal after 2 seconds
  //   delayedShowModal();
  // }
});
