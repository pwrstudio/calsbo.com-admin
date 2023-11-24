import {
    MdArticle,
    MdMail,
    MdHome,

} from "react-icons/md"

export default (S) =>
    S.list()
        .title("calsbot.com")
        .items([
            S.listItem()
                .title("About")
                .icon(MdHome)
                .child(
                    S.editor()
                        .id("about")
                        .title("About")
                        .schemaType("about")
                        .documentId("about")
                ),
            S.listItem()
                .title("Contact")
                .icon(MdMail)
                .child(
                    S.editor()
                        .id("Contact")
                        .title("Contact")
                        .schemaType("contact")
                        .documentId("contact")
                ),
            S.listItem()
                .title("Items")
                .icon(MdArticle)
                .child(
                    S.documentList()
                        .title('Items')
                        .showIcons(true)
                        .filter("_type == $type")
                        .params({ type: "item" })
                ),
        ])
