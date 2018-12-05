document.addEventListener('DOMContentLoaded', () => {
    function getData(itemsQnt) {
        let data = [];
        for (let i = 0; i < itemsQnt; i++) {
            data.push(prompt('Enter data', ''));
        }
        return data;
    }
    
    function showData(qnt) {
        let data = getData(qnt);
        data.forEach(element => {
            let li = document.createElement('li');
            li.innerText = element;
            document.body.appendChild(li);
        });
    }

    function removeItems(itemsList) {
        console.log(itemsList.length);
        for (let i = 0; i < itemsList.length; i++) {   
            console.log(itemsList.length);
            // console.log(item); 
            itemsList[i].remove();        
            // item.remove();
        }
    }

    
    showData(prompt('Enter the number of records', ''));

    
    setTimeout(removeItems(document.getElementsByTagName('li')), 10000);
    
})