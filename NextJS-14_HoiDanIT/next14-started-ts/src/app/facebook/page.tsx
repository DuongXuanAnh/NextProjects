"use client";
import React from "react";
import { useRouter } from "next/navigation";
import style1 from "@/styles/app.module.css";
import style2 from "@/styles/myStyle.module.css";
import { Button } from "react-bootstrap";

const Facebook = () => {
  const router = useRouter();

  const handleToReturnHome = () => {
    router.push("/");
  };

  return (
    <>
      <div className={style1["red"]}>Facebook</div>
      <Button variant="primary">Button</Button>
      <button onClick={handleToReturnHome} className={style2["red"]}>
        Return To Home
      </button>
    </>
  );
};

export default Facebook;
