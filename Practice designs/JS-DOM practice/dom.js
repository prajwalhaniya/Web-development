var form = document.getElementById("addForm");
var itemList = document.getElementById("items");

form.addEventListener("submit", addItem);
itemList.addEventListener('click',removeItem);

function addItem(e) {
  e.preventDefault();
 
  var newItem = document.getElementById('item').value;
  var li = document.createElement('li');
  li.className = "list-group-item";
  li.appendChild(document.createTextNode(newItem));

//   var deleteBtn = document.getElementById('button');
//   deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
//   deleteBtn.appendChild(document.createTextNode('X'));
//   li.appendChild(deleteBtn);
//   itemList.appendChild(li);

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);

}


function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure ?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}