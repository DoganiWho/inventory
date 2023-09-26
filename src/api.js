const URI = "https://fakestoreapi.com"
  
const fetchData = async(query) => {
  const data = await fetch(`${URI}/${query}`)
    .then(res=>res.json())
    .catch(err=>console.log(err))
  return data
}

export default fetchData;