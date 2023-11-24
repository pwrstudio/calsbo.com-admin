import {
    MdArticle,
} from "react-icons/md"

export default {
    name: 'item',
    title: 'Item',
    icon: MdArticle,
    type: 'document',
    initialValue: {
        type: 'article'
    },
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'date',
            title: 'Date',
            type: 'date',
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string',
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags',
            },
        },
        {
            name: 'type',
            title: 'Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Article', value: 'article' },
                    { title: 'Link', value: 'link' },
                    { title: 'File', value: 'file' },
                ],
                layout: 'radio',
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'content',
            title: 'Content',
            type: 'contentEditor',
            hidden: ({ document }) => document.type !== 'article',
        },
        {
            name: 'link',
            title: 'Link',
            type: 'url',
            hidden: ({ document }) => document.type !== 'link',
        },
        {
            name: 'file',
            title: 'File',
            type: 'file',
            hidden: ({ document }) => document.type !== 'file',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule: any) => Rule.required()
        }
    ],
}
