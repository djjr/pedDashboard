let currentIndex = 0;

function displayOldQuestion() {
    const question = questions[currentIndex];
    const displayArea = document.getElementById('oldQuestionDisplay');
    displayArea.innerHTML = `<p>${question.question}</p><p>${question.soln}</p>`;
}

function createForm() {
    const form = document.getElementById('questionForm');
    form.innerHTML = `
        <label>Question: <textarea name="text" required></textarea></label>
        <div class="dropdown-group">
            <label>Type: 
                <select name="type" id="questionType" required>
                    <option value="multiple-choice">Multiple Choice</option>
                    <option value="fill-in-the-blank">Fill in the Blank</option>
                    <option value="short-answer">Short Answer</option>
                    <option value="essay">Essay</option>
                    <option value="code">Code</option>
                </select>
            </label>
            <label>Difficulty: 
                <select name="difficulty">
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </label>
        </div>
        <div id="dynamicFields"></div>
        <label>Tags: <input type="text" name="tags"></label>
        <label>Feedback: <input type="text" name="feedback"></label>
        <label>References: <textarea name="references" placeholder="Ref is [[title|url|details]]"></textarea></label>
    `;
    const questionTypeSelect = document.getElementById('questionType');
    questionTypeSelect.addEventListener('change', handleQuestionTypeChange);
    handleQuestionTypeChange(); // Initialize dynamic fields
}

function handleQuestionTypeChange() {
    const questionType = document.getElementById('questionType').value;
    const dynamicFields = document.getElementById('dynamicFields');
    dynamicFields.innerHTML = ''; // Clear existing fields

    if (questionType === 'multiple-choice' || questionType === 'short-answer' || questionType === 'fill-in-the-blank') {
        dynamicFields.innerHTML += `<label>Correct Answer: <input type="text" name="correctAnswer"></label>`;
    }

    if (questionType === 'multiple-choice') {
        for (let i = 0; i < 5; i++) {
            dynamicFields.innerHTML += `<label>Option ${i+1}: <input type="text" name="options[${i}]"></label>`;
        }
    } else if (questionType === 'essay' || questionType === 'code') {
        dynamicFields.innerHTML = `<label>Model Answer: <textarea name="modelAnswer"></textarea></label>`;
    }
    // Handle other conditions as needed
}



document.getElementById('next').addEventListener('click', () => {
    currentIndex = Math.min(currentIndex + 1, questions.length - 1);
    displayOldQuestion();
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    displayOldQuestion();
});

document.getElementById('populate').addEventListener('click', () => {
    const oldQuestion = questions[currentIndex];
    const form = document.getElementById('questionForm');
    
    form.text.value = oldQuestion.question;

    form.tags.value = oldQuestion.tags.join(', ');

    // Set default type to 'essay'
    form.type.value = 'essay';
    handleQuestionTypeChange()
    form.difficulty.value = 'medium';
    form.modelAnswer.value = oldQuestion.soln; // Map soln to modelAnswer
    // Additional logic to handle specific fields like type, options, etc.
    // You may need to set the question type and call handleQuestionTypeChange() to update dynamic fields
});


document.getElementById('submit').addEventListener('click', async (e) => {
    e.preventDefault();

    const formData = new FormData(document.getElementById('questionForm'));
    const data = {
        tags: [],
        references: [] // Initialize references as an empty array
    };

    formData.forEach((value, key) => {
        if (key === 'tags') {
            data.tags = value ? value.split(',').map(tag => tag.trim()) : [];
        // if (key === 'tags') {
        //     data.tags = value.split(',').map(tag => tag.trim());
        } else if (key === 'references') {
            const refPattern = /\[\[([^[\]]+)\]\]/g; // Matches text within double square brackets
            let match;
            while ((match = refPattern.exec(value)) !== null) {
                const parts = match[1].split('|').map(part => part.trim());
                
                // Create reference object with default URL if missing
                const reference = {
                    title: parts[0] || '',
                    url: parts[1] || 'none',
                    detail: parts[2] || ''
                };
                
                if (reference.title) {
                    data.references.push(reference);
                }
            }
        } else if (key.startsWith('options[')) {
            data.options = data.options || [];
            data.options.push(value);
        } else {
            data[key] = value;
        }
    });
console.log(data);
    try {
        const response = await fetch(`${API_BASE_URL}/api/questions`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Question submitted successfully:', result);
        // Handle the successful submission, e.g., clear form, display success message, etc.
    } catch (error) {
        console.error('Error submitting question:', error);
        // Handle the error, e.g., display error message to the user
    }
});


// Initial setup
createForm();
displayOldQuestion();
