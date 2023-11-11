import POST from "@/app/api/route";
import Footer from "@/components/Footer";
import LoginForm from "@/components/LoginForm";
import SimpleNavBar from "@/components/SimpleNavBar";
import Image from "next/image";
import { ChangeEventHandler, useState } from "react";

function Page() {
  // const [value, setValue] = useState({
  //   email: "",
  //   password: "",
  // });

  // function handleChange({ email, password }: string) {
  //   setValue(email);
  // }

  function handleLogin() {
    POST().then((res) => {
      alert(res);
    });
  }

  return (
    <div>
      <SimpleNavBar />
      <div className="flex flex-col justify-center items-center m-16">
        <LoginForm />
      </div>
      <Footer />
    </div>
  );
}

export default Page;
