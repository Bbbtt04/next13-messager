"use client"

import useRoutes from "@/app/hooks/useRoutes";
import useConversation from "@/app/hooks/useConversation";

const MobileFooter = () => {
    const routes = useRoutes();
    const {isOpen} = useConversation();

    if (isOpen) {
        return null;
    }

    return (
        <div>
            123
        </div>
    )
}

export default MobileFooter;
