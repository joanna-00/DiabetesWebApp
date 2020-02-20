let shoppingList = {
    selectElements: function() {
        // select elements from shopping list page
       this.inputItemField = document.getElementById('input-item-field');
       this.addItemBtn = document.getElementById('add-item-btn');
       this.clearListBtn = document.getElementById('clear-list-btn');
       this.shoppingListList = document.getElementById('shopping-list-list');
       this.shoppingListListChildren = this.shoppingListList.children;
    },
    createItem: function() {
        // create li element with attributes, value, checkbox, and delete button
        let shoppingListItem, shoppingListItemCheckbox, shoppingListItemValue, shoppingListItemDeleteBtn;
        // li
        shoppingListItem = document.createElement('li');
        shoppingListItem.setAttribute('class', 'shopping-list-item');
        // checkbox
        shoppingListItemCheckbox = document.createElement('input');
        shoppingListItemCheckbox.setAttribute('type', 'checkbox');
        // text  value
        shoppingListItemValue = document.createTextNode(this.inputItemField.value);
        // delete button
        shoppingListItemDeleteBtn = document.createElement('i');
        shoppingListItemDeleteBtn.setAttribute('class', 'fas fa-times');
        // add delete functionality to button
        shoppingListItemDeleteBtn.addEventListener('click', () => {
            parent = shoppingListItemDeleteBtn.parentNode;
            parent.remove();
        })
        // append elements to list item
        shoppingListItem.appendChild(shoppingListItemCheckbox);
        shoppingListItem.appendChild(shoppingListItemValue);
        shoppingListItem.appendChild(shoppingListItemDeleteBtn);
        // append item to shopping list
        this.shoppingListList.appendChild(shoppingListItem);

        // shoppingList.scanList();
    },
    addButtonEvent: function() {
        // add click event listener to add item button
        this.addItemBtn.addEventListener('click', function() {
            this.createItem();
        }.bind(shoppingList));
    },
    clearList: function() {
        
    }
}



function init() {
    shoppingList.selectElements()
    shoppingList.addButtonEvent()
    // shoppingList.scanList()
}

init()