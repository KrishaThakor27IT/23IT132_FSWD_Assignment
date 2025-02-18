// Task List (An array of tasks)
const tasks = [
  { title: "Do homework", status: "Pending", priority: 3 },
  { title: "Wash dishes", status: "Completed", priority: 2 },
  { title: "Buy groceries", status: "Pending", priority: 5 },
];

// Function to add a new task
function addTask(title, status, priority) {
  tasks.push({ title, status, priority });
}

// Function to get tasks by their status (e.g., "Pending" or "Completed")
function getTasksByStatus(status) {
  return tasks.filter(task => task.status === status);
}

// Function to find the first high-priority task (priority 5)
function getHighPriorityTask() {
  return tasks.find(task => task.priority === 5);
}

// Get a list of tasks showing their title and status
const taskList = tasks.map(task => `Task: ${task.title}, Status: ${task.status}`);

// Function to display tasks in the console
function displayTasks() {
  tasks.forEach(task => {
      console.log(`Title: ${task.title} | Status: ${task.status} | Priority: ${task.priority}`);
  });
}

// Example Usage:
addTask("Read a book", "Pending", 4);  // Adds a new task

console.log("Pending Tasks:", getTasksByStatus("Pending"));  // Shows only pending tasks
console.log("First High Priority Task:", getHighPriorityTask());  // Finds the highest priority task
console.log("Task List:", taskList);  // Shows all tasks

displayTasks();  // Prints all tasks


//que2
// Shopping Cart (Array of Products)
const cart = [
  { productName: "Laptop", price: 800, quantity: 1 },
  { productName: "Mouse", price: 20, quantity: 2 },
  { productName: "Keyboard", price: 50, quantity: 1 },
];

// Function to add a product to the cart
function addProduct(productName, price, quantity) {
  cart.push({ productName, price, quantity });
}

// Function to calculate the total price of all items
function calculateTotal() {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

// Function to remove a product from the cart by name
function removeProduct(productName) {
  const index = cart.findIndex(item => item.productName === productName);
  if (index !== -1) {
      cart.splice(index, 1);
  }
}

// Function to display all products in the cart
function displayCart() {
  cart.forEach(({ productName, price, quantity }) => {
      console.log(`Product: ${productName}, Price: $${price}, Quantity: ${quantity}`);
  });
}

// Example Usage:
addProduct("Headphones", 100, 1);  // Adds a new product
console.log("Total Price: $", calculateTotal());  // Shows the total cost
removeProduct("Mouse");  // Removes the mouse from the cart
displayCart();  // Prints all products in the cart



//que3
// Weather Data (Array of city weather information)
const weatherData = [
  { cityName: "New York", temperature: 30, condition: "Sunny" },
  { cityName: "London", temperature: 22, condition: "Cloudy" },
  { cityName: "Tokyo", temperature: 28, condition: "Rainy" },
];

// Function to add a new city's weather data
function addCityWeather(cityName, temperature, condition) {
  weatherData.push({ cityName, temperature, condition });
}

// Function to find the hottest city
function findHottestCity() {
  return weatherData.reduce((hottest, city) => (city.temperature > hottest.temperature ? city : hottest), weatherData[0]);
}

// Function to filter cities by weather condition (e.g., "Sunny", "Rainy")
function filterByCondition(condition) {
  return weatherData.filter(city => city.condition === condition);
}

// Get a list of city names with their temperatures
const cityTemperatures = weatherData.map(city => `City: ${city.cityName}, Temp: ${city.temperature}°C`);

// Function to log the details of the hottest city
function logHottestCity() {
  const { cityName, temperature, condition } = findHottestCity();
  console.log(`Hottest City: ${cityName} | Temperature: ${temperature}°C | Condition: ${condition}`);
}

// Example Usage:
addCityWeather("Sydney", 35, "Sunny");  // Adds Sydney to the list

console.log("Hottest City:", findHottestCity());  // Finds the hottest city
console.log("Cities with Rainy Weather:", filterByCondition("Rainy"));  // Finds all rainy cities
console.log("City Temperatures:", cityTemperatures);  // Shows city names and temperatures

logHottestCity();  // Logs details of the hottest city
