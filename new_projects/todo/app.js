
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
            console.log(todos);
            if(todos.type == 'info_html') {
                todosli.appendChild(this.createTitle(todos.content));
                todosul.appendChild(todosli);
            }
            if(todos.type == 'text') {
                todosli.appendChild(this.createlabel(todos.label));
                todosli.appendChild(this.createInput(todos.name, todos.placeholder));
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
                let mainoption = todos.options;
                function todor(mainotion){
                    var radioOptions;
                    for(var j = 0; j < mainoption.length; j++ ) {
                        radioOptions = mainoption[j];                         
                    }
                    for (let [key, value] of Object.entries(radioOptions)) {
                        console.log(`${key}: ${value}`); 
                    }
                    return radioOptions;
                }  
                function tod(obj) {
                    var keys = Object.keys(obj);  
                    return keys;
                }
                const rdOptions = todor();
                // console.log(output);
          
                todosli.appendChild(this.createlabel(todos.label));
                todosli.appendChild(this.createRadio(todos.name, todos.type,  rdOptions, this.createlabel(rdOptions, rdOptions))

                );
                todosli.appendChild(this.createlabel(rdOptions, rdOptions));
                todosli.appendChild(this.createValidationMessage(todos.validation_message));
                todosul.appendChild(todosli);
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
}
view.displayTodotext(); 
