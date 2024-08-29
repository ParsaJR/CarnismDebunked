import fs from 'fs'
import path from 'path'

const filesPaths = ['answers/general', 'answers/health', 'answers/environment']
const outputPaths = [
  'answers/general/fileList.json',
  'answers/health/fileList.json',
  'answers/environment/fileList.json'
]

function scanFolder(folder) {
  return fs
    .readdirSync(folder)
    .filter((file) => file !== 'fileList.json')
    .map((file) => {
      const fullPath = path.join(folder, file)
      // Remove '/public' prefix
      const relativePath = path.relative('public', fullPath)
      return {
        name: file,
        path: relativePath
      }
    })
}

// sort list by number
function sortList(list) {
  list.sort((a, b) => {
    // match one or more digits in a string
    const numA = parseInt(a.name.match(/\d+/)?.[0], 10) || 0
    const numB = parseInt(b.name.match(/\d+/)?.[0], 10) || 0
    return numA - numB
  })
  return list
}

for (let index = 0; index < filesPaths.length; index++) {
  const fileList = scanFolder(filesPaths[index])
  const sortedList = sortList(fileList)
  fs.writeFileSync(outputPaths[index], JSON.stringify(sortedList, null, 2))
}

console.log('File list generated successfully!')
