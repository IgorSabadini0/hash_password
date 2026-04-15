# Hash Password

> learning how to hash password with bcrypt.

This repository is a learning project focused on securely hashing passwords using the `bcrypt` library in JavaScript (Node.js).

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/IgorSabadini0/hash_password.git
   ```

2. Navigate to the project directory:
   ```bash
   cd hash_password
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```
   *(This will install `bcrypt` and any other required packages listed in `package.json`)*

## 💻 Usage

Run the main JavaScript file to see the password hashing in action:

```bash
node script.js
```
*(Replace `script.js` with the actual name of your main file if it's different)*

## 🛠️ Technologies Used

- **JavaScript**
- **[bcrypt](https://www.npmjs.com/package/bcrypt)** - A library to help you hash passwords.

## 📚 What I Learned

- How to generate a salt.
- How to hash a plaintext password with the generated salt.
- How to securely compare a plaintext password against a stored hash.
