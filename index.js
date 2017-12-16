var recipes = {
  'cookies': 'good'
}

function updateObjectWithKeyAndValue(object,key,value) {
  return Object.assign({}, object, { [key]: value })
}