function start() {
    fetch('http://localhost:5001/babble-d6ef3/europe-west1/app/api/v1/test/value/ja')
        .then(response => response.json())
        .then(data => {
            console.log('Succes: ', data.result);
            if (data.result == 'ja') {
                var element = document.getElementById('text');
                element.style.color = 'green';
            } else {
                var element = document.getElementById('text');
                element.style.color = 'red';
            }
        })
        .catch((error) => {
            console.log('Error', error);
    })
}