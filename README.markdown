# 1-Step Calculation Quiz

A web-based quiz application designed for Grade 4–5 students to practice basic arithmetic operations (addition, subtraction, multiplication, division). The quiz features a dark theme, randomized questions with placeholders, progress tracking, interactive controls, and navigation buttons to review answered questions.

## 🚀 Live Demo

Check out the live demo: [https://www.sieu.io.vn/github/1-step-calculation-quiz](https://www.sieu.io.vn/github/1-step-calculation-quiz)

## ✨ Features

- **Dark Theme** – Clean, modern dark interface for comfortable use.
- **Randomized Questions** – Questions are generated from a JSON template with placeholders (`so1`, `so2`) replaced by random numbers suitable for Grade 4–5, where `so1` is always divisible by `so2` to increase difficulty and test operation recognition.
- **Four Operations** – 20 questions (5 per operation: addition, subtraction, multiplication, division), shuffled randomly.
- **Progress Tracking** – Displays correct answers, total questions, and percentage (updated in real-time and at quiz completion).
- **Interactive Controls**:
  - Answer input and submit button are disabled after answering.
  - "Next" button is locked until the current question is answered.
  - Feedback includes correct/incorrect status, correct answer, and explanation.
- **Navigation Buttons** – 20 buttons (arranged in 2 rows of 10) allow reviewing answered questions or the current question:
  - Green for correct answers.
  - Red for incorrect answers.
  - Blue for the current question.
  - Gray (disabled) for unanswered questions.
- **JSON-Driven** – Questions are stored in a separate `quiz.json` file for easy modification.

## 🛠️ Technologies Used

- **HTML5** – Main HTML structure for the quiz interface.
- **CSS3** – CSS for dark theme, responsive layout, and navigation button styling.
- **JavaScript (Vanilla)** – JavaScript logic for fetching `quiz.json`, randomizing numbers, handling quiz interactions, and navigation.
- **JSON** – Question template with placeholders (`so1`, `so2`) for addition, subtraction, multiplication, and division.

## 📁 Project Structure

```
1-step-calculation-quiz/
├── index.html            # Main HTML structure for the quiz interface
├── styles.css            # CSS for dark theme, responsive layout, and navigation button styling
├── script.js             # JavaScript logic for fetching quiz.json, randomizing numbers, handling quiz interactions, and navigation
├── quiz.json             # JSON template with question placeholders (so1, so2) for addition, subtraction, multiplication, and division
└── README.md             # Project documentation
```

## 🔧 Installation & Usage

1. **Clone the repository**
   ```bash
   git clone https://github.com/lemasieu/1-step-calculation-quiz.git
   ```
2. **Navigate to the project folder**
   ```bash
   cd 1-step-calculation-quiz
   ```
   
3. **Run the application with a local server**

⚠️ Important: This project loads data from a JSON file, so you need to use a local development server instead of opening `index.html` directly in your browser to avoid CORS issues.

- **Using VS Code** – Install the "Live Server" extension, right-click on `index.html`, and select "Open with Live Server"
- **Using Python** – Run `python -m http.server` (Python 3) or `python -m SimpleHTTPServer` (Python 2) and open `http://localhost:8000`
- **Using Node.js** – Install `http-server` globally (`npm install -g http-server`) and run `http-server` in the project folder

## 📝 How It Works

1. **Open the application** in a browser via a local server.
2. **Answer each question** by entering a number in the input field and clicking "Trả lời" (Submit).
3. **View feedback** (correct/incorrect, answer, explanation) after submitting.
4. **Click "Tiếp theo" (Next)** to proceed to the next question (enabled only after answering).
5. **Use the navigation buttons (1–20)** to review answered questions or the current question:
   - Green buttons indicate correct answers.
   - Red buttons indicate incorrect answers.
   - Blue button indicates the current question.
   - Gray buttons (disabled) indicate unanswered questions.
6. **Track progress** via the counter (correct/total, percentage) displayed on the page.

**How questions are generated:**

The quiz loads question templates from quiz.json. Each template contains placeholders (`so1`, `so2`) that are replaced with random numbers. For division questions, `so1` is always chosen to be divisible by `so2` to ensure a whole-number result. The 20 questions (5 per operation) are shuffled randomly before the quiz begins.

## 🤝 Contributing

Contributions are welcome! Feel free to submit a Pull Request or open an Issue.
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License
This project is open-source and available under the MIT License.
