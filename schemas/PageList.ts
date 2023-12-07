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
            name: 'pages',
            title: 'Pages',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'page' }] }]
        }
    ],
}
