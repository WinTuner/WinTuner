import { Client } from "@notionhq/client"
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints"

const notion = new Client({ auth: process.env.NOTION_TOKEN })
const DATABASE_ID = "34b53c4ab3eb80f0932ef966044aa4fb"

export interface NotionPost {
  id: string
  title: string
  slug: string
  date: string
  status: string
  excerpt: string
  tags: string[]
  content?: string
}

const getPropertyValue = (prop: any): any => {
  if (!prop) return null
  switch (prop.type) {
    case "title": return prop.title?.map((t: any) => t.plain_text).join("") || ""
    case "rich_text": return prop.rich_text?.map((t: any) => t.plain_text).join("") || ""
    case "select": return prop.select?.name || ""
    case "multi_select": return prop.multi_select?.map((s: any) => s.name) || []
    case "date": return prop.date?.start || ""
    case "formula": return prop.formula?.string || prop.formula?.text || ""
    default: return null
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function queryNotion(query: any): Promise<any> {
  const client = notion as any
  // Notion API v2025+: databases.query -> dataSources.query
  if (client.dataSources?.query) {
    // new API expects data_source_id
    try {
      return await client.dataSources.query({ data_source_id: DATABASE_ID, ...query })
    } catch {
      // fallback
    }
  }
  return client.databases.query({ database_id: DATABASE_ID, ...query })
}

export async function getBlogPosts(): Promise<NotionPost[]> {
  try {
    const response = await queryNotion({
      filter: { property: "Status", select: { equals: "Published" } },
      sorts: [{ property: "Date", direction: "descending" }],
    })
    return response.results.map((page: any) => {
      const p = page as PageObjectResponse
      return {
        id: p.id,
        title: getPropertyValue((p as any).properties.Title),
        slug: getPropertyValue((p as any).properties.Slug),
        date: getPropertyValue((p as any).properties.Date),
        status: getPropertyValue((p as any).properties.Status),
        excerpt: getPropertyValue((p as any).properties.Excerpt),
        tags: getPropertyValue((p as any).properties.Tags),
      }
    })
  } catch (error) {
    console.error("Error fetching blog posts from Notion:", error)
    return []
  }
}

export async function getSinglePost(slug: string): Promise<NotionPost | null> {
  try {
    const response = await queryNotion({
      filter: { property: "Slug", rich_text: { equals: slug } },
    })
    if (response.results.length === 0) return null
    const p = response.results[0] as PageObjectResponse
    const content = await getPageContent(p.id)
    return {
      id: p.id,
      title: getPropertyValue((p as any).properties.Title),
      slug: getPropertyValue((p as any).properties.Slug),
      date: getPropertyValue((p as any).properties.Date),
      status: getPropertyValue((p as any).properties.Status),
      excerpt: getPropertyValue((p as any).properties.Excerpt),
      tags: getPropertyValue((p as any).properties.Tags),
      content,
    }
  } catch (error) {
    console.error(`Error fetching single post with slug ${slug}:`, error)
    return null
  }
}

export async function getPageContent(pageId: string): Promise<string> {
  try {
    const response = await notion.blocks.children.list({ block_id: pageId })
    const blocks = response.results as any[]
    const markdown = blocks.map((block) => {
      const type = block.type
      const value = (block as any)[type]
      switch (type) {
        case "paragraph": return value.rich_text?.map((t: any) => t.plain_text).join("") || ""
        case "heading_1": return `# ${value.rich_text?.map((t: any) => t.plain_text).join("")}`
        case "heading_2": return `## ${value.rich_text?.map((t: any) => t.plain_text).join("")}`
        case "heading_3": return `### ${value.rich_text?.map((t: any) => t.plain_text).join("")}`
        case "bulleted_list_item": return `- ${value.rich_text?.map((t: any) => t.plain_text).join("")}`
        case "numbered_list_item": return `1. ${value.rich_text?.map((t: any) => t.plain_text).join("")}`
        case "code": return `\`\`\`${value.language}\n${value.rich_text?.map((t: any) => t.plain_text).join("")}\n\`\`\``
        case "divider": return "---"
        default: return ""
      }
    })
    return markdown.join("\n\n")
  } catch (error) {
    console.error("Error fetching page content from Notion:", error)
    return ""
  }
}
