"use client";

import AuthModal from "@/components/Modal/AuthModal";
import Modal from "@/components/Modal/Modal";
import UploadModal from "@/components/Modal/UploadModal";
import React, { useEffect, useState } from "react";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <React.Fragment>
      <AuthModal />
      <UploadModal />
    </React.Fragment>
  );
};

export default ModalProvider;
