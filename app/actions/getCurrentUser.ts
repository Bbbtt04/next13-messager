import getSession from "@/app/actions/getSession";
import prisma from "@/app/libs/prismadb";

const getCurrentUser = async () => {
    try {
        const session = await getSession();

        if(!session?.user?.email) {
            return null;
        }

        const users = await prisma.user.findUnique({
            where: {
                email: session.user.email as string
            }
        })

        if(!users) return null;

        return users;
    } catch (err:any) {
        return null;
    }
}

export default getCurrentUser;
