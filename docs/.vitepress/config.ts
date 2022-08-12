import { defineConfigWithTheme } from 'vitepress'
import anchor from 'markdown-it-anchor'
const isProduction = process.env.NODE_ENV === 'production'

const sidebar = {
	'/knowledge/': [
		{
			title: '指南',
			collapsable: false,
			items: [
				{
					title: '介绍',
					path: '/knowledge/',
					collapsable: false
				}
				// {
				//     title: 'CSS & HTML',
				//     path: 'css-html',
				//     collapsable: false
				// },
				// {
				//     title: 'npm包',
				//     path: 'packages',
				//     collapsable: false
				// },
				// {
				//     title: 'javascript',
				//     path: 'javascript',
				//     collapsable: false
				// },
				// {
				//     title: 'typescript',
				//     path: 'typescript',
				//     collapsable: false
				// },
				// {
				//     title: 'Vue 2 & 3',
				//     path: 'vue',
				//     collapsable: false
				// },
				// {
				//     title: '手写js',
				//     path: 'write',
				//     collapsable: false
				// }
			]
		}
	],
	'/node/': [
		{
			title: 'Node',
			path: '/node/',
			collapsable: false,
			sidebarDepth: 2,
			sidebar: 'auto'
		}
	],
	'/deno/': [
		{
			title: 'Deno',
			path: '/deno/',
			collapsable: false,
			sidebarDepth: 2,
			sidebar: 'auto'
		}
	],
	'/guide/': [
		{
			title: '指南',
			collapsable: false,
			items: [
				{
					title: '介绍',
					path: '/guide/',
					collapsable: false
				},
				{
					title: '快速上手',
					path: 'getting-start',
					collapsable: false
				},
				{
					title: '基本配置',
					path: 'basic-config',
					collapsable: false
				},
				{
					title: '兼容性',
					path: 'compatibility',
					collapsable: false
				}
			]
		}
	]
}

module.exports = defineConfigWithTheme({
	title: 'saqqdy',
	description: 'Development Diary',
	base: '/',
	outDir: 'dist',
	themeConfig: {
		nav: [
			{ text: '首页', link: '/' },
			{
				text: '笔记',
				items: [
					{
						text: '前端技术',
						items: [
							{
								text: 'node',
								link: '/node/'
							},
							{
								text: 'deno',
								link: '/deno/'
							},
							{
								text: 'shell',
								link: '/shell/'
							}
						]
					},
					{
						text: '其他',
						items: [
							{
								text: 'mac & linux',
								link: '/mac/'
							}
						]
					}
				]
			},
			{ text: '想法', link: '/idea/' },
			{ text: 'Deno', link: '/deno/' },
			{ text: '项目', link: '/projects/' },
			{ text: '知识点', link: '/knowledge/' },
			// { text: '博客', link: '/blog' },
			// { text: '日志', link: '/diary' },
			{
				text: '更多',
				items: [
					{
						text: '链接',
						items: [
							{
								text: 'Github',
								link: 'https://github.com/saqqdy',
								target: '_blank'
							},
							{
								text: 'HomePage',
								link: 'https://github.com/saqqdy/saqqdy.github.io#readme',
								target: '_blank'
							},
							{
								text: 'Bugs',
								link: 'https://github.com/saqqdy/saqqdy.github.io/issues',
								target: '_blank'
							}
						]
					},
					{
						text: '作者',
						items: [
							{ text: 'saqqdy', link: 'http://www.saqqdy.com' }
						]
					}
				]
			}
		],
		sidebar,
		lastUpdated: '最近更新',
		// 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
		repo: 'https://github.com/saqqdy/saqqdy.github.io.git',
		// 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
		// "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
		repoLabel: '查看源码',
		// 以下为可选的编辑链接选项
		// 假如你的文档仓库和项目本身不在一个仓库：
		docsRepo: 'https://github.com/saqqdy/saqqdy.github.io',
		// 假如文档不是放在仓库的根目录下：
		docsDir: 'docs',
		// 假如文档放在一个特定的分支下：
		docsBranch: 'docs',
		// 默认是 false, 设置为 true 来启用
		editLinks: true,
		// 默认为 "Edit this page"
		editLinkText: '帮助我们改善此页面！'
	},
	markdown: {
		lineNumbers: false,
		// anchor: {
		//     permalink: anchor.permalink.headerLink()
		// },
		toc: { level: [2, 3] },
		config: md => {
			//   md.use(require('markdown-it-xxx'))
		}
	}
	// configureWebpack: {
	//     resolve: {
	//         alias: {
	//             '@assets': require('path').join(__dirname, '../assets')
	//         }
	//     }
	// }
})
