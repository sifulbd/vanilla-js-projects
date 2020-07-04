
const createAutoComplete = ({ 
    root, 
    renderOption, 
    onOptionSelect, 
    inputValue ,
    fetchApi
}) => {
    root.innerHTML = `
            <label><b> Search </b></label>
            <input type="text" class="input">
            <div class="dropdown">
                <div class="dropdown-menu">
                <div class="dropdown-content reuslts">
                    <a href="" class="dropdown-item">
                        
                    </a>
                </div>
            </div>
    `
    
    const input = root.querySelector('input');
    const dropdown = root.querySelector('.dropdown');
    const reusltWrapper = root.querySelector('.reuslts');
    
    const onInput = async event => {
        const items = await (fetchApi(event.target.value));
        if(!items.length) {
            dropdown.classList.remove('is-active');
            return;
        }
        // hide dropdown when false results
        reusltWrapper.innerHTML = '';
        dropdown.classList.add('is-active');
        for(let item of items) {
            // add clickable element on dropdown item
            const option = document.createElement('a');
            option.classList.add('dropdown-item');            
            option.innerHTML = renderOption(item);
    
            // dropdown item click to hide dropdown and add title on input
            option.addEventListener('click', () => {
                dropdown.classList.remove('is-active');
                input.value = inputValue(item);
                onOptionSelect(item);    
            })
            //add to html
            reusltWrapper.appendChild(option);
        }
    }
    //type to show data
    input.addEventListener('input', debounce(onInput), 500);
    //hide dropdown when click outside
    document.addEventListener('click', event => {
        if(!root.contains(event.target)) {
            dropdown.classList.remove('is-active');
        }
    })
}
