let input = document.getElementById("input_field");
let buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', clicked);
});

function clicked(event) {
    var button_label = event.target.getAttribute('data-value');

    if (button_label === '=') {
        try {
            var eq = input.value;

            eq = eq.replaceAll('x', '*').replaceAll('÷', '/').replaceAll('^2', '**2');

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
        input.value = "";
    } else if (button_label === 'DEL') {
        input.value = (input.value).slice(0, -1);
    } else {
        input.value += button_label;
    }
}
