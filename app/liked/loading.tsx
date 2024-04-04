"use client";
import Loading from "@/components/Loading/Loading";
import Box from "@/components/ui/Box";
import React from "react";

const LoadingPage = () => {
  return (
    <Box className="h-full flex-center">
       <Loading color="#22c55e" size={40} />
    </Box>
  )
};

export default LoadingPage;
