import { auth } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";
import { currentUser } from "@clerk/nextjs/server";


export const recordUser = async () => {

const { userId } = auth();

  if (!userId) {
    return;
  }


 const userRecorded = await prismadb.user.findUnique({
    where: { id: userId },
  });

  if(!userRecorded){

   const user = await currentUser();

    await prismadb.user.create({
      data: {
        id: userId,
        email: user?.emailAddresses[0]?.emailAddress ?? "",
        firstName: `${user?.firstName ?? ""}`,
        lastName: `${user?.lastName ?? ""}`,
        imageUrl: `${user?.imageUrl ?? ""}`,
      },
    });
  }

}