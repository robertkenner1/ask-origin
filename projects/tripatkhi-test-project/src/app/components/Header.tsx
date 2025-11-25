"use client";

import { Flex } from "@superhuman/origin";

export function Header() {
  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 bg-white shadow-sm"
      style={{ padding: "12px 16px" }}
    >
      <Flex justify="center" align="center">
        <h1
          style={{
            color: "#2563eb",
            fontWeight: "bold",
            fontSize: "1.5rem",
            margin: 0,
          }}
        >
          TRIPATKHI TEST PROJECT
        </h1>
      </Flex>
    </header>
  );
}
