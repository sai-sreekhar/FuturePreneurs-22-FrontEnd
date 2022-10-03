import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Thankyou from "../components/quizQuestions/Thankyou";
import NavigationBar from "../components/NavigationBar";

export default function thankyou() {
  const { status } = useSession();
  const { data: session } = useSession();
  const router = useRouter();

  // redirects to home if user not logged in
  useEffect(() => {
    if (router.isReady) {
      if (status !== "loading" && status === "unauthenticated") {
        toast.error("Please Login First!");
        router.push("/");
      }
    }
  }, [session, status, router]);
  return (
    status === "authenticated" && (
      <>
        <NavigationBar />
        <Thankyou />
      </>
    )
  );
}