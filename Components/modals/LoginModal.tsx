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
      setIsLoding(true);

      loginModal.onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoding(false);
    }
  }, [loginModal]);

  // Modal body content
  const bodyContent = (
    <div className="flex flex-col gap-4 ">
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

  // Modal footer content
  const footerContent = (
    <div className="text-primary text-center mt-4">
      <p className="">
        First time here??, go to
        <span
          onClick={toggleModal}
          className="text-secondary cursor-pointer hover:underline"
        >
          {" "}
          Login
        </span>
      </p>
    </div>
  );

  return (
    <Modal
      disabled={isLoding}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Sign In"
      onClose={loginModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};
