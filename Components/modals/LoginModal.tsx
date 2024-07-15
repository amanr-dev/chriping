"use client";

import useLoginModal from "@/hooks/useLoginModal";
import React, { useCallback, useState } from "react";
import { Input } from "../Input";
import { Modal } from "../Modal";
import useRegisterModal from "@/hooks/useRegisterModal";

export const LoginModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoding, setIsLoding] = useState(false);

  // Toggle modal
  const toggleModal = useCallback(() => {
    if (!isLoding) {
      loginModal.onClose();
      registerModal.onOpen();
    }
  }, [isLoding, registerModal, loginModal]);

  // Handle submit
  const onSubmit = useCallback(async () => {
    try {
      // prettier-ignore

      setIsLoding(true);
      // await signIn("credentials", {
      //   email,
      //   password,
      // });

      console.log(email, password);

      loginModal.onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoding(false);
    }
  }, [loginModal, email, password]);

  // Modal body content
  const bodyContent = (
    <div className="flex flex-col gap-4 w-full">
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

  // Modal footer content
  const footerContent = (
    <div className="text-primary text-center mt-4">
      <p className="">
        First time here?, Go to
        <span
          onClick={toggleModal}
          className="text-secondary cursor-pointer hover:underline"
        >
          {" "}
          Sign Up
        </span>
        page.
      </p>
    </div>
  );

  return (
    <Modal
      disabled={isLoding}
      isOpen={loginModal.isOpen}
      title="Login to your account"
      actionLabel="Sign In"
      onClose={loginModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};
