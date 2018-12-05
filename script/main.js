document.addEventListener('DOMContentLoaded', () => {
    showData(prompt('Enter the number of records', ''));
});

const SECONDS_BASE_VALUE = 10;

function getData(itemsQnt) {
    let data = [];
    for (let i = 0; i < itemsQnt; i++) {
        data.push(prompt('Enter data', ''));
    }
    return data;
}

function showData(qnt) {
    let data = getData(qnt),
        data_nodes,
        timer_display;

    data.forEach(element => {
        let li = document.createElement('li');            
        li.innerText = element;
        document.body.appendChild(li);
    });
    
    data_nodes = document.getElementsByTagName('li');
    
    timer_display = document.createElement('p');
    timer_display.innerText = SECONDS_BASE_VALUE;
    document.body.lastChild.after(timer_display);

    countdown(data_nodes, SECONDS_BASE_VALUE);
    removeItems(data_nodes, SECONDS_BASE_VALUE);
}

function removeItems(items_list, remove_delay) {
    setTimeout(() => {
        for (let i = items_list.length - 1; i >= 0; i--) {
            items_list[i].remove();
        }
    }, parseInt(remove_delay) * 1000);
}

function countdown(placeholder, seconds) {
    let remaining_time = seconds;
    let countdown_timer = setTimeout(function timer() {
        if (document.body.children.length === placeholder.length) {
            remaining_time--;
            setTimeout(timer, parseInt(seconds) * 100); 
        } else {
            document.body.lastChild.innerText = remaining_time;
            remaining_time--; 
            setTimeout(timer, parseInt(seconds) * 100); 
            if (remaining_time == -1) {
                document.body.lastChild.remove();
                clearTimeout(countdown_timer);
            }          
        }      
    }, 0);
}