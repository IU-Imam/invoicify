# Invoicify

**Invoicify** is a simple JavaScript-based application for managing and generating invoices. Built with plain JavaScript, this app allows users to create, edit, and manage invoices using the DOM without relying on any external libraries or frameworks.

## Live Demo

You can try out **Invoicify** by visiting the live demo hosted on Netlify:

[**Invoicify Live Demo**](https://beautiful-sprinkles-8b03cc.netlify.app/)

## Features

- Create and save invoices with itemized lists
- Calculate totals, taxes, and discounts
- Generate PDF reports for each invoice
- Simple, responsive UI for easy access on both desktop and mobile devices
- No need for server-side interaction – all data is handled locally using JavaScript and the browser's DOM

## Tech Stack

- **HTML** - Structure of the application
- **CSS** - Styling for the user interface
- **JavaScript** - Core functionality using the DOM (Document Object Model)
- **LocalStorage** (Optional) - Store invoice data persistently in the browser

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/invoicify.git
```

### 2. Navigate to the Project Folder

```bash
cd invoicify
```

### 3. Open `index.html` in your Browser

- Open the `index.html` file directly in your browser to run the application.
- This app does not require a server as it's client-side only.

## Usage

1. **Create an Invoice:**
   - Click the "New Invoice" button to start creating an invoice.
   - Add items, descriptions, quantities, and prices.
2. **Calculate Totals:**

   - The app automatically calculates the total amount based on the items you enter.
   - It also calculates taxes and discounts (if applicable).

3. **Save the Invoice:**

   - You can save your invoice locally using the browser's `LocalStorage` (optional).
   - Each saved invoice is stored as an object, allowing you to retrieve and update it later.

4. **Generate PDF (Optional):**

   - Once you’ve completed your invoice, you can generate a PDF using the in-built functionality.
   - The PDF will include all the details of the invoice.

5. **Manage Existing Invoices:**
   - Retrieve saved invoices from the list and update or delete them.
   - You can also view a preview of each invoice before editing.

## Example of Usage

1. Open the app in your browser.
2. Click on "New Invoice."
3. Add items like so:
   - Item 1: "Web Development" | Quantity: 1 | Price: $500
   - Item 2: "Design Services" | Quantity: 2 | Price: $150
4. The total amount will be calculated automatically.
5. Save the invoice to access it later.

## File Structure

```
invoicify/
├── index.html          # Main HTML file
├── styles.css          # Styles for the application
├── script.js           # Main JavaScript file for handling DOM manipulation and logic
└── README.md           # Project documentation
```

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/your-feature-name`)
6. Create a new Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- Thanks to [MDN Web Docs](https://developer.mozilla.org/en-US/) for providing comprehensive documentation on JavaScript and the DOM.
- Special thanks to [Font Awesome](https://fontawesome.com/) for providing icons used in the app.
