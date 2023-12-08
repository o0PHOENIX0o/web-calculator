// Get the input field and all the buttons
let input = document.getElementById("input_field");
let buttons = document.querySelectorAll('button');

// Add a click event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', clicked);
});

// Function to handle button clicks
function clicked(event) {
    // Get the inner HTML (label) of the clicked button
    var button_label = event.target.innerHTML;

    // Check which button was clicked
    if (button_label === '=') {
        try {
            var eq = input.value; // Get the equation from the input field

            // Replace all occurrences of 'x' with '*'
            while (eq.indexOf('x') !== -1) {
                eq = eq.replace('x', '*');
            }

            // Replace all occurrences of '÷' with '/'
            while (eq.indexOf('÷') !== -1) {
                eq = eq.replace('÷', '/');
            }

            // Replace all occurrences of '^2' with '**2'
            while (eq.indexOf('^2') !== -1) {
                eq = eq.replace('^2', '**2');
            }

            console.log(eq);

            //eval function to solve the equaltion
            var result = eval(eq);
            if (isFinite(result)) {
                input.value = result;
            } else {
                input.value = "Invalid";
                throw new Error('Invalid result');
            }
        } catch (error) {
            input.value = "Invalid";
            console.error('Error:', error.message);

        }

    } else if (button_label === 'C') {
        //Clear the input field
        input.value = "";

    } else if (button_label === 'DEL') {
        // Remove the last character from the input field
        input.value = (input.value).slice(0, -1);
    }
    else {
        // Append the clicked button label to the input field
        input.value += button_label;
    }
}