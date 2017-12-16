var recipes = {
  'cookies': 'good'
}

function updateObjectWithKeyAndValue(object,key,value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
}

function deleteFromObjectByKey(object, key) {
  delete object[key]
}