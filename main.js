function getTodos() {
  axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/todos'
  })
    .then(res => console.log(res))
    .catch(err => console.error(err)) 
}

function addTodo() {
  console.log('addTodo Request')
}

function updateTodo() { 
  console.log('updateTodo Request')
}

function removeTodo() {
  console.log('removeTodo Request')
}

function getData() {
  console.log('getData Request')
}

function customHeaders() {
  console.log('customHeaders Request')
}

function transformResponse() {
  console.log('transformResponse Request')
}

function errorHandling() {
  console.log('errorHandling Request')
}

function cancelToken() {
  console.log('cancelToken Request')
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document.getElementById('transform').addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);
