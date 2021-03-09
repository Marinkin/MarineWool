//Wrappers
const enterModal = document.querySelector('.popup_type-enter'); //модалка входа
const registrationModal = document.querySelector('.popup_type-registration'); //модалка регистрации
const filterModal = document.querySelector('.popup_type-filter');
const body = document.querySelector('body');
const orderModal = document.querySelector('.popup_type-order'); //модалка "заказ принят"

//Buttons and other DOM element

const registrationOpenButton = document.querySelector('.profile__registration-button'); //открывающая кнопкарегистрации
const enterOpenButton = document.querySelector('.profile__enter-button'); //открывающая кнопка входа
const filterOpenButton = document.querySelector('.filter__button'); //открывает фильтр на 500px
const orderOpenButton = document.querySelector('.order_open-button');  //открывающая кнопка "заказ принят"
const registrationModalCloseButton = registrationModal.querySelector('.popup__closed-icon'); //закрывающая кнопка регистрации
const enterModalCloseButton = enterModal.querySelector('.popup__closed-icon'); //закрывающая кнопка входа

let filterCloseButton = null;
if (filterModal !== null) {
    filterCloseButton = filterModal.querySelector('.popup__closed-icon');
}

let orderModalCloseButton = null;
if (orderModal !== null) {
    orderModalCloseButton=orderModal.querySelector('.popup__closed-icon');
}

registrationOpenButton.addEventListener('click', () => {
    openModalWindow(registrationModal);
});
registrationModalCloseButton.addEventListener('click', () => {
    closeModalWindow(registrationModal);
});

enterOpenButton.addEventListener('click', () => {
    openModalWindow(enterModal);
});

enterModalCloseButton.addEventListener('click', () => {
    closeModalWindow(enterModal);
});

if (filterOpenButton!== null) {
    filterOpenButton.addEventListener('click', () => {
        openModalWindow(filterModal);
    });
}

if (filterCloseButton !== null) {
    filterCloseButton.addEventListener('click', () => {
        closeModalWindow(filterModal);
    });
}

const isEscEvent = (evt, action) => {
    const activeModal = document.querySelector('.popup_opened');
    if  (evt.key === "Escape"){
        action(activeModal);
    }
};


const openModalWindow = (modal) => {
    modal.classList.add('popup_opened');
    body.classList.add('popup_opened');
    document.addEventListener('keyup', handleEscUp);
};
const closeModalWindow = (modal) => {
    modal.classList.remove('popup_opened');
    body.classList.remove('popup_opened');
    document.removeEventListener('keyup', handleEscUp);
};

const handleEscUp = (evt) => {
    evt.preventDefault();
    isEscEvent(evt, closeModalWindow);
};


if (orderOpenButton !== null) {
    orderOpenButton.addEventListener('click', () => {
        openModalWindow(orderModal);

    });
}

if (orderModalCloseButton !== null) {
    orderModalCloseButton.addEventListener('click', () => {
        closeModalWindow(orderModal);
    });
}

const showPassword = document.querySelectorAll('.form__icon-password');

function toggleType() {
    const inputPassword = document.querySelector('.form__input_type-password');
    if (inputPassword.type === 'password') {
        inputPassword.type = 'text';
    } else {
        inputPassword.type = 'password';
    }
}
showPassword.forEach(item =>
    item.addEventListener('click', toggleType)
);

const iconPassword=document.querySelector('.form__icon-password');

function handleIconClick() {
    iconPassword.classList.toggle('form__icon-password-control');
}

iconPassword.addEventListener("click", () => {
    handleIconClick(iconPassword);
});


























