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

function putTodo() { 
  //--Long way
  // axios({
  //   method: 'put',
  //   url: 'https://jsonplaceholder.typicode.com/todos/1',
  //   data: {
  //     title: 'Updated Todo',
  //     completed: true,
  //   }
  // })
  //   .then(res => showOutput(res))
  //   .catch(err => console.error(err)) 

  //--Short way
  axios
    .put('https://jsonplaceholder.typicode.com/todos/1', {
      title: 'Updated Todo',
      completed: true,
    })
    .then(res => showOutput(res))
    .catch(err => console.error(err)) 
}

function patchTodo() { 
  //--Long way
  // axios({
  //   method: 'patch',
  //   url: 'https://jsonplaceholder.typicode.com/todos/1',
  //   data: {
  //     title: 'Updated Todo'
  //   }
  // })
  //   .then(res => showOutput(res))
  //   .catch(err => console.error(err)) 

  //--Short way
  axios
    .patch('https://jsonplaceholder.typicode.com/todos/1', {
      title: 'Updated Todo'
    })
    .then(res => showOutput(res))
    .catch(err => console.error(err)) 
}

function removeTodo() {
  //--Long way
  // axios({
  //   method: 'delete',
  //   url: 'https://jsonplaceholder.typicode.com/todos/1'
  // })
  //   .then(res => showOutput(res))
  //   .catch(err => console.error(err)) 

  //--Short way
  axios
    .delete('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => showOutput(res))
    .catch(err => console.error(err)) 
}

//Get simultaneous data
function getData() {
  //-- With simple .then 
  // axios.all([
  //   axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),
  //   axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5'),
  // ])
  //   .then(res => {
  //     showOutput(res[0])
  //     showOutput(res[1], 'resTwo')
  //   })
  //   .catch(err => console.error(err))

  //-- With spread inside .then naming each response
  axios.all([
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5'),
  ])
    .then(axios.spread((todos, posts) => {
      showOutput(todos)
      showOutput(posts, 'resTwo')
    }))
    .catch(err => console.error(err))
}

function customHeaders() {
  //-- Long way
  axios({
    method: 'post',
    url: 'https://jsonplaceholder.typicode.com/todos',
    data: {
      title: 'New Todo',
      completed: true,
    },
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'sometoken'
    }
  })
    .then(res => showOutput(res))
    .catch(err => console.error(err)) 

  //--Short way
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'sometoken'
    }
  }
  
  axios
    .post('https://jsonplaceholder.typicode.com/todos', {
      title: 'New Todo',
      completed: true,
    }, config)
    .then(res => showOutput(res))
    .catch(err => console.error(err)) 
}

function transformResponse() {
  const options = {
    method: 'post',
    url: 'https://jsonplaceholder.typicode.com/todos',
    data: {
      title: 'New Todo',
      completed: true,
    },
    transformResponse: axios.defaults.transformResponse.concat(data => {
      data.title = data.title.toUpperCase()
      return data
    })
  }

  axios(options).then(res => showOutput(res))
}

function errorHandling() {
  console.log('errorHandling Request')
}

function cancelToken() {
  console.log('cancelToken Request')
}

//Intercepting requests and responses
axios
  .interceptors
  .request
  .use(config => {
    console.log(`${config.method.toUpperCase()} request sent to ${config.url} at ${new Date().getTime()}`)
    return config
  }, error => {
    return Promise.reject(error)
  })

//Formatting output in browser
function showOutput(res, element = 'res') {
  document.getElementById(element).innerHTML = `
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
document.getElementById('put').addEventListener('click', putTodo);
document.getElementById('patch').addEventListener('click', patchTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document.getElementById('transform').addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);
