'use client'

import React from "react";

interface ConversationBoxProps {
    data: any,
    selected?:boolean
}

const ConversationBox:React.FC<ConversationBoxProps> = ({
    data,
    selected
}) => {

    return (
        <div>
            {data.name}
        </div>
    )
}

export default ConversationBox;
