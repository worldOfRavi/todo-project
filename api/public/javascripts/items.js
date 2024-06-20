// Function to fetch items from the server and display them
async function getItems() {
    try {
      const response = await fetch('/api/items', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch items');
      }
  
      const items = await response.json();
      renderItems(items);
    } catch (error) {
      console.error('Error fetching items:', error);
      alert('Failed to fetch items', 'alert-danger');
    }
}

getItems();

// Function to render items in the items list
function renderItems(items) {
    const itemsList = document.getElementById('items-list');
    itemsList.innerHTML = '';
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.title}: ${item.description}`;
        li.classList.add('list-group-item');

        // Create Edit button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('btn', 'btn-primary', 'btn-sm', 'mx-5');
        // Set the onclick event to redirect to updateItem.html with the item ID as a query parameter
        editButton.onclick = function() {
            window.location.href = `updateItem.html?id=${item._id}`;
        };

        // Create Delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
        deleteButton.addEventListener('click', () => deleteItem(item._id));

        li.appendChild(editButton);
        li.appendChild(deleteButton);

        itemsList.appendChild(li);
    });
}


// Function to create a new item
async function createItem() {
    const title = document.getElementById('item-title').value;
    const description = document.getElementById('item-description').value;
    const priority = document.getElementById('item-priority').value;
    const dueDate = document.getElementById('item-dueDate').value;
    const status = document.getElementById('item-status').value;
  
    try {
      const response = await fetch('/api/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        },
        body: JSON.stringify({ title, description,priority,dueDate,status })
      });
  
      if (!response.ok) {
        throw new Error('Failed to create item');
      }
  
      alert('Item created successfully', 'alert-success');
      // Refresh items list after creating item
      getItems(); 
    } catch (error) {
      console.error('Error creating item:', error);
      alert('Failed to create item', 'alert-danger');
    }
}

// Event listener for create item form submission
document.getElementById('create-item-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    createItem(); // Call the createItem function when the form is submitted
});


// Event listener for edit item form submission
document.getElementById('edit-item-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    updateItem(); // Call the updateItem function when the form is submitted
});

// Function to delete an item
async function deleteItem(itemId) {
    try {
      const response = await fetch(`/api/items/${itemId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete item');
      }
  
      alert('Item deleted successfully', 'alert-success');
      getItems(); // Refresh items list after deleting item
    } catch (error) {
      console.error('Error deleting item:', error);
      alert('Failed to delete item', 'alert-danger');
    }
}





function signOut() {
    // Clear the authentication token
    localStorage.removeItem('authToken');
    
    // Redirect the user to the login page
    window.location.href = 'login.html';
}
