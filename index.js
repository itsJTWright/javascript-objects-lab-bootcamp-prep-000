var recipes = {
  'cookies': 'good'
}

updateObjectWithKeyAndValue(object,key,value) {
  return Object.assign({}, obj, { [key]: value })
}