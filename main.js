function getTodos() {
  //--Long way
  // axios({
  //   method: 'get',
  //   url: 'https://jsonplaceholder.typicode.com/todos',
  //   params: {
  //     _limit: 5
  //   }
  // })
  //   .then(res => showOutput(res))
  //   .catch(err => console.error(err)) 

  //--Short way
  axios
    .get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(res => showOutput(res))
    .catch(err => console.error(err)) 
}

function addTodo() {
  //--Long way
  // axios({
  //   method: 'post',
  //   url: 'https://jsonplaceholder.typicode.com/todos',
  //   data: {
  //     title: 'New Todo',
  //     completed: true,
  //   }
  // })
  //   .then(res => showOutput(res))
  //   .catch(err => console.error(err)) 

  //--Short way
  axios
    .post('https://jsonplaceholder.typicode.com/todos', {
      title: 'New Todo',
      completed: true,
    })
    .then(res => showOutput(res))
    .catch(err => console.error(err)) 
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

//Formatting output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>
  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>
  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>
  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
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
