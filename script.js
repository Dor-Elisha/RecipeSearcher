const appId = '9cf104ab';
const appKey = '9ec93ed721cb87af315aab746ae7befa';
fetch(`https://api.edamam.com/api/recipes/v2?app_id=${appId}&app_key=${appKey}&type=public`) 
.then(res => res.json) 
.then(rJson = console.log(rJson));