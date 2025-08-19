# 1-Step Calculation Quiz

A web-based quiz application designed for Grade 4-5 students to practice basic arithmetic operations (addition, subtraction, multiplication, division). The quiz features a dark theme, randomized questions with placeholders, progress tracking, and interactive controls to ensure correct answer submission before proceeding.

## Features
- **Dark Theme**: Clean, modern dark interface for comfortable use.
- **Randomized Questions**: Questions are generated from a JSON template with placeholders (`so1`, `so2`) replaced by random numbers suitable for Grade 4-5 (e.g., 1-200, ensuring integer division results).
- **Four Operations**: 20 questions (5 per operation: addition, subtraction, multiplication, division), shuffled randomly.
- **Progress Tracking**: Displays correct answers, total questions, and percentage (updated in real-time and at quiz completion).
- **Interactive Controls**: 
  - Answer input and submit button are disabled after answering.
  - "Next" button is locked until the current question is answered.
  - Feedback includes correct/incorrect status, correct answer, and explanation.
- **JSON-Driven**: Questions are stored in a separate `quiz.json` file for easy modification.

## Demo
Try the live demo at: [[https://mãsiêu.vn/github/1-step-calculation-quiz](https://mãsiêu.vn/github/1-step-calculation-quiz)](https://xn--msiu-goa8b.vn/github/1-step-calculation-quiz/)

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
- `styles.css`: CSS for dark theme and responsive layout.
- `script.js`: JavaScript logic for fetching `quiz.json`, randomizing numbers, and handling quiz interactions.
- `quiz.json`: JSON template with question placeholders (`so1`, `so2`) for addition, subtraction, multiplication, and division.

## Usage
1. Open the application in a browser via a local server.
2. Answer each question by entering a number in the input field and clicking "Trả lời" (Submit).
3. View feedback (correct/incorrect, answer, explanation) after submitting.
4. Click "Tiếp theo" (Next) to proceed to the next question (enabled only after answering).
5. Track progress via the counter (correct/total, percentage) displayed above the question.
6. Complete all 20 questions to see the final score.

## Customization
- **Add Questions**: Edit `quiz.json` to include more questions, following the same structure with `so1`, `so2` placeholders.
- **Adjust Number Ranges**: Modify `getRandomInt` or `getDivisibleNumbers` in `script.js` to change the range of random numbers (e.g., currently 1-100 for addition, 50-200 for subtraction, 2-20/2-10 for multiplication, and integer division).
- **Support Remainders**: Update `getDivisibleNumbers` in `script.js` to include remainders for division questions if desired.
- **Change Styling**: Edit `styles.css` to adjust colors, fonts, or layout.

## Contributing
Feel free to fork the repository, make improvements, and submit pull requests. Issues and feature requests can be reported on the [GitHub Issues page](https://github.com/lemasieu/1-step-calculation-quiz/issues).

## License
This project is licensed under the MIT License.
