import {
    MdList,
} from "react-icons/md"

export default {
    name: 'page-list',
    title: 'Page list',
    icon: MdList,
    type: 'document',
    fields: [
        {
            title: "Featured Image (metadata)",
            name: "featuredImage",
            type: "image",
        },
        {
            title: 'Content (metadata)',
            name: 'content',
            type: 'contentEditor',
        },
        {
            name: 'pages',
            title: 'Pages',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'page' }] }]
        }
    ],
}
