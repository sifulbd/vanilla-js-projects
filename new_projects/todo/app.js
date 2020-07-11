
var theTodo = {
    todoList: [
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
    addItem: function (item) {
        this.todoList.push({
            todoText: item,
        }); 
    },
}

var handler = {
    addnewTodo: function() {
        var todoinput = document.getElementById('todoinput');
        theTodo.addItem(todoinput.value);
        todoinput.value = ' ';
        view.displayTodotext();
    },
};

var view = {
    displayTodotext: function() {
        var todosul = document.querySelector('#form');
        todosul.innerHTML = '';
        for(var i = 0; i < theTodo.todoList.length; i++ ) {
            var todosli = document.createElement('div');
            todosli.classList.add('form-group');
            var todos = theTodo.todoList[i];
            if(todos.type == 'info_html') {
                todosli.appendChild(this.createTitle(todos.content));
                todosul.appendChild(todosli);
            }
            if(todos.type == 'text') {
                todosli.appendChild(this.createlabel(todos.label));
                todosli.appendChild(this.createInput(todos.name, todos.type, todos.placeholder));
                todosli.appendChild(this.createValidationMessage(todos.validation_message));
                todosul.appendChild(todosli);
            }
            if(todos.type == 'email') {
                todosli.appendChild(this.createlabel(todos.label));
                todosli.appendChild(this.createInput(todos.name, todos.type, todos.placeholder));
                todosli.appendChild(this.createValidationMessage(todos.validation_message));
                todosul.appendChild(todosli); 
            }
            if(todos.type == 'radio') {
                let mainoption = todos.options[0];
                todosli.appendChild(this.createlabel(todos.label));     
                let radioKeys = [];           
                Object.keys(mainoption).map(function(prop) {
                   radioKeys.push(prop)
                });
                for (let e of radioKeys) {
                    todosli.appendChild(this.createRadio(todos.name, todos.type, e, this.createlabel(e, e)));
                    todosli.appendChild(this.createlabel(e, e));
                }
                todosli.appendChild(this.createValidationMessage(todos.validation_message));
                todosul.appendChild(todosli);
            }
            
            if(todos.type == 'select') {
                let mainoption = todos.options[0];
                todosli.appendChild(this.createlabel(todos.label));     
                // todosli.appendChild(this.createSelect(todos.name));

                var selectList = document.createElement("select");
                selectList.id = "mySelect";
                todosli.appendChild(selectList);

                let selectKeys = [];           
                Object.keys(mainoption).map(function(prop) {
                    selectKeys.push(prop);
                });
                for (let e of selectKeys) {
                    var option = document.createElement("option");
                    option.value = e;
                    option.text = e;
                    selectList.appendChild(option);
                    // todosli.appendChild(this.createSelect(this.createOption(e)))
                }
                
                todosul.appendChild(todosli);
                todosli.appendChild(this.createValidationMessage(todos.validation_message));
            }

            // multi
            if(todos.type == 'multi-select') {
                let mainoption = todos.options[0];
                todosli.appendChild(this.createlabel(todos.label));     

                var selectList = document.createElement("select");
                selectList.id = "multiSelect";
                selectList.setAttribute('multiple', '');
                todosli.appendChild(selectList);
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
                
                todosul.appendChild(todosli);
                todosli.appendChild(this.createValidationMessage(todos.validation_message));
            }

        }
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
    createInput: function(name, type, placeholder) {
        var input = document.createElement('input');
        input.classList.add('form-control');
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
    // createSelect: function(name, options) {
    //     var select = document.createElement('select');
    //     select.classList.add('form-control');
    //     select.setAttribute("name", name);
    //     return select;
    // },
    createValidationMessage: function(message) {
        var span = document.createElement('span');
        span.textContent = message;
        span.classList.add('hide');
        return span;
    },

    // setEventlistner: function() {
    //     var todoUl = document.querySelector('ul');
    //     todoUl.addEventListener('click', function(event){    
    //         var clicketPositon = event.target;
    //         if(clicketPositon.className === 'deleteButton') {
    //             handler.deleteTodo(parseInt(clicketPositon.parentNode.id));
    //         }
    //     });
    // }

    //    getCheckedValue:  function(radioObj, name) {
    //         for (j = 0; j < radioObj.rows.length; ++j) {
    //             for (k = 0; k < radioObj.cells.length; ++k) {
    //                 var radioChoice = document.getElementById(name + "_" + k);
    //                 if (radioChoice.checked) {
    //                     return radioChoice.value;
    //                 }
    //             }
    //         }
    //         return "";
    //     }
}
view.displayTodotext(); 


