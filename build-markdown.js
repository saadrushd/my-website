const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const markdownDir = "./src/markdown"
const jsonPath = "./src/markdown.json"

const getAllMarkdownFiles = (startingPath, acc) => {

    acc = (typeof acc === 'undefined') ?  [] : acc 
    fileNames = fs.readdirSync(startingPath)

    for (fileName of fileNames) {
        filePath = path.join(startingPath, fileName)

        if (fs.lstatSync(filePath).isDirectory()){
            getAllMarkdownFiles(filePath, acc)
        } else if( filePath.endsWith('.md')){
            acc.push(filePath)
        }
    }

    return acc
}

const filePaths = getAllMarkdownFiles(markdownDir)

let posts = filePaths.map((filePath) => matter(fs.readFileSync(filePath)))
fs.writeFileSync(jsonPath, JSON.stringify(posts))
