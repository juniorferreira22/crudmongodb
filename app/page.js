import UserList from "@/app/components/Users/userList";
import connectToDatabase from "./libs/mongodb";

export default async function Home() {
  connectToDatabase();
  
  return (
    <main className="">
      <UserList />
    </main>
  );
}
