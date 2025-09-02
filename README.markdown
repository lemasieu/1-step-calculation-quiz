# 1-Step Calculation Quiz

A web-based quiz application designed for Grade 4-5 students to practice basic arithmetic operations (addition, subtraction, multiplication, division). The quiz features a dark theme, randomized questions with placeholders, progress tracking, interactive controls, and navigation buttons to review answered questions.

## Features
- **Dark Theme**: Clean, modern dark interface for comfortable use.
- **Randomized Questions**: Questions are generated from a JSON template with placeholders (`so1`, `so2`) replaced by random numbers suitable for Grade 4-5, where `so1` is always divisible by `so2` to increase difficulty and test operation recognition.
- **Four Operations**: 20 questions (5 per operation: addition, subtraction, multiplication, division), shuffled randomly.
- **Progress Tracking**: Displays correct answers, total questions, and percentage (updated in real-time and at quiz completion).
- **Interactive Controls**: 
  - Answer input and submit button are disabled after answering.
  - "Next" button is locked until the current question is answered.
  - Feedback includes correct/incorrect status, correct answer, and explanation.
- **Navigation Buttons**: 20 buttons (arranged in 2 rows of 10) allow reviewing answered questions or the current question:
  - Green for correct answers.
  - Red for incorrect answers.
  - Blue for the current question.
  - Gray (disabled) for unanswered questions.
- **JSON-Driven**: Questions are stored in a separate `quiz.json` file for easy modification.

## Demo
Try the live demo at: [https://mãsieu.vn/github/1-step-calculation-quiz](https://mãsieu.vn/github/1-step-calculation-quiz)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/lemasieu/1-step-calculation-quiz.git
   ```
2. Navigate to the project directory:
   ```bash
   cd 1-step-calculation-quiz
   ```
3. Serve the application using a local server (required for `fetch` to load `quiz.json`):
   - Option 1: Use VS Code with the `Live Server` extension.
   - Option 2: Use a simple HTTP server, e.g., with Node.js:
     ```bash
     npm install -g http-server
     http-server
     ```
4. Open `index.html` in a browser via the server (e.g., `http://localhost:8080`).

**Note**: Directly opening `index.html` in a browser may cause CORS issues due to the `fetch` API. Use a local server to avoid this.

## File Structure
- `index.html`: Main HTML structure for the quiz interface.
- `styles.css`: CSS for dark theme, responsive layout, and navigation button styling.
- `script.js`: JavaScript logic for fetching `quiz.json`, randomizing numbers, handling quiz interactions, and navigation.
- `quiz.json`: JSON template with question placeholders (`so1`, `so2`) for addition, subtraction, multiplication, and division.

## Usage
1. Open the application in a browser via a local server.
2. Answer each question by entering a number in the input field and clicking "Trả lời" (Submit).
3. View feedback (correct/incorrect, answer, explanation) after submitting.
4. Click "Tiếp theo" (Next) to proceed to the next question (enabled only after answering).
5. Use the navigation buttons (1-20) to review answered questions or the current question:
   - Green buttons indicate correct answers.
   - Red buttons indicate incorrect answers.
   - Blue button indicates the current question.
   - Gray buttons (disabled) indicate unanswered questions.
6. Track progress via the counter (correct/total, percentage) displayed above the question.
7. Complete all 20 questions to see the final score, with the option to review any question.

## Customization
- **Add Questions**: Edit `quiz.json` to include more questions, following the same structure with `so1`, `so2` placeholders.
- **Adjust Number Ranges**: Modify `getDivisibleNumbers` in `script.js` to change the range of random numbers (e.g., currently `so1` up to 200 and `so2` from 2-10 for all operations, ensuring `so1` is divisible by `so2`).
- **Support Remainders**: Update `getDivisibleNumbers` in `script.js` to include remainders for division questions if desired.
- **Change Styling**: Edit `styles.css` to adjust colors, fonts, or layout (e.g., navigation button size or arrangement).
- **Increase Questions**: Add more questions to `quiz.json` and update the navigation button creation in `script.js` to support more than 20 questions (e.g., 40 buttons).

## Contributing
Feel free to fork the repository, make improvements, and submit pull requests. Issues and feature requests can be reported on the [GitHub Issues page](https://github.com/lemasieu/1-step-calculation-quiz/issues).

## License
This project is licensed under the MIT License.