import { defineDocumentType, makeSource } from 'contentlayer/source-files'

// Markdown または MDX ファイルを扱うドキュメントタイプの設定例
export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,  // 必要に応じて拡張子を変更 (.md や .json など)
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
  },
}))

// Source ディレクトリの設定
export default makeSource({
  contentDirPath: 'posts',  // ドキュメントファイルが置かれているディレクトリ
  documentTypes: [Post],
})
