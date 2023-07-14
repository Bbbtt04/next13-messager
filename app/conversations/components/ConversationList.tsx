'use client'

import {Conversation} from ".prisma/client";
import {MdOutlineGroupAdd} from 'react-icons/md';
import ConversationBox from "@/app/conversations/components/ConversationBox";
import useConversation from "@/app/hooks/useConversation";

interface ConversationListProps {
    list: Conversation[]
}

const ConversationList: React.FC<ConversationListProps> = ({
                                                               list
}) => {
    const {conversationId} = useConversation()

    return (
        <aside
            className="
                fixed
                inset-y-0
                pb-20
                lg:pb-0
                lg:w-80
                lg:block
                overflow-y-auto
                border-r
                border-gray-200
            "
        >
            <div className="px-5">
                <div className="flex justify-between mb-4 pt-4">
                    <div className="text-2xl">群聊</div>
                    <div>
                        <MdOutlineGroupAdd size={20}></MdOutlineGroupAdd>
                    </div>
                </div>
                {
                    list.map((item) => (
                        <ConversationBox
                            key={item.id}
                            data={item}
                            selected={conversationId === item.id}
                        ></ConversationBox>
                    ))
                }
            </div>

        </aside>
    )
}
export default ConversationList;
