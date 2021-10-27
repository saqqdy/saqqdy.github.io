const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
// const colors = require('colors');
// const cwd = process.cwd()
// const commandSync = require(path.join(cwd, 'bin/commandSync'))
const argvs = process.argv.slice(2)
let list = [],
    str = `---
title: 博客
---

# 博客

    `

const readDir = entry => {
    const dirInfo = fs.readdirSync(entry)
    dirInfo.forEach(item => {
        const name = path.join(entry, item)
        const info = fs.statSync(name)
        if (info.isDirectory()) {
            readDir(name)
        } else {
            // console.log(entry)
            if (/^[\S]*\.(md)$/.test(item)) {
                const file = fs.readFileSync(name).toString()
                const { data, content } = matter(file)
                getInfo(entry.replace(/^docs/, ''), item, data)
            }
        }
    })
}

const getInfo = (entry, fileName, data) => {
    // console.log(entry, fileName)
    str += `
[${data.title}](${entry + '/'})
    
`
    list.push({
        title: data.title,
        path: entry + '/',
        target: '_blank',
        collapsable: false
    })
}
readDir(argvs[0] || 'docs')
fs.writeFileSync(
    path.join(process.cwd(), 'docs/.vuepress/docs.json'),
    JSON.stringify(list)
)
fs.writeFileSync(path.join(process.cwd(), 'docs/blog.md'), str)
