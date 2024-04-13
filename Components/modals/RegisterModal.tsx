"use client";

import React, { useCallback, useState } from "react";
import { Input } from "../Input";
import { Modal } from "../Modal";
import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";
import axios from "axios";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";

export const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [isLoding, setIsLoding] = useState(false);

  const toggleModal = useCallback(() => {
    if (!isLoding) {
      registerModal.onClose();
      loginModal.onOpen();
    }
  }, [isLoding, registerModal, loginModal]);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoding(true);

      await axios.post("/api/register", {
        name,
        username,
        email,
        password,
      });

      toast.success("Account created successfully!");
      signIn("credentials", {
        email,
        password,
      });

      registerModal.onClose();
    } catch (error) {
      console.log(error);
      toast.error("Some error occurred. Please try again.");
    } finally {
      setIsLoding(false);
    }

    // console.log("hello world");
  }, [registerModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4 ">
      <Input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        disabled={isLoding}
        type={"text"}
        outline={true}
      />
      <Input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        disabled={isLoding}
        outline={true}
      />
      <Input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoding}
        type={"email"}
        outline={true}
      />
      <Input
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoding}
        type={"password"}
        outline={true}
      />
    </div>
  );

  const footerContent = (
    <div className="text-primary text-center mt-4">
      <p className="w-full">
        Already have an account?
        <span
          onClick={toggleModal}
          className="text-secondary cursor-pointer hover:underline"
        >
          {" "}
          Log In
        </span>
      </p>
    </div>
  );
  return (
    <Modal
      disabled={isLoding}
      isOpen={registerModal.isOpen}
      title="Create an Account"
      actionLabel="Sign Up"
      onClose={registerModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};
