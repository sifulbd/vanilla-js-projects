var itemlist = {
    collection : {
        fields: [
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
        ]
    },
    displaylist: function() {
        console.log();
        const items = this.collection.fields;
        for(var i = 0; i < items.length; i++) {
            console.log(items[i]);
        }
    }
}

// for(let col of collection.fields) {
//     for (const [key, value] of Object.entries(col)) {
//         // console.log(`${key}: ${value}`);

//     }
// }


// function getData(){
//     setTimeout(function() {
//         let output = '';
//         const net = collection.fields;
//         net.forEach(function(post) {
//             var x = document.createElement("INPUT");
//             var l = document.createElement("LABEL");
//             var element7 =  document.createElement("select");
//             var opt = document.createElement("option");
//             var opt_txt = '';
//             let name =  `${post.name}`; 
//             x.setAttribute("name", `${name}`);
//             // x.setAttribute(`${post.required}`, "required");
//            output = output + `<li>${post.type} </li>`;  
//            let label = `${post.label}`
//            if(post.type === 'info_html')  {
//                var t = document.createElement('div');
//                t.classList.add('title');
//                t.innerHTML = `${post.content}`;
//                document.body.appendChild(t);
//            } else {
//                 if(post.type === 'text') {
//                    x.setAttribute("type", "text");
//                    if(post.placeholder){
//                        x.setAttribute("placeholder", `${post.placeholder}`);
//                    }
//                 }
//                 else if(post.type === 'email') {
//                     x.setAttribute("type", "email");
//                     if(post.placeholder){
//                         x.setAttribute("placeholder", `${post.placeholder}`);
//                     }
//                 } 
//                 else if(post.type === 'multi-select') {
//                     // let ant = post.options[0];
//                     // for(let opts in ant) {
//                     //     // txt = txt + x.options[i].text
//                     //     // console.log(`${opts}`);
//                     //     opt_txt = opts;
//                     //     // console.log(opt_txt)                        
//                     // }
//                 }
//                 l.textContent = label;
//                 element7.appendChild(opt);
//                 document.body.appendChild(l);
//                 document.body.appendChild(x);
//                 // console.log(opt_txt);
//            }        
//         });

//         // document.querySelector('#output').innerHTML = x

//         // ;
//     }, 2000)
// }
// getData();


// function getData(){
//     setTimeout(function() {
//         let output = '';
//         const net = collection.fields;
//         net.forEach(function(post) {
//             //create label
//             var l = document.createElement("LABEL");
//             let label = `${post.label}`;
//             l.textContent = label;

//            output = output + `<li>${post.type} </li>`;  

//            if(post.type === 'info_html')  {
//                var t = document.createElement('div');
//                t.classList.add('title');
//                t.innerHTML = `${post.content}`;
//                document.body.appendChild(t);
//            } else {
//                //text fields
//                 if(post.type === 'text' || 'email') {
//                     //create input area
//                     var x = document.createElement("INPUT");
//                     x.setAttribute("type", "text");
//                     x.setAttribute("name", `${post.name}`);
//                     x.setAttribute("placeholder", `${post.placeholder}`);
//                     document.body.appendChild(x);
//                 }
//                 else if(!post.name === '') {
                    
//                 }        

//            }
//             document.body.appendChild(l);
//         });


//         document.querySelector('#output').innerHTML = 
//             `
//             <input
//             `
//         ;
//     }, 2000)
// }
// getData();