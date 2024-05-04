import { clerkMiddleware } from "@clerk/nextjs/server";

//export default clerkMiddleware(/test);
export default clerkMiddleware();

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
