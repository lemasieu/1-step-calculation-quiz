// Hàm sinh số ngẫu nhiên
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Hàm sinh số để so1 chia hết cho so2
function getDivisibleNumbers(maxTotal, minDivider) {
    const divider = getRandomInt(minDivider, 10); // so2 nhỏ (2-10)
    const quotient = getRandomInt(1, Math.floor(maxTotal / divider));
    const total = divider * quotient; // so1 = so2 * quotient
    return [total, divider, quotient];
}

// Hàm randomize quiz từ template
function randomizeQuiz(template) {
    const data = JSON.parse(JSON.stringify(template)); // Sao chép sâu
    for (const operation in data) {
        data[operation].forEach((item) => {
            let so1, so2, answer;
            let explanationTemplate;
            if (operation === 'division') {
                [so1, so2, answer] = getDivisibleNumbers(200, 2);
                explanationTemplate = `${so1} ÷ ${so2} = ${answer}, chia tổng cho đơn vị.`;
            } else if (operation === 'multiplication') {
                [so1, so2] = getDivisibleNumbers(200, 2); // so1 chia hết cho so2
                answer = so1 * so2; // Nhân bình thường
                explanationTemplate = `${so1} × ${so2} = ${answer}, nhân số lượng.`;
            } else if (operation === 'subtraction') {
                [so1, so2] = getDivisibleNumbers(200, 2); // so1 chia hết cho so2
                answer = so1 - so2; // Trừ bình thường
                explanationTemplate = `${so1} - ${so2} = ${answer}, trừ để tìm còn lại.`;
            } else if (operation === 'addition') {
                [so1, so2] = getDivisibleNumbers(200, 2); // so1 chia hết cho so2
                answer = so1 + so2; // Cộng bình thường
                explanationTemplate = `${so1} + ${so2} = ${answer}, cộng để tìm tổng.`;
            }
            // Thay so1, so2 trong question
            item.question = item.question.replace('so1', so1).replace('so2', so2);
            item.answer = answer;
            item.explanation = explanationTemplate;
        });
    }
    return data;
}

// Fetch và xử lý JSON
async function loadQuiz() {
    try {
        const response = await fetch('quiz.json');
        const quizTemplate = await response.json();
        const quizData = randomizeQuiz(quizTemplate);

        // Flatten tất cả câu hỏi thành mảng (tổng 20 câu)
        const allQuestions = [
            ...quizData.addition,
            ...quizData.subtraction,
            ...quizData.multiplication,
            ...quizData.division
        ].sort(() => Math.random() - 0.5); // Shuffle ngẫu nhiên thứ tự

        let currentIndex = 0;
        let correctAnswers = 0;
        let answered = false;
        const userAnswers = new Array(allQuestions.length).fill(null); // Lưu đáp án người dùng và trạng thái {userAnswer, isCorrect}

        const questionEl = document.getElementById('question');
        const answerInput = document.getElementById('answer');
        const submitBtn = document.getElementById('submit');
        const nextBtn = document.getElementById('next');
        const resultEl = document.getElementById('result');
        const progressEl = document.getElementById('progress');
        const navigationEl = document.getElementById('navigation');

        // Tạo 20 nút navigation (2 hàng, mỗi hàng 10 nút)
        for (let i = 0; i < allQuestions.length; i++) {
            const btn = document.createElement('button');
            btn.classList.add('nav-btn', 'unanswered');
            btn.textContent = i + 1;
            btn.disabled = true;
            btn.addEventListener('click', () => {
                if (!btn.disabled) {
                    currentIndex = i;
                    displayQuestion();
                }
            });
            navigationEl.appendChild(btn);
        }
        const navButtons = navigationEl.querySelectorAll('.nav-btn');

        // Cập nhật màu sắc và trạng thái nút
        function updateNavButtons() {
            navButtons.forEach((btn, idx) => {
                if (idx === currentIndex) {
                    btn.classList.add('current');
                    btn.disabled = false;
                } else {
                    btn.classList.remove('current');
                }
                if (userAnswers[idx] !== null) {
                    btn.disabled = false;
                    if (userAnswers[idx].isCorrect) {
                        btn.classList.add('correct');
                        btn.classList.remove('incorrect', 'unanswered');
                    } else {
                        btn.classList.add('incorrect');
                        btn.classList.remove('correct', 'unanswered');
                    }
                } else if (idx > currentIndex) {
                    btn.classList.add('unanswered');
                    btn.disabled = true;
                    btn.classList.remove('correct', 'incorrect', 'current');
                } else {
                    btn.disabled = false;
                }
            });
        }

        // Hàm hiển thị câu hỏi hiện tại
        function displayQuestion() {
            if (currentIndex >= allQuestions.length) {
                questionEl.textContent = 'Hoàn thành quiz!';
                answerInput.disabled = true;
                submitBtn.disabled = true;
                nextBtn.disabled = true;
                const percentage = ((correctAnswers / allQuestions.length) * 100).toFixed(2);
                resultEl.innerHTML = `Kết quả cuối cùng: ${correctAnswers}/${allQuestions.length} đúng (${percentage}%)`;
                updateNavButtons();
                return;
            }
            const q = allQuestions[currentIndex];
            questionEl.textContent = q.question;
            const prevAnswer = userAnswers[currentIndex];
            if (prevAnswer !== null) {
                // Xem lại: disable input/submit, hiển thị đáp án cũ và result
                answerInput.value = prevAnswer.userAnswer;
                answerInput.disabled = true;
                submitBtn.disabled = true;
                nextBtn.disabled = false;
                answered = true;
                if (prevAnswer.isCorrect) {
                    resultEl.innerHTML = `Đúng! Đáp án: ${q.answer}<br>Giải thích: ${q.explanation}`;
                    resultEl.style.color = '#4caf50';
                } else {
                    resultEl.innerHTML = `Sai! Đáp án đúng: ${q.answer}<br>Giải thích: ${q.explanation}`;
                    resultEl.style.color = '#f44336';
                }
            } else {
                // Câu mới
                answerInput.value = '';
                answerInput.disabled = false;
                submitBtn.disabled = false;
                nextBtn.disabled = true;
                resultEl.textContent = '';
                answered = false;
            }
            updateProgress();
            updateNavButtons();
        }

        // Cập nhật tiến độ
        function updateProgress() {
            const percentage = ((correctAnswers / allQuestions.length) * 100).toFixed(2);
            progressEl.textContent = `Đúng: ${correctAnswers}/${allQuestions.length} (${percentage}%)`;
        }

        // Xử lý submit trả lời
        submitBtn.addEventListener('click', () => {
            if (answered || userAnswers[currentIndex] !== null) return;
            const userAnswer = parseInt(answerInput.value.trim());
            if (isNaN(userAnswer)) {
                resultEl.textContent = 'Vui lòng nhập số!';
                return;
            }
            const q = allQuestions[currentIndex];
            const isCorrect = userAnswer === q.answer;
            userAnswers[currentIndex] = { userAnswer, isCorrect };
            if (isCorrect) correctAnswers++;
            answered = true;
            answerInput.disabled = true;
            submitBtn.disabled = true;
            nextBtn.disabled = false;
            if (isCorrect) {
                resultEl.innerHTML = `Đúng! Đáp án: ${q.answer}<br>Giải thích: ${q.explanation}`;
                resultEl.style.color = '#4caf50';
            } else {
                resultEl.innerHTML = `Sai! Đáp án đúng: ${q.answer}<br>Giải thích: ${q.explanation}`;
                resultEl.style.color = '#f44336';
            }
            updateProgress();
            updateNavButtons();
        });

        // Next câu
        nextBtn.addEventListener('click', () => {
            if (!answered && userAnswers[currentIndex] === null) return;
            currentIndex++;
            displayQuestion();
        });

        // Bắt đầu quiz
        navButtons[0].disabled = false;
        navButtons[0].classList.add('current');
        displayQuestion();
    } catch (error) {
        console.error('Lỗi khi tải quiz:', error);
        document.getElementById('question').textContent = 'Lỗi khi tải câu hỏi!';
    }
}

// Chạy khi trang load
loadQuiz();