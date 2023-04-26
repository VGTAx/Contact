{    
function validateForm(e) {//валидация полей

        const errors = document.getElementsByClassName('validation-error');
        while (errors.length > 0) {
            errors[0].parentNode.removeChild(errors[0]);
        }

        let valid = true;
        const name = document.getElementById("Name");
        if (!name.value) { // если не заполнено
            name.style.border = "2px solid red";
            document.querySelector('label[for="Name"]').innerHTML +=
                '<span class="validation-error"> <font color="red"> Укажите имя </font></span>';
            valid = false;
        }
        else
            name.style.border = "1px solid #ced4da"


    const PhoneNumber = document.getElementById("PhoneNumber");
        if (!PhoneNumber.value) { // если не заполнено
            PhoneNumber.style.border = "2px solid red";
            document.querySelector('label[for="PhoneNumber"]').innerHTML +=
                '<span class="validation-error"> <font color="red"> Укажите номер </font></span>';
            valid = false;
        }
        else { // если заполнено, то проверяем на корректность номера регулярным выражением
            const re = /^^[1-9]+[0-9]*$/;
            if (!re.test(PhoneNumber.value)) {
                PhoneNumber.style.border = "2px solid red";
                document.querySelector('label[for="PhoneNumber"]').innerHTML +=
                    '<span class="validation-error"> <font color="red"> Некорректный номер. Используйте только цифры. </font></span>';
                valid = false;
            }                           
            else {                         
                    PhoneNumber.style.border = "1px solid #ced4da"
            }
            
        }

        const jobTitle = document.getElementById("JobTitle");
        if (!jobTitle.value) { // если не заполнено
            jobTitle.style.border = "2px solid red";
            document.querySelector('label[for="JobTitle"]').innerHTML += ' <span class="validation-error"> <font color="red"> Укажите должность </font></span>';
            valid = false;
        }
        else {
            jobTitle.style.border = "1px solid #ced4da"
        }

        if (!valid) {
            e.preventDefault(); // предотвращаем отправку формы, если есть ошибки валидации
        }

        return valid;
    }
const form = document.getElementById("myForm");
form.addEventListener('submit', validateForm);
}