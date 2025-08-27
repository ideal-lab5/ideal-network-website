import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

export interface DocumentData {
  slug: string
  title: string
  description: string
  content: string
  date?: string
  tags?: string[]
}

export async function getDocuments(directory: string): Promise<DocumentData[]> {
  const documentsDirectory = path.join(process.cwd(), 'content', directory)
  
  if (!fs.existsSync(documentsDirectory)) {
    return []
  }

  const filenames = fs.readdirSync(documentsDirectory)
  const documents = filenames
    .filter(filename => filename.endsWith('.md'))
    .map(filename => {
      const filePath = path.join(documentsDirectory, filename)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        slug: filename.replace(/\.md$/, ''),
        title: data.title || filename.replace(/\.md$/, ''),
        description: data.description || '',
        content,
        date: data.date,
        tags: data.tags || []
      }
    })

  return documents.sort((a, b) => {
    if (a.date && b.date) {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    }
    return a.title.localeCompare(b.title)
  })
}

export async function getDocument(directory: string, slug: string): Promise<DocumentData | null> {
  const documentsDirectory = path.join(process.cwd(), 'content', directory)
  const filePath = path.join(documentsDirectory, `${slug}.md`)
  
  if (!fs.existsSync(filePath)) {
    return null
  }

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  
  return {
    slug,
    title: data.title || slug,
    description: data.description || '',
    content: await marked(content),
    date: data.date,
    tags: data.tags || []
  }
}