import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export function EmailTemplate({ name, email, message }: EmailTemplateProps) {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", maxWidth: "600px" }}>
      <h1 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
        New message from {name}
      </h1>
      <p style={{ color: "#6b7280", marginBottom: "1.5rem", fontSize: "0.875rem" }}>
        {email}
      </p>
      <div
        style={{
          padding: "1rem",
          backgroundColor: "#f3f4f6",
          borderRadius: "0.5rem",
          whiteSpace: "pre-wrap",
        }}
      >
        {message}
      </div>
    </div>
  );
}
