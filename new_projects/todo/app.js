
var theForm = {
    formItemList: [
        {
            type: 'info_html',
            content: '<h3>Please fill up the following form</h3>'
        },
        {
            name: 'first_name',
            type: 'text',
            label: 'First Name',
            placeholder: 'First Name',
            required: true,
            validation_message: 'First name is required'
        },
        {
            name: 'email',
            label: 'Email',
            type: 'email',
            placeholder: 'Email',
            required: true,
            validation_message: 'Email is required'
        },
        {
            name: 'status',
            type: 'radio',
            label: 'Status',
            required: true,
            validation_message: 'Status is required',
            options: [
                {
                    valid: 'Valid',
                    invalid: 'Invalid'
                }
            ]
        },
        {
            name: 'internal_status',
            type: 'select',
            label: 'Internal Status ',
            required: true,
            validation_message: 'Internal Status is required',
            options: [
                {
                    valid: 'Valid',
                    invalid: 'Invalid'
                }
            ]
        },
        {
            name: 'ocupation',
            type: 'multi-select',
            label: 'Ocupation',
            placeholder: 'Select Ocupation',
            required: true,
            validation_message: 'Ocupation is required',
            options: [
                {
                    doctor: 'Doctor',
                    engineer: 'Engineer',
                    teacher: 'Teacher',
                    other: 'Other'
                }
            ]
        },
    ],
}

var view = {
    displayForm: function() {
        var formDiv = document.querySelector('#form');
        formDiv.innerHTML = '';

        for(var i = 0; i < theForm.formItemList.length; i++ ) {
            var formGroup = document.createElement('div');
            formGroup.classList.add('form-group');
            var formContent = theForm.formItemList[i];
            if(formContent.type == 'info_html') {
                formGroup.appendChild(this.createTitle(formContent.content));
                formDiv.appendChild(formGroup);
            }
            if(formContent.type == 'text') {
                formGroup.appendChild(this.createlabel(formContent.label));
                formGroup.appendChild(this.createInput(formContent.name, formContent.type, 'fname', formContent.placeholder));
                formGroup.appendChild(this.createValidationMessage(formContent.validation_message));
                formDiv.appendChild(formGroup);
            }
            if(formContent.type == 'email') {
                formGroup.appendChild(this.createlabel(formContent.label));
                formGroup.appendChild(this.createInput(formContent.name, formContent.type, 'femail', formContent.placeholder));
                formGroup.appendChild(this.createValidationMessage(formContent.validation_message));
                formDiv.appendChild(formGroup); 
            }
            if(formContent.type == 'radio') {
                let mainoption = formContent.options[0];
                formGroup.appendChild(this.createlabel(formContent.label));     
                let radioKeys = [];           
                Object.keys(mainoption).map(function(prop) {
                   radioKeys.push(prop)
                });
                for (let e of radioKeys) {
                    formGroup.appendChild(this.createRadio(formContent.name, formContent.type, e, this.createlabel(e, e)));
                    formGroup.appendChild(this.createlabel(e, e));
                }
                formGroup.appendChild(this.createValidationMessage(formContent.validation_message));
                formDiv.appendChild(formGroup);
            }
            
            if(formContent.type == 'select') {
                let mainoption = formContent.options[0];
                formGroup.appendChild(this.createlabel(formContent.label));     
                var selectList = document.createElement("select");
                selectList.id = "mySelect";
                formGroup.appendChild(selectList);
                let selectKeys = [];           
                Object.keys(mainoption).map(function(prop) {
                    selectKeys.push(prop);
                });
                for (let e of selectKeys) {
                    var option = document.createElement("option");
                    option.value = e;
                    option.text = e;
                    selectList.appendChild(option);
                }                
                formDiv.appendChild(formGroup);
                formGroup.appendChild(this.createValidationMessage(formContent.validation_message));
            }

            // multi
            if(formContent.type == 'multi-select') {
                let mainoption = formContent.options[0];
                formGroup.appendChild(this.createlabel(formContent.label));   
                var selectList = document.createElement("select");
                selectList.id = "multiSelect";
                selectList.setAttribute('multiple', '');
                formGroup.appendChild(selectList);
                let selectKeys = [];           
                Object.keys(mainoption).map(function(prop) {
                    selectKeys.push(prop);
                });
                for (let e of selectKeys) {
                    var option = document.createElement("option");
                    option.value = e;
                    option.text = e;
                    selectList.appendChild(option);
                }                
                formDiv.appendChild(formGroup);
                formGroup.appendChild(this.createValidationMessage(formContent.validation_message));
            }

        }
        var submitButton = document.createElement('button');
        submitButton.textContent = 'Submit';
        submitButton.className = 'submitButton';
        formDiv.appendChild(submitButton);

    },
    createDeletebutton: function() {
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        return deleteButton;
    },
    createTitle: function(titleText) {
        var div = document.createElement('div');
        div.innerHTML = titleText;
        return div;
    },
    createlabel: function(inputlabel, lvlfor ='') {
        var label = document.createElement('label');
        label.textContent = inputlabel;
        label.setAttribute('for', lvlfor)
        return label;
    },
    createOption: function(inputOption) {
        var option = document.createElement('option');
        option.textContent = inputOption;
        option.setAttribute('multiple', '');
        return option;
    },
    createInput: function(name, type, customClass, placeholder) {
        var input = document.createElement('input');
        input.classList.add('form-control', customClass);
        input.setAttribute("name", name);
        input.setAttribute("type", type);
        input.setAttribute("placeholder", placeholder);
        return input;
    },
    createRadio: function(name, type, options, label) {
        var radio = document.createElement('input');
        radio.classList.add('form-control');
        radio.setAttribute("name", name);
        radio.setAttribute("type", type);
        radio.setAttribute("value", options);
        return radio;
    },
    createValidationMessage: function(message) {
        var span = document.createElement('span');
        span.textContent = message;
        span.classList.add('hide');
        return span;
    },

}

view.displayForm(); 

var submitBtn = document.querySelector('.submitButton');
submitBtn.addEventListener('click', function(event){    
    var fname = document.querySelector('.fname').value;
    var femail = document.querySelector('.femail').value;
    var radio = document.querySelector('input[name="status"]:checked').value;
    var selectDrop = document.getElementById("mySelect");
    var selectopt = selectDrop.options[selectDrop.selectedIndex].value;
    var selectMultiDrop = document.getElementById("multiSelect");
    var selectMultiOpt = selectMultiDrop.options[selectMultiDrop.selectedIndex].value;

    const output = `
    <table>
        <tr>
            <th>Info </th>
            <th>Outputs </th>
        </tr>
        <tr>
            <td>Your Name is: </td>
            <td>${fname}</td>
        </tr>
        <tr>
            <td>Your Email is: </td>
            <td>${femail}</td>
        </tr>
        <tr>
            <td>Radio Status: </td>
            <td>${radio}</td>
        </tr>
        <tr>
            <td>Internal Status: </td>
            <td>${selectopt}</td>
        </tr>
        <tr>
            <td>Occupation: </td>
            <td>${selectMultiOpt}</td>
        </tr>

    </table>
    `
    const table = document.getElementById('output').innerHTML = output;

    document.querySelector('.fname').value = '';
    document.querySelector('.femail').value = '' ;
    document.querySelector('input[name="status"]:checked').value = '';
    selectDrop.options[selectDrop.selectedIndex].value = '';
    selectMultiDrop.options[selectMultiDrop.selectedIndex].value ='';
    console.log(fname, femail, radio, selectopt, selectMultiOpt);


});

