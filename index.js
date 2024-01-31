const mahasiswaNim = '1122331'; 

const updatedData = {
    name: 'Piky Paelani',
    gender: 'L',
    prodi: 'TI',
    alamat: 'Jl. Cisaat'
};

fetch(`http://localhost:3000/mahasiswa/${mahasiswaNim}`, {
    method: 'PUT',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedData)
})
    .then(response => response.json()) 
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));