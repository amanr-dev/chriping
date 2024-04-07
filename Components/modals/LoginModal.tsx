"use client";

import useLoginModal from "@/hooks/useLoginModal";
import React, { useCallback, useState } from "react";
import { Input } from "../Input";
import { Modal } from "../Modal";

export const LoginModal = () => {
  const loginModal = useLoginModal();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoding, setIsLoding] = useState(false);

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

  return (
    <Modal
      disabled={isLoding}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Sign In"
      onClose={loginModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
    />
  );
};
