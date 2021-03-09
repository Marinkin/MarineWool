const settings = {
    formSelector: ".form__popup",
    inputSelector: ".form__input_type",
    submitButtonSelector: ".form__submit-button",
    inputErrorClass: "form__input_type_error",
    errorClass: "form__error_visible",
};

const  enableValidation = ({formSelector, inputSelector, inputErrorClass, errorClass}) => {
    const forms = Array.from(document.querySelectorAll(formSelector));
    forms.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) =>{
        evt.preventDefault()
        });
        const inputs = Array.from(formElement.querySelectorAll(inputSelector));
        inputs.forEach((inputElement) => {
            inputElement.addEventListener('input', (evt) => {

                const errorElement = formElement.querySelector("#" + inputElement.name + "-error");
                if (inputElement.validity.valid) {
                    inputElement.classList.remove(inputErrorClass);
                    errorElement.textContent = "";
                    errorElement.classList.remove(errorClass);
                }
                else {
                    inputElement.classList.add(inputErrorClass);
                    errorElement.textContent = inputElement.dataset.error;
                    errorElement.classList.add(errorClass);
                }
            });
        });
    });
};
enableValidation(settings);




