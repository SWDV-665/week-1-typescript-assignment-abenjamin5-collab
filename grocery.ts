class Grocery {
    constructor(
      public name: string,
      public quantity: number,
      public category?: string
    ) {}
  }
  
  const groceries: Grocery[] = [
    new Grocery("Sausages", 2, "Poultry"),
    new Grocery("Bread", 8, "Bakery"),
    new Grocery("Eggs", 12, "Dairy"),
  ];
  
  const groceryListElement = document.getElementById("grocery-list");
  if (groceryListElement) {
    groceries.forEach((grocery) => {
      const itemElement = document.createElement("li");
      itemElement.textContent = `${grocery.name} - Quantity: ${grocery.quantity}`;
      groceryListElement.appendChild(itemElement);
    });
  }
  
  export { Grocery, groceries };