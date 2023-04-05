const UseApi = async(search) => {
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    const dataApi = await data.json();
    // console.log(dataApi);
    return dataApi.meals;
};
// export {UseApi , data as dataApi};
export default UseApi;