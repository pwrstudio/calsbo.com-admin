import {
    MdMail,
} from "react-icons/md"

export default {
    name: 'contact',
    title: 'Contact',
    icon: MdMail,
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'content',
            title: 'Content',
            type: 'contentEditor',
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
