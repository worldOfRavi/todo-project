// Function to fetch item details and populate the form
async function getItemDetails(itemId) {
    try {
      const response = await fetch(`/api/items/${itemId}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch item details');
      }
  
      const item = await response.json();
      populateForm(item);
    } catch (error) {
      console.error('Error fetching item details:', error);
      alert('Failed to fetch item details', 'alert-danger');
    }
  }
  
  // Function to populate the form fields with item details
  function populateForm(item) {
    document.getElementById('edit-item-id').value = item._id;
    document.getElementById('edit-item-title').value = item.title;
    document.getElementById('edit-item-description').value = item.description;
  }
  
  // Function to update an existing item
  async function updateItem() {
    const itemId = document.getElementById('edit-item-id').value;
    const title = document.getElementById('edit-item-title').value;
    const description = document.getElementById('edit-item-description').value;
    const priority = document.getElementById('edit-item-priority').value;
    const dueDate = document.getElementById('edit-item-dueDate').value;
    const status = document.getElementById('edit-item-status').value;
  
    try {
      const response = await fetch(`/api/items/${itemId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        },
        body: JSON.stringify({ title, description, priority, dueDate, status })
      });
  
      if (!response.ok) {
        throw new Error('Failed to update item');
      }
  
      alert('Item updated successfully', 'alert-success');
      // Redirect to the items page or perform any other action after updating item
      window.location.href = 'items.html';
    } catch (error) {
      console.error('Error updating item:', error);
      alert('Failed to update item', 'alert-danger');
    }
  }
  
  // Event listener for edit item form submission
  document.getElementById('edit-item-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    updateItem(); // Call the updateItem function when the form is submitted
  });
  
  // Call the getItemDetails function with the item ID extracted from the URL query parameter
  const urlParams = new URLSearchParams(window.location.search);
  const itemId = urlParams.get('id');
  if (itemId) {
    getItemDetails(itemId);
  }
  