document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    const name = document.getElementById('name').value;
  
    const output = `<strong>Submitted Data:</strong> ${name}<br>`;
  
    document.getElementById('output').innerHTML = output;
  
    event.target.reset();
  });
  