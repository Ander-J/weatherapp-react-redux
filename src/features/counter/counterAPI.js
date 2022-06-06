// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {


  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

export function getAll(){
  fetch('localhost:8080/weather/getAll')
    .then(async response => {
      const data = await response.json();

      if (!response.ok){
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error)
      }
      else if(response.ok){
        return data
      }
    })
    .catch(error => {
      this.setState({errorMessage: error.toString()});
      console.error('HTML request error!', error)
    });
}
