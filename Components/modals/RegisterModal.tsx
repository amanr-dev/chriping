"use client";

import React, { useCallback, useState } from "react";
import { Input } from "../Input";
import { Modal } from "../Modal";
import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";

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
    // if (!isLoding && loginModal.isOpen) {
    //   return;
    // }
    // console.log(registerModal.isOpen, loginModal.isOpen);
  }, [isLoding, registerModal, loginModal]);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoding(true);

      registerModal.onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoding(false);
    }
  }, [registerModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4 ">
      <Input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        disabled={isLoding}
      />
      <Input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        disabled={isLoding}
      />
      <Input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoding}
      />
      <Input
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoding}
      />
    </div>
  );

  const footerContent = (
    <div className="text-primary text-center mt-4">
      <p className="">
        Already have an account?
        <span
          onClick={toggleModal}
          className="text-secondary cursor-pointer hover:underline"
        >
          {" "}
          Sign in
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
